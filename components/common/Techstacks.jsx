import { Card } from "@/components/ui/card"

export default function TechStack({ technologies }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-4">
            {tech.skills.map((skill) => (
              <span
                key={`${tech.category}${skill}`}
                className="inline-flex items-center rounded-md bg-indigo-100 px-2 py-1 text-sm font-medium text-primary ring-0 ring-inset ring-indigo-500/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}