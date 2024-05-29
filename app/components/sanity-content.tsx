import { PortableText } from "@portabletext/react";
import type {
  PortableTextBlock,
  PortableTextComponents,
} from "@portabletext/react";
import { Link } from "@remix-run/react";
import { SanityImage } from "./sanity-image";

type ContentProps = {
  value: PortableTextBlock;
};

const components: Partial<PortableTextComponents> = {
  types: {
    image: SanityImage,
    codeBlock: (props: { value: { code: string } }) => (
      <span dangerouslySetInnerHTML={{ __html: props.value.code }} />
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href ? value.href.replace("https://drk.wtf", "") : "";
      const target = href.startsWith("http") ? "_blank" : undefined;

      if (!target && !href.startsWith("/g")) {
        return (
          <Link to={href} rel={value?.rel}>
            {children}
          </Link>
        );
      }

      return (
        <a
          href={value?.href}
          target={target}
          rel={
            value?.rel
              ? value.rel
              : target === "_blank"
              ? "noindex nofollow"
              : undefined
          }
          className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
        >
          {children}
        </a>
      );
    },
  },
};

export const SanityContent = function SanityContent(props: ContentProps) {
  const { value } = props;

  return <PortableText value={value} components={components} />;
};
