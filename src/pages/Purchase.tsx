// import AlliedModal from "../components/AlliedModal"
// import { Loading } from "../components/Loading"
// import SwitchLang from "../components/SwitchLang"
// import { AlliedModalProvider } from "../context/AlliedModalProvider"
// import { useAlliedModalContext } from "../hooks/UseAlliedModalContext"
// import { useLanguageContext } from "../hooks/UseLanguageContext"
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { useLanguageContext } from '../hooks/UseLanguageContext';
import SwitchLang from '../components/SwitchLang';

export default function Purchase (){

    const t = useLanguageContext()
    const [searchParams] = useSearchParams();

    const gTagEventPurchase = () => {
        ReactGA.event({
          category: 'purchase',
          action: 'purchase',
          label: 'cta_pop_up'
        })
      }

    const [modalData, setModalData] = useState({
      alliedName: '',
      alliedCompanyImg: "",
      alliedCuponCode: "",
      isLoading: true,
      userNotFound: false
    })
    const url = useLocation().search;

  
    useEffect(() => {
      if(url.includes('?ally')){
        
        // console.log(searchParams.get('ally'));
        
  
        const id = searchParams.get('ally');
  
        const urlFetch = `https://api.tueliges.us/public/ally-code/${id}`
    
        const api = async ()=>{
            const data = await fetch(urlFetch);
            const jsonData = await data.json();
            return jsonData
        };
        api()
        .then((data)=> {
            if(data){
            console.log('entro');
            
            setModalData({
                alliedName: data.allyCompanyName,
                alliedCompanyImg: data.allyCompanyLogo,
                alliedCuponCode: data.allyCoupons[0],
                isLoading: false,
                userNotFound: false
            })
            }else{
            setModalData({
                alliedName: '',
                alliedCompanyImg: '',
                alliedCuponCode: '',
                isLoading: false,
                userNotFound: true
            })}
        })
        .catch( err =>{
            if (err) { 
            setModalData({
                alliedName: '',
                alliedCompanyImg: '',
                alliedCuponCode: '',
                isLoading: false,
                userNotFound: true})
            }})
        }
        })

    return (

        <div className='purchase__bg'>

            {
                
                modalData.isLoading ? <Loading /> :
                
                
                <div className='purchase'>
                    <div className='purchase__lang-container'>
                        <SwitchLang />
                    </div>
                    {
                        modalData.userNotFound ?
                            
                            <div className="allied-modal__user-not-found">
                                <div className="allied-modal__user-not-found--content">
                                    <img src="/img/svg/error.svg" alt="error" />
                                    <p>
                                    {t.modal_error}
                                    </p>
                                </div>
                            </div>
                        :
                                <div className='purchase__main'>
                                    <div>
                                        <h1>{t.modal_welcome}</h1>
                                        <div className='purchase__logos'>
                                            <picture>
                                                <img src={"/img/png/logo-tu-eliges.png"} alt={"tu eliges"} loading='lazy' />
                                            </picture>
                                            <picture>
                                                <img src={modalData.alliedCompanyImg} alt={"aliado"} loading='lazy'/>
                                            </picture>
                                        </div>
                                        {/* {modalData.userNotFound ? <h2>no encontrado</h2> : <img src={modalData.alliedCompanyImg} alt="logo" loading='lazy' />} */}
                                        <p className='purchase__intro'>
                                            <span>Tueliges.us </span>
                                            & 
                                            <span> {modalData.alliedName} </span>
                                            <br />
                                            se unen para ofrecerte un<strong> descuento especial </strong>en la compra de tu membresia
                                        </p>
                                        <h4>
                                            ¡No te pierdas nuestros beneficios!
                                        </h4>
                                        <div className='purchase__cta'>
                                            <span></span>
                                            <a href={'https://tueliges-us.recurly.com/subscribe/tueliges_member?currency=USD&subscription[coupon_code]='+ modalData.alliedCuponCode} onClick={gTagEventPurchase}>{t.modal_cta}</a>
                                            <span></span>
                                        </div>
                                        <p className='purchase__recommend'>
                                            asegurate de usar el codigo y aplicar los descuentos
                                        </p>
                                    </div>
                                    <div className='purchase__discount'>
                                        <span className='purchase__discount--promcode'>PROMCODE</span>
                                        <span className='purchase__discount--apply'>DISCOUNT APPLIED</span>
                                        <img className='purchase__discount--img' src="/img/png/discount-tueliges.jpg" alt="discount applied" loading='lazy' />
                                    </div>
                                </div>
                    }

                </div>
            }

        </div>



    )
}
