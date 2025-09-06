export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between">
      <h1 className="font-bold text-xl">DigitalReon</h1>
      <div className="flex gap-4">
        <a href="/pubg">PUBG</a>
        <a href="/valorant">Valorant</a>
        <a href="/steam">Steam</a>
      </div>
    </nav>
  );
}
