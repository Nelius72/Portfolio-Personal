'use client';
import Link from "next/link";
import Image from "next/image";
import perfil from "@/public/Perfil.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        
        {/* Texto animado */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Fullstack Junior Developer 
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Hola, soy <strong>Cornelio Romero</strong>, desarrollador web especializado en
            React y Next.js. Me gusta crear productos bien pensados, accesibles y
            con una experiencia de usuario cuidada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 transition"
              >
                Ver proyectos
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-gray-100 transition"
              >
                Contactar
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link
                href="https://drive.google.com/file/d/1o5wnscmZusfK2WaMM6QK_6m7YAcQpTvs/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-slate-600 px-6 py-3 text-sm font-medium text-white hover:bg-slate-500 transition"
              >
                Ver CV
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Foto animada */}
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={perfil}
            alt="Cornelio Romero"
            className="w-50 h-60  object-cover  shadow-xl border-4 "
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
