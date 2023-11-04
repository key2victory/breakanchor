import CloseButton from "@/src/components/CloseButton";




const LightboxModal = ({ children, showModal, onClickClose }) => {
    return (
      <div
        style={{
          display: 'flex',//showModal ? 'flex' : 'none',
          flexFlow: 'column nowrap',
          justifyContent: "flex-start",
          alignItems: 'center',
          position: 'fixed',
          top: showModal ? 0 : -1,
          left: showModal ? 0 : -1,
          width: showModal ? '100%' : '1px',
          height: showModal ? '100%' : '1px',
          padding: showModal ? '2rem' : 0,
          opacity: showModal ? 1 :0,
          background: 'hsla(0,0%,10%,.7)',
          overflow: 'hidden',
          zIndex: 1000,
          backdropFilter: 'blur(10px) grayscale(90%) contrast(50%)',
          transition: "opacity .3s .1s linear"
        }}
      >
         <span className='flex w-full' style={{height: "auto", justifyContent: "flex-end", alignItems:"flex-end"}}>
          <CloseButton onClick={onClickClose}/>
          </span>
        {children}
      </div>
    );
  };

  export default LightboxModal;