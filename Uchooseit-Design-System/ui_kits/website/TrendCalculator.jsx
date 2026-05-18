// TrendCalculator.jsx — Editable USA 2026 World Cup trip budget
// Lines come from the reference image. Users can edit amounts and remove items.
// Saves the membership pitch on the right pane.
const DEFAULT_LINES = [
  { id: "stay",   icon: "🏨", label: "Alojamiento",      sub: "Hotel 3★ promedio · $180 / noche · 15 noches", amount: 2700 },
  { id: "car",    icon: "🚗", label: "Renta de auto",    sub: "$60 / día · 15 días",                            amount: 900  },
  { id: "fuel",   icon: "⛽", label: "Gasolina + peajes", sub: "Incluye parqueaderos",                           amount: 250  },
  { id: "food",   icon: "🍔", label: "Comida (2 personas)", sub: "$100 / día · 15 días",                       amount: 1500 },
  { id: "match",  icon: "⚽", label: "Partido del Mundial", sub: "2 entradas (fase de grupos) · $600 c/u",     amount: 1200 },
  { id: "park",   icon: "🎢", label: "Parque temático",  sub: "2 días en Orlando · $180 / persona / día",      amount: 720  },
  { id: "tours",  icon: "📸", label: "Actividades + extras", sub: "Tours, compras, souvenirs",                 amount: 500  },
  { id: "flight", icon: "✈️", label: "Vuelos internacionales", sub: "Ida y vuelta LATAM · $700 / persona",    amount: 1400 },
];

const fmt = (n) => "$" + Math.round(n).toLocaleString("en-US");

const TrendCalculator = ({ trendLabel = "Mundial 2026", title = "Viaje a USA", flag = "🇺🇸" }) => {
  const [lines, setLines] = React.useState(DEFAULT_LINES);

  const setAmount = (id, val) => {
    const num = Number(val.replace(/[^0-9.]/g, "")) || 0;
    setLines(lines.map((l) => (l.id === id ? { ...l, amount: num } : l)));
  };
  const remove = (id) => setLines(lines.filter((l) => l.id !== id));
  const total = lines.reduce((s, l) => s + l.amount, 0);

  return (
    <div className="uc-calc-wrap">
      <div className="uc-calc">
        <div className="uc-calc__head">
          <div className="uc-calc__title">
            {title} <span style={{ verticalAlign: "middle" }}>{flag}</span>
            <br />
            <span className="red">{trendLabel}</span>
            <small>Presupuesto realista · editable</small>
          </div>
        </div>
        <div className="uc-calc__meta">
          <span>📍 Miami · Orlando</span>
          <span>📅 15 días</span>
          <span>👥 2 personas</span>
        </div>

        {lines.map((l) => (
          <div className="uc-line" key={l.id}>
            <div className="uc-line__icon" aria-hidden="true">{l.icon}</div>
            <div className="uc-line__label">
              <b>{l.label}</b>
              <span>{l.sub}</span>
            </div>
            <div className="uc-line__amount">
              <span style={{ display:"inline-flex", alignItems:"baseline" }}>
                <span style={{ marginRight: 2 }}>$</span>
                <input
                  inputMode="numeric"
                  value={l.amount.toLocaleString("en-US")}
                  onChange={(e) => setAmount(l.id, e.target.value)}
                  aria-label={`Monto de ${l.label}`}
                />
              </span>
              <small>USD</small>
            </div>
            <button className="uc-line__del" onClick={() => remove(l.id)} aria-label="quitar línea">✕</button>
          </div>
        ))}

        <button
          className="uc-calc__add"
          onClick={() =>
            setLines([...lines, { id: "new" + Date.now(), icon: "➕", label: "Nuevo gasto", sub: "Editable", amount: 100 }])
          }
        >
          + Agregar gasto
        </button>

        <div className="uc-calc__total">
          <b>Total estimado</b>
          <div style={{ textAlign: "right" }}>
            <span className="amt">{fmt(total)}</span>
            <small style={{ display: "block", color: "rgba(0,0,0,0.7)", fontWeight: 600 }}>
              USD · {lines.length} líneas
            </small>
          </div>
        </div>
      </div>

      <div className="uc-calc__pitch">
        <span className="uc-eyebrow">Tendencia · {trendLabel}</span>
        <h3>"Qué caro viajar al mundial…"</h3>
        <p>
          Los miembros premium acceden a precios que no aparecen en Google:
          hoteles, vuelos, parques y rentas con tarifas privadas para la
          comunidad hispana.
        </p>
        <div className="save">
          <b>~30%</b>
          <span>ahorro promedio en este viaje<br/>(≈ {fmt(total * 0.3)} USD)</span>
        </div>
        <CTAButton href="#capture">Quiero ahorrar en mi viaje</CTAButton>
      </div>
    </div>
  );
};

window.TrendCalculator = TrendCalculator;
