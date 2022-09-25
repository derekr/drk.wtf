import type { LinksFunction, LoaderFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import groq from 'groq'

import { SanityContent } from '~/components/sanity-content'
import { client } from '~/sanity/client'

export const loader: LoaderFunction = async ({ params }) => {
  const { slug, id } = params
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug && _id == $id][0]{ title, body }`,
    { slug, id }
  )

  if (!post) {
    return new Response('Not found', { status: 404 })
  }

  return { post }
}

export default function TiLIndexRoute() {
  const { post } = useLoaderData<typeof loader>()

  return (
    <>
      {post?.title ? <h1>{post.title}</h1> : null}
      {post?.body && post.body?.length > 0 ? <SanityContent value={post.body} /> : null}
    </>
  )
}
