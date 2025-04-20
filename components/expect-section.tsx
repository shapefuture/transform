"use client"

import { motion } from "framer-motion"
import { Card, CardBody } from "@nextui-org/react"
import Image from "next/image"

export default function ExpectSection() {
  const expectations = [
    {
      number: "01",
      title: "Laser-Like Clarity",
      description: "about where you're going in life and business, and exactly how to get there",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      number: "02",
      title: "Diamond-Like Adaptability",
      description: "so that pressure, adversity and uncertainty forge you into a stronger leader",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      number: "03",
      title: "Become Recession-Proof",
      description: "by spending your entire work day in flow (which we believe is the ultimate competitive edge)",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      number: "04",
      title: "500% Increases In Productivity",
      description: "so you can get more done on Monday than you currently do in an entire week (no joke)",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      number: "05",
      title: "On-Demand Access To Flow States",
      description:
        "so you can stay in that hyper-focused zone and say goodbye to the distractions of technology and trivial nonsense",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      number: "06",
      title: "Remove Self-Sabotage, Urgency, And Overwhelm",
      description: "so that you can be fully present with your family and those who matter to you",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <div className="relative overflow-hidden mb-16">
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
            }}
            className="whitespace-nowrap text-6xl font-bold text-white/10"
          >
            WHAT TO EXPECT / WHAT TO EXPECT / WHAT TO EXPECT / WHAT TO EXPECT / WHAT TO EXPECT / WHAT TO EXPECT / WHAT
            TO EXPECT / WHAT TO EXPECT /
          </motion.div>
        </div>

        <div className="space-y-16">
          {expectations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2 space-y-4">
                <p className="text-xs font-semibold text-[#66D8EE]">{item.number}</p>
                <h3 className="text-2xl font-bold uppercase">{item.title}</h3>
                <div className="w-16 h-1 bg-white/20"></div>
                <p className="text-white/80 text-lg">{item.description}</p>
              </div>
              <div className="w-full md:w-1/2">
                <Card className="border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                  <CardBody className="p-0">
                    <div className="relative aspect-video">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                  </CardBody>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
