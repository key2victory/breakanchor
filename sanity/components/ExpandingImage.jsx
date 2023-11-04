import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';
import { useState } from 'react';

// Barebones lazy-loaded image component
const ExpandingImage = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  const [showModal, setShowModal] = useState(false);

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
    <>
      <div
        style={{
          display: showModal ? 'flex' : 'none',
          justifyContent: "center",
          alignItems: "center",
          position: 'fixed',
          top: showModal ? 0 : -1,
          left: showModal ? 0 : -1,
          width: showModal ? '100%' : '1',
          height: showModal ? '100%' : '1',
          padding: showModal ? '2rem' : 0,
          background: 'hsla(0,0%,0%,.8)',
          overflow: 'hidden',
          zIndex: 1000,
        }}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <div
        style={{
        position: "relative",
        width: width,
        height: height,
        maxWidth: "100%",
         maxHeight: "100%",
         margin: '0 0 1rem 0',
         // paddingBottom: `min(350px, ${100 / (width / height)}%)` 
        }}
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
          layout="fill" 
          objectFit="contain"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            margin: '0 0 1rem 0',
            // Display alongside text if image appears inside a block text span
            display: isInline ? 'inline-block' : 'block',
            // Avoid jumping around with aspect-ratio CSS property
            aspectRatio: width / height,
          }}
        />
        </div>
      </div>
      <div
        style={{
        position: "relative",
        width: width,
        height: height,
        maxWidth: "100%",
         maxHeight: "350px",
         margin: '0 0 1rem 0',
         // paddingBottom: `min(350px, ${100 / (width / height)}%)` 
        }}
        onClick={() => {
          setShowModal(true);
        }}
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
          layout="fill" 
          objectFit="contain"
          style={{
          //  maxWidth: "100%",
         //   maxHeight: "400px",
        // flexGrow: 0,
        // flexShrink: 1,
        // flexBasis: 0,
          
            // Display alongside text if image appears inside a block text span
            display: isInline ? 'inline-block' : 'block',

            // Avoid jumping around with aspect-ratio CSS property
          //  aspectRatio: width / height,
          }}
        />
            </div>
    </>
  );
};

export default ExpandingImage;
