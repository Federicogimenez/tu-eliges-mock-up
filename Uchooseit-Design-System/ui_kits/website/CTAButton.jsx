// CTAButton.jsx — primary blue pill button
const CTAButton = ({ children, variant = "primary", href, onClick, style }) => {
  const cls =
    "uc-cta" +
    (variant === "pink" ? " uc-cta--pink" : "") +
    (variant === "ghost" ? " uc-cta--ghost" : "");
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick} style={style}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick} style={style}>
      {children}
    </button>
  );
};
window.CTAButton = CTAButton;
