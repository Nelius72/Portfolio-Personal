"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { IconType } from "react-icons";

const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Angular",
  "PHP",
  "Laravel",
  "SQL",
  "NoSQL",
];

const skillData: Record<string, { icon: IconType; bg: string; text: string }> =
  {
    React: { icon: SiReact, bg: "bg-blue-500", text: "text-white" },
    "Next.js": { icon: SiNextdotjs, bg: "bg-black", text: "text-white" },
    "Tailwind CSS": {
      icon: SiTailwindcss,
      bg: "bg-teal-500",
      text: "text-white",
    },
    TypeScript: { icon: SiTypescript, bg: "bg-blue-600", text: "text-white" },
    JavaScript: { icon: SiJavascript, bg: "bg-yellow-500", text: "text-black" },
    Angular: { icon: SiAngular, bg: "bg-red-500", text: "text-white" },
    PHP: { icon: SiPhp, bg: "bg-purple-500", text: "text-white" },
    Laravel: { icon: SiLaravel, bg: "bg-red-600", text: "text-white" },
    SQL: { icon: SiMysql, bg: "bg-orange-500", text: "text-white" },
    NoSQL: { icon: SiMongodb, bg: "bg-green-500", text: "text-white" },
  };

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // cada badge aparece después de la anterior
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-8">
      <div className="max-w-6xl mx-auto text-left space-y-6 px-4">
        <h2 className="text-3xl font-semibold tracking-tight">Sobre mí</h2>
        <p className="text-gray-600 max-w-2xl">
          Soy un entusiasta desarrollador web Junior con una base sólida en front/back y experiencia
          trabajando con <strong>React</strong>, <strong>Next.js</strong> así como otras
          tecnologías modernas del ecosistema JavaScript.
        </p>
        <p className="text-gray-600 max-w-2xl">
          Vengo de entornos profesionales, en los cuales aprendí a trabajar con responsabilidad,
          atención al detalle y orientación a resultados.
        </p>
        <p className="text-gray-600 max-w-2xl">
          Me gusta crear interfaces claras, accesibles y bien estructuradas,
          cuidando tanto el código como la experiencia de usuario. Soy un
          profesional en constante formación y aprendizaje, siempre buscando
          nuevas oportunidades para mejorar y actualizar mis conocimientos.
        </p>
        <p className="text-gray-600 max-w-2xl">
          Entre mis principales habilidades técnicas se encuentran:
        </p>

        {/* Skills */}
        <motion.div
          className="flex flex-wrap justify-start gap-4 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill) => {
            const { icon: Icon, bg, text } = skillData[skill];
            return (
              <motion.div
                key={skill}
                variants={badgeVariants}
                whileHover={{ scale: 1.1 }}
                className={`flex items-center gap-2 px-4 py-2 ${bg} ${text} rounded-full font-medium cursor-default transition`}
              >
                <Icon size={20} />
                {skill}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
