"use client"

import { motion } from "framer-motion"
import { Button } from "@nextui-org/react"
import Image from "next/image"

export default function AuthorSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Our Director</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 rounded-tr-[30%] rounded-bl-[30%] overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=600" alt="Steven Kotler" fill className="object-cover" />
              </div>
            </motion.div>
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold uppercase">Steven Kotler</h3>
              <p className="text-[#66D8EE]">Director of The Flow Research Collective</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-3/5"
          >
            <p className="text-2xl font-medium mb-8">
              Steven is a 4x New York Times bestselling author, and 2x Pulitzer Prize nominee.
              <br />
              <br />
              He is famous for titles such as The Future Is Faster Than You Think, Stealing Fire, Tomorrowland, The Rise
              of Superman, Abundance:
              <br />
              <br />
              The Future is Better Than You Think, Bold, A Small Furry Prayer, West of Jesus, The Angle Quickest For
              Flight, and Last Tango In Cyberspace
            </p>

            <Button className="button-secondary" size="lg">
              Apply for zero to dangerous
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
