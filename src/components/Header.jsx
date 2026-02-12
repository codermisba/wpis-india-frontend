export default function Header() {
  return (
    <header className="hs-header">
      <div className="hs-header-inner">

        {/* BRAND */}
        <div className="hs-brand">
          <h1>HerSafeMap</h1>
          <p>Visualizing Data, Empowering Women</p>
        </div>

        {/* NAV */}
        <nav className="hs-nav">
          <a href="#">Login</a>
          <a href="#">Yearly Trends</a>
          <a href="#">Statewise Trend</a>
          <a href="#">Blogs</a>
          <a href="#">Contact Us</a>
          <a href="#">More Info</a>
        </nav>

      </div>
    </header>
  );
}
