import { useAlliedModalContext } from "../hooks/UseAlliedModalContext";
import { useLanguageContext } from "../hooks/UseLanguageContext";
import { useSwitchAlliedModalContext } from "../hooks/UseSwitchAlliedModalContext"
import { Loading } from "./Loading";
import SwitchLang from "./SwitchLang";
import ReactGA from 'react-ga4';

export default function AlliedModal() {

  const data = useLanguageContext()
  
  const alliedData = useAlliedModalContext()
  const closeModal = useSwitchAlliedModalContext()
  
  document.body.style.overflow = 'hidden';



  const gTagEventPurchase = () => {
      ReactGA.event({
        category: 'purchase',
        action: 'purchase',
        label: 'cta_pop_up'
      })
    }



  const closeModalCallback = ():void=>{
    document.body.style.overflow = 'auto';

    ReactGA.event({
      category: 'close_pop_up',
      action: 'close_pop_up',
      label: 'close_pop_up'
    })

    closeModal()
  }

  return (
    <div className="allied-modal-wrapper">
      <div className="allied-modal-wrapper__switch-lang">
        <SwitchLang />
      </div>
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
                <a className="box-blue__data" href="https://tueligesus.enjoymydeals.com/" target="_blank" >{data.modal_info}</a>
                <p className="box-blue__ready">{data.modal_ready}</p>
                <a className="box-blue__buy-btn" href={'https://tueligesus.recurly.com/subscribe/tueliges_member?currency=USD&subscription[coupon_code]='+ alliedData.alliedCuponCode} onClick={gTagEventPurchase}>{data.modal_cta}</a>
              </div>
            </div>
            </div>
          }
        </div>
    </div>
  )
}
