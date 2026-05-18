// CommunityCarousel.jsx — horizontal carousel of TipVideoCards
const CommunityCarousel = ({ members = [] }) => {
  const rowRef = React.useRef(null);
  const scrollBy = (dir) => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 260, behavior: "smooth" });
  };
  return (
    <div className="uc-carousel">
      <button className="uc-carousel__nav l" onClick={() => scrollBy(-1)} aria-label="anterior">‹</button>
      <div
        className="uc-carousel__row"
        ref={rowRef}
        style={{ overflowX: "auto", scrollbarWidth: "none" }}
      >
        {members.map((m, i) => (
          <TipVideoCard key={i} {...m} />
        ))}
      </div>
      <button className="uc-carousel__nav r" onClick={() => scrollBy(1)} aria-label="siguiente">›</button>
    </div>
  );
};
window.CommunityCarousel = CommunityCarousel;
