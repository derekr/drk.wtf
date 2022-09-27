import { PortableText } from '@portabletext/react'
import { SanityImage } from './sanity-image'

type ContentProps = {
  value: any[]
}

const components = {
  types: {
    image: SanityImage,
    codeBlock: (props) => <span dangerouslySetInnerHTML={{ __html: props.value.code }} />,
  },
}

export const SanityContent = function SanityContent(props: ContentProps) {
  const { value } = props

  return (
    <div className="prose">
      <PortableText value={value} components={components} />
    </div>
  )
}
