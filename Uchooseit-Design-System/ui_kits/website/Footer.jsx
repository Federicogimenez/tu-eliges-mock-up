// Footer.jsx — slimmed-down footer matching the source repo structure
const Footer = () => {
  return (
    <footer className="uc-footer">
      <div className="uc-footer__grid">
        <div className="uc-footer__col">
          <Wordmark size={24} />
          <p style={{ color: "var(--uc-fg-dim)", fontSize: 14, marginTop: 16, lineHeight: 1.5 }}>
            La red privada de descuentos más grande de U.S.A. para la comunidad hispana.
            Creada por hispanos para hispanos.
          </p>
          <div className="uc-footer__social">
            <a href="#"><img src="../../assets/icons/facebook.svg" alt="Facebook"/></a>
            <a href="#"><img src="../../assets/icons/instagram.svg" alt="Instagram"/></a>
            <a href="#"><img src="../../assets/icons/linkedin.svg" alt="LinkedIn"/></a>
            <a href="#"><img src="../../assets/icons/youtube.svg" alt="YouTube"/></a>
          </div>
        </div>
        <div className="uc-footer__col">
          <strong>Contacto</strong>
          <a href="mailto:info@uchooseit.us">info@uchooseit.us</a>
          <a href="https://wa.me/17869393494">+1 (786) 939 3494</a>
        </div>
        <div className="uc-footer__col">
          <strong>Soporte</strong>
          <a href="mailto:support@uchooseit.us">support@uchooseit.us</a>
          <a href="#faq">F.A.Q</a>
          <a href="#">Administrar membresía</a>
        </div>
        <div className="uc-footer__col">
          <strong>Legal</strong>
          <a href="#">Política de privacidad</a>
          <a href="#">Términos y condiciones</a>
        </div>
      </div>
      <div className="uc-footer__base">
        <span>© 2026 uchooseit.us LLC. Todos los derechos reservados.</span>
        <span>Basados en Lake Mary, FL · U.S.A</span>
      </div>
    </footer>
  );
};
window.Footer = Footer;
