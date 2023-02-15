import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { json } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/node'
import { useLoaderData, useLocation } from '@remix-run/react'

import { projectDetails } from '~/sanity/config'

import tailwindStyles from '~/styles/tailwind.css'
import globalStyles from '~/styles/global.css'

export const meta: MetaFunction = () => {
  return { title: 'Welcome to the drkweb | drk.wtf' }
}

export function links() {
  return [
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: globalStyles },
  ]
}

export async function loader() {
  return json({ ENV: projectDetails() })
}

export default function App() {
  const data = useLoaderData()
  const { pathname } = useLocation()
  const isStudioRoute = pathname.startsWith('/studio')
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {isStudioRoute && typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body className="p-3">
        <Outlet />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
