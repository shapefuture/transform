"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function CountdownBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set end date to 5 days from now
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 5)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = endDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-2 text-center text-black">
      <div className="container mx-auto flex items-center justify-center px-4">
        <p className="text-sm font-medium md:text-base">
          ↑ 90% предпринимателей тонут в самосаботаже. Осталось мест: 5 | До конца набора: {timeLeft.days}д{" "}
          {timeLeft.hours}ч {timeLeft.minutes}м
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 rounded-full p-1 hover:bg-black/10"
          aria-label="Закрыть"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
