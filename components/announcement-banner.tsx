"use client"

import { useState } from "react"
import { Button } from "@nextui-org/react"
import { X } from "lucide-react"

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-r from-[#66D8EE] to-[#5F87ED] py-2 text-center text-black">
      <div className="container-custom flex items-center justify-center">
        <p className="text-sm font-medium">READ OUR ANNOUNCEMENT ABOUT THE FUTURE OF FRC</p>
        <Button
          isIconOnly
          variant="light"
          size="sm"
          className="ml-4"
          onClick={() => setIsVisible(false)}
          aria-label="Close announcement"
        >
          <X size={16} />
        </Button>
      </div>
    </div>
  )
}
