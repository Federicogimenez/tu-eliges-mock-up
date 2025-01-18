// import AlliedModal from "../components/AlliedModal"
// import { Loading } from "../components/Loading"
// import SwitchLang from "../components/SwitchLang"
// import { AlliedModalProvider } from "../context/AlliedModalProvider"
// import { useAlliedModalContext } from "../hooks/UseAlliedModalContext"
// import { useLanguageContext } from "../hooks/UseLanguageContext"
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useLanguageContext } from '../hooks/UseLanguageContext';
import { LazyImageComponent } from '../components/LazyImage';
import Footer from '../layout/Footer';
import Loading from '../components/Loading';

export default function Purchase (){

    const t = useLanguageContext()
    const [searchParams] = useSearchParams();

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
                                    <img src={"/img/png/logo-alternative-uchooseit.png"} alt={"uchooseit.us"} loading='lazy' />
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
                                            <span>Uchooseit.us </span>
                                            & 
                                            <span> {modalData.alliedName} </span>
                                        </h3>
                                        <p className='purchase__intro--p' dangerouslySetInnerHTML={{ __html: t.purchase_intro }} />
                                    </div>
                                    <h4>
                                        {t.purchase_h4}
                                    </h4>
                                    <div className='purchase__cta'>
                                        <a href={'https://uchooseitus.recurly.com/subscribe/uchooseit_member?currency=USD&subscription[coupon_code]='+ modalData.alliedCuponCode} >{t.purchase_cta}</a>
                                    </div>
                                    <p className='purchase__recommend'>
                                        {t.purchase_recommend}
                                    </p>
                                </div>
                                <div className='purchase__discount'>
                                    {/* <span className='purchase__discount--promcode'>YOURCODE</span> */}
                                    {/* <span className='purchase__discount--apply'>DISCOUNT APPLIED</span> */}
                                    <LazyImageComponent src={'/img/png/discount-uchooseit.png'} alt={'discount applied'} class='purchase__discount--img' />
                                </div>
                            </div>
                        </div>

                )

            }
            </div>
            <section className=' w-[90%] md:w-[65%] mx-auto mb-32'>
                <h2 className='text-[25px] text-[#000] text-center mb-5 font-semibold'>
                    Watch the video to learn more
                </h2>
                <div style={{'padding':'56.25% 0 0 0','position':'relative'}}>
                    <iframe 
                        src="https://www.youtube.com/embed/_QtXvDbpVcQ?si=Mu_B0nflRfZM_hO0" 
                        title="UChooseIt"
                        loading="lazy" 
                        frameBorder="0" 
                        style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"}}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen></iframe>
                </div>
                <div className='purchase__cta mx-auto mt-10'>
                    <a href={'https://uchooseitus.recurly.com/subscribe/uchooseit_member?currency=USD&subscription[coupon_code]='+ modalData.alliedCuponCode} >{t.purchase_cta}</a>
                </div>
                <p className='purchase__recommend'>
                                        {t.purchase_recommend}
                                    </p>
            </section>
            <Footer />
            </div>

    )
}
