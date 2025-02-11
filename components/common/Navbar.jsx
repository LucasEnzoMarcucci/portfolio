"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Layers, Code, Medal } from "lucide-react"

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex justify-center">
      <nav
        className={`
          fixed top-4 z-50 flex items-center justify-between
          bg-black text-white rounded-full transition-all duration-300 ease-in-out
          ${isExpanded ? "w-80 h-12" : "w-64 h-10"}
        `}
        onMouseEnter={() => setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)}
      // onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-around w-full px-4">
          <Link href="#about">
            <Home size={18} className="cursor-pointer" />
          </Link>
          <Link href="#techstack">
            <Layers size={18} className="cursor-pointer" />
          </Link>
          <Link href="#certifications">
            <Medal size={18} className="cursor-pointer" />
          </Link>
          <Link href="#projects">
            <Code size={18} className="cursor-pointer" />
          </Link>
          {/* <Search
            size={18}
            className={`cursor-pointer ${isExpanded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          />
          <Bell
            size={18}
            className={`cursor-pointer ${isExpanded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          />
          <Menu size={18} className="cursor-pointer" /> */}
        </div>
      </nav>
    </div>
  )
}