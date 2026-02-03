import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Bienvenido a mi Portfolio
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="#about" className="hover:text-gray-600 transition">
            Sobre mí
          </Link>
          <Link href="#projects" className="hover:text-gray-600 transition">
            Proyectos
          </Link>
          <Link href="#contact" className="hover:text-gray-600 transition">
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
}
