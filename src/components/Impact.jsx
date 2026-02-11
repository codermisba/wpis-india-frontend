export default function Impact() {
  return (
    <section className="impact">
      <div className="impact-grid">
        <ImpactCard label="Years of Data" value="20+" />
        <ImpactCard label="States & UTs" value="36" />
        <ImpactCard label="Crime Records" value="8M+" />
        <ImpactCard label="Analytics Indicators" value="100+" />
      </div>
    </section>
  );
}

function ImpactCard({ label, value }) {
  return (
    <div className="impact-card">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}
