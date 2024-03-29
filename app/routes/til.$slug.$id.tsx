import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import groq from 'groq'
import { SanityContent } from '~/components/sanity-content'
import { client } from '~/sanity/client'
import hijs from 'highlight.js'

export const loader: LoaderFunction = async ({ params }) => {
  const { slug, id } = params
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug && _id == $id][0]{ title, body }`,
    { slug, id }
  )

  if (!post) {
    return new Response('Not found', { status: 404 })
  }

  post.body = await Promise.all(
    post.body.map(async (block: any) => {
      if (block._type !== 'codeBlock') return block

      return {
        ...block,
        code: `<pre><code class="language-${block.language}">${hijs.highlight(block.language, block.code).value
          }</code></pre>`,
      }
    })
  )

  return { post }
}

export default function Component() {
  const { post } = useLoaderData<typeof loader>()

  return (
    <>
      {post?.title ? <h1>{post.title}</h1> : null}
      {post?.body && post.body?.length > 0 ? (
        <div className="prose">
          <SanityContent value={post.body} />
        </div>
      ) : null}
    </>
  )
}
