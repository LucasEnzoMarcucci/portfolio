"use client"

import { useBackground } from '@/context/background-context'
import { MenuCard } from "@/components/common/playstation/menu-card"
import { cards, certifications } from "@/data/data"
import { useState, useEffect } from "react"
import { AboutMe } from "@/components/common/playstation/aboutme"
import { Certifications } from "@/components/common/playstation/certifications"
import { Restock } from "@/components/common/playstation/restock"
import { Saas } from "@/components/common/playstation/saas"
import TechStack from "@/components/common/playstation/tech-stacks"
import { technologies } from "@/data/data"
export default function Home() {
  const [time, setTime] = useState('')
  const { expandedCard, background } = useBackground()

  useEffect(() => {
    setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toString())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`min-h-screen flex flex-col justify-between`}>
      <div
        className={`fixed inset-0 z-[-1] brightness-30 ${background} bg-cover bg-center no-repeat bg-fixed transition-all duration-1000`}
        aria-hidden="true">
      </div>

      <main className="container px-8 md:px-12 mx-auto py-20 relative z-10">
        <div className="flex flex-row justify-between">
          <h1 className="text-lg font-bold tracking-tighter sm:text-5xl md:text-4xl mb-12 text-left text-white">{cards.find(card => card.slug === expandedCard)?.title}</h1>
          <p className="text-xl text-white">{time}</p>
        </div>

        <MenuCard cards={cards} />

        {cards.find(card => card.slug === expandedCard)?.slug === "AboutMe" && <AboutMe />}
        {cards.find(card => card.slug === expandedCard)?.slug === "Certifications" && <Certifications certifications={certifications} />}
        {cards.find(card => card.slug === expandedCard)?.slug === "UnrealEngine" && <Restock />}
        {cards.find(card => card.slug === expandedCard)?.slug === "Saas" && <Saas />}
        {cards.find(card => card.slug === expandedCard)?.slug === "Technologies" && <TechStack technologies={technologies} />}
      </main>

      {/* <footer className="border-t py-6 w-full text-center">
          <p className="text-xs text-gray-500">© 2025 <b>·</b> Lucas Marcucci <b>·</b> All rights reserved.</p>
          <a href="https://github.com/LucasEnzoMarcucci/portfolio" target="_blank" className="text-xs text-gray-500 mt-2 hover:underline">Code source du site</a>
        </footer> */}
    </div>
  )
}