export default function Features() {
  const features = [
    {
      title: "Advanced Crime Analytics",
      desc: "Multi-dimensional state-wise analysis across 20+ years of NCRB datasets."
    },
    {
      title: "AI-driven Insights",
      desc: "Automated trend detection and crime pattern interpretation using ML models."
    },
    {
      title: "Geo-spatial Visualization",
      desc: "Interactive map-based analytics for intuitive understanding."
    },
    {
      title: "Policy Intelligence",
      desc: "Evidence-based indicators for governance & social reform."
    }
  ];

  return (
    <section className="features">
      <h2>What NyayaSakhi Delivers</h2>

      <div className="feature-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
