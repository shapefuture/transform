"use client"

import { Button } from "@nextui-org/react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8">
          <motion.p
            className="text-label text-[#66D8EE] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            HELPING PROFESSIONALS REDEFINE THEIR BASELINE AND TAP INTO PEAK PERFORMANCE
          </motion.p>

          <motion.h1
            className="heading-jumbo mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            USE FLOW STATES TO SHARPEN YOUR FOCUS, TRIPLE YOUR PRODUCTIVITY, AND REACH YOUR GOALS IN RECORD TIME
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Zero-to-Dangerous helps you accomplish your wildest professional goals while reclaiming time, space and
            freedom in your personal life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button as="a" href="#apply" className="button-primary text-base" size="lg">
              APPLY FOR ZERO TO DANGEROUS
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="text-right mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-white/60 text-sm">NEXT COHORT:</p>
          <p className="text-label">MAY 1, 2025</p>
        </motion.div>
      </div>
    </section>
  )
}
