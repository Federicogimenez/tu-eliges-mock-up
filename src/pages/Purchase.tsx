// import AlliedModal from "../components/AlliedModal"
// import { Loading } from "../components/Loading"
// import SwitchLang from "../components/SwitchLang"
// import { AlliedModalProvider } from "../context/AlliedModalProvider"
// import { useAlliedModalContext } from "../hooks/UseAlliedModalContext"
// import { useLanguageContext } from "../hooks/UseLanguageContext"
import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import { useLocation } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { Loading } from '../components/Loading'
import { useLanguageContext } from '../hooks/UseLanguageContext'
import SwitchLang from '../components/SwitchLang'
import { LazyImageComponent } from '../components/LazyImage'
import Footer from '../layout/Footer'

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

    const [allyData, setAllyData] = useState({
        alliedName: '',
        alliedCompanyImg: '',
        alliedCuponCode: '',
        discount_percent: "",
        membership_anual_fee: "",
        new_price_after_discount: "",
        isLoading: false,
        userNotFound: true
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
            setAllyData({
                alliedName: data.allyCompanyName,
                alliedCompanyImg: data.allyCompanyLogo,
                alliedCuponCode: data.allyCoupons[0],
                discount_percent: data.discount_percent,
                membership_anual_fee: data.membership_anual_fee,
                new_price_after_discount: data.new_price_after_discount,
                isLoading: false,
                userNotFound: false
            })
            }else{
            setAllyData({
                alliedName: '',
                alliedCompanyImg: '',
                alliedCuponCode: '',
                discount_percent: "",
                membership_anual_fee: "",
                new_price_after_discount: "",
                isLoading: false,
                userNotFound: true
            })}
        })
        .catch( err =>{
            if (err) { 
            setAllyData({
                alliedName: '',
                alliedCompanyImg: '',
                alliedCuponCode: '',
                discount_percent: "",
                membership_anual_fee: "",
                new_price_after_discount: "",
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
                
                allyData.isLoading ? <Loading /> :
                
                
                    (

                        allyData.userNotFound ?
                            
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
                                        <img src={allyData.alliedCompanyImg} alt={"aliado"} loading='lazy'/>
                                    </picture>
                                </div>
                                
                                <div className='purchase__description'>

                                    {/* {allyData.userNotFound ? <h2>no encontrado</h2> : <img src={allyData.alliedCompanyImg} alt="logo" loading='lazy' />} */}
                                    <div className='purchase__text'>
                                        <div className='purchase__intro'>
                                            <h3>
                                                <span>TuEliges.us </span>
                                                & 
                                                <span> {allyData.alliedName} </span>
                                            </h3>
                                            <p className='purchase__intro--p' dangerouslySetInnerHTML={{ __html: t.purchase_intro }} />
                                        </div>
                                        <h4 className='text-center font-bold'>
                                         <span className='text-[25px]'>
                                            {t.purchase_public_price_1}
                                            <s className='mx-2'>
                                                { allyData.membership_anual_fee }
                                            </s>
                                            {t.purchase_public_price_2}
                                        </span>
                                        <br />
                                        <span className='text-green-primary text-[30px]'>
                                            { t.purchase_congratulations }
                                            <span className='mx-2'>
                                                { allyData.discount_percent }% OFF
                                            </span>
                                        </span>
                                        <br />
                                        <span className='text-green-primary text-[30px]'>
                                            ${ allyData.new_price_after_discount }
                                            <span className='mx-2'>
                                                {t.purchase_discounted_price}
                                            </span>
                                        </span>
                                    </h4>
                                        <h4>
                                            {t.purchase_h4}
                                        </h4>
                                        <div className='purchase__cta'>
                                            <a href={'https://tueligesus.recurly.com/subscribe/tueliges_member?currency=USD&subscription[coupon_code]='+ allyData.alliedCuponCode} onClick={gTagEventPurchase}>{t.purchase_cta}</a>
                                        </div>
                                        <p className='purchase__recommend'>
                                            {t.purchase_recommend}
                                        </p>
                                    </div>
                                    <div className='purchase__discount'>
                                        {/* <span className='purchase__discount--promcode'>YOURCODE</span> */}
                                        {/* <span className='purchase__discount--apply'>DISCOUNT APPLIED</span> */}
                                        <LazyImageComponent src={'/img/png/discount-tueliges.png'} alt={'discount applied'} class='purchase__discount--img object-contain w-fit max-h-[90vh]' />
                                    </div>
                                </div>
                            </div>

                    )

                }
                </div>
                <section className='w-[90%] md:w-[65%] mx-auto mb-32'>
                    <h2 className='text-[#000] text-[25px] text-center font-semibold mb-10'>{t.purchase_video_title}</h2>
                    <div style={{'padding':'56.25% 0 0 0','position':'relative'}}>
                            <iframe 
                                src="https://www.youtube.com/embed/p-14LYE-0Ho?si=1JlIk3tTEemNFfk7" 
                                title="Tu Eliges" 
                                style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"}} 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen></iframe>
                    </div>
                    <div className='purchase__cta mx-auto mt-10'>
                        <a href={'https://tueligesus.recurly.com/subscribe/tueliges_member?currency=USD&subscription[coupon_code]='+ allyData.alliedCuponCode} onClick={gTagEventPurchase}>{t.purchase_cta}</a>
                    </div>
                    <p className='purchase__recommend'>
                        {t.purchase_recommend}
                    </p>
                </section>
            <Footer />

        </div>



    )
}
