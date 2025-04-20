"use client"

import { motion } from "framer-motion"
import { Card, CardBody } from "@nextui-org/react"
import Image from "next/image"

export default function Benefits() {
  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-jumbo text-center opacity-20 mb-8">Zero to dangerous</h2>
          <Card className="bg-transparent border border-white/10 max-w-4xl mx-auto">
            <CardBody className="p-8">
              <p className="heading-md">
                Zero to Dangerous is a neuroscience-based peak performance training for entrepreneurs and leaders
                struggling with self sabotage and uncertainty.
              </p>
            </CardBody>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6">
              Are you struggling to balance your lofty professional goals with your family life, health and internal
              wellbeing?
            </h2>

            <div className="space-y-6 text-white/80">
              <p className="text-xl font-bold">We get it! It's not your fault. We're here to help.</p>

              <p>
                We've combined the most powerful elements of executive coaching with scientific research and cutting
                edge digital delivery to produce a powerful solution.
              </p>

              <p>The real problem is not only huge, but it's everything, everywhere, all the time:</p>

              <ul className="list-disc pl-5 space-y-2">
                <li>The average knowledge worker is only productive for 2.3 hours per day</li>
                <li>Every week, they spend half a day duplicating work they did the week before</li>
                <li>They check their email 36 times per hour</li>
                <li>They're interrupted 56 times per day</li>
                <li>They waste 36 hours in unnecessary meetings a month</li>
              </ul>

              <p>
                And most devastating of all:{" "}
                <span className="text-[#66D8EE]">the average knowledge worker is interrupted every 11 minutes</span>{" "}
                (and it takes up to 23 minutes to get back into focus after a disruption).
              </p>

              <p>
                The modern workplace steals your attention and undermines your best intentions at every turn. But your
                attention is your access point to peak performance.
              </p>

              <p>In Zero-to-Dangerous, you'll reclaim your attention and prioritize flow.</p>

              <p className="text-[#66D8EE] font-bold">
                From there, it's possible for you to achieve more in the next year than what some achieve in their
                entire career.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square"
          >
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Burnout visualization"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
