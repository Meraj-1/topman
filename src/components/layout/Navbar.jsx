export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-luxury text-gold">
          TOPMAN DESIGNER STUDIO
        </h1>

        <ul className="hidden md:flex gap-8 text-sm uppercase">
          <li className="hover:text-gold cursor-pointer">Home</li>
          <li className="hover:text-gold cursor-pointer">Collection</li>
          <li className="hover:text-gold cursor-pointer">About</li>
          <li className="hover:text-gold cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
