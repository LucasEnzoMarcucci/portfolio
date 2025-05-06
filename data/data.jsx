import { User, Layers, Medal, Code } from "lucide-react"
import Versatyle from "@/public/images/NextJs2.webp"
import UnrealEngine from "@/public/images/UnrealEngine.avif"
import Restock from "@/public/images/Restock.png"
import Meta from "@/public/Meta.svg"

export const cards = [
  {
    title: "Lucas Marcucci",
    slug: "AboutMe",
    isProject: false,
    icon: <User size={32} />,
    background: "bg-[url(/backgrounds/Playstation5.png)]"
  },
  {
    title: "Stack technique",
    slug: "Technologies",
    isProject: false,
    icon: <Layers size={32} />,
    background: "bg-[url(/backgrounds/TechStackBackground.png)]"
  },
  {
    title: "Certifications",
    slug: "Certifications",
    isProject: false,
    icon: <Medal size={32} />,
    background: "bg-[url(/backgrounds/CertificationsBackground.png)]"
  },
  {
    title: "Saas de gestion de boîte mail Google",
    slug: "Saas",
    isProject: true,
    image: Versatyle,
    background: "bg-[url(/backgrounds/Playstation5.png)]"
  },
  {
    title: "Développement d'un jeu vidéo indépendant",
    slug: "UnrealEngine",
    isProject: true,
    image: Restock,
    background: "bg-[url(/backgrounds/RestockBackground2.png)]"
  },
  // {
  //   title: "Code source",
  //   slug: "SourceCode",
  //   isProject: false,
  //   icon: <Code size={32} />,
  //   background: "bg-[url(/backgrounds/SourceCodeBackground.png)]"
  // }
]

export const technologies = [
  {
    category: "Langages de programmation",
    skills: ["React", "Typescript", "Javascript", "Php", "Java", "Kotlin"],
  },
  {
    category: "Frameworks",
    skills: ["Nodejs", "Nextjs", "Laravel"],
  },
  {
    category: "Gestion de données",
    skills: ["PostgreSQL", "Prisma", "Supabase"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "Git", "Jenkins"],
  },
  {
    category: "Sécurité",
    skills: ["Jwt", "Auth0", "Zod"]
  },
  {
    category: "Outils et autres",
    skills: ["Linux", "Jira", "Postman", "Swagger", "Jest"],
  }
]

export const certifications = [
  {
    title: "Meta Front-End Developer Professional Certificate",
    date: "Janvier 2025",
    description: "Ce certificat valide mes compétences en développement front-end, il est délivré par Meta et Coursera. Il couvre notamment des notions de base et avancées de React",
    image: Meta,
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    tags: ["React", "Javascript", "Git", "Jest", "Figma"],
  }
]

export const projects = [
  {
    title: "Développement d'un Saas de gestion de boîte mail Google",
    description: "Je travaille activement sur un Saas capable de gérer les boîte mail Google automatiquement. Ce service payant peut trier les mails dans des catégories personnalisées et sera disponible dans quelques semaines.",
    image: Versatyle,
    background: "bg-[url(/VersatyleBackground.png)]",
    link: "",
    tags: ["Next.js", "Typescript", "Supabase", "Gmail API", "OpenAI API", "Shadcn", "Zod", "Git", "Prisma", "Lemon Squeezy", "Vercel"]
  },
  {
    title: "Développement d'un jeu vidéo indépendant",
    description: "Je travaille avec un partenaire sur un jeu multijoueur sur pc, nous avons commencé le développement en novembre 2024 et il sortira aux grands publics fin 2025.",
    image: UnrealEngine,
    background: "bg-[url(/UnrealEngineBackground.avif)]",
    link: "https://www.unrealengine.com/fr",
    tags: ["Unreal Engine 5", "Blender", "Blueprint"],
    showLink: false
  },
  // {
  //   title: "Développement d'une application de prise de notes open source",
  //   description: "Je développe une application de prise de notes focalisée sur l'expérience utilisateur. Elle sert avant tout à mettre en place un vrai projet en suivant les bonnes pratiques de développement (DevOps).",
  //   image: NoteTaker,
  //   background: "bg-[url(/NoteTaker.jpg)]",
  //   link: "https://github.com/LucasEnzoMarcucci/notetake-app",
  //   tags: ["Next.js", "Typescript", "Git", "Jest", "Docker", "PostgreSQL", "Shadcn", "Vercel"],
  //   showLink: true
  // }
]