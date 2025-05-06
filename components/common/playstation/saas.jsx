import Image from "next/image"
import Versatyle from "@/public/images/Versatyle.png"
import { projects } from "@/data/data"
export const Saas = () => {
  return (
    <section id="Saas" className="py-12 md:py-24 lg:py-28">
      <div className="flex flex-col gap-20 py-12 first:pt-0 last:pb-0 sm:flex-row">
        <Image alt="Versatyle" src={Versatyle} className="object-contain" width={300} />
        <div className="max-w-xl flex-auto">
          <h3 className="text-lg/8 font-semibold tracking-tight text-white">Versatyle</h3>
          <p className="my-4 text-base/7 text-white/80">Je travaille activement sur un Saas capable de gérer les boîte mail Google automatiquement. Ce service payant peut trier les mails dans des catégories personnalisées et sera disponible dans quelques semaines.</p>
          <div className="flex flex-wrap gap-2">
            {projects[0].tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md  px-2 py-1 text-xs bg-neutral-900/70 text-white font-medium ring-1 ring-inset ring-gray-500/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}