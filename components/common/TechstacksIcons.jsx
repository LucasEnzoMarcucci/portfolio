import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function TechStack({ technologies }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-2xl font-mono font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-4">
            {tech.skills.map((skill) => (
              <Image
                key={skill}
                src={`/stackIcons/${skill}.svg`}
                className="bg-[#1E2235] rounded-3xl"
                width={70}
                height={70}
              />
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
