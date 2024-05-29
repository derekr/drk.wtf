import { getImageDimensions } from "@sanity/asset-utils";
import type { SanityImageSource } from "@sanity/asset-utils";
import type { PortableTextComponentProps } from "@portabletext/react";
import { projectId, dataset } from "~/sanity/project-details";
import imageUrlBuilder from "@sanity/image-url";

type SanityImageAssetWithAlt = SanityImageSource & { alt?: string };

const builder = imageUrlBuilder({ projectId, dataset });

export const SanityImage = function SanityImage(
  props: PortableTextComponentProps<SanityImageAssetWithAlt>
) {
  const { value, isInline } = props;
  const { width, height } = getImageDimensions(value);

  return (
    <img
      className="w-full h-auto not-prose"
      src={builder
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || ""}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};
