import { useLocation, useNavigate } from "react-router";
import { useLanguageContext } from "../hooks/UseLanguageContext";
import SwitchLang from "../components/SwitchLang";
import { useRef, useState } from "react";

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
    <div className="thanks-you">
        <div className="thanks-you__switch-lang">
          <SwitchLang />
        </div>
        <a className="thanks-you__logo">
          <img src="/img/png/logo-tu-eliges.png" alt="" />
        </a>
        <h1 className="thanks-you__title">{ data["thanks_title"] }</h1>
        <p className="thanks-you__p">{ data["thanks_paragraph1"] }</p>
        <p className="thanks-you__p">
          { data["thanks_paragraph2"] }
          <a href="mailto:support@tueliges.us">{data["thanks_support_email"] }</a>  
        </p>

        <p className="thanks-you__p">
          { data["thanks_membership"] }
            <span ref={textAreaRef} onClick={copyToClipboard}>
              {copySuccess == '' ? null : <small>{copySuccess}</small>}
              { id == '' ? 'ABC123' : id}
            </span>
          </p>

        <div className="thanks-you__steps">

          <div>
            <div className="thanks-you__steps--step">
              <div>

              <h5>
                1. Empieza a explorar tus descuentos para ahorrar en grande
                “My Deals Web”
              </h5>
              <p>
                Para activar tu membresía debes registrarte con:
              </p>

              <ul>
                <li>Tu nombre</li>
                <li>Tu correo electronico</li>
                <li>tu membership id           
                  <span ref={textAreaRef} onClick={copyToClipboard}>
                    {copySuccess == '' ? null : <small>{copySuccess}</small>}
                    { id == '' ? 'ABC123' : id}
                  </span>
                </li>
                <li>Crear una contraseña</li>
              </ul>
              </div>

            </div>
            <a className="thanks-you__steps--cta" href="https://tueligesus.enjoymydeals.com/" target="_blank"> { data["thanks_step1_cta"] }</a>
          </div>

          <div>
            <div className="thanks-you__steps--step">
              <div>

                <h5>
                2. Descarga el App para que encuentres ofertas cerca a ti
                “My Deals Mobile App”
                </h5>
                <p>
                  Registrate con:
                </p>

                <ul>
                  <li>Tu correo electronico</li>
                  <li>El nombre de tu organización: TuEliges.us</li>
                  <li>tu membership id           
                    <span ref={textAreaRef} onClick={copyToClipboard}>
                      {copySuccess == '' ? null : <small>{copySuccess}</small>}
                      { id == '' ? 'ABC123' : id}
                    </span>
                  </li>
                  <li>La contraseña de My Deals Web.</li>
                </ul>
              </div>
            </div>
            <div className="thanks-you__download">
              <a href="https://play.google.com/store/apps/details?id=com.access.access&pli=1" target="_blank">
                <img src="/img/png/android-logo.png" alt="" />
              </a>
              <a href="https://apps.apple.com/us/app/my-deals-mobile/id427118196" target="_blank">
                <img src="/img/png/apple-logo.png" alt="" />
              </a>
            </div>
          </div>


        </div>

        <p className="thanks-you__visit-us">
          { data["thanks_visit_us"] }
        </p>
        <div className="thanks-you__socials">
          <a target="_blank" href="https://www.facebook.com/tueligesusa">
              <img src="/img/svg/facebook.svg" alt="facebook" />
          </a>
          <a target="_blank" href="https://www.instagram.com/tueliges.us/">
              <img src="/img/svg/ig.svg" alt="instagram" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/tueliges-us">
              <img src="/img/svg/linkedin-icon.svg" alt="linkedin" />
          </a>
          <a target="_blank" href="https://www.youtube.com/channel/UC5QtJ5tx41WsIIZGyru7_Ng">
              <img src="/img/svg/youtube-icon.svg" alt="youtube" />
          </a>
        </div>
        <a className="thanks-you__redirect" onClick={handleRedirectHome}>www.tueliges.us</a>
      </div>
    )
}