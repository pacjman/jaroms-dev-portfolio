"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui-override/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleNavClick = (id: string) => {
    setOpen(false)
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        })
      }
    }, 300)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-gray-800">
          <Menu size={24} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-gray-900 border-gray-700 p-0">
        <div className="flex flex-col gap-6 p-6">
          <div className="flex flex-col gap-6 mt-6">
            <a
              href="#home"
              onClick={() => handleNavClick("home")}
              className="text-lg text-white hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => handleNavClick("about")}
              className="text-lg text-white hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => handleNavClick("projects")}
              className="text-lg text-white hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => handleNavClick("skills")}
              className="text-lg text-white hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="text-lg text-white hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="mt-4 pt-6 border-t border-gray-800">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-700 bg-transparent text-white hover:bg-gray-800 hover:text-primary h-10 px-4 py-2 w-full"
            >
              Resume
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

