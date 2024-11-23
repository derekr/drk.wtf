import type { PortableTextBlock } from "@portabletext/react";
import { useLoaderData } from "@remix-run/react";
import type { SanityDocument } from "@sanity/client";
import { SanityContent } from "~/components/sanity-content";

import { useQuery } from "~/sanity/loader";
import { loadQuery } from "~/sanity/loader.server";
import { HOME_PAGE_QUERY } from "~/sanity/queries";

import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { drizzle } from "drizzle-orm/d1";

/**
 * Split an array into two array based on
 * a true/false condition function
 */
function fork<T>(
  list: readonly T[],
  condition: (item: T) => boolean
): [T[], T[]] {
  if (!list) return [[], []];
  return list.reduce(
    (acc, item) => {
      const [a, b] = acc;
      if (condition(item)) {
        return [[...a, item], b];
        // biome-ignore lint/style/noUselessElse: <explanation>
      } else {
        return [a, [...b, item]];
      }
    },
    [[], []] as [T[], T[]]
  );
}

interface ExperienceItemProps {
  title: string;
  href?: string;
  startYear: string;
  endYear: string;
  children: React.ReactNode;
}

const ExperienceItem = ({
  title,
  href,
  startYear,
  endYear,
  children,
}: ExperienceItemProps) => (
  <article>
    <div className="mb-2">
      <h3>
        <strong>{title}</strong>
        {href && (
          <span className="href">
            {" "}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
            >
              {href}
            </a>
          </span>
        )}
      </h3>
      <p className="text-sm text-gray-400 time">
        {startYear === endYear ? startYear : `${startYear}–${endYear}`}
      </p>
    </div>
    {children}
  </article>
);

export async function loader({ context }: LoaderFunctionArgs) {
  const initial = await loadQuery<SanityDocument[]>(HOME_PAGE_QUERY);

  return { initial, query: HOME_PAGE_QUERY, params: {} };
}

export default function Index() {
  const { initial, query, params } = useLoaderData<typeof loader>();
  const { data, loading } = useQuery<typeof initial.data>(query, params, {
    initial,
  });

  if (loading && !data) {
    return <div>Loading...</div>;
  }

  if (!data) return null;

  // @ts-expect-error need to use zod here
  const { author, globalSettings, workExperience } = data;

  const [currentExperience, previousExperience] = fork(
    workExperience,
    (e: {
      isCurrent: boolean;
      title: string;
      url?: string;
      startDate: string;
      endDate?: string | number;
      body: PortableTextBlock;
    }) => e.isCurrent
  );
  return (
    <>
      <a className="sr-only h-card" href="https://drk.wtf" rel="me">
        <img src={author.imageUrl} alt="" />
        Derek Reynolds
      </a>
      <div className="max-w-2xl mb-8 mast-grid [&>p:first-of-type]:mb-3">
        <h1 className="text-lg">
          <a href="/">drk.wtf</a>
        </h1>
        <SanityContent value={globalSettings[0]?.aboutMe} />
      </div>
      <div className="grid mb-5 experience-grid md:grid-cols-3">
        <div className="space-y-4 experience md:col-start-2 [&>article:last-of-type]:mb-3">
          <h2 className="text-gray-600 text-md">Currently</h2>
          {currentExperience.map((item) => {
            return (
              <ExperienceItem
                key={item.title}
                title={item.title}
                href={item.url ?? ""}
                startYear={String(new Date(item.startDate).getFullYear())}
                endYear={String(
                  item.endDate
                    ? new Date(item.endDate).getFullYear()
                    : "Present"
                )}
              >
                <SanityContent value={item.body} />
              </ExperienceItem>
            );
          })}
          <br />
          <h2 className="text-gray-600 text-md">Previously</h2>
          {previousExperience.map((item) => {
            return (
              <ExperienceItem
                key={item.title}
                title={item.title}
                href={item.url ?? ""}
                startYear={String(new Date(item.startDate).getFullYear())}
                endYear={String(
                  item.endDate
                    ? new Date(item.endDate).getFullYear()
                    : "Present"
                )}
              >
                <SanityContent value={item.body} />
              </ExperienceItem>
            );
          })}
          <a
            href="https://www.linkedin.com/in/derek-reynolds-11a806132/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
          >
            Linkedin {">>"}
          </a>
        </div>
      </div>
      <footer>© Derek Reynolds {new Date().getFullYear()} 👋</footer>
    </>
  );
}
