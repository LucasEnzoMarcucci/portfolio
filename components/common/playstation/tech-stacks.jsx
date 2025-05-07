import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function TechStack({ technologies }) {
  return (
    <section id="technologies" className="py-12 md:py-24 lg:py-28">
      <p className="text-white text-xl font-semibold mb-6">Technologies maîtrisées :</p>
      <div className="grid md:grid-cols-2 items-start">
        {technologies.map((tech) => (
          <Card key={tech.category} className="flex flex-col justify-between p-6 bg-transparent border-0 ">
            <p className="text-base/7 text-white/80 mb-4">{tech.category}</p>
            <div className="flex flex-wrap gap-4">
              {tech.skills.map((skill) => (
                <div key={skill} className="flex flex-col items-center gap-2">
                  <Image
                    key={skill}
                    src={`/stackIcons/${skill}.svg`}
                    className="object-contain aspect-square bg-[#1E2235] rounded-3xl"
                    width={70}
                    height={70}
                    alt={skill}
                  />
                  <p className="text-white/80 text-sm">{skill}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
