import { useAlliedModalContext } from "../hooks/UseAlliedModalContext";
import { useLanguageContext } from "../hooks/UseLanguageContext";
import { useSwitchAlliedModalContext } from "../hooks/UseSwitchAlliedModalContext"
import Loading from "./Loading";

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
            alliedData.isLoading && <Loading />
          }
          {
            alliedData.userNotFound && 
            <div className="allied-modal__user-not-found">
              <div className="allied-modal__user-not-found--content">
                <img src="/img/svg/error.svg" alt="error" />
                <p>
                  {data.modal_error}
                </p>
              </div>
              <button onClick={closeModalCallback}>Ok</button>
            </div>
          }
          {
            !alliedData.userNotFound && 
            !alliedData.isLoading && 
            <div className="allied-modal__modal">
            <div className="allied-modal__modal--box-1">
                <div className="box-white">
                  <span className="allied-modal__modal--box-white-close-btn" onClick={closeModalCallback}>
                    <img src="/img/svg/close.svg" alt="" />
                  </span>
                  <picture className="box-white__company-logo">
                    <img src={alliedData.alliedCompanyImg} alt="" />
                  </picture>
                  <p className="box-white__text">
                    {data.modal_paragraph1_phrase1}{alliedData.alliedName}{data.modal_paragraph1_phrase2}
                  </p>
                  <p className="box-white__text">
                    {data.modal_paragraph2}
                  </p>
                  <p className="box-white__text">
                    {data.modal_paragraph3}
                  </p>
                  <img src="/img/gif/activate_code.gif" alt="activate your code" width={'300px'} />
                </div>
            </div>
            <div className="allied-modal__modal--box-2">
              <div className="box-blue">
                <span className="allied-modal__modal--box-blue-close-btn" onClick={closeModalCallback}>
                  <img src="/img/svg/close.svg" alt="" />
                </span>
                <h4 className="box-blue__welcome">¡Bienvenido!</h4>
                <a className="box-blue__data" href="https://uchooseitus.enjoymydeals.com/">{data.modal_info}</a>
                <a className="box-blue__buy-btn" href={"https://uchooseit-us.recurly.com/subscribe/uchooseit_member?currency=USD&subscription[coupon_code]="+ alliedData.alliedCuponCode}>{data.modal_cta}</a>
              </div>
            </div>
            </div>
          }
        </div>
    </div>
  )
}
