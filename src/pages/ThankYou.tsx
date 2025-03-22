import { useLocation, useNavigate } from "react-router"
import { useLanguageContext } from "../hooks/UseLanguageContext"


export default function ThankYou() {

  
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
              <img className='absolute min-w-[100px] w-[10vw] max-w-[200px] left-[5vw] animate-initial-logo' src="/img/png/logo-uchooseit.png" loading="eager" alt="logo" />
          </header>

          <h1 className="font-montserrat leading-[1.2] text-center max-w-[1000px] text-black mb-10 mx-auto font-normal text-[30px] md:text-[30px] my-[10vh] *:text-lightblue-primary *:block *:text-[40px] *:md:text-[55px] animate-fade-in-0_5" dangerouslySetInnerHTML={ { __html: data.thanks_title }} />


          <div className="relative w-[90%] max-w-[800px] mx-auto mt-[6vh] mb-3 h-fit p-4 border-2 border-lightblue-primary rounded-lg animate-fade-in-1"  >
            <p className=" text-center text-[20px] text-black *:mx-2" dangerouslySetInnerHTML={{__html:data.thanks_intro}}>
            </p>
          </div>
          <p className=" text-center text-[18px] text-black *:mx-2 mb-[6vh]" dangerouslySetInnerHTML={{__html:data.thanks_send_email}}>
          </p>

          <p className=" text-center font-bold text-[25px] animate-fade-in-1_5" >
          {data.thanks_your_member}
            <span className="text-lightblue-primary mx-3">{id}</span>
          </p>

          <button className="block mx-auto my-24 text-center w-[80%] rounded-[20px] max-w-[500px] p-[10px] transition-all duration-300 bg-lightblue-primary text-[#fff] text-[20px] md:text-[25px] font-semibold border-b-4 border-b-lightblue-primary translate-y-0 hover:bg-pink-primary hover:translate-y-[-2px] hover:border-b-lightblue-primary animate-fade-in-1_7" 
                onClick={handleRedirectActivate}
              >
              { data.thanks_cta }
          </button>

          <p className=" text-center text-[22px] mb-6 *:mx-2 animate-fade-in-2">
          {data.thanks_email_text}
            <a href="mailto:support@uchooseit.us" className=" font-bold mx-2">support@uchooseit.us</a>
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
