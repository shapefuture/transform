"use client"

import { useState } from "react"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
} from "@nextui-org/react"
import Image from "next/image"

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar
      maxWidth="xl"
      className="bg-black/80 backdrop-blur-md border-b border-white/10"
      classNames={{
        wrapper: "px-4 sm:px-6 lg:px-8",
      }}
      isBlurred
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Flow Research Collective Logo"
              width={40}
              height={40}
            />
            <span className="font-bold text-white">FLOW RESEARCH COLLECTIVE</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white/80 hover:text-white">
            TRAININGS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white/80 hover:text-white">
            RESEARCH
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white/80 hover:text-white">
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white/80 hover:text-white">
            LEARN
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="#apply" className="button-primary">
            TRAIN NOW
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-black/95 pt-6">
        <NavbarMenuItem>
          <Link color="foreground" href="#" className="w-full py-2 text-white/80 hover:text-white">
            TRAININGS
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#" className="w-full py-2 text-white/80 hover:text-white">
            RESEARCH
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#" className="w-full py-2 text-white/80 hover:text-white">
            ABOUT
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#" className="w-full py-2 text-white/80 hover:text-white">
            BLOG
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#" className="w-full py-2 text-white/80 hover:text-white">
            PODCAST
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
