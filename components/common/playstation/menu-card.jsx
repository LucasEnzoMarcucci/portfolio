"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { useBackground } from '@/context/background-context'
import { cn } from "@/lib/utils"

export const MenuCard = ({ cards }) => {
  const { expandedCard, setExpandedCard, background, setBackground } = useBackground()

  const handleCardClick = (card) => {
    console.log(card)
    setExpandedCard(expandedCard === card.slug ? null : card.slug)

    if (expandedCard !== card.slug) {
      setBackground(card.background)
    } else {
      setBackground('bg-background')
    }
  }

  return (
    <div className="flex flex-row flex-wrap gap-4">
      {cards.map((card) => (
        <div key={card.slug}>
          <Card
            className={cn(`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ease-in-out border-0 ${expandedCard === card.slug
              ? "w-[130px] h-[130px] outline-2 outline-offset-4 outline-white/80"
              : "w-[100px] h-[100px]"
              }`, card.isProject ? card.background : "bg-gradient-to-br from-neutral-900/70 to-white/5")}
            onClick={() => handleCardClick(card)}
          >

            <div className="relative w-full h-full">
              {card.isProject ? (
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  priority={true}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="text-white/90 z-10">{card.icon}</div>
                </div>
              )}
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}