"use client"

import { motion } from "framer-motion"
import { Card, CardBody, Avatar, Button } from "@nextui-org/react"
import { Play } from "lucide-react"
import Image from "next/image"

export default function ReviewsSection() {
  const videoReviews = [
    {
      name: "Maria Volkova",
      location: "Miami",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
    {
      name: "Michael Thatcher",
      location: "New Jersey",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
    {
      name: "Srinivas Rao",
      location: "Los Angeles",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
  ]

  const quotes = [
    {
      quote:
        "A game-changing account of the secrets of ultimate human performance—a must for anyone interested in seriously raising the level of their game.",
      name: "Ray Kurzweil",
      role: "Google Director Of Engineering",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote: "Essential for anyone looking for a better tomorrow.",
      name: "Elon Musk",
      role: "Tesla, SpaceX, and Boring Company CEO",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Inspiring, filled with incredible insights… a practical how-to game plan for going big and impacting the world.",
      name: "Michael Dell",
      role: "CEO, Dell Computers",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Here's what people say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {videoReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                <CardBody className="p-0">
                  <div className="relative aspect-video group">
                    <Image
                      src={review.thumbnail || "/placeholder.svg"}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{review.name}</h3>
                    <p className="text-white/60 text-sm">{review.location}</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mb-20">
          <Button className="button-secondary">See more reviews</Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Here's what others have said about our thought leadership and training:</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                <CardBody className="p-6">
                  <p className="text-xl font-medium mb-6 text-white/90">"{quote.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar src={quote.avatar} size="lg" />
                    <div>
                      <h4 className="font-bold">{quote.name}</h4>
                      <p className="text-xs text-[#66D8EE]">{quote.role}</p>
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
