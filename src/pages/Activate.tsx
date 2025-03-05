import { useLocation, useNavigate } from "react-router";
import SwitchLang from "../components/SwitchLang"
import { useLanguageContext } from "../hooks/UseLanguageContext";
// import { useWindowSize } from "../hooks/UseWindowSize";
import { useRef, useState } from "react";
import { useWindowSize } from "../hooks/UseWindowSize";


export const Activate = () => {

    const navigate = useNavigate();
  
    const { width } = useWindowSize()
    
    const data = useLanguageContext();
    
    const url = useLocation().search;
    
    const id = url.split('=').pop();
  
    // const navigate = useNavigate();

    const [info, setInfo] = useState(width >= 600 ? "web" : "mobile")
    
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);
    
    function copyToClipboard() {
      if(id){
        navigator.clipboard.writeText(id);
        setCopySuccess(data['thanks_copy_clipboard']);
      }
      else{
        navigator.clipboard.writeText('id error');
        setCopySuccess('ID Error!');
      }
      setTimeout(() => {
        setCopySuccess('')
      }, 2000);
    }

    function handleRedirectFaq (){
      navigate("/faqs");
      window.scrollTo(0, 0)
  }

  return (
    <div className="w-full h-full min-h-screen ">
        <header className="thank-header bg-[#000] w-full px-[15px] py-[15px] md:py-[20px] md:px-[80px] rounded-b-[25px] flex justify-between items-center animate-initial-header">
            <img className='absolute min-w-[100px] w-[10vw] max-w-[200px] left-[5vw] animate-initial-logo' src="/img/png/logo-tu-eliges.png" loading="eager" alt="logo" />
            <div className=' absolute right-8 top-11 md:top-11'>
                <SwitchLang />
            </div>
        </header>

        <section>
          <h1 className=" w-[90%] text-center text-[25px] md:text-[30px] mx-auto max-w-[800px] leading-[1.3] my-16 *:block *:uppercase *:text-[30px] *:md:text-[40px] animate-fade-in-1" dangerouslySetInnerHTML={{ __html: data.activate_title }} />
          <p className=" font-bold text-[20px] text-center animate-fade-in-1_5 *:text-lightblue-primary *:mx-2" dangerouslySetInnerHTML={{ __html:data.activate_subtitle}} />
        </section>
        
        <div className="w-[50%] lg:w-[30%] h-1 bg-lightblue-primary max-w-[500px] mx-auto my-5 rounded-full animate-fade-in-2" />
        
        <section className=" mx-auto w-[95%] max-w-[1000px] flex justify-center items-center gap-[10vw] py-8">
          <div className="animate-fade-in-1_7">
            <div onClick={()=>setInfo("web")} className={`w-fit flex flex-col gap-8 justify-center items-center cursor-pointer rounded-xl `}>
              <img src="https://res.cloudinary.com/dhy5yj59p/image/upload/v1740702547/my-deals-desktop_kdhylg.png" alt="desktop" className={`portrait:h-[30vh] md:landscape:h-[40vh] object-contain transition-all duration-500 hover:scale-105 ${info == 'web' ? 'scale-105':'scale-100'} `} />
              <button className={` min-w-[100px] w-[40vw] md:w-[35vw] max-w-[400px] font-semibold border-2 border-lightblue-primary text-[16px] md:text-[20px] bg-[#fff] py-2 text-center rounded-full transition-all duration-300 hover:bg-lightblue-primary/90 hover:text-[#fff] ${ info == "web" ? "bg-lightblue-primary text-[#fff]" : "bg-[#fff] text-lightblue-primary" }`}>
                {data.activate_from_web}
              </button>
            </div>
          </div>
          <div className="animate-fade-in-2">
            <div onClick={()=>setInfo("mobile")} className="w-fit flex flex-col gap-8 justify-center items-center cursor-pointer ">
              <img src="https://res.cloudinary.com/dhy5yj59p/image/upload/v1740702547/my-deals-mobile_e6twj7.png" alt="mobile" className={`portrait:h-[30vh] landscape:h-[40vh] object-contain transition-all duration-500 hover:scale-105 ${info == 'mobile' ? 'scale-105':'scale-100'}`} />
              <button  className={` min-w-[100px] w-[40vw] md:w-[35vw] max-w-[400px] font-semibold border-2 border-lightblue-primary text-[16px] md:text-[20px] bg-[#fff] py-2 text-center rounded-full transition-all duration-300 hover:bg-lightblue-primary/90 hover:text-[#fff] ${ info == "mobile" ? "bg-lightblue-primary text-[#fff]" : "bg-[#fff] text-lightblue-primary" } `}>
                {data.activate_from_app}
              </button>
            </div>
          </div>
        </section>
        

        <section className="relative w-full h-fit animate-fade-in-2">
          
          <div className={`absolute w-full top-0 left-0 overflow-hidden ${ info == "web" ? "animate-fade-in z-30" : "animate-fade-out hidden"}`}>
            
            <img src="/img/png/compras-banner.jpg" alt="bg-banner" className="absolute h-full w-full bottom-0 left-0 object-cover object-center opacity-40 " />
            <div className="absolute left-0 top-0 h-[50%] w-full object-contain bg-gradient-to-b from-white to-transparent" />

            <div className="relative w-[90%] max-w-[800px] mx-auto my-6 h-fit p-4 text-center text-[18px] text-black border-2 border-lightblue-primary rounded-lg *:text-lightblue-primary *:mx-2" dangerouslySetInnerHTML={{__html:data.activate_web_info}} />
            
            <div className=" relative w-[90%] max-w-[800px] mx-auto mb-10">
              <p className="text-left text-[16px] md:text-[20px] text-[#000] mb-2" dangerouslySetInnerHTML={{__html:data.activate_web_1}} />
              <p className="text-left text-[16px] md:text-[20px] text-[#000] mb-2" dangerouslySetInnerHTML={{__html:data.activate_web_2}} />
              <div className="flex justify-start items-start gap-3 mb-2 flex-col sm:flex-row">
                <p className="text-left text-[16px] md:text-[20px] text-[#000]  " dangerouslySetInnerHTML={{__html: data.activate_web_3}} />
                <strong className="relative font-montserrat_italic border-b-2 cursor-pointer border-b-lightblue-primary bg-white px-[10px] text-[16px] md:text-[20px] rounded-md transition-all duration-500 hover:bg-lightblue-primary hover:text-[#fff] " ref={textAreaRef} onClick={copyToClipboard}>
                  {copySuccess == '' ? null : <small className="absolute left-full top-[-50%] bg-lightblue-primary rounded-md text-[#fff] text-nowrap px-2 text-[14px] ">{copySuccess}</small>}
                  { id == '' ? 'ABC123' : id}
                </strong>
              </div>
              <p className="text-left text-[16px] md:text-[20px] text-[#000] mb-2">
                {data.activate_web_4}
              </p>
            </div>

            <div className="relative w-[90%] mx-auto max-w-[700px] h-full flex justify-center items-center rounded-xl overflow-hidden">
              <picture style={{'padding':'56.25% 0 0 0','position':'relative', 'width':'100%'}} >
                <iframe 
                  style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"}} 
                  src="https://www.youtube.com/embed/LHVBJrkxpyM?rel=0"
                  title="Como activar membresia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
                </picture>
            </div>
            
            <a className="block mx-auto my-24 text-center w-[80%] rounded-full max-w-[500px] p-[10px] transition-all duration-300 bg-lightblue-primary text-[#fff] text-[20px] md:text-[25px] font-semibold border-b-4 border-b-[#00000000] translate-y-0 hover:translate-y-[-2px] hover:bg-pink-primary hover:border-b-lightblue-primary" 
              href="https://tueligesus.enjoymydeals.com/" target="_blank">
                { data.thanks_cta }
            </a>

            <div className="footer relative">
              <div className="footer__data md:items-center">
                  <a className="footer__data--img">
                      <img src="/img/png/logo-tu-eliges.png" alt="logo" />
                  </a>
                  <div className="footer__data--support">
                      <strong> { data["footer_support"] } :</strong>
                      <a href="mailto:support@tueliges.us" target="_blank">
                          <img src="/img/svg/mail.svg" alt="" />
                          support@tueliges.us
                      </a>
                      <a onClick={handleRedirectFaq}>F.A.Q</a>
                      <a target="_blank" href="https://tueligesus.recurly.com/account/create_account">
                          {data.footer_membership}
                      </a>
                  </div>

              </div>
              <div className="footer__access">
                  { data["footer_copyright"] }
                  <br />
                  { data["footer_based"] }
              </div>
            </div>
          </div>

          <div className={`absolute top-0 left-0 w-full overflow-hidden  ${ info == "mobile" ? "animate-fade-in z-30" : "animate-fade-out hidden"}`}>
            
            <img src="/img/png/compras-2-banner.jpg" alt="bg-banner" className="absolute h-full w-full bottom-0 left-0 object-cover object-left opacity-40 " />
            <div className="absolute left-0 top-0 h-[70%] w-full object-contain bg-gradient-to-b from-white to-transparent" />

            
            <div className="relative w-[90%] max-w-[800px] mx-auto my-6 h-fit p-4 text-center text-[18px] text-[#000] border-2 border-lightblue-primary rounded-lg *:text-lightblue-primary *:mx-2" dangerouslySetInnerHTML={{ __html: data.activate_app_info }} />

            <div className="relative flex flex-wrap lg:landscape:flex-nowrap justify-center items-center w-[90%] max-w-[900px] mx-auto">

              <div className="w-full lg:landscape:w-[60%] max-w-[600px] mx-auto mb-10">
                <p className="text-left text-[18px] md:text-[20px] text-[#000] mb-2" dangerouslySetInnerHTML={{__html:data.activate_app_1}} />
                <p className="text-left text-[18px] md:text-[20px] text-[#000] mb-2" dangerouslySetInnerHTML={{__html:data.activate_app_2}} />
                <p className="text-left text-[18px] md:text-[20px] text-[#000] mb-2" dangerouslySetInnerHTML={{__html:data.activate_app_3}} />
                <div className="mb-1 pl-[3vw] ">
                  <p  className="text-left text-[18px] md:text-[20px] text-[#000] font-bold flex flex-nowrap justify-start items-center gap-4 ">
                    {data.activate_app_3_a}
                    <strong className="relative font-montserrat_italic border-b-2 cursor-pointer border-b-lightblue-primary bg-white px-[10px] text-[16px] md:text-[18px] rounded-md transition-all duration-500 hover:bg-lightblue-primary hover:text-[#fff] " 
                        >
                        TuEliges.us
                      </strong>
                  </p>
                  <p className="text-left text-[18px] md:text-[20px] text-[#000] font-bold  flex flex-nowrap justify-start items-center gap-4">
                      {data.activate_app_3_b}
                      <strong className="relative mx-4 font-montserrat_italic border-b-2 cursor-pointer border-b-lightblue-primary bg-white px-[10px] text-[16px] md:text-[18px] rounded-md transition-all duration-500 hover:bg-lightblue-primary hover:text-[#fff] " 
                        ref={textAreaRef} 
                        onClick={copyToClipboard}>
                        {copySuccess == '' ? null : <small className="absolute left-full top-[-50%] bg-lightblue-primary rounded-md text-[#fff] text-nowrap px-2 text-[14px] ">{copySuccess}</small>}
                        { id == '' ? 'ABC123' : id}
                      </strong>
                  </p>
                    
                </div>
                <p className="text-left text-[18px] md:text-[20px] text-[#000] mb-2" dangerouslySetInnerHTML={{__html:data.activate_app_4}} />
              </div>


              <div className="relative w-[290px] mx-auto h-[90vh] max-h-[670px] flex justify-center items-center rounded-xl overflow-hidden">
                  <iframe 
                    style={{"position":"absolute","top":"0","left":"0"}} 
                    className=" w-full h-full"
                    src="https://www.youtube.com/embed/dbYQWsk1T9w?rel=0"
                    title="Como activar membresia"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
              </div>
            </div>

            <p className=" font-bold text-[25px] text-center mt-10 " dangerouslySetInnerHTML={{ __html:data.activate_download_app}} />

            <div className="relative flex justify-center items-center gap-[5vw] mt-10 mb-20 w-[80%] md:max-w-[500px] mx-auto">
              <a href="https://play.google.com/store/apps/details?id=com.access.access&pli=1" target="_blank">
                <img src="/img/png/android-logo.png" alt="" />
              </a>
              <a href="https://apps.apple.com/us/app/my-deals-mobile/id427118196" target="_blank">
                <img src="/img/png/apple-logo.png" alt="" />
              </a>
            </div>

            <div className="footer relative">
              <div className="footer__data md:items-center">
                  <a className="footer__data--img">
                      <img src="/img/png/logo-tu-eliges.png" alt="logo" />
                  </a>
                  <div className="footer__data--support">
                      <strong> { data["footer_support"] } :</strong>
                      <a href="mailto:support@tueliges.us" target="_blank">
                          <img src="/img/svg/mail.svg" alt="" />
                          support@tueliges.us
                      </a>
                      <a onClick={handleRedirectFaq}>F.A.Q</a>
                      <a target="_blank" href="https://tueligesus.recurly.com/account/create_account">
                          {data.footer_membership}
                      </a>
                  </div>

              </div>
              <div className="footer__access">
                  { data["footer_copyright"] }
                  <br />
                  { data["footer_based"] }
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
