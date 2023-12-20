import { useAlliedModalContext } from "../hooks/UseAlliedModalContext";
import { useLanguageContext } from "../hooks/UseLanguageContext";
import { useSwitchAlliedModalContext } from "../hooks/UseSwitchAlliedModalContext"

export default function AlliedModal() {

  const data = useLanguageContext()
  
  const alliedData = useAlliedModalContext()
  const closeModal = useSwitchAlliedModalContext()
  
  document.body.style.overflow = 'hidden';

  const closeModalCallback = ():void=>{
    document.body.style.overflow = 'auto';
    closeModal()
  }

  return (
    <div className="allied-modal-wrapper">
        <div className='allied-modal'>
          {
            alliedData.isLoading && 
            <><img src="/img/svg/loading.svg" alt="loading.." /></>
          }
          {
            alliedData.userNotFound && 
            <div className="allied-modal__user-not-found">
              <img src="/img/svg/error.svg" alt="" />
              <p>
                No fue posible validar tu membresia
              </p>
              <span onClick={closeModalCallback}>
                <img src="/img/svg/close.svg" alt="" />
              </span>
            </div>
          }
          {
            !alliedData.userNotFound && 
            !alliedData.isLoading && 
            <div className="allied-modal__modal">
            <span className="allied-modal__modal--close-btn" onClick={closeModalCallback}>
              <img src="/img/svg/close.svg" alt="" />
            </span>
            <div className="allied-modal__modal--box-1">
                <div className="box-white">
                  <picture className="box-white__company-logo">
                    <img src="/img/png/company-name.webp" alt="" />
                  </picture>
                  <p className="box-white__text">
                    {data.modal_paragraph1_1}{alliedData.alliedName}{data.modal_paragraph1_2}
                  </p>
                  <p className="box-white__text">
                    {data["modal_paragraph1_2"]}
                  </p>
                </div>
            </div>
            <div className="allied-modal__modal--box-2">
              <div className="box-blue">
                <h4 className="box-blue__welcome">¡Bienvenido!</h4>
                <a className="box-blue__data" href="#">Conocer más sobre nuestros descuentos</a>
                <button className="box-blue__buy-btn">COMPRAR MEMBRESIA</button>
              </div>
            </div>
            </div>
          }
        </div>
    </div>
  )
}
