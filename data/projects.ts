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
    title: "Web Oficial Banda Música de Bonares",
    description: "Sitio web moderno y elegante para la banda de música de Bonares, donde obtener información sobre eventos, historia, miembros...",
    image: "/projects/webbmb.png",
    link: "/projects/webbmb",
    tech: ["React", "Next.js", "TailwindCSS", "HTML5", "TypeScript", "Responsive Design", "Framer Motion", "SEO", "Web Accessibility", "SSL", "Formspree", "ReCAPTCHA V3"],
    gitLink: "https://github.com/Nelius72/Banda-Musica-Bonares",
    demoLink: "https://bandademusicabonares.com",
    
  },  
  {
    id: 2,
    title: "Clínica Podológica",
    description: "Sitio web moderno para una clínica podológica, con gestión de servicios, contacto rápido, y diseño responsivo.",
    image: "/projects/clinica-podologia.png",
    link: "/projects/clinica-podologia",
    tech: ["Vue3", "Vite", "TailwindCSS", "HTML5", "TypeScript", "Responsive Design"],
    gitLink: "https://github.com/Nelius72/Clinica-Podologica",
    demoLink: "https://clinica-podologica-crb.vercel.app",
    
  },
    {
    id: 3,
    title: "The Hive Network",
    description: "Tracker de cine y series con conexión a API externa y diseño atractivo.",
    image: "/projects/the-hive-network.png",
    link: "/projects/the-hive-network",
    tech: ["React","TypeScript", "Axios", "TailwindCSS", "TMDB API", "API REST"],
    gitLink: "https://github.com/Nelius72/The-Hive",
    demoLink: "https://thehivetracker.vercel.app/",
  },
  {
    id: 4,
    title: "Portfolio Personal",
    description: "Mi portfolio construido con React y Next.js, responsive y elegante.",
    image: "/projects/portfolio.png",
    link: "/projects/portfolio",
    tech: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    gitLink: "https://github.com/Nelius72/Portfolio-Personal",
    demoLink: "https://portfolio-personal-crb-psi-flame.vercel.app/",
  },
   {
    id: 5,
    title: "CheckPoint",
    description: "En fase de desarrollo. Tracker de videojuegos con funcionalidades de gestión de colecciones, estadísticas y recomendaciones personalizadas.",
    image: "/projects/checkpoint.png",
    link: "/projects/checkpoint",
    tech: ["React", "Next.js", "TailwindCSS", "Supabase", "TypeScript", "Api externas"],
    gitLink: "https://github.com/sirlencio/checkpoint",
    
  },
  
  {
    id: 6,
    title: "Symphonic Solutions",
    description: "Gestión musical profesional con interfaz intuitiva y moderna.",
    image: "/projects/symphonic.jpg",
    link: "/projects/symphonic",
    tech: ["Javascript", "PHP", "Laravel", "Blade", "Bootstrap", "Composer", "Artisan"],
    gitLink: "https://github.com/Nelius72/Symphonic-Solutions",
   
  },
  
  
  
  
];
