"use client"

import { memo } from "react"
import { useIsMobile } from "@/components/ui/use-mobile"
import { cn } from "@/lib/utils"
import ByteFractalHero from "./mobile-hero-section"

function HeroComponent() {
  const isMobile = useIsMobile()

  return (
    <div className="relative h-screen w-full hero-sticky">
      {isMobile ? (
        <ByteFractalHero />
      ) : (
        <div className="relative flex h-screen w-full items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,#rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,#rgba(255,255,255,0.05)_1px,transparent_1px)]",
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="relative z-20 text-center">
            <h1 className="bg-gradient-to-b from-white to-purple-300 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
              Hello, I'm Samuel
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-purple-300">
              Full Stack Developer
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              I'm a passionate developer who loves turning ideas into amazing digital experiences.
              When I'm not coding, you'll find me exploring new technologies,
              sharing knowledge with the community, or enjoying a good cup of coffee while
              brainstorming the next big project. I believe in writing clean,
              maintainable code and creating solutions that make people's lives easier.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View My Work
              </button>
              <button
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black font-bold py-3 px-8 rounded-lg transition-colors text-lg"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(HeroComponent)
