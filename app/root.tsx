import { LinksFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import { Suspense, lazy } from "react";

import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  // TODO: preload the styles
  { rel: "stylesheet", href: stylesheet },
];

const LiveVisualEditing = lazy(
  () => import("~/components/live-visual-editing")
);

export function loader({ context }: LoaderFunctionArgs) {
  return json({
    ENV: {
      SANITY_STUDIO_PROJECT_ID: context.cloudflare.env.SANITY_STUDIO_PROJECT_ID,
      SANITY_STUDIO_DATASET: context.cloudflare.env.SANITY_STUDIO_DATASET,
      SANITY_STUDIO_URL: context.cloudflare.env.SANITY_STUDIO_URL,
      SANITY_STUDIO_STEGA_ENABLED:
        context.cloudflare.env.SANITY_STUDIO_STEGA_ENABLED,
    },
  });
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { ENV } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="p-3">
        {children}
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        {ENV.SANITY_STUDIO_STEGA_ENABLED ? (
          <Suspense>
            <LiveVisualEditing />
          </Suspense>
        ) : null}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
