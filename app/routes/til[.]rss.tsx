import type { LoaderFunction } from "@remix-run/node";
import allTilPostsQuery from "~/sanity/queries/all-til-posts";
import { client } from "~/sanity/client";

function escapeCdata(s: string) {
  return s.replace(/\]\]>/g, "]]]]><![CDATA[>");
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const loader: LoaderFunction = async ({
  request,
}) => {
  const tilPosts = await client.fetch(allTilPostsQuery)

  const host =
    request.headers.get("X-Forwarded-Host") ??
    request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost")
    ? "http"
    : "https";
  const domain = `${protocol}://${host}`;
  const tilUrl = `${domain}/til`;

  const rssString = `
    <rss xmlns:blogChannel="${tilUrl}" version="2.0">
      <channel>
        <title>TIL | drk.wtf</title>
        <link>${tilUrl}</link>
        <description>Some funny jokes</description>
        <language>en-us</language>
        <generator>Kody the Koala</generator>
        <ttl>40</ttl>
        ${tilPosts
      .map((tilPost: any) =>
        `
            <item>
              <title><![CDATA[${escapeCdata(
          tilPost.title
        )}]]></title>
              <description><![CDATA[A funny joke called ${escapeHtml(
          tilPost.title
        )}]]></description>
              <author><![CDATA[${escapeCdata(
          tilPost.author.slug.current
        )}]]></author>
              <pubDate>${new Date(tilPost.publishedAt).toUTCString()}</pubDate>
              <link>${tilUrl}/${tilPost.slug.current}/${tilPost._id}</link>
              <guid>${tilUrl}/${tilPost._id}</guid>
            </item>
          `.trim()
      )
      .join("\n")}
      </channel>
    </rss>
  `.trim();

  return new Response(rssString, {
    headers: {
      "Cache-Control": `public, max-age=${60 * 10
        }, s-maxage=${60 * 60 * 24}`,
      "Content-Type": "application/xml",
      "Content-Length": String(
        Buffer.byteLength(rssString)
      ),
    },
  });
};