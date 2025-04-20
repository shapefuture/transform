"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function FeaturedIn() {
  const logos = [
    { name: "Harvard Business Review", src: "/placeholder.svg?height=40&width=120" },
    { name: "Entrepreneur", src: "/placeholder.svg?height=40&width=120" },
    { name: "CNN", src: "/placeholder.svg?height=40&width=80" },
    { name: "Fortune", src: "/placeholder.svg?height=40&width=120" },
    { name: "National Geographic", src: "/placeholder.svg?height=40&width=140" },
    { name: "TED", src: "/placeholder.svg?height=40&width=80" },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container-custom">
        <motion.h2
          className="text-5xl font-bold text-center text-gray-700 mb-16 uppercase opacity-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Featured In
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="grayscale opacity-60 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ opacity: 1 }}
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
