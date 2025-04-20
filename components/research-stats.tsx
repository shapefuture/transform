"use client"

import { motion } from "framer-motion"
import { Card, CardBody, Button } from "@nextui-org/react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ResearchStats() {
  const stats = [
    {
      logo: "/placeholder.svg?height=60&width=120",
      name: "McKinsey & Company",
      stat: "McKinsey found a 500% increase in productivity by executives who regularly access flow states.",
    },
    {
      logo: "/placeholder.svg?height=60&width=120",
      name: "Harvard University",
      stat: "Harvard found subjects to have three days of heightened creativity after the flow state.",
    },
    {
      logo: "/placeholder.svg?height=60&width=120",
      name: "DARPA",
      stat: "Advanced Brain Monitoring & DARPA found subjects to have a 490% increase in skill acquisition.",
    },
    {
      logo: "/placeholder.svg?height=60&width=120",
      name: "The University of Sydney",
      stat: "The University of Sydney found subjects to have a 430% increase in creative problem solving.",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <h2 className="text-2xl font-bold mb-4">
              How do I know training with Flow Research Collective will work for me?
            </h2>
            <p className="text-white/70 mb-6">
              Our trainings are based on cutting edge research done by some of the world's leading academic
              institutions.
            </p>
            <Button className="button-primary" endContent={<ArrowRight size={16} />}>
              Read the research
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border border-white/10 bg-white/5 backdrop-blur-sm" isPressable>
                  <CardBody className="p-6">
                    <div className="h-12 mb-4">
                      <Image
                        src={stat.logo || "/placeholder.svg"}
                        alt={stat.name}
                        width={120}
                        height={40}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <div className="h-px bg-white/10 my-4"></div>
                    <p className="text-white/80">
                      {stat.stat.split("increase").map((part, i) => {
                        if (i === 0) {
                          return (
                            <span key={i}>
                              {part}
                              <span className="gradient-text font-bold">increase</span>
                            </span>
                          )
                        }
                        return <span key={i}>{part}</span>
                      })}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h2 className="text-2xl font-bold uppercase text-white/70 mb-4">
            We've used our methodology with <span className="text-white">25,000+ clients</span> and taught it to{" "}
            <span className="text-white">250,000+ students</span>. It's proven to work.
          </h2>
          <p className="text-white/70">
            Our framework has been implemented by the most prominent organizations in the world.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
