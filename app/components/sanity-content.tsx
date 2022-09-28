import { PortableText } from '@portabletext/react'
import { Link } from '@remix-run/react'
import { SanityImage } from './sanity-image'

type ContentProps = {
  value: any[]
}

const components = {
  types: {
    image: SanityImage,
    codeBlock: (props) => <span dangerouslySetInnerHTML={{ __html: props.value.code }} />,
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href ? value.href.replace('https://drk.wtf', '') : ''
      const target = href.startsWith('http') ? '_blank' : undefined
      if (!target) {
        return <Link to={href}>{children}</Link>
      }
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' && 'noindex nofollow'}
          className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
        >
          {children}
        </a>
      )
    },
  },
}

export const SanityContent = function SanityContent(props: ContentProps) {
  const { value } = props

  return <PortableText value={value} components={components} />
}
