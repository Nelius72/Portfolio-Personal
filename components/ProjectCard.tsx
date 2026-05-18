'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  gitLink?: string;
  demoLink?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  gitLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.03 }}
      className="group flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition h-full"
    >
      {/* Imagen (NO clicable) */}
      <div className="relative w-full h-40 sm:h-48 shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 bg-white dark:bg-gray-800 flex flex-col justify-between flex-1">
        <div className="space-y-2">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {description}
          </p>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full dark:bg-blue-800 dark:text-blue-100"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Botones (ÚNICO punto interactivo) */}
        <div className="flex gap-3 pt-4">
          {gitLink && (
            <a
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-3 py-2 text-sm font-medium text-white bg-gray-800 dark:bg-gray-600 rounded-md hover:bg-gray-700 dark:hover:bg-gray-500 transition"
            >
              Ver código
            </a>
          )}

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 transition"
            >
              Ver demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
