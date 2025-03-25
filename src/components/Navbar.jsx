export default function Navbar() {
  return (
    <nav className="w-full p-4 border-b border-black flex justify-between items-center">
      <h1 className="text-2xl font-bold">Osiel Rubio</h1>
      <div className="space-x-4">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
    </nav>
  );
}
