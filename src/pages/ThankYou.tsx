import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { LazyImageComponent } from "../components/LazyImage";
import { useLanguageContext } from "../hooks/UseLanguageContext";

export default function ThankYou() {

  
  const data = useLanguageContext();
  
  const url = useLocation().search;
  
  const id = url.split('=').pop();

  const navigate = useNavigate();
  
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
  function handleRedirectHome (){
      navigate("/");
      window.scrollTo(0, 0)
  }
  
  return (
    <div className="thank">
      <div className="thank__header">
        <a className="thank__header--logo">
          <img src="/img/png/logo-alternative-uchooseit.png" alt="logo" />
        </a>
      </div>

        <h1 className="thank__title">{ data.thanks_title }</h1>

        <div className="thank__intro">
          <div>
            <p className="thank__intro--p" dangerouslySetInnerHTML={ { __html: data.thanks_intro }} />
            <p className="thank__intro--step">
              1. {data.thanks_intro_step_1}
              &nbsp;
              <span ref={textAreaRef} onClick={copyToClipboard}>
                {copySuccess == '' ? null : <small>{copySuccess}</small>}
                { id == '' ? 'ABC123' : id}
              </span>  
            </p>
            <p className="thank__intro--step">
              2. {data.thanks_intro_step_2} 
              <strong>Sign Up</strong>
            </p>
            <p className="thank__intro--step">3. {data.thanks_intro_step_3}</p>
            <a className="thank__intro--cta" href="https://uchooseitus.enjoymydeals.com/" target="_blank"> { data.thanks_cta }</a>
          </div>
          <video src="/thank-you-activate.mp4" autoPlay loop className="thank__intro--gif" width="100%" height="100%"></video>
        </div>


        <h2 className="thank__subtitle">
          {data.thanks_subtitle}
        </h2>
        <div className="thank__my-deals">
            <LazyImageComponent src="https://tueliges.us/img/png/my-deals-logo.png" alt={"my deals logo"} class="thank__my-deals--logo" width="100%" height="100%" />

            <div className="thank__my-deals--p">
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
          <LazyImageComponent src="https://tueliges.us/img/png/my-deals-app.png" alt={"my deals logo"} class="thank__my-deals--app" width="100%" height="100%" />
        </div>


        <p className="thank__email-text" dangerouslySetInnerHTML={{__html: data.thanks_email_text}} />

        <h3 className="thank__slogan">{data.thanks_slogan}</h3>

        <div className="thank__socials">
          <a target="_blank" href="https://www.facebook.com/Uchooseit.us">
              <img src="https://tueliges.us/img/svg/icon-facebook-black.svg" alt="facebook" />
          </a>
          <a target="_blank" href="https://www.instagram.com/uchooseit.us/">
              <img src="https://tueliges.us/img/svg/icon-Ig-black.svg" alt="instagram" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/uchooseit.us/">
              <img src="https://tueliges.us/img/svg/icon-linkedin-black.svg" alt="linkedin" />
          </a>
          <a target="_blank" href="https://www.youtube.com/channel/UCTS9Hp-WjV4eMaqHATtmJSg">
              <img src="https://tueliges.us/img/svg/icon-youtube-black.svg" alt="youtube" />
          </a>
        </div>
        <a className="thank__redirect" onClick={handleRedirectHome}>www.uchooseit.us</a>
      </div>
    )
}