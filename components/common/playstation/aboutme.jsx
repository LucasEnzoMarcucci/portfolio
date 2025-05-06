import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export const AboutMe = () => {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-28">
      <div className="flex flex-col justify-center space-y-8 text-left">
        <div className="space-y-2">
          <h1 className="text-white font-bold tracking-tighter text-3xl mb-6">Développeur Full Stack</h1>
          <p className="w-full lg:max-w-[800px] text-white/80 text-base/7 mb-6 ">
            Je m'appelle Lucas Marcucci, je suis un développeur Full Stack basé dans le sud de la France.
            J'aime développer des applications web, mobiles ou autres en utilisant des technologies récentes et performantes.
            J'apprends constamment de nouveaux concepts et j'améliore mes compétences existantes pour prendre part à des projets.
            Je recherche une offre pour le poste d'ingénieur en développement Frontend, Backend ou Full Stack. N'hésitez pas à me contacter si je correspond à vos critères.
          </p>
        </div>

        <div className="space-x-4">
          <Link href="https://github.com/LucasEnzoMarcucci" target="_blank">
            <Button className="bg-gradient-to-br from-neutral-900/70 to-white/5 border-none" size="icon">
              <Github className="h-5 w-5 text-white" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/lucas-marcucci/" target="_blank">
            <Button className="bg-gradient-to-br from-neutral-900/70 to-white/5 border-none" size="icon">
              <Linkedin className="h-5 w-5 text-white" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <a href="mailto:lucasenzomrc@gmail.com">
            <Button className="bg-gradient-to-br from-neutral-900/70 to-white/5 border-none" size="icon">
              <Mail className="h-5 w-5 text-white" />
              <span className="sr-only">Email</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}