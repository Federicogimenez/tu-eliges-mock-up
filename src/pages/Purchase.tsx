

import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import { useLocation } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { useLanguageContext } from '../hooks/UseLanguageContext'
import SwiperMultipleSlides from '../components/SwiperMultipleSlides'
import Loading from '../components/Loading'

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

        <main className='relative' >

          <header className="thank-header absolute top-0 left-0 z-50 bg-[#000] w-full px-[15px] py-[15px] md:py-[20px] md:px-[80px] rounded-b-[25px] flex justify-between items-center animate-initial-header">
              <img className='absolute min-w-[100px] w-[10vw] max-w-[200px] left-[5vw] animate-initial-logo' src="/img/png/logo-uchooseit.png" loading="eager" alt="logo" />
          </header>
            <div>
            {
                
                allyData.isLoading ? <Loading /> :
                
                
                    (

                        allyData.userNotFound ?
                            
                            <div className="w-full relative h-screen flex justify-center items-center">
                                <div className="allied-modal__user-not-found--content">
                                    <img src="/img/svg/error.svg" alt="error" />
                                    <p>
                                    {t.modal_error}
                                    </p>
                                </div>
                            </div>
                        :
                            <div className='relative w-full h-full '>
                                <div className='relative flex flex-col justify-around items-center min-h-[500px] h-[100vh] max-h-[700px] pt-[80px]'>
                                    <img src="https://tueliges.us/img/png/hero-cerdito-ahorro.png" alt="hero" className='absolute left-0 top-0 w-full h-full object-cover object-[70%_50%] md:object-center animate-fade-in' />

                                    <picture className='relative h-[20vh] w-[60%] max-w-[300px]'>
                                        <img src={allyData.alliedCompanyImg} alt={"aliado"} loading='lazy' className='w-full h-full object-contain object-center animate-fade-in-1'/>
                                    </picture>
                                    <div className='w-full'>
                                        <h1 className='relative text-center text-[30px] md:text-[4vw] leading-[1.2] font-bold font-[#000] w-[90%] mx-auto animate-fade-in-1'>
                                            {t.purchase_title_1}
                                            <span className='text-[25px] md:text-[5vw] mx-2'>
                                                {'$'+ (parseFloat(allyData.new_price_after_discount) / 12).toFixed(2).toString() }
                                            </span>
                                            {t.purchase_title_2}
                                        </h1>
                                        <p className='w-[90%] mx-auto text-center text-[18px] md:text-[2.4vw] font-thin animate-fade-in-1'>
                                            {t.purchase_p}
                                        </p>
                                    </div>
                                    <div className='w-[90%] animate-fade-in-1_5'>
                                        <a href={'https://uchooseitus.recurly.com/subscribe/uchooseit_member?currency=USD&subscription[coupon_code]='+ allyData.alliedCuponCode} 
                                            onClick={gTagEventPurchase}
                                            className="block mx-auto text-center w-full rounded-[20px] max-w-[500px] p-[10px] transition-all duration-300 bg-lightblue-primary text-[#fff] text-[20px] md:text-[25px] font-semibold border-b-4 border-b-lightblue-primary translate-y-0 hover:bg-pink-primary hover:translate-y-[-2px] hover:border-b-lightblue-primary " 
                                            >
                                                {t.purchase_cta}
                                        </a>
                                        <p className='w-[90%] mx-auto text-center text-[16px] md:text-[1.8vw] font-thin'>
                                                {t.purchase_users}
                                        </p>
                                    </div>
                                </div>

                                <div className='pt-[10vh] pb-[6vh] w-full'>
                                    <h3 className='relative text-center text-[22px] md:text-[3vw] leading-[1.2] font-bold font-[#000] w-[90%] mx-auto mb-10 '>
                                        {t.purchase_benefits_title}
                                    </h3>
                                    <p className='w-[90%] mx-auto text-left text-[16px] md:text-[2vw] mb-5 font-thin flex items-center justify-start'>
                                        <img src="https://tueliges.us/img/png/check-verde.png" alt="check" className=' inline-block w-8 mr-4' />
                                        {t.purchase_benefit_1}
                                    </p>
                                    <p className='w-[90%] mx-auto text-left text-[16px] md:text-[2vw] mb-5 font-thin flex items-center justify-start'>
                                        <img src="https://tueliges.us/img/png/check-verde.png" alt="check" className=' inline-block w-8 mr-4' />
                                        {t.purchase_benefit_2}
                                    </p>
                                    <p className='w-[90%] mx-auto text-left text-[16px] md:text-[2vw] mb-5 font-thin flex items-center justify-start'>
                                        <img src="https://tueliges.us/img/png/check-verde.png" alt="check" className=' inline-block w-8 mr-4' />
                                        {t.purchase_benefit_3}
                                    </p>
                                    <p className='w-[90%] mx-auto text-left text-[16px] md:text-[2vw] mb-5 font-thin flex items-center justify-start'>
                                        <img src="https://tueliges.us/img/png/check-verde.png" alt="check" className=' inline-block w-8 mr-4' />
                                        {t.purchase_benefit_4}
                                    </p>
                                    <p className='w-[90%] mx-auto text-left text-[16px] md:text-[2vw] mb-5 font-thin flex items-center justify-start'>
                                        <img src="https://tueliges.us/img/png/check-verde.png" alt="check" className=' inline-block w-8 mr-4' />
                                        {t.purchase_benefit_5}
                                    </p>
                                    <p className='w-[90%] mx-auto text-left text-[16px] md:text-[2vw] mb-5 font-thin flex items-center justify-start'>
                                        <img src="https://tueliges.us/img/png/check-verde.png" alt="check" className=' inline-block w-8 mr-4' />
                                        {t.purchase_benefit_6}
                                    </p>
                                    <p className='w-[90%] mx-auto text-left text-[16px] md:text-[2vw] mb-5 font-thin flex items-center justify-start'>
                                        <img src="https://tueliges.us/img/png/check-verde.png" alt="check" className=' inline-block w-8 mr-4' />
                                        {t.purchase_benefit_7}
                                    </p>
                                </div>
                                <div className='pt-[10vh] pb-[6vh] w-full bg-littleblue'>
                                    <h3 className='relative text-center text-[22px] md:text-[3vw] leading-[1.2] font-bold font-[#000] w-[90%] mx-auto mb-10 '>
                                        { t.purchase_brands_title}
                                    </h3>
                                    <SwiperMultipleSlides />
                                </div>
                                <div className='pt-[10vh] pb-[6vh] w-full'>
                                    <h3 className='relative text-center text-[22px] md:text-[3vw] leading-[1.2] font-bold font-[#000] w-[90%] mx-auto mb-4'>
                                        {t.purchase_how_it_work}
                                    </h3>
                                    <p className='w-[90%] mx-auto text-center text-[16px] md:text-[2vw] mb-5 font-thin '>
                                        {t.purchase_how_it_work_p}
                                    </p>
                                    <div className='w-[90%] md:w-[75%] mx-auto'>
                                        <div style={{'padding':'56.25% 0 0 0','position':'relative'}}>
                                            <iframe 
                                                src="https://www.youtube.com/embed/_QtXvDbpVcQ?si=Mu_B0nflRfZM_hO0" 
                                                title="Tu Eliges" 
                                                style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"}} 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                referrerPolicy="strict-origin-when-cross-origin" >
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[90%] md:w-[70%] lg:w-[50%] xl:[40%] mx-auto rounded-[30px] border-[2px] border-black py-20 px-8'>
                                    <p className='w-full text-center text-[16px] md:text-[1.8vw] mb-5 font-bold '>
                                        <img src="https://tueliges.us/img/png/regalito-amarillo.png" alt="regalo" className='inline-block mr-2' />
                                        {t.purchase_special_offer}
                                    </p>
                                    <picture className='relative block mx-auto mb-[5vh] w-[50%] h-[20vh]'>
                                        <img src={allyData.alliedCompanyImg} alt={"aliado"} loading='lazy' className='w-full h-full object-contain object-center animate-fade-in-1'/>
                                    </picture>
                                    <p className='w-full text-center text-[16px] md:text-[1.8vw] mb-5 font-bold '>
                                        <img src="https://tueliges.us/img/png/explosion-naranja.png" alt="regalo" className='inline-block mr-2' />
                                         {t.purchase_save}
                                         <span className='inline-block mx-3'>

                                            { allyData.discount_percent}%
                                         </span>
                                         {t.purchase_today}
                                        <img src="https://tueliges.us/img/png/explosion-naranja.png" alt="regalo" className='inline-block ml-2' />
                                    </p>
                                    <p className='text-green-primary text-[30px] md:text-[3vw]  text-center font-extrabold'>
                                        {t.purchase_only} ${ (parseFloat(allyData.new_price_after_discount) / 12).toFixed(2).toString() } {t.purchase_per_month}
                                    </p>
                                    <p className='text-black text-[20px] md:text-[2vw]  text-center font-extrabold leading-[1]'>
                                        {t.purchase_discounted_price} ${ allyData.new_price_after_discount}
                                    </p>
                                    <p className='text-black text-[20px] md:text-[2vw]  text-center font-thin'>
                                        {t.purchase_in_stead_off}
                                        <span className='relative ml-3 inline-block before:w-full before:h-2 before:bg-[#ff3131] before:absolute  before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] '>
                                            ${ allyData.membership_anual_fee}
                                        </span>
                                    </p>
                                    <a href={'https://uchooseitus.recurly.com/subscribe/uchooseit_member?currency=USD&subscription[coupon_code]='+ allyData.alliedCuponCode} 
                                        onClick={gTagEventPurchase}
                                        className="block mx-auto mt-10 text-center w-full rounded-[20px] max-w-[500px] p-[10px] transition-all duration-300 bg-pink-primary text-[#fff] text-[20px] md:text-[25px] font-semibold border-b-4 border-b-pink-primary translate-y-0  hover:translate-y-[-2px] hover:border-b-lightblue-primary " 
                                            >
                                                {t.purchase_cta}
                                    </a>
                                    <div className='flex justify-center items-stretch gap-5 mt-10'>
                                        <div className='h-16  '>
                                            <img src="https://tueliges.us/img/png/amex-card.png" alt="amex" className='w-full h-full object-contain object-center' />
                                        </div>
                                        <div className='h-16  '>
                                            <img src="https://tueliges.us/img/png/discover-card.png" alt="discover" className='w-full h-full object-contain object-center' />
                                        </div>
                                        <div className='h-16  '>
                                            <img src="https://tueliges.us/img/png/diners-club.png" alt="diners" className='w-full h-full object-contain object-center' />
                                        </div>
                                        <div className='h-16  '>
                                            <img src="https://tueliges.us/img/png/master-card.png" alt="master card" className='w-full h-full object-contain object-center' />
                                        </div>
                                        <div className='h-16  '>
                                            <img src="https://tueliges.us/img/png/JCB.png" alt="jbc" className='w-full h-full object-contain object-center' />
                                        </div>
                                        <div className='h-16  '>
                                            <img src="https://tueliges.us/img/png/visa.png" alt="visa" className='w-full h-full object-contain object-center' />
                                        </div>
                                        <div className='h-16  '>
                                            <img src="https://tueliges.us/img/png/union-card.png" alt="union" className='w-full h-full object-contain object-center' />
                                        </div>
                                    </div>
                                    <p className='text-black text-[16px] md:text-[18px]  text-center font-thin mt-[30px]'>
                                        {t.purchase_recommended}
                                    </p>
                                </div>

                                <div className='relative w-full py-16'>
                                    <h3 className='relative text-center text-[22px] md:text-[3vw] leading-[1.2] font-bold font-[#000] w-[90%] mx-auto mb-10'>
                                        {t.purchase_apply_title}
                                    </h3>
                                    <div className='relative w-[90%] mx-auto flex flex-col md:flex-row justify-center items-center gap-8'>
                                        <div className='w-full md:w-[33%]'>
                                            <h6 className='text-[18px] md:text-[22px] text-black text-left mb-4'>
                                                <span className='bg-lightblue-primary rounded-lg text-center text-white text-[18px] md:text-[20px] py-2 px-4 mr-4'>1</span>
                                                {t.purchase_apply_1_title}
                                            </h6>
                                            <p className='w-full text-left text-[16px] md:text-[18px] mb-5 font-thin *:font-bold' dangerouslySetInnerHTML={{__html: t.purchase_apply_1_p}}>
                                            </p>
                                            <img src="https://tueliges.us/img/png/paso-1.png" alt="paso 1" className='h-[30vh] w-full object-contain object-center' />
                                        </div>
                                        <div className='w-full md:w-[33%]'>
                                            <h6 className='text-[18px] md:text-[22px] text-black text-left mb-4'>
                                                <span className='bg-lightblue-primary rounded-lg text-center text-white text-[18px] md:text-[20px] py-2 px-4 mr-4'>2</span>
                                                {t.purchase_apply_2_title}
                                            </h6>
                                            <p className='w-full text-left text-[16px] md:text-[18px] mb-5 font-thin'>
                                                {t.purchase_apply_2_p}
                                            </p>
                                            <img src="https://tueliges.us/img/png/tueliges-dominos-descuento-redime-cupon.png" alt="paso 2" className='h-[30vh] w-full object-contain object-center' />
                                        </div>
                                        <div className='w-full md:w-[33%]'>
                                            <h6 className='text-[18px] md:text-[22px] text-black text-left mb-4'>
                                                <span className='bg-lightblue-primary rounded-lg text-center text-white text-[18px] md:text-[20px] py-2 px-4 mr-4'>3</span>
                                                {t.purchase_apply_3_title}
                                            </h6>
                                            <p className='w-full text-left text-[16px] md:text-[18px] mb-5 font-thin'>
                                            {t.purchase_apply_3_p}
                                            
                                            </p>
                                            <img src="https://tueliges.us/img/png/familia-disfruta-ahorro.png" alt="paso 3" className='h-[30vh] w-full object-contain object-center' />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    <div className="footer__access">
                        { t["footer_copyright"] }
                        <br />
                        { t["footer_based"] }
                    </div>
                </div>
        </main>



    )
}
