// NavBar.jsx — sticky top nav with anchor links + lang switch
const NavBar = ({ active = "home" }) => {
  const links = [
    { id: "home", label: "Inicio", href: "#hero" },
    { id: "comunidad", label: "Comunidad", href: "#community" },
    { id: "calculadora", label: "Tendencia", href: "#calc" },
    { id: "premium", label: "Premium", href: "#choosy" },
    { id: "faq", label: "FAQ", href: "#faq" },
  ];
  const [lang, setLang] = React.useState("ES");
  return (
    <nav className="uc-nav">
      <Wordmark size={26} />
      <div className="uc-nav__menu">
        {links.map((l) => (
          <a key={l.id} href={l.href} style={{ color: active === l.id ? "#fff" : undefined }}>
            {l.label}
          </a>
        ))}
        <button
          className="uc-nav__lang"
          onClick={() => setLang(lang === "ES" ? "EN" : "ES")}
        >
          {lang}
        </button>
      </div>
    </nav>
  );
};
window.NavBar = NavBar;
