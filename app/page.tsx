import Link from "next/link"
import Navbar from "@/components/common/Navbar"
import Techstacks from "@/components/common/Techstacks"
import Certifications from "@/components/common/Certifications"
import ProjectCards from "@/components/common/ProjectCards"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Meta from "@/public/Meta.svg"
import UnrealEngine from "@/public/UnrealEngine.avif"
import NoteTaker from "@/public/NoteTaker.jpg"

const technologies = [
  {
    category: "Langages de programmation",
    skills: ["React", "Javascript", "TypeScript", "Php", "Java", "Kotlin"],
  },
  {
    category: "Frameworks",
    skills: ["Nodejs", "Nextjs", "Laravel"],
  },
  {
    category: "Gestion de données",
    skills: ["MySQL", "MongoDB", "SQLite", "Sequelize", "Prisma"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "CI/CD", "Git", "Jenkins"],
  },
  {
    category: "Outils et autres",
    skills: ["Agile", "Linux", "Jira", "Postman", "Swagger", "Jest"],
  }
]

const certifications = [
  {
    title: "Meta Front-End Developer Professional Certificate",
    description: "Ce certificat valide mes compétences en développement front-end, il est délivré par Meta et Coursera. Il couvre notamment des notions de base et avancées de React",
    image: Meta,
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    tags: ["React", "Javascript", "Git", "Jest", "Figma"],
  }
]

const projects = [
  {
    title: "Développement d'un jeu vidéo indépendant",
    description: "Je travail avec un ami sur un jeu multijoueur sur pc, nous avons commencé le développement en novembre 2024 et il sortira aux grands publics fin 2025.",
    image: UnrealEngine,
    link: "https://www.unrealengine.com/fr",
    tags: ["Unreal Engine 5", "Blender", "Blueprint"],
    showLink: false
  },
  {
    title: "Développement d'une application de prise de notes open source",
    description: "Je développe une application de prise de notes focalisée sur l'expérience utilisateur. Elle sert avant tout à mettre en place un vrai projet en suivant les bonnes pratiques de développement (DevOps).",
    image: NoteTaker,
    link: "https://github.com/LucasEnzoMarcucci/notetake-app",
    tags: ["Next.js", "Typescript", "Git", "Jest", "Docker", "PostgreSQL", "Shadcn", "Vercel"],
    showLink: true
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container px-8 md:px-12 mx-auto">
        <section id="about" className="py-12 md:py-24 lg:py-28">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6">Développeur Full Stack</h1>
              <p className="max-w-[800px] text-gray-500 md:text-xl mb-6 text-justify">
                Je m'appelle Lucas Marcucci, je suis un développeur Full Stack basé dans le sud de la France.
                J'aime développer des applications web, mobiles ou autres en utilisant des technologies récentes et performantes.
                J'apprends constamment de nouveaux concepts et j'améliore mes compétences existantes pour prendre part à des projets.
                Je recherche une offre pour le poste d'ingénieur en développement Frontend, Backend ou Full Stack. N'hésitez pas à me contacter si je correspond à vos critères.
              </p>
            </div>

            <div className="space-x-4">
              <Link href="https://github.com/LucasEnzoMarcucci" target="_blank">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/lucas-marcucci/" target="_blank">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <a href="mailto:lucasenzomrc@gmail.com">
                <Button variant="outline" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section id="techstack" className="py-12 md:py-24 lg:py-28">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-20 text-center">Stack Technique</h2>
          <Techstacks technologies={technologies} />
        </section>

        <section id="certifications" className="py-12 md:py-24 lg:py-28">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Certifications</h2>
          <Certifications certifications={certifications} />
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-28">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-20 text-center">Projets en cours...</h2>
          <ProjectCards projects={projects} />
        </section>
      </main>

      <footer className="border-t py-6 w-full text-center">
        <p className="text-xs text-gray-500">© 2025 <b>·</b> Lucas Marcucci <b>·</b> All rights reserved.</p>
      </footer>
    </div>
  )
}