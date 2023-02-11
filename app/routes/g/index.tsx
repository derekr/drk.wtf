import { Link, useLoaderData } from '@remix-run/react'

import manifest from '../../../garden-manifest.json'

export function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return manifest
}

export default function Index() {
  const manifest = useLoaderData()

  return (
    <ul>
      {manifest.map((note) => (
        <li key={note.slug}>
          <Link to={note.path}>{note.slug}</Link>
          {note.description ? <p>{note.description}</p> : null}
        </li>
      ))}
    </ul>
  )
}
