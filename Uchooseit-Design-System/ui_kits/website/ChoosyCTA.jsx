// ChoosyCTA.jsx — final upsell with Choosy the fox + email capture
const ChoosyCTA = () => {
  return (
    <section className="uc-choosy" id="choosy">
      <div className="uc-choosy__copy">
        <h2>Muchos viajeros no saben<br/>
          <span style={{ color: "var(--uc-fg-dim)", textTransform: "none", fontWeight: 500, fontSize: "0.7em" }}>
            que los mejores precios en Estados Unidos no son públicos.
          </span>
        </h2>
        <p>
          Unite gratis para enterarte de los tips de ahorro que tenemos para vos y
          recibí una invitación especial a convertirte en miembro premium.
        </p>
        <div style={{ display:"flex", gap: 14, flexWrap: "wrap", alignItems:"center" }}>
          <CTAButton href="#capture">Unirme</CTAButton>
          <span style={{ color: "var(--uc-fg-mute)", fontSize: 13 }}>
            Sin tarjeta · cancelás cuando quieras.
          </span>
        </div>
      </div>
      <div className="uc-choosy__mascot">
        <div className="uc-choosy__placeholder">
          <span>Mascota</span>
          <b>Choosy</b>
          <span style={{ color: "rgba(255,255,255,0.55)", textTransform: "none", letterSpacing: "normal" }}>
            (PNG pendiente — ver §8 del README)
          </span>
        </div>
      </div>
    </section>
  );
};
window.ChoosyCTA = ChoosyCTA;
