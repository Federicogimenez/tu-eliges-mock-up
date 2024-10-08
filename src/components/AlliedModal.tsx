import { useAlliedModalContext } from "../hooks/UseAlliedModalContext";
import { useLanguageContext } from "../hooks/UseLanguageContext";
import { useSwitchAlliedModalContext } from "../hooks/UseSwitchAlliedModalContext"
import Loading  from "./Loading";

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
                <img src="/img/svg/error.svg" alt="error" loading='lazy'/>
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
                    <img src="/img/svg/close.svg" alt="close" loading='lazy' />
                  </span>
                  <picture className="box-white__company-logo">
                    <img src={alliedData.alliedCompanyImg} alt="logo" loading='lazy'/>
                  </picture>
                  <div className="box-white__text-box">
                    <p className="box-white__text">
                      {data.modal_paragraph1_phrase1}
                      <strong>
                      {alliedData.alliedName},
                      </strong> 
                      {data.modal_paragraph1_phrase2}
                    </p>
                    <p className="box-white__text">
                      {data.modal_paragraph2_phrase1}
                      <strong>
                        {data.modal_paragraph2_phrase1_black}
                      </strong>
                      {data.modal_paragraph2_phrase2}
                      <strong>
                        {data.modal_paragraph2_phrase2_black}
                      </strong>
                      {data.modal_paragraph2_phrase3}
                      <strong>
                        {data.modal_paragraph2_phrase3_black}
                      </strong>
                    </p>
                  </div>

                </div>
            </div>
            <div className="allied-modal__modal--box-2">
              <div className="box-blue">
                <span className="allied-modal__modal--box-blue-close-btn" onClick={closeModalCallback}>
                  <img src="/img/svg/close.svg" alt="" />
                </span>
                <h4 className="box-blue__welcome">{data.modal_welcome}</h4>
                <a className="box-blue__data" href="https://uchooseitus.enjoymydeals.com/" target="_blank" >{data.modal_info}</a>
                <p className="box-blue__ready">{data.modal_ready}</p>
                <a className="box-blue__buy-btn" target="blank" href={'https://uchooseitus.recurly.com/subscribe/uchooseit_member?currency=USD&subscription[coupon_code]='+ alliedData.alliedCuponCode}>{data.modal_cta}</a>
              </div>
            </div>
            </div>
          }
        </div>
    </div>
  )
}
