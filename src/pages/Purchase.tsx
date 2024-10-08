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

            {
                
                modalData.isLoading ? <h1></h1> :
                
                
                <div className='purchase'>
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
                                                <img src={"/img/png/logo-alternative-uchooseit.png"} alt={"uchooseit.us"} loading='lazy' />
                                            </picture>
                                            <picture>
                                                <img src={modalData.alliedCompanyImg} alt={"aliado"} loading='lazy'/>
                                            </picture>
                                        </div>
                                        {/* {modalData.userNotFound ? <h2>no encontrado</h2> : <img src={modalData.alliedCompanyImg} alt="logo" loading='lazy' />} */}
                                        <p className='purchase__intro'>
                                            <span>Uchooseit.us </span>
                                            & 
                                            <span> {modalData.alliedName} </span>
                                            <br />
                                            <p dangerouslySetInnerHTML={{ __html: t.purchase_intro }} />
                                        </p>
                                        <h4>
                                           {t.purchase_h4}
                                        </h4>
                                        <div className='purchase__cta'>
                                            <span></span>
                                            <a href={'https://uchooseitus.recurly.com/subscribe/uchooseit_member?currency=USD&subscription[coupon_code]='+ modalData.alliedCuponCode} >{t.purchase_cta}</a>
                                            <span></span>
                                        </div>
                                        <p className='purchase__recommend'>
                                            {t.purchase_recommend}
                                        </p>
                                    </div>
                                    <div className='purchase__discount'>
                                        <span className='purchase__discount--promcode'>YOURCODE</span>
                                        <span className='purchase__discount--apply'>DISCOUNT APPLIED</span>
                                        <LazyImageComponent src={'/img/png/discount-uchooseit.jpg'} alt={'discount applied'} class='purchase__discount--img' />
                                    </div>
                                </div>
                    }

                </div>
            }

        </div>



    )
}
