import { motion } from 'framer-motion';
import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CloseButton from '@/src/components/CloseButton';
import LightboxModal from './LightboxModal';

const FilmstripGrid = ({ children }) => {
  // const { width, height } = getImageDimensions(value);
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '.5rem',
      }}
    >
      {children}
    </div>
  );
};


const ArrowToggle = ({direction="left", onClick})=>{
    return ( <motion.button
    onClick={onClick}
        className={`p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors duration-500 ease-in-out flex items-center`}
        style={{height: "50%"}}
      >
        <motion.svg viewBox="0 0 24 24" className="fill-none h-8 w-8" transform={direction==="left"?"rotate(0)":"rotate(180)"}>
          <path
            fill="currentColor"
            d="M16.243 6.343L14.828 4.93 7.758 12l7.07 7.071 1.415-1.414L10.586 12l5.657-5.657z"
          />
        </motion.svg>
      </motion.button>)
}

const ImageGallery = ({ value, hasImageGallery = false }) => {
  // const { width, height } = getImageDimensions(value);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selected, setSelected] = useState(0);

  if (!value || !value.images || !hasImageGallery) return null;

  return (
    <>
      <LightboxModal showModal={showLightbox} onClickClose={() => setShowLightbox(false)}>
      
        <div 
        className='w-full h-full flex items-center'>
       <ArrowToggle direction='left' onClick={()=>{selected === 0? setSelected(value.images.length-1): setSelected(selected-1)}}/>
            <div className='flex'
                style={{
                    flexFlow: "column nowrap",
                    justifyContent: "stretch",
                    alignItems:"stretch",
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
            margin: '0 0 1rem 0',
            // paddingBottom: `min(350px, ${100 / (width / height)}%)`
          }}
        >
          <Image
            className='rounded-lg'
            src={urlBuilder({ projectId: 'k29n8cal', dataset: 'production' })
            .image(value.images[selected])
            .width(800)
            .fit('max')
            .auto('format')
            .url()}
            alt={selected.alt || ' '}
            loading="lazy"
            layout="fill"
            objectFit="contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              margin: '0 0 1rem 0',
              // Display alongside text if image appears inside a block text span
              display: 'block',
              // Avoid jumping around with aspect-ratio CSS property
              // aspectRatio: width / height,
            }}
          />
        </div>
        {/*value.images[selected].alt !== undefined && value.images[selected].alt !== '' ? (
          <span style={{ fontSize: '.8rem', lineHeight: '1.5', maxWidth: '60ch' }}>
            {value.images[selected].alt}
          </span>
        ) : null*/}
        </div>
        <ArrowToggle direction='right' onClick={()=>{selected === value.images.length-1 ? setSelected(0) : setSelected(selected+1)}}/>
        </div>
        <div style={{ maxWidth: '800px' }}>
          <FilmstripGrid>
            {value.images !== undefined && value.images !== null
              ? value.images.map((item, index) => (
                  <div
                    key={`galleryImage${index}`}
                    style={{
                      position: 'relative',
                      width: '80px',
                      height: '80px',
                    
                    }}
                    onClick={() => {
                      setSelected(index);
                    }}
                  >
                    <Image
                      className="rounded-lg"
                      src={urlBuilder({ projectId: 'k29n8cal', dataset: 'production' })
                        .image(item)
                        .width(800)
                        .fit('max')
                        .auto('format')
                        .url()}
                      alt={value.alt || ' '}
                      loading="lazy"
                      layout="fill"
                      objectFit="contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        margin: '0 0 1rem 0',
                        border: selected === index ? "3px solid hsla(200,50%,50%,100%)":"3px solid hsla(200,50%,50%,0%)",
                        cursor: "pointer",
                        // Display alongside text if image appears inside a block text span
                        //  display: isInline ? 'inline-block' : 'block',
                        // Avoid jumping around with aspect-ratio CSS property
                        // aspectRatio: width / height,
                      }}
                    />
                  </div>
                ))
              : null}
          </FilmstripGrid>
        </div>
      </LightboxModal>
      <FilmstripGrid>
        {value.images !== undefined && value.images !== null
          ? value.images.map((item, index) => (
              <div
                key={`galleryImage${index}`}
                style={{
                  position: 'relative',
                  width: '120px',
                  height: '120px',
                }}
                onClick={() => {
                  setSelected(index);
                  setShowLightbox(true);
                }}
              >
                <Image
                  className="rounded-lg"
                  src={urlBuilder({ projectId: 'k29n8cal', dataset: 'production' })
                    .image(item)
                    .width(800)
                    .fit('max')
                    .auto('format')
                    .url()}
                  alt={value.alt || ' '}
                  loading="lazy"
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    margin: '0 0 1rem 0',
                    cursor: "pointer",
                    // Display alongside text if image appears inside a block text span
                    // display: isInline ? 'inline-block' : 'block',
                    // Avoid jumping around with aspect-ratio CSS property
                    //  aspectRatio: width / height,
                  }}
                />
              </div>
            ))
          : null}
      </FilmstripGrid>
    </>
  );
};

export default ImageGallery;
