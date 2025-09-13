"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "StatusShield",
      description: "All-in-one social media video processing app that downloads videos and applies AI-powered privacy features.",
      image: "/statusshield.png",
      tech: ["React Native", "Node.js", "Python", "AI/ML", "OpenCV", "FFmpeg", "Chaquopy"],
      category: "Mobile AI App",
      features: [
        "Download videos from social media links",
        "Real-time download progress tracking",
        "Automatically append 2s black screen using FFmpeg",
        "AI integration to remove usernames and social media links using OCR",
        "Machine learning for content detection and processing",
        "Offline video processing capabilities"
      ],
      liveLink: "not uploaded under devlopent", // Updated link
      githubLink: "https://github.com/saihyny/StatusShieldApp" // Updated link
    },
    {
      title: "ScrapMart",
      description: "Full-stack marketplace app built with React + Node.js + MongoDB for scrap trading.",
      image: "scrapmart.png",
      tech: ["React", "Node.js", "MongoDB", "Firebase", "Redux"],
      category: "E-commerce Platform",
      features: [
        "Listing management with dynamic fields",
        "Image hosting and transformation integration",
        "Authentication via Firebase OTP & Google Login",
        "Redux Toolkit for state management"
      ],
      liveLink: "https://scrapmart.netlify.app/", // Updated link
      githubLink: "https://github.com/saihyny/scrapMart-fullstack-webApp" // Updated link
    },
    {
      title: "PearlCare Dental Premium",
      description: "Modern, premium web application for a high-end dental clinic featuring advanced UI animations and responsive design.",
      image: "/dentalcare.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Lucide", "Embla Carousel"],
      category: "Healthcare Web App",
      features: [
        "About section highlighting award-winning status and expert team",
        "Detailed services overview with state-of-the-art equipment",
        "Interactive reviews section with 500+ 5-star reviews",
        "Smooth GSAP animations and parallax effects",
        "Custom UI components (carousels, scroll areas, tooltips)",
        "Premium glass card effects and modern gradients"
      ],
      liveLink: "https://medicalcaredemo.netlify.app/", // Updated link
      githubLink: "https://github.com/saihyny/pearlcare-dental-premium" // Updated link
    },
    {
      title: "Torque & Tone Gym",
      description: "Gym and fitness web application designed to help users manage workouts, track progress, and access fitness resources with TypeScript-based architecture.",
      image: "gym.png",
      tech: ["TypeScript", "React", "Node.js", "MongoDB", "Express"],
      category: "Fitness Web App",
      features: [
        "User authentication and profile management",
        "Workout and progress tracking capabilities",
        "Responsive design with Tailwind CSS",
        "Performance optimization techniques"
      ],
      liveLink: "https://torqueandtonefitness.com/", // Updated link
      githubLink: "https://github.com/saihyny/torqueandtonegym" // Updated link
    }
  ]

  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 px-4 md:px-6 min-h-screen flex items-center"
      style={{ backgroundColor: "#0f1419" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-8 text-white">My Projects</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing my latest work and innovative solutions built with modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="animate-card bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/20">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveLink && project.liveLink !== "not uploaded under devlopent" && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/30 transition-colors">
                        <ExternalLink className="h-4 w-4 text-white" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/30 transition-colors">
                        <Github className="h-4 w-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-xs">KEY FEATURES:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 text-xs flex items-start">
                          <div className="w-1 h-1 bg-purple-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}