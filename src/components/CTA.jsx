import { useNavigate } from "react-router-dom";

export default function CTA() {
  const nav = useNavigate();

  return (
    <section className="cta">
      <h2>Join the Movement for a Safer India</h2>
      <p>Transforming awareness into action using data and intelligence.</p>

      <button className="primary-btn" onClick={() => nav("/dashboard")}>
        Analyze Now
      </button>
    </section>
  );
}
