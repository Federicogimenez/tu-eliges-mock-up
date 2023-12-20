import { useNavigate } from "react-router";
import { useLanguageContext } from "../hooks/UseLanguageContext"

export default function Footer() {

    const data = useLanguageContext()

    const navigate = useNavigate();

    function handleRedirectHome (){
        window.scrollTo(0, 0)
        navigate("/");
    }
    function handleRedirectLegal (){
        window.scrollTo(0, 0)
        navigate("/legals");
    }
    function handleRedirectTerms (){
        window.scrollTo(0, 0)
        navigate("/terms-and-conditions");
    }
    function handleRedirectFaq (){
        window.scrollTo(0, 0)
        navigate("/faqs");
    }

    return (
    <div className="footer">
        <div className="footer__data">
            <a onClick={handleRedirectHome} className="footer__data--img">
                <img src="/img/png/logo-tu-eliges.png" alt="logo" />
            </a>
            <div className="footer__data--contact">
                <strong> { data["footer_contact"] } :</strong>
                <a href="mailto:info@tueliges.us" target="_blank">
                    <img src="/img/svg/mail.svg" alt="" />
                    info@tueliges.us
                </a>
                <span>
                    <a href="#">
                        <img src="/img/svg/facebook.svg" alt="facebook" />
                    </a>
                    <a href="#">
                        <img src="/img/svg/ig.svg" alt="instagram" />
                    </a>
                    <a href="#">
                        <img src="/img/svg/linkedin-icon.svg" alt="linkedin" />
                    </a>
                    <a href="#">
                        <img src="/img/svg/youtube-icon.svg" alt="youtube" />
                    </a>
                </span>
            </div>
            <div className="footer__data--support">
                <strong> { data["footer_support"] } :</strong>
                <a href="mailto:soporte@tueliges.us" target="_blank">
                    <img src="/img/svg/mail.svg" alt="" />
                    soporte@tueliges.us
                </a>
                <a onClick={handleRedirectFaq}>F.A.Q</a>
            </div>
            <div className="footer__data--legal">
                <strong> { data["footer_legal"] } </strong>
                <a onClick={handleRedirectLegal}> { data["footer_policy"] } </a>
                <a onClick={handleRedirectTerms}> { data["footer_terms"] } </a>
                <a href="https://static.adcrws.com/docs/access_privacy_policy_20190604.html"> {data["footer_policy_2"]} </a>
            </div>
        </div>
        <div className="footer__access">
            { data["footer_copyright"] }
            <br />
            { data["footer_based"] }
        </div>
    </div>
  )
}
