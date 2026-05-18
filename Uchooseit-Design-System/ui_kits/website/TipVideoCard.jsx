// TipVideoCard.jsx — single video-tip avatar with name + tag
// Uses an inline SVG portrait silhouette since real video stills aren't
// available yet. Once member photos arrive, swap the SVG for an <img>.
const TipVideoCard = ({ name, title, tag, hue = 200, onClick }) => {
  const bg = `linear-gradient(135deg, hsl(${hue} 50% 60%) 0%, hsl(${hue} 60% 30%) 100%)`;
  const initial = (name || "?").charAt(0).toUpperCase();
  return (
    <div className="uc-tip" onClick={onClick} role="button" tabIndex={0}>
      <div className="uc-tip__avatar" style={{ background: bg }}>
        {/* faux portrait — shoulders + head circle so a stranger reads as 'person' */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id={"sk" + hue} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.0)"/>
              <stop offset="100%" stopColor="rgba(0,0,0,0.4)"/>
            </linearGradient>
          </defs>
          {/* shoulders */}
          <ellipse cx="50" cy="105" rx="55" ry="40" fill="rgba(0,0,0,0.45)" />
          {/* head */}
          <circle cx="50" cy="48" r="20" fill="rgba(255,255,255,0.15)" />
          {/* initial */}
          <text x="50" y="55" textAnchor="middle" fontFamily="Montserrat" fontSize="22" fontWeight="700" fill="#fff" opacity="0.85">{initial}</text>
          <rect x="0" y="0" width="100" height="100" fill={`url(#sk${hue})`} />
        </svg>
        <div className="play" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <span className="uc-tip__name">{name}</span>
      <span className="uc-tip__title">{title}</span>
      {tag && <span className="uc-tip__pill">{tag}</span>}
    </div>
  );
};
window.TipVideoCard = TipVideoCard;
