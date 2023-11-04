import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';
import { useState } from 'react';

const FilmstripGrid = ({ children }) => {
   // const { width, height } = getImageDimensions(value);
    return (
        <div
          style={{
            width: "100%",
            display: 'flex',
            flexFlow: "row wrap",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: ".5rem"
          }}
        >
       {children}
        </div>
    );
  };

  const LightboxModal = ({ children, showModal}) => {
     return (
         <div
           style={{
             display: showModal ? 'flex' : 'none',
             flexFlow: "column nowrap",
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
             backdropFilter: "blur(10px)",
           }}
         >
          
{children}
         </div>
         )}

  
const ImageGallery = ({ value }) => {
 // const { width, height } = getImageDimensions(value);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selected, setSelected]=useState(0)
  console.log("ImageGallery Log:",value)
  return (
    <>
    <LightboxModal showModal={showLightbox}>
    <span
            onClick={()=>setShowLightbox(false)}>
                X
            </span>
           <div
           style={{
           position: "relative",
           width: "100%",
           height: "100%",
           maxWidth: "100%",
            maxHeight: "100%",
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
               maxWidth: "100%",
               maxHeight: "100%",
               margin: '0 0 1rem 0',
               // Display alongside text if image appears inside a block text span
               display: 'block',
               // Avoid jumping around with aspect-ratio CSS property
              // aspectRatio: width / height,
             }}
           />
           </div>
           {value.images[selected].alt !== undefined && value.images[selected].alt !== "" ? <span style={{fontSize: ".8rem", lineHeight: "1.5", maxWidth: "60ch"}}>{value.images[selected].alt}</span>:null}
        <div style={{maxWidth: "800px"}}>
    <FilmstripGrid>
    {value.images !== undefined && value.images !== null ?
         value.images.map((item,index)=> (
         <div
         key={`galleryImage${index}`}
          style={{
          position: "relative",
          width: "80px",
          height: "80px",
          }}
          onClick={()=>{
            setSelected(index);
       
        }}
        >
          <Image
             className='rounded-lg'
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
              maxWidth: "100%",
              maxHeight: "100%",
              margin: '0 0 1rem 0',
              // Display alongside text if image appears inside a block text span
            //  display: isInline ? 'inline-block' : 'block',
              // Avoid jumping around with aspect-ratio CSS property
             // aspectRatio: width / height,
            }}
          />
          </div>)):null}
    </FilmstripGrid>
    </div>
        </LightboxModal>
    <FilmstripGrid>
    {value.images !== undefined && value.images !== null ?
         value.images.map((item,index)=> (
         <div
         key={`galleryImage${index}`}
          style={{
          position: "relative",
          width: "120px",
          height: "120px",
          }}
          onClick={()=>{
            setSelected(index);
            setShowLightbox(true);
        }}
        >
          <Image
             className='rounded-lg'
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
              maxWidth: "100%",
              maxHeight: "100%",
              margin: '0 0 1rem 0',
              // Display alongside text if image appears inside a block text span
             // display: isInline ? 'inline-block' : 'block',
              // Avoid jumping around with aspect-ratio CSS property
            //  aspectRatio: width / height,
            }}
          />
          </div>)):null}
    </FilmstripGrid>
    </>
  );
};

export default ImageGallery;
