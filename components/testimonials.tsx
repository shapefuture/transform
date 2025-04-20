"use client"

import { Card, CardBody, Avatar } from "@nextui-org/react"
import { motion } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This showed me that 80% of my work was sabotaging the 20% of my effort that was producing almost all of my results! They showed me how to drop the 80% of effort that was suppressing my performance and slowing me down. The changes I made are allowing me to write my next book in a fraction of the time!",
      name: "Vishen Lakhiani",
      role: "FOUNDER & CEO, MINDVALLEY, AUTHOR OF THE CODE OF THE EXTRAORDINARY MIND",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Before training with the Flow Research Collective, I didn't know how to drive myself into the zone. Some days I'd crush it, but it was inconsistent. Now every workday is better than my best workdays used to be. I'm so much more productive, it's shocking how much of a difference it made.",
      name: "Charles D. Lightfoot",
      role: "Firefighter & CEO, Firebrand Media Group",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#66D8EE]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2">
                Flow research collective is rated <span className="text-[#66D8EE]">excellent</span> on trustpilot
              </h3>
              <a href="#" className="text-label text-white/60 hover:text-[#66D8EE] transition-colors">
                Read all 242 reviews
              </a>
            </motion.div>
          </div>

          <div className="w-full md:w-2/3">
            <motion.h2
              className="text-5xl font-bold mb-8 opacity-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Reviews
            </motion.h2>

            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="bg-transparent border-none shadow-none">
                    <CardBody className="px-0">
                      <p className="text-2xl font-medium mb-6 text-white/90">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar src={testimonial.avatar} size="lg" />
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-xs text-[#66D8EE]">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
