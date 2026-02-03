export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[]; 
  gitLink?: string;
  demoLink?: string;
}

export const projects: Project[] = [
    {
    id: 1,
    title: "CheckPoint",
    description: "En fase de desarrollo. Tracker de videojuegos con funcionalidades de gestión de colecciones, estadísticas y recomendaciones personalizadas.",
    image: "/projects/checkpoint.png",
    link: "/projects/checkpoint",
    tech: ["React", "Next.js", "TailwindCSS", "Supabase", "TypeScript", "Api externas"],
    gitLink: "https://github.com/sirlencio/checkpoint",
    
  },
    {
    id: 2,
    title: "The Hive Network",
    description: "Tracker de cine y series con conexión a API externa y diseño atractivo.",
    image: "/projects/the-hive-network.png",
    link: "/projects/the-hive-network",
    tech: ["React","JavaScript", "HTML", "CSS", "API externas"],
    gitLink: "https://github.com/Nelius72/The-Hive-Network",
    demoLink: "https://the-hive-network.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio Personal",
    description: "Mi portfolio construido con React y Next.js, responsive y elegante.",
    image: "/projects/portfolio.png",
    link: "/projects/portfolio",
    tech: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
   
  },
  {
    id: 4,
    title: "Symphonic Solutions",
    description: "Gestión musical profesional con interfaz intuitiva y moderna.",
    image: "/projects/symphonic.jpg",
    link: "/projects/symphonic",
    tech: ["Javascript", "PHP", "Laravel", "Blade", "Bootstrap", "Composer", "Artisan"],
    gitLink: "https://github.com/Nelius72/Symphonic-Solutions",
   
  },
  
  
  
  
];
