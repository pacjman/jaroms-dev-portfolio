"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { Navigation } from "@/components/navigation"
import { MobileNav } from "@/components/mobile-nav"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-lg bg-black/50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="text-primary px-2">Jarom's</span>Portfolio
          </Link>
          <Navigation />
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-700 bg-transparent text-white hover:bg-gray-800 hover:text-primary h-10 px-4 py-2"
            >
              Resume
            </a>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[90vh]"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
            >
              Jarom
            </span>
          </h1>
          <div className="text-3xl mb-4">Full Stack | Integrations | Backend Systems</div>
          <p className="text-xl text-gray-400 mb-8">I build exceptional and accessible web apps.</p>
          <div className="flex gap-4 justify-center">
            {/* Primary CTA Button - Purple */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2"
            >
              Get in touch
            </a>

            {/* Secondary Button - Dark Gray */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 h-10 px-4 py-2"
            >
              View my work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
                <img
                  src="/profile-photo.jpg"
                  alt="Jarom Jones - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg text-gray-300 mb-6">
                I'm a seasoned software engineer with 15+ years of experience building web applications, third-party
                integrations, and backend systems. I am capable working with modern web technologies as well as legacy
                systems.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                My journey in software development began when I built my first website at 15. Since then, I've worked
                with startups and large enterprises to create efficient, scalable, and user-friendly applications.
              </p>
              <p className="text-lg text-gray-300">
                When I'm not coding, you can find me biking, gardening, reading, or experimenting with new technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="S3 Backup Tool"
              description="An S3-compatible backup tool with SSE (AES)."
              tags={["AWS", "S3", "SSE", "Python"]}
              imageUrl="/s3-backup-console.svg"
              githubUrl="https://github.com/pacjman/s3-backup"
              liveUrl=""
            />
            <ProjectCard
              title="Portfolio Website"
              description="This very website you're viewing, built with modern web technologies and a focus on performance."
              tags={["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              githubUrl="https://github.com/pacjman/jaroms-dev-portfolio"
              liveUrl="#"
            />
            <ProjectCard
              title="Your Company | Wholesale Platform"
              description="Clean wholesale platform for tracking products and managing bulk orders with tiered pricing."
              tags={["React", "Node.js", "MongoDB", "Stripe"]}
              imageUrl="/wholesale-platform.svg"
              githubUrl=""
              liveUrl="#"
            />
            {/*
            <ProjectCard
              title="Task Management App"
              description="A collaborative task manager with real-time updates, file sharing, and team communication features."
              tags={["Next.js", "Firebase", "Tailwind CSS", "WebSockets"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              githubUrl="#"
              liveUrl="#"
            />
            <ProjectCard
              title="AI Content Generator"
              description="An application that uses AI to generate marketing content, blog posts, and social media updates."
              tags={["Python", "React", "OpenAI API", "AWS"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              githubUrl="#"
              liveUrl="#"
            />
            <ProjectCard
              title="Fitness Tracker"
              description="A mobile-first web app for tracking workouts, nutrition, and fitness goals with data visualization."
              tags={["React Native", "GraphQL", "D3.js", "MongoDB"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              githubUrl="#"
              liveUrl="#"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="A real-time weather application with location-based forecasts, alerts, and historical data."
              tags={["JavaScript", "Weather API", "Chart.js", "Geolocation"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              githubUrl="#"
              liveUrl="#"
            />

            **/}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="JavaScript" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="HTML5" />
                <SkillBadge name="CSS3" />
                <SkillBadge name="Tailwind CSS" />
                <SkillBadge name="Redux" />
                <SkillBadge name="RxJS" />
              </div>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Node.js" />
                <SkillBadge name="Express" />
                <SkillBadge name="Python" />
                <SkillBadge name="GraphQL" />
                <SkillBadge name="REST API" />
                <SkillBadge name="PostgreSQL" />
                <SkillBadge name="MSSQL" />
              </div>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Angular" />
                <SkillBadge name="Next.js" />
                <SkillBadge name="React" />
                <SkillBadge name="Svelte" />
                <SkillBadge name="Vue" />
              </div>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Platforms</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="AWS" />
                <SkillBadge name="Azure" />
                <SkillBadge name="Cloudflare" />
                <SkillBadge name="Vercel" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Agile" />
                <SkillBadge name="AWS" />
                <SkillBadge name="Azure" />
                <SkillBadge name="CI/CD" />
                <SkillBadge name="Cloudflare" />
                <SkillBadge name="Figma" />
                <SkillBadge name="Git" />
                <SkillBadge name="Docker" />
                <SkillBadge name="Vercel" />
                <SkillBadge name="Postman" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-2/5 order-2 md:order-1">
                <div className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-700 h-full">
                  <h3 className="text-xl font-semibold mb-4 sm:mb-6 text-white">Contact Information</h3>
                  <p className="text-gray-300 mb-6 sm:mb-8">
                    Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                  </p>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center">
                        <Mail className="text-primary" size={16} />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400">Email</p>
                        <a
                          href="mailto:resume.spoken743@passmail.net"
                          className="text-sm sm:text-base text-white hover:text-primary transition-colors"
                        >
                          resume.spoken743@passmail.net
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center">
                        <Github className="text-primary" size={16} />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400">GitHub</p>
                        <a
                          href="https://github.com/pacjman"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base text-white hover:text-primary transition-colors"
                        >
                          github.com/pacjman
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center">
                        <Linkedin className="text-primary" size={16} />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400">LinkedIn</p>
                        <a
                          href="https://linkedin.com/in/jaromjones"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base text-white hover:text-primary transition-colors"
                        >
                          linkedin.com/in/jaromjones
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/5 order-1 md:order-2 mb-8 md:mb-0">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 Jarom Jones. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/pacjman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jaromjones"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:resume.spoken743@passmail.net"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

