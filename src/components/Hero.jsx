import { useNavigate } from "react-router-dom";

export default function Hero() {
  const nav = useNavigate();

  return (
    <section className="hero-section">
      <h1>
        Empowering <span>Women Safety</span> in India using
        <br /> Data, AI & Policy Intelligence
      </h1>

      <p>
        NyayaSakhi is a national analytical platform that visualizes, analyzes
        and interprets crimes against women across Indian states to enable
        evidence-based policymaking, research, and social impact.
      </p>

      <div className="hero-actions">
        <button className="primary-btn" onClick={() => nav("/dashboard")}>
          Explore Dashboard
        </button>

        <button className="secondary-btn">
          Our Mission
        </button>
      </div>
    </section>
  );
}
