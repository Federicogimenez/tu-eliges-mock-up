// EmailCapture.jsx — glass pill with email input + UNIRME
const EmailCapture = ({ onSubmit, cta = "Unirme", placeholder = "Tu correo" }) => {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
    if (onSubmit) onSubmit(email);
  };

  if (done) {
    return (
      <div className="uc-capture" style={{ justifyContent: "center", padding: "16px 24px" }}>
        <span style={{ color: "#fff", fontWeight: 600 }}>
          ¡Listo! Revisa tu correo · te enviamos tu cupón 30% OFF.
        </span>
      </div>
    );
  }
  return (
    <form className="uc-capture" onSubmit={submit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
      />
      <button type="submit">{cta}</button>
    </form>
  );
};
window.EmailCapture = EmailCapture;
