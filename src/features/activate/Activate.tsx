import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useTranslation } from "../../hooks/useTranslation";

export default function Activate() {
    const { t, tHtml } = useTranslation();

    const { width } = useWindowSize()


    const url = useLocation().search;

    const id = url.split('=').pop();

    // const navigate = useNavigate();

    const [info, setInfo] = useState(width >= 600 ? "web" : "mobile")

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard() {
      if(id){
        navigator.clipboard.writeText(id);
        setCopySuccess(t('activate.copied'));
      }
      else{
        navigator.clipboard.writeText('id error');
        setCopySuccess(t('activate.idError'));
      }
      setTimeout(() => {
        setCopySuccess('')
      }, 2000);
    }

  return (
    <div className="w-full h-full pt-[20dvh] ">


        <section>
          <h1 className=" w-[90%] text-center text-[35px] md:text-[30px] mx-auto max-w-[800px] leading-[1.3] my-10 *:block *:uppercase *:text-[30px] *:md:text-[40px] animate-fade-in-1" >
            {t('activate.title')}
            <strong>
                {t('activate.titleHighlight')}
            </strong>
          </h1>
        </section>

        <div className="w-[50%] lg:w-[30%] h-1 bg-blue-uchooseit max-w-[300px] mx-auto mb-5 rounded-full" />

        <section className="relative  mx-auto w-[95%] max-w-[1000px] flex justify-center items-center gap-[10vw] py-8">
            <div onClick={()=>setInfo("web")} className={`w-fit flex flex-col gap-8 justify-center items-center cursor-pointer rounded-xl `}>
              <img src="/uchooseit-my-deals-web.png" alt="desktop" className={`portrait:h-[30vh] md:landscape:h-[40vh] object-contain transition-all duration-500 hover:scale-105 ${info == 'web' ? 'scale-105':'scale-100'} `} />
              <button className={`cursor-pointer relative min-w-[100px] w-[40vw] md:w-[35vw] max-w-[400px] font-semibold border border-blue-uchooseit text-[16px] md:text-[20px]  py-2 text-center rounded-full transition-all duration-300  ${ info == "web" ? "bg-blue-uchooseit text-white" : " text-blue-uchooseit" }`}>
                {t('activate.tabWeb')}
              </button>
            </div>
            <div onClick={()=>setInfo("mobile")} className="w-fit flex flex-col gap-8 justify-center items-center cursor-pointer ">
              <img src="/uchooseit-my-deals-mobile.png" alt="mobile" className={`portrait:h-[30vh] landscape:h-[40vh] object-contain transition-all duration-500 hover:scale-105 ${info == 'mobile' ? 'scale-105':'scale-100'}`} />
              <button className={`cursor-pointer relative min-w-[100px] w-[40vw] md:w-[35vw] max-w-[400px] font-semibold border border-blue-uchooseit text-[16px] md:text-[20px]  py-2 text-center rounded-full transition-all duration-300 ${ info == "mobile" ? "bg-blue-uchooseit text-white" : " text-blue-uchooseit" }`}>
                {t('activate.tabMobile')}
              </button>
            </div>
        </section>


        <section className="relative w-full h-full">

          <div className={`relative overflow-hidden ${ info == "web" ? " z-30" : "hidden"}`}>


            <div className="relative w-[90%] max-w-[800px] mx-auto my-6 h-fit p-4 text-center text-[18px] border-2 border-blue-uchooseit rounded-lg *:text-blue-uchooseit *:mx-2" >
                <span dangerouslySetInnerHTML={tHtml('activate.web.infoBox')} />
            </div>

            <div className=" relative w-[90%] max-w-[800px] mx-auto mb-10">
              <p className="text-left text-[16px] md:text-[20px] mb-2" >
                {t('activate.web.step1')}
              </p>
              <p className="text-left text-[16px] md:text-[20px] mb-2" >
                {t('activate.web.step2')}
              </p>
              <div className="flex justify-start items-start gap-3 mb-2 flex-col sm:flex-row">
                <p className="text-left text-[16px] md:text-[20px]  " >
                    {t('activate.web.step3')}
                </p>
                <strong className="relative font-montserrat_italic border-b-2 cursor-pointer border-b-blue-uchooseit bg-black dark:bg-white text-white dark:text-black px-[10px] text-[16px] md:text-[20px] rounded-md transition-all duration-500 hover:bg-blue-uchooseit hover:text-white " ref={textAreaRef} onClick={copyToClipboard}>
                  {copySuccess == '' ? null : <small className="absolute left-full top-[-50%] bg-blue-uchooseit rounded-md text-white dark:text-black text-nowrap px-2 text-[14px] ">{copySuccess}</small>}
                  { id == '' ? 'ABC123' : id}
                </strong>
              </div>
              <p className="text-left text-[16px] md:text-[20px] mb-2">
                {t('activate.web.step4')}
              </p>
            </div>

            <div className="relative w-[90%] mx-auto max-w-[700px] h-full flex justify-center items-center rounded-xl overflow-hidden">
              <picture style={{'padding':'56.25% 0 0 0','position':'relative', 'width':'100%'}} >
                <iframe
                  style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"}}
                  src="https://www.youtube.com/embed/AaefJ7wo5ro"
                  title="Como activar membresia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
                </picture>
            </div>

            <a className="uppercase w-[90%] max-w-[500px] text-center mx-auto block my-10 text-lg px-8 py-4 rounded-full border-2 border-black dark:border-white transition-all hover:font-semibold hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black hover:-translate-y-1"
              href="https://uchooseitus.enjoymydeals.com/" target="_blank">
                {t('activate.activateButton')}
            </a>

          </div>

          <div className={`w-full overflow-hidden  ${ info == "mobile" ? "animate-fade-in z-30" : "animate-fade-out hidden"}`}>

            {/* <img src="/img/png/compras-2-banner.jpg" alt="bg-banner" className="absolute h-full w-full bottom-0 left-0 object-cover object-left opacity-40 " /> */}
            <div className="absolute left-0 top-0 h-[70%] w-full object-contain " />


            <div className="relative w-[90%] max-w-[800px] mx-auto my-6 h-fit p-4 text-center text-[18px] border-2 border-blue-uchooseit rounded-lg *:text-blue-uchooseit *:mx-2" >
                <span dangerouslySetInnerHTML={tHtml('activate.mobile.infoBox')} />
            </div>

            <div className="relative flex flex-wrap lg:landscape:flex-nowrap justify-center items-center w-[90%] max-w-[900px] mx-auto">

              <div className="w-full lg:landscape:w-[60%] max-w-[600px] mx-auto mb-10">
                <p className="text-left text-[18px] md:text-[20px] mb-2" >
                    {t('activate.mobile.step1')}
                </p>
                <p className="text-left text-[18px] md:text-[20px] mb-2">
                    {t('activate.mobile.step2')}
                </p>
                <p className="text-left text-[18px] md:text-[20px] mb-2" >
                    {t('activate.mobile.step3')}
                </p>
                <div className="mb-1 pl-[3vw] ">
                  <p  className="text-left text-[18px] md:text-[20px] font-bold flex flex-nowrap justify-start items-center gap-4 ">
                    {t('activate.mobile.orgName')}
                    <strong className="relative font-montserrat_italic border-b-2 cursor-pointer border-b-blue-uchooseit px-[10px] text-[16px] md:text-[18px] rounded-md transition-all duration-500 hover:bg-blue-uchooseit hover:text-white "
                        >
                        {t('activate.mobile.orgValue')}
                      </strong>
                  </p>
                  <p className="text-left text-[18px] md:text-[20px] font-bold  flex flex-nowrap justify-start items-center gap-4">
                      {t('activate.mobile.memberId')}
                      <strong className="relative mx-4 font-montserrat_italic border-b-2 cursor-pointer border-b-blue-uchooseit px-[10px] text-[16px] md:text-[18px] rounded-md transition-all duration-500 hover:bg-blue-uchooseit hover:text-white "
                        ref={textAreaRef}
                        onClick={copyToClipboard}>
                        {copySuccess == '' ? null : <small className="absolute left-full top-[-50%] bg-blue-uchooseit rounded-md text-white text-nowrap px-2 text-[14px] ">{copySuccess}</small>}
                        { id == '' ? 'ABC123' : id}
                      </strong>
                  </p>

                </div>
                <p className="text-left text-[18px] md:text-[20px] mb-2" >
                    {t('activate.mobile.step4')}
                </p>
              </div>


              <div className="relative w-[290px] mx-auto h-[90vh] max-h-[670px] flex justify-center items-center rounded-xl overflow-hidden">
                  <iframe
                    style={{"position":"absolute","top":"0","left":"0"}}
                    className=" w-full h-full"
                    src="https://www.youtube.com/embed/5vloaJ6cB8I?rel=0"
                    title="Como activar membresia"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
              </div>
            </div>

            <p className=" font-bold text-[25px] text-center mt-10 ">
                {t('activate.mobile.downloadNote')}
            </p>

            <div className="relative flex justify-center items-center gap-[5vw] mt-10 mb-20 w-[80%] md:max-w-[500px] mx-auto">
              <a href="https://play.google.com/store/apps/details?id=com.access.access&pli=1" target="_blank">
                <img src="/android-logo.png" alt="" />
              </a>
              <a href="https://apps.apple.com/us/app/my-deals-mobile/id427118196" target="_blank">
                <img src="/apple-logo.png" alt="" />
              </a>
            </div>

          </div>
        </section>
    </div>
  )
}
