import { useNavigate } from "react-router";
import { useLanguageContext } from "../hooks/UseLanguageContext"

export default function Footer() {

    const data = useLanguageContext()

    const navigate = useNavigate();

    function handleRedirectHome (){
        navigate("/");
        window.scrollTo(0, 0)
    }
    function handleRedirectLegal (){
        navigate("/policy");
        window.scrollTo(0, 0)
    }
    function handleRedirectTerms (){
        navigate("/terms-and-conditions");
        window.scrollTo(0, 0)
    }
    function handleRedirectFaq (){
        navigate("/faqs");
        window.scrollTo(0, 0)
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
                </span>
            </div>
            <div className="footer__data--support">
                <strong> { data["footer_support"] } :</strong>
                <a href="mailto:support@tueliges.us" target="_blank">
                    <img src="/img/svg/mail.svg" alt="" />
                    support@tueliges.us
                </a>
                <a onClick={handleRedirectFaq}>F.A.Q</a>
                <a target="_blank" href="https://tueliges-us.recurly.com/account/create_account">
                    {data.footer_membership}
                </a>
            </div>
            <div className="footer__data--legal">
                <strong> { data["footer_legal"] } </strong>
                <a target="_blank" onClick={handleRedirectLegal}> { data["footer_policy"] } </a>
                <a target="_blank" onClick={handleRedirectTerms}> { data["footer_terms"] } </a>
                <a target="_blank" href="https://static.adcrws.com/docs/access_privacy_policy_20190604.html"> {data["footer_policy_2"]} </a>
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
