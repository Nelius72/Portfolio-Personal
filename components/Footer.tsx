'use client';

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Contacto */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-lg font-semibold">Contacto:</h3>
          <a href="mailto:cornelioromeroborrero@gmail.com" className="hover:underline">
            cornelioromeroborrero@gmail.com
          </a>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-4 text-2xl">
          <a href="https://github.com/Nelius72" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/cornelio-romero-borrero-098055a5/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaLinkedin />
          </a>
          <a href="https://x.com/Nelius72" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaTwitter />
          </a>
        </div>

        {/* Derechos */}
        <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Cornelio Romero. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
