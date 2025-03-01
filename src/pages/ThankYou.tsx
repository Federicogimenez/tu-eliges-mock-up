import { useLocation, useNavigate } from "react-router"
import { useLanguageContext } from "../hooks/UseLanguageContext"
import SwitchLang from "../components/SwitchLang"

// import step_3_mob from "/img/png/thank-step3-mob.png"
// import step_3_desk from "/img/png/thank-step3-desktop.png"
// import step_4 from "/img/png/thank-step4.png"


export default function ThankYou() {


  // const { width } = useWindowSize()
  
  const data = useLanguageContext();
  
  const url = useLocation().search;
  
  const id = url.split('=').pop();

  const navigate = useNavigate();

  function handleRedirectActivate (){
    if(id !== ''){
      window.scrollTo({
        left:0,
        top:0,
        behavior:"instant"
      })
      navigate('/activate?id='+id)
    }
  }
  

  
  return (
      <main>
          <header className="thank-header bg-[#000] w-full px-[15px] py-[15px] md:py-[20px] md:px-[80px] rounded-b-[25px] flex justify-between items-center animate-initial-header">
              <img className='absolute min-w-[100px] w-[10vw] max-w-[200px] left-[5vw] animate-initial-logo' src="/img/png/logo-tu-eliges.png" loading="eager" alt="logo" />
              <div className=' absolute right-8 top-11 md:top-11'>
                  <SwitchLang />
              </div>
          </header>

          <h1 className="font-montserrat leading-[1.2] text-center max-w-[1000px] text-black mb-10 mx-auto font-normal text-[30px] md:text-[30px] my-[10vh] *:text-lightblue-primary *:block *:text-[40px] *:md:text-[55px] animate-fade-in-0_5" dangerouslySetInnerHTML={ { __html: data.thanks_title }} />


          <div className="relative w-[90%] max-w-[800px] mx-auto mt-[10vh] mb-3 h-fit p-4 border-2 border-lightblue-primary rounded-lg animate-fade-in-1"  >
            <p className=" text-center text-[20px] text-black *:mx-2" dangerouslySetInnerHTML={{__html:data.thanks_intro}}>
            </p>
          </div>
          <p className=" text-center text-[18px] text-black *:mx-2 mb-[10vh]" dangerouslySetInnerHTML={{__html:data.thanks_send_email}}>
          </p>

          <p className=" text-center font-bold text-[25px] animate-fade-in-1_5" >
          {data.thanks_your_member}
            <span className="text-lightblue-primary mx-3">{id}</span>
          </p>

          <button className="block mx-auto my-24 text-center w-[80%] rounded-full max-w-[500px] p-[10px] transition-all duration-300 bg-lightblue-primary text-[#fff] text-[20px] md:text-[25px] font-semibold border-b-4 border-b-[#00000000] translate-y-0 hover:bg-pink-primary hover:translate-y-[-2px] hover:border-b-lightblue-primary animate-fade-in-1_7" 
                onClick={handleRedirectActivate}
              >
              { data.thanks_cta }
          </button>

          <p className=" text-center text-[22px] mb-6 *:mx-2 animate-fade-in-2">
          {data.thanks_email_text}
            <a href="mailto:support@tueliges.us" className=" font-bold mx-2">support@tueliges.us</a>
            <strong className="mx-2">
              
            </strong>
          </p>
          <div className="footer relative">
              <div className="footer__access">
                  { data["footer_copyright"] }
                  <br />
                  { data["footer_based"] }
              </div>
            </div>
      </main>
    )
}

{/* <div className="w-full h-full min-h-screen ">
   <header className="thank-header bg-[#000] w-full px-[15px] py-[15px] md:py-[20px] md:px-[80px] rounded-b-[25px] flex justify-between items-center">
<img className='min-w-[30px] w-[4vw] max-w-[100px]' src="/img/png/favicon.png" alt="isotipo" />
<div className='lang-container'>
    <SwitchLang />
</div>
</header>

<img className="min-w-[200px] w-[25vw] max-w-[570px] h-auto block mx-auto my-10 md:my-20" src="/img/png/logo-alternative-tu-eliges.png" alt="logo" />
<h1 className="font-montserrat leading-[1.2] text-center max-w-[1000px] text-lightblue-primary mb-10 mx-auto font-normal text-[25px] md:text-[30px] *:block *:text-[30px] *:md:text-[50px]" dangerouslySetInnerHTML={ { __html: data.thanks_title }} />

<div className="w-[90%] max-w-[1000px] mx-auto">
<p className="text-left text-[18px] md:text-[22px] text-[#000] mb-5" dangerouslySetInnerHTML={ { __html: data.thanks_intro }} />

<div className="flex justify-start items-start gap-3 mb-3 flex-col sm:flex-row">
  <p className="text-left text-[16px] md:text-[20px] text-[#000] " dangerouslySetInnerHTML={{ __html: data.thanks_intro_step_1 }} />
  <strong className="relative font-montserrat_italic border-b-2 cursor-pointer border-b-lightblue-primary bg-white px-[10px] text-[16px] md:text-[20px] rounded-md transition-all duration-500 hover:bg-lightblue-primary hover:text-[#fff] " ref={textAreaRef} onClick={copyToClipboard}>
    {copySuccess == '' ? null : <small className="absolute left-full top-[-50%] bg-lightblue-primary rounded-md text-[#fff] text-nowrap px-2 text-[14px] ">{copySuccess}</small>}
    { id == '' ? 'ABC123' : id}
  </strong>  
</div>
<p className="text-left text-[16px] md:text-[20px] text-[#000] mb-2" dangerouslySetInnerHTML={ { __html: data.thanks_intro_step_2 }} />
<p className="text-left text-[16px] md:text-[20px] text-[#000] mb-2" dangerouslySetInnerHTML={ { __html: data.thanks_intro_step_3 }} />
{ width > 600 ? 
  <LazyImageComponent src={step_3_desk} alt={"step ilustration"}  width="100%" height="100%" class="max-w-[600px]" /> 
  : 
  <LazyImageComponent src={step_3_mob} alt={"step ilustration"}  width="100%" height="100%" class="max-w-[300px]" /> 
}
<p className="text-left text-[16px] md:text-[20px] text-[#000] mt-[40px] mb-2" dangerouslySetInnerHTML={ { __html: data.thanks_intro_step_4 }} />
<LazyImageComponent src={step_4} alt={"step ilustration"} width="100%" height="100%" class="max-w-[600px]" /> 
<p className="text-center text-[16px] md:text-[20px] text-[#000] mx-auto my-10 max-w-[700px] " dangerouslySetInnerHTML={ { __html:data.thanks_intro_download_mydeals } } />
<a className="block mx-auto mt-[20px] text-center w-[80%] rounded-full max-w-[600px] p-[10px] transition-all duration-300 bg-pink-primary text-[#fff] text-[25px] border-b-4 border-b-[#00000000] translate-y-0 hover:translate-y-[-2px] hover:border-b-blue-primary" 
  href="https://tueligesus.enjoymydeals.com/" target="_blank">
    { data.thanks_cta }
</a>
<button onClick={(e)=>{handleSetVideoHelp(e.currentTarget)}} className="w-fit border-none text-[#000] mt-3 text-[15px] text-center block mx-auto underline transition-all duration-300 hover:text-[#00000090] ">{data.thanks_need_help}</button>
{videoHelp ? 
  <div style={{animation: '1s fadeIn ease-out forwards'}} className={`w-[90%] mx-auto rounded-lg overflow-hidden transition-all duration-500 `}>
    <video autoPlay={true} loop={true} controls={true} className={`w-full transition-all duration-500 ${videoHelp ? ' opacity-100': ' opacity-0'}`} width="100%" height="100%">
      <source src={width>600? video_activate_desktop : video_activate_mob } type="video/mp4" />
    </video>
  </div>
: null}
</div>

<div className="thank__my-deals mx-auto mt-[60px]">
<div className="thank__my-deals--logo">
<picture>
  <LazyImageComponent src="/img/png/my-deals-logo.png" alt={"my deals logo"}  width="100%" height="100%" />
</picture>
</div>

<div className="thank__my-deals--p">
<h2 className="thank__subtitle">
  {data.thanks_subtitle}
</h2>
<p dangerouslySetInnerHTML={{__html: data.thanks_mydeals_p}} />

<div className="thank__my-deals--download">
  <a href="https://play.google.com/store/apps/details?id=com.access.access&pli=1" target="_blank">
    <img src="/img/png/android-logo.png" alt="" />
  </a>
  <a href="https://apps.apple.com/us/app/my-deals-mobile/id427118196" target="_blank">
    <img src="/img/png/apple-logo.png" alt="" />
  </a>
</div>
</div>
<picture className="thank__my-deals--app">
<LazyImageComponent src="/img/png/my-deals-app.png" alt={"my deals logo"} width="100%" height="100%" />
</picture>
</div>


<p className="thank__email-text mx-auto my-10 font-bold" dangerouslySetInnerHTML={{__html: data.thanks_ready_to_save}} />
<p className="thank__email-text mx-auto my-10" dangerouslySetInnerHTML={{__html: data.thanks_email_text}} />


<Footer />
</div> */}