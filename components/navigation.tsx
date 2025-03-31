"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  // Handle smooth scrolling when clicking navigation links
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["home", "about", "projects", "skills", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScrollSpy)
    return () => window.removeEventListener("scroll", handleScrollSpy)
  }, [])

  return (
    <nav className="hidden md:flex gap-6">
      <Link
        href="#home"
        onClick={(e) => handleScroll(e, "home")}
        className={`hover:text-primary transition-colors ${activeSection === "home" ? "text-primary" : ""}`}
      >
        Home
      </Link>
      <Link
        href="#about"
        onClick={(e) => handleScroll(e, "about")}
        className={`hover:text-primary transition-colors ${activeSection === "about" ? "text-primary" : ""}`}
      >
        About
      </Link>
      <Link
        href="#projects"
        onClick={(e) => handleScroll(e, "projects")}
        className={`hover:text-primary transition-colors ${activeSection === "projects" ? "text-primary" : ""}`}
      >
        Projects
      </Link>
      <Link
        href="#skills"
        onClick={(e) => handleScroll(e, "skills")}
        className={`hover:text-primary transition-colors ${activeSection === "skills" ? "text-primary" : ""}`}
      >
        Skills
      </Link>
      <Link
        href="#contact"
        onClick={(e) => handleScroll(e, "contact")}
        className={`hover:text-primary transition-colors ${activeSection === "contact" ? "text-primary" : ""}`}
      >
        Contact
      </Link>
    </nav>
  )
}

