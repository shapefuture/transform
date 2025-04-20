"use client"

import { motion } from "framer-motion"
import { Card, CardBody } from "@nextui-org/react"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

export default function ProgramStructure() {
  const [openWeek, setOpenWeek] = useState<number | null>(null)

  const weeks = [
    {
      title: "Week 01: Cultivating Your Dangerous Mindset & Flow 101",
      description:
        "In this week you'll learn how the world's most successful people think and see reality. You'll also learn the neuroscience behind flow states so you can begin recreating them in your own life.",
      days: [
        {
          day: "01",
          title: "Welcome To Zero to Dangerous",
          content:
            "Ever wondered how so people have that neverending \"electricity running through their veins\" level motivation? Here's the playbook to achieve that for yourself. This will be ultra helpful if you've got a transition coming up in life.",
        },
        {
          day: "02",
          title: "The Difference Between Zero & Dangerous",
          content:
            "The deep science of what triggers a flow state. Along with a roadmap to deploy these triggers. Oh, and a roadmap for impenetrable freedom in life (turns out this is called autonomy and also triggers flow).",
        },
        {
          day: "03",
          title: "The Four Fundamental Elements",
          content:
            "You'll learn the four fundamental elements that underscore the mindset of the world's most successful people. You'll also learn how to adopt them into your own.",
        },
      ],
    },
    {
      title: "Week 02: Becoming A Time Jedi & Battling Cognitive Load",
      description:
        "In this week we'll shatter any preexisting notions you have around the concept of time. Then we'll rebuild your perception of time from the bottom up so that you can unlock time abundance once and for all.",
      days: [
        {
          day: "01",
          title: "Redefining Productivity Through Leverage",
          content:
            "The mainstream definition of productivity is shockingly flawed. Here we'll redefine the term so you clarify your thinking an action and unlock true productivity.",
        },
        {
          day: "02",
          title: "Shattering The Myth Of Time",
          content:
            "Time is a beast that is forever difficult to tame. Here we'll re-install a whole new belief system about time so you can achieve permanent time mastery.",
        },
        {
          day: "03",
          title: "Liberation Through Elimination",
          content:
            "If you follow the steps in this video, and take action, you will reduce time spent doing things you don't want to do by at least 25%. Bold claim, but we stand behind it.",
        },
      ],
    },
    {
      title: "Week 03: Reclaiming Sanity With Burnout Proofing, Recovery & Sleep",
      description:
        "This week you'll evolve into an executive athlete. That means learning how to sleep better than you ever have, dialling in your recovery practices and making yourself immune to burnout.",
      days: [
        {
          day: "01",
          title: "Cycling Flow To Become An Executive Athlete",
          content:
            'The ultimate blueprint to leave the ranks of the average knowledge worker so you can join the "executive athletes" and enjoy the benefits that this style of work brings.',
        },
        {
          day: "02",
          title: "The Little Known Art of Burnout Proofing",
          content:
            "Turn's out burnout is a well researched topic. Here you'll learn the six triggers for burnout, and how to reduce your susceptibility to each of them. The end result? Making yourself permanently immune to burnout.",
        },
        {
          day: "03",
          title: "Sleeping Your Way To Self Actualization",
          content:
            "The way you're sleeping is blocking you from unlocking your potential. Likely in a way that's much more severe than you think. Let us help.",
        },
      ],
    },
  ]

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
          <h2 className="heading-lg mb-4">More about the Zero to Dangerous curriculum:</h2>
          <p className="text-xl text-white/70">Zero to Dangerous has three engines that drive you towards your goal</p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-4">
          {weeks.map((week, index) => (
            <Card
              key={`week-${index}`}
              className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <CardBody className="p-0">
                <button className="w-full text-left p-6" onClick={() => setOpenWeek(openWeek === index ? null : index)}>
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <p className="text-label text-[#66D8EE]">Week {String(index + 1).padStart(2, "0")}</p>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold uppercase">{week.title.split(":")[1] || week.title}</h3>
                        <ChevronRight
                          className={`text-[#66D8EE] transition-transform ${openWeek === index ? "rotate-90" : ""}`}
                        />
                      </div>
                      <p className="text-white/70 mt-2">{week.description}</p>
                    </div>
                  </div>
                </button>

                {openWeek === index && (
                  <div className="pl-16 pr-4 pb-6 space-y-6 border-t border-white/10 pt-4 mx-6">
                    {week.days.map((day, dayIndex) => (
                      <div key={`day-${index}-${dayIndex}`} className="grid grid-cols-12 gap-4">
                        <div className="col-span-1">
                          <p className="text-label text-[#66D8EE]">Day {day.day}</p>
                        </div>
                        <div className="col-span-11">
                          <h4 className="text-lg font-bold mb-2">{day.title}</h4>
                          <p className="text-white/70">{day.content}</p>
                        </div>
                      </div>
                    ))}
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
