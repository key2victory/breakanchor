import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';
import { Fragment, useState } from 'react';

// Barebones lazy-loaded image component
const ExpandingImage = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  const [showModal, setShowModal] = useState(false)
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
    <Fragment>
      <div style={{
        display: showModal ? "block" : "none",
        position: "fixed",
        top: showModal ? 0 : -1,
        left: showModal ? 0 : -1,
        width: showModal ? "100%" : "1",
        height: showModal ? "100%" : "1",
        background: "hsla(0,0%,0%,.8)",
        overflow: "hidden",
        zIndex: 1000
      }}
      onClick={()=>{setShowModal(false)}}
      >
      <Image
      src={urlBuilder({ projectId: 'k29n8cal', dataset: 'production' })
        .image(value)
        .width(800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      width={width}
      height={height}
      style={{
        margin: '0 0 1rem 0',
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
      </div>
      <div style={{  
        width: "100%",
        height: "min-content",
      }}
      onClick={()=>{setShowModal(true)}}
      >
    <Image
      src={urlBuilder({ projectId: 'k29n8cal', dataset: 'production' })
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      width={width}
      height={height}
      style={{
        margin: '0 0 1rem 0',
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
    </div>
    </Fragment>
  );
};

export default ExpandingImage;
