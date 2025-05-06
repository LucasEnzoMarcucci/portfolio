import { projects } from "@/data/data"

export const Restock = () => {
  return (
    <section id="restock" className="py-12 md:py-24 lg:py-28">
      <div className="flex flex-col justify-center space-y-8 text-left bg-radial-[at_25%_25%] from-zinc-900 to-neutral-800 to-75% rounded-lg p-4">
        <h1 className="text-white font-bold tracking-tighter text-3xl mb-6">Restock</h1>
        <p className="max-w-[800px] text-white text-base/7 mb-6">
          Je travaille également avec un partenaire sur un jeu multijoueur sur pc, nous avons commencé le développement en novembre 2024 et il sortira aux grands publics fin 2025.
        </p>
        <div className="flex flex-row gap-4">
          {projects[1].tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md  px-2 py-1 text-xs bg-neutral-900/70 text-white font-medium ring-1 ring-inset ring-gray-500/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}