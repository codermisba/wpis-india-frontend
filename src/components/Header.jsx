export default function Header() {
  return (
    <header className="bg-[#c2185b] text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold tracking-wide">
          🇮🇳 India Women Protection Index
        </h1>

        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-pink-200">Overview</a>
          <a href="#" className="hover:text-pink-200">Map</a>
          <a href="#" className="hover:text-pink-200">Insights</a>
          <a href="#" className="hover:text-pink-200">Trends</a>
        </nav>
      </div>
    </header>
  );
}
