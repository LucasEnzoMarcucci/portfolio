import Image from "next/image"
import Link from "next/link"

export const Certifications = ({ certifications }) => {
  return (
    <section id="certifications" className="py-12 md:py-24 lg:py-28">
      {certifications.map((certification) => (
        <div key={certification.title} className="flex flex-col gap-20 py-12 first:pt-0 last:pb-0 sm:flex-row">
          {/* <Image alt={certification.title} src={certification.image} className="object-contain" width={300} /> */}
          <div className="max-w-xl flex-auto">
            <Link href={certification.link}>
              <h3 className="text-lg/8 font-semibold tracking-tight text-white">{certification.title}</h3>
            </Link>
            <p className="text-base/5 font-semibold text-[#0081FB]">{certification.date}</p>
            <p className="my-4 text-base/7 text-white/80">{certification.description}</p>
            <div className="flex flex-wrap gap-2">
              {certification.tags.map((tag) => (
                <span
                  key={`${certification.title}${tag}`}
                  className="inline-flex items-center rounded-md  px-2 py-1 text-xs bg-neutral-900/70 text-white font-medium ring-1 ring-inset ring-gray-500/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}