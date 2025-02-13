import Image from "next/image"
import Link from "next/link"

export default function ProjectCard({ certifications }) {
  return (
    <>
      {certifications.map((certification) => (
        <div key={certification.title} className="flex flex-col gap-20 py-12 first:pt-0 last:pb-0 sm:flex-row justify-center">
          <Image alt={certification.title} src={certification.image} className="object-contain" width={300} />
          <div className="max-w-xl flex-auto">
            <Link href={certification.link}>
              <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">{certification.title}</h3>
            </Link>
            <p className="my-4 text-base/7 text-gray-600">{certification.description}</p>
            <div className="flex flex-wrap gap-2">
              {certification.tags.map((tag) => (
                <span
                  key={`${certification.title}${tag}`}
                  className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}