"use client"

import { createContext, useState, useContext } from "react"
import { cards } from "@/data/data"

const BackgroundContext = createContext()

export const BackgroundProvider = ({ children }) => {
  const [expandedCard, setExpandedCard] = useState(cards[0].slug)
  const [background, setBackground] = useState(cards[0].background)

  return (
    <BackgroundContext.Provider value={{ expandedCard, setExpandedCard, background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  )
}

export const useBackground = () => {
  const { expandedCard, setExpandedCard, background, setBackground } = useContext(BackgroundContext)
  return { expandedCard, setExpandedCard, background, setBackground }
}