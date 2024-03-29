import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io"
import Button from "../button/Button"

interface ModalProps {
    isOpen? : boolean
    onClose: () => void
    onSubmit: () => void
    title?: string
    body?: React.ReactElement
    label: string
    disabled?: boolean
}

const Modal:React.FC<ModalProps> = ({isOpen,onClose,onSubmit,title,body,label,disabled}) => {

  // console.log(isOpen);

  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen]);
  
  const handleClose = useCallback(() => {
      if(disabled){
          return;
      }

      setShowModal(false);        
      setTimeout(() =>{
          onClose();
      }, 200)
    },[disabled, onClose],)
  
  const handleSubmit = useCallback(() => {
      if(disabled){
          return;
      }

      onSubmit();
    //   setTimeout(() =>{
    //       setShowModal(false);
    //   }, 200)
      
    },[disabled, onSubmit],)
  
  if(!isOpen){
    // console.log(isOpen);
    return null;
  }

  return (
      <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-300/50 backdrop-blur-[1px]">
              <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
                  {/* CONTENT */}
                  <div className={`translate duration-300 h-full 
                  ${showModal ? 'translate-y-0' : 'translate-y-full'}
                  ${showModal ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                          <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                              <button onClick={handleClose} className="p-1 border-0 hover:opacity-70 transition absolute right-2">
                                  <IoMdClose size={18}/>
                              </button>
                              <div className="text-lg font-semibold">
                                  {title}
                              </div>
                          </div>

                          <div className="relative p-6 flex-auto">
                              {body}
                          </div>

                          {/* <div className="flex flex-col gap-2 p-6"> */}
                              {/* <div className="flex flex-row text-center justify-center items-center gap-4 w-full"> */}
                            <div className="m-6">
                                <Button text={label} classes="w-full text-white rounded-md font-semibold hover:opacity-80 p-2 uppercase bg-rose-500" onClick={handleSubmit} />
                            </div>
                              {/* </div> */}
                          {/* </div> */}
                      </div>
                  </div>

              </div>

          </div>
      </>
  )
}

export default Modal;