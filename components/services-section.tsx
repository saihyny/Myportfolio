"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Brain, Zap } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building complete web applications with modern technologies and best practices.",
      features: [
        "React, Next.js, Node.js",
        "Express.js Backend",
        "MongoDB with Mongoose",
        "REST API Design",
        "Microservices Architecture",
        "Firebase Authentication"
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with native performance and features.",
      features: [
        "React Native Development",
        "Chaquopy Python Integration",
        "FFmpegKit Video Processing",
        "Offline Processing",
        "Background Downloads",
        "Custom Native Modules"
      ],
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Intelligent solutions for video processing, data extraction, and automation.",
      features: [
        "EasyOCR Text Recognition",
        "OpenCV Image/Video Processing",
        "Custom AI Username Detection",
        "Machine Learning with scikit-learn",
        "Automated Media Processing",
        "Real-time Progress Updates"
      ],
    },
    {
      icon: Zap,
      title: "DevOps & Tools",
      description: "Professional development tools, workflows, and deployment solutions.",
      features: [
        "Git & GitHub Version Control",
        "Docker Containerization",
        "Postman API Testing",
        "CI/CD Workflows",
        "VS Code Development",
        "npm/yarn Package Management"
      ],
    },
  ]

  return (
    <section id="services" className="py-16 md:py-20 px-4 md:px-6 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">What I Can Do</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-stack development, mobile applications, AI solutions, and professional development tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="animate-card bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-purple-400" />
                  </div>
                  <CardTitle className="text-lg font-bold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-auto bg-purple-600 hover:bg-purple-700 text-white border border-purple-400 hover:border-purple-300 transition-all duration-300 text-sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
