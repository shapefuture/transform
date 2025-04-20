"use client"

import { motion } from "framer-motion"
import { Card, CardBody, Button } from "@nextui-org/react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function CtaSection() {
  const features = [
    {
      title: "+41.26%",
      subtitle: "More motivation",
      description: "Harness the power of your neurobiology",
      detail: "Master science-based techniques designed to fine tune your brain for productivity.",
    },
    {
      title: "-40.12%",
      subtitle: "Less Stress",
      description: "NEUTRALIZE STRESS & OVERWHELM",
      detail: "Discover evidence-based strategies for maintaining mental clarity under pressure.",
    },
    {
      title: "+71.25%",
      subtitle: "More Flow",
      description: "MASTER THE FUNDAMENTALS OF FLOW",
      detail: "Learn the science behind flow states and how to reliably trigger them.",
    },
    {
      title: "+400%",
      subtitle: "More time",
      description: "UNLOCK RADICAL PRODUCTIVITY",
      detail: "Gain actionable insights to supercharge your daily routines for maximum efficiency.",
    },
  ]

  return (
    <section id="apply" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold uppercase mb-6">
              Zero to <span className="gradient-text">dangerous</span>
            </h2>
            <p className="text-2xl font-medium mb-8">
              Apply for our flagship training program and join the productivity revolution.
            </p>
            <Button className="button-primary" size="lg" endContent={<ArrowRight size={16} />}>
              Apply now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Desk Scene"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#66D8EE] to-[#5F87ED] flex items-center justify-center">
                      <span className="text-black font-bold">{feature.title.startsWith("+") ? "+" : "-"}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-white/60 text-sm">{feature.subtitle}</p>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden">
                    <div className="transition-all duration-300 group-hover:translate-y-[-100%]">
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                    <div className="absolute inset-0 translate-y-full transition-all duration-300 group-hover:translate-y-0">
                      <p className="text-white/80 text-sm">{feature.detail}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
