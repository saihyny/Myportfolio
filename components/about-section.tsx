"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Brain, Zap } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "React, Node.js, modern web technologies",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "React Native for cross-platform mobile solutions",
    },
    {
      icon: Brain,
      title: "AI Processing",
      description: "Video and image processing with AI/ML",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Scalable, secure, and high-performance applications",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6" style={{ backgroundColor: "#0f1419" }}>
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">About Me</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="relative">
            <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-md border border-purple-500/30 overflow-hidden">
              <Image
                src="/placeholder-user.jpg"
                alt="Samuel"
                fill
                className="object-cover opacity-80"
              />
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Samuel - Full Stack Developer</h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I'm Samuel, a full-stack developer specializing in React, Node.js, mobile apps (React Native), and AI-based video/image processing solutions.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I build professional applications focused on scalability, security, and performance with clean, modern design.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <Card
                key={index}
                className="animate-card bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-purple-400" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">{skill.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
