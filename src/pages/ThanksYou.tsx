import { useLanguageContext } from "../hooks/UseLanguageContext"

export default function ThanksYou() {
  const data = useLanguageContext();

  return (
      <div className="thanks-you">
        <a href="/" className="thanks-you__logo">
          <img src="/img/png/logo-tu-eliges.png" alt="" />
        </a>
        <h1 className="thanks-you__title">{ data["thanks_title"] }</h1>
        <p className="thanks-you__p">{ data["thanks_paragraph1"] }</p>
        <p className="thanks-you__p">{ data["thanks_paragraph2"] }</p>
        <button className="thanks-you__key-btn">{ data["thanks_key_btn"] }</button>
        <p className="thanks-you__support-text">{ data["thanks_support_text"] } soporte@tueliges.com</p>
        <div className="thanks-you__steps">
          <div className="thanks-you__steps--step">
            <div>
              {data["thanks_step1"]}
              <a href="#"> { data["thanks_step1_click"] }</a>
            </div>
          </div>
          <div className="thanks-you__steps--step">
            { data["thanks_step2"] }
          </div>
        </div>
        <div className="thanks-you__download">
          <a href="#">
            <img src="/img/png/android-logo.png" alt="" />
          </a>
          <a href="#">
            <img src="/img/png/apple-logo.png" alt="" />
          </a>
        </div>
        <p className="thanks-you__visit-us">
          { data["thanks_visit_us"] }
        </p>
        <div className="thanks-you__socials">
          <a href="#">
              <img src="/img/svg/facebook.svg" alt="facebook" />
          </a>
          <a href="#">
              <img src="/img/svg/ig.svg" alt="instagram" />
          </a>
          <a href="#">
              <img src="/img/svg/linkedin-icon.svg" alt="twitter" />
          </a>
          <a href="#">
              <img src="/img/svg/youtube-icon.svg" alt="twitter" />
          </a>
        </div>
        <a className="thanks-you__redirect" href="#">www.tueliges.us</a>
      </div>
    )
}
