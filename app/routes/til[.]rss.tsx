import type { LoaderFunction } from "@remix-run/node";
import allTilPostsQuery from "~/sanity/queries/all-til-posts";
import { client } from "~/sanity/client";
import { Feed } from "feed";
import { toHTML } from '@portabletext/to-html'

function toPlainText(blocks = []) {
  return blocks
    // loop through each block
    .map(block => {
      // if it's not a text block with children, 
      // return nothing
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      // loop through the children spans, and join the
      // text strings
      return block.children.map(child => child.text).join('')
    })
    // join the paragraphs leaving split by two linebreaks
    .join('\n\n')
}

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

  const feed = new Feed({
    title: "TIL",
    description: "Today I Learned",
    id: tilUrl,
    link: tilUrl,
    language: "en",
    copyright: `© ${new Date().getFullYear()} Derek Reynolds`,
    feedLinks: [{
      type: "application/rss+xml",
      rel: "self",
      href: tilUrl,
    }],
    author: {
      name: "Derek Reynolds",
      email: "derekr@me.com",
      link: domain,
    }
  })

  tilPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${tilUrl}/${post.slug.current}`,
      link: `${tilUrl}/${post.slug.current}`,
      description: 'TIL post',
      content: toHTML(post.body),
      date: new Date(post.publishedAt),
      author: [{
        name: post.author.name,
        email: post.author.email,
        link: post.author.url,
      }]
    })
  })

  // const rssString = `
  //   <rss xmlns:blogChannel="${tilUrl}" version="2.0">
  //     <channel rel="self">
  //       <title>TIL | drk.wtf</title>
  //       <link>${tilUrl}</link>
  //       <description>Today I Learned; a collection of handy things I've learned on any given day.</description>
  //       <language>en-us</language>
  //       <generator>drk</generator>
  //       <ttl>40</ttl>
  //       ${tilPosts
  //     .map((tilPost: any) =>
  //       `
  //           <item>
  //             <title><![CDATA[${escapeCdata(
  //         tilPost.title
  //       )}]]></title>
  //             <description><![CDATA[${escapeHtml(
  //         toPlainText(tilPost.body)
  //       )}]]></description>
  //             <author><![CDATA[${escapeCdata(
  //         tilPost.author.slug.current
  //       )}]]></author>
  //             <pubDate>${new Date(tilPost.publishedAt).toUTCString()}</pubDate>
  //             <link>${tilUrl}/${tilPost.slug.current}/${tilPost._id}</link>
  //             <guid>${tilUrl}/${tilPost._id}</guid>
  //           </item>
  //         `.trim()
  //     )
  //     .join("\n")}
  //     </channel>
  //   </rss>
  // `.trim();

  const rssString = feed.rss2()

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