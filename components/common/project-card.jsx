"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { useBackground } from '@/context/background-context'
import { Layers, Medal } from "lucide-react"

export const ProjectCard = ({ projects }) => {
  const [expandedCard, setExpandedCard] = useState(null)
  const { background, setBackground } = useBackground()

  const handleCardClick = (project) => {
    setExpandedCard(expandedCard === project.title ? null : project.title)
    // Change background when card is expanded
    if (expandedCard !== project.title) {
      setBackground(project.background) // or any color you want when expanded
    } else {
      setBackground('bg-background') // reset to default when collapsed
    }
  }

  return (
    <div className="flex flex-row gap-4">
      <Card
        className={`bg-gradient-to-br from-neutral-900/70 to-white/5 relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ease-in-out border-0 flex items-center justify-center ${expandedCard === 'Technologies'
          ? "w-[220px] h-[200px] outline-2 outline-offset-4 outline-white/80"
          : "w-[180px] h-[150px]"
          }`}
        onClick={() => handleCardClick('Technologies')}
      >
        <Layers className="text-white/90 z-10" size={32} />
      </Card>
      <Card
        className={`bg-gradient-to-br from-neutral-900/70 to-white/5 relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ease-in-out border-0 flex items-center justify-center ${expandedCard === 'Certifications'
          ? "w-[220px] h-[200px] outline-2 outline-offset-4 outline-white/80"
          : "w-[180px] h-[150px]"
          }`}
        onClick={() => handleCardClick('Certifications')}
      >
        <Medal className="text-white/90 z-10" size={32} />
      </Card>
      {projects.map((project) => (
        <Card
          key={project.title}
          className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ease-in-out border-0 ${expandedCard === project.title
            ? "w-[220px] h-[200px] outline-2 outline-offset-4 outline-white/80"
            : "w-[180px] h-[150px]"
            }`}
          onClick={() => handleCardClick(project)}
        >

          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority={true}
            />
          </div>
        </Card>
      ))}
    </div>
  )
}