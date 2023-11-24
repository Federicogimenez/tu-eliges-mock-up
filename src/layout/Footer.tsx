export default function Footer() {
  return (
    <div className="footer">
        <div className="footer__data">
            <div className="footer__data--contact">
                <strong>Contacto:</strong>
                <span>
                    <img src="/img/svg/phone.svg" alt="" />
                    (123) 456-7890
                </span>
                <span>
                    <img src="/img/svg/mail.svg" alt="" />
                    hello@reallygreatsite.com
                </span>
            </div>
            <div className="footer__data--img">
                <img src="/img/png/logo-tu-eliges.png" alt="logo" />
            </div>
            <div className="footer__data--comunity">
                <strong>Comunidad:</strong>
                <span>
                    <a href="#">
                        <img src="/img/svg/ig.svg" alt="instagram" />
                    </a>
                    <a href="#">
                        <img src="/img/svg/facebook.svg" alt="facebook" />
                    </a>
                    <a href="#">
                        <img src="/img/svg/twitter.svg" alt="twitter" />
                    </a>
                </span>
            </div>
        </div>
        <div className="footer__access">
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">©2023, Access Development.</a>
        </div>
    </div>
  )
}
