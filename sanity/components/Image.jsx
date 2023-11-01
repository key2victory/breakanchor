import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';

// Barebones lazy-loaded image component
const ImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  console.log(
    urlBuilder()
      .image(value)
      .width(isInline ? 100 : 800)
      .fit('max')
      .auto('format')
      .url(),
    'IsInline:',
    isInline,
    'Image value:',
    value,
  );
  return (
    <Image
      src={urlBuilder({ projectId: 'k29n8cal', dataset: 'production' })
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        margin: '0 0 1rem 0',
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

export default Image;
