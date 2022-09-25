import type { LinksFunction, LoaderFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import groq from 'groq'

import { client } from '~/sanity/client'

export const loader: LoaderFunction = async () => {
  const tilPosts = await client.fetch(
    groq`*[_type == "post" && "til" in categories[]->title]{ _id, title, slug }`
  )

  return { tilPosts }
}

export default function TiLIndexRoute() {
  const { tilPosts } = useLoaderData<typeof loader>()

  return (
    <ul>
      {tilPosts.map((note) => (
        <li key={note.slug}>
          <Link to={`/til/${note.slug.current}/${note._id}`}>{note.title}</Link>
          {note.description ? <p>{note.description}</p> : null}
        </li>
      ))}
    </ul>
  )
}
