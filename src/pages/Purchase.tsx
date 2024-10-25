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
import { LazyImageComponent } from '../components/LazyImage';
import Footer from '../layout/Footer';

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
        }, [] )

    return (

        <div className='purchase__bg'>
            <header>
                <img className='logo' src="/img/png/favicon.png" alt="isotipo" />
                <h1>{t.modal_welcome}</h1>
                <div className='lang-container'>
                    <SwitchLang />
                </div>
            </header>
            <div className='purchase'>
            {
                
                modalData.isLoading ? <Loading /> :
                
                
                    (

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
                                <div className='purchase__logos'>
                                    <picture>
                                        <img src={"/img/png/logo-alternative-tu-eliges.png"} alt={"tueliges.us"} loading='lazy' />
                                    </picture>
                                    <picture>
                                        <img src={modalData.alliedCompanyImg} alt={"aliado"} loading='lazy'/>
                                    </picture>
                                </div>
                                
                                <div className='purchase__description'>

                                    {/* {modalData.userNotFound ? <h2>no encontrado</h2> : <img src={modalData.alliedCompanyImg} alt="logo" loading='lazy' />} */}
                                    <div className='purchase__text'>
                                        <div className='purchase__intro'>
                                            <h3>
                                                <span>TuEliges.us </span>
                                                & 
                                                <span> {modalData.alliedName} </span>
                                            </h3>
                                            <p className='purchase__intro--p' dangerouslySetInnerHTML={{ __html: t.purchase_intro }} />
                                        </div>
                                        <h4>
                                        {t.purchase_h4}
                                        </h4>
                                        <div className='purchase__cta'>
                                            <a href={'https://tueligesus.recurly.com/subscribe/tueliges_member?currency=USD&subscription[coupon_code]='+ modalData.alliedCuponCode} onClick={gTagEventPurchase}>{t.purchase_cta}</a>
                                        </div>
                                        <p className='purchase__recommend'>
                                            {t.purchase_recommend}
                                        </p>
                                    </div>
                                    <div className='purchase__discount'>
                                        <span className='purchase__discount--promcode'>YOURCODE</span>
                                        <span className='purchase__discount--apply'>DISCOUNT APPLIED</span>
                                        <LazyImageComponent src={'/img/png/discount-tueliges.jpg'} alt={'discount applied'} class='purchase__discount--img' />
                                    </div>
                                </div>
                            </div>

                    )

                }
                </div>
            <Footer />

        </div>



    )
}
