"use client"

import { motion } from "framer-motion"
import { Card, CardBody } from "@nextui-org/react"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is Zero to Dangerous an online training?",
      answer:
        "Zero to Dangerous is fully digitally delivered. That means you can do it from anywhere. However, it's nothing like your usual \"online course\". Most online courses have a 3% completion rate. Zero to Dangerous has a 90%+ completion rate. This is because it involves live engagement with incredible experts and leaders from all across the world. It's not just a big, empty video library.",
    },
    {
      question: "What is the flow research collective?",
      answer:
        "The Flow Research Collective is a peak performance research and training institute. On the research side, we're partnered with universities like Stanford, UCLA, USC and institutions like Deloitte, attempting to understand what happens in the brain and body when human beings are performing at their best. On the training side, we build training programs that help business leaders improve their professional performance by accessing flow states more consistently.",
    },
    {
      question: 'What\'s the purpose of "booking a Peak Performance Strategy Session" for Zero to Dangerous?',
      answer:
        "One of the important features of Zero to Dangerous is the group coaching and online community. What makes this so great, is that everyone in Zero to Dangerous is an inspiring, mission driven leader. The application process allows us to curate this kind of community and ensure it's a good fit for both sides.",
    },
    {
      question: "When does Zero to Dangerous start?",
      answer:
        "You can join as soon as you're accepted into Zero to Dangerous after your strategy session. However, we do reach coaching capacity at times, so if you're interested, we recommend you apply right away.",
    },
    {
      question: "Why does Zero to Dangerous exist?",
      answer:
        "As far as we could tell there is no science backed training that teaches business leaders, all the skills needed to unlock sustained peak performance and flow. Zero to Dangerous fills that void.",
    },
    {
      question: "Where does Zero to Dangerous happen?",
      answer:
        "The whole training is delivered through our world class learning management system. This means you start the course at the top, and everything from the coaching sessions to the videos to the exercises, are laid out simply for you. No hunting for links or trying to find times!",
    },
    {
      question: "Tell me how Zero to Dangerous works one more time…",
      answer:
        "Sure. There are three components and they happen in parallel. First, eight weeks of daily video content and exercises. Second, one on one coaching with an expert performance coach every other week for eight weeks. Third, access to weekly group coaching with the rest of the Zero to Dangerous community.",
    },
  ]

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
          <h2 className="heading-lg mb-4">FAQ</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={`faq-${index}`}
              className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <CardBody className="p-0">
                <button
                  className="w-full text-left p-6 flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-xl font-medium">{faq.question}</h3>
                  <ChevronRight
                    className={`text-[#66D8EE] transition-transform ${openFaq === index ? "rotate-90" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0 border-t border-white/10">
                    <p className="text-white/70 pt-4">{faq.answer}</p>
                  </div>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
