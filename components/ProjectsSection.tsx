"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // retraso entre tarjetas
    },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-8">
      <div className="max-w-6xl text-left space-y-8 px-4">
        <h2 className="text-3xl font-semibold tracking-tight">Mis Proyectos</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tech={project.tech}
              gitLink={project.gitLink}
              demoLink={project.demoLink}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
