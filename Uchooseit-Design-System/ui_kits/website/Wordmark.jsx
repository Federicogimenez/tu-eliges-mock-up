// Wordmark.jsx — uchooseit logo lockup (CSS-only until SVG ships)
const Wordmark = ({ size = 32, className = "" }) => {
  return (
    <span
      className={"uc-wm " + className}
      style={{ fontSize: size + "px" }}
      aria-label="uchooseit.us"
    >
      <span className="uc-wm__name">uchooseit</span>
      <span className="uc-wm__dot">.us</span>
    </span>
  );
};

window.Wordmark = Wordmark;
