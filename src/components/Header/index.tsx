export default function Header() {
  return (
    <header className="flex items-center justify-between w-screen h-12 p-3 bg-teal-100">
      <div className="flex items-center space-x-1">
        <img className="w-8" src="/pokeball.png" alt="pokeball" />
        <h1>pokedex</h1>
      </div>

      <div className="flex items-center space-x-4 text-xs xs:text-base">
        <a>Home</a>
        <a>Favoritos</a>
      </div>
    </header>
  );
}
