import { PortableText } from '@portabletext/react';
import Link from 'next/link';
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
    <img
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

const components = {
  types: {
    image: ({ value, isInline }) => (
      <ImageComponent
        value={value}
        isInline={isInline}
        // src={value.imageUrl}
        //  alt={value.alt || ' '}
        //  width={getImageDimensions(value).width}
        // height={getImageDimensions(value).height}
      />
    ),
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

const Project = ({ data }) => {
  //console.log('Project Data: ', data);
  return (
    <>
      <div className="flex items-center gap-6">
        <Link
          href={'/'}
          className="p-4 rounded-lg hover:bg-indigo-400 transition-colors duration-500 ease-in-out h-full flex items-center"
        >
          <svg viewBox="0 0 24 24" className="fill-none h-8 w-8">
            <path
              fill="currentColor"
              d="M16.243 6.343L14.828 4.93 7.758 12l7.07 7.071 1.415-1.414L10.586 12l5.657-5.657z"
            />
          </svg>
        </Link>
        <div>
          <h1 className="text-6xl font-semibold">{data.title}</h1>
          <p className="text-xl font-semibold italic mt-4">{data.tagLine}</p>
        </div>
      </div>
      <div role="divider" className="h-1 w-full bg-white my-4" />

      <div className="blog-post-content rounded-md p-2 flex-1 overflow-y-auto max-w-[800px]">
        <PortableText value={data.content} components={components} />
      </div>
    </>
  );
};

export default Project;
