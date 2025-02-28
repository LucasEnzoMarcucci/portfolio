import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"

export default function ProjectCards({ projects }) {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center xl:flex-row xl:items-stretch gap-6">
      {projects.map((project) => (
        <Card key={project.title} className="overflow-hidden max-w-md">
          <div className="relative aspect-video">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="100%"
              className="object-cover"
              priority={true}
            />
          </div>
          <CardContent className="px-4 py-5">
            <h3 className="font-semibold text-xl mb-4">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={`${project.title}${tag}`}
                  className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
          {project.showLink && (
            <CardFooter className="p-4 pt-0">
              <Link href={project.link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
                <Github className="h-4 w-4" />
                Voir sur GitHub
              </Link>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  )
}