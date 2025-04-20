import { Input, Button, Link } from "@nextui-org/react"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Flow Research Collective Logo"
                width={40}
                height={40}
              />
              <span className="font-bold text-white">FLOW RESEARCH COLLECTIVE</span>
            </Link>
            <p className="text-white/60 text-sm">
              The Flow Research Collective is a peak performance research and training institute.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/60 hover:text-[#66D8EE] transition-colors text-sm">
                  Zero to Dangerous
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-[#66D8EE] transition-colors text-sm">
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-[#66D8EE] transition-colors text-sm">
                  Executive Coaching
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/60 hover:text-[#66D8EE] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-[#66D8EE] transition-colors text-sm">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-[#66D8EE] transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-[#66D8EE] transition-colors text-sm">
                  Podcast
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-bold mb-4">Subscribe</h3>
            <p className="text-white/60 text-sm mb-4">Subscribe to the world's largest flow science newsletter.</p>
            <div className="flex gap-2 mb-6">
              <Input type="email" placeholder="you@email.com" className="bg-white/5 border-white/20" />
              <Button className="bg-white text-black font-medium">Join</Button>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-white/60 hover:text-[#66D8EE] transition-colors">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#66D8EE] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#66D8EE] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#66D8EE] transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#66D8EE] transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">© {currentYear} Flow Research Collective</p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/40 hover:text-[#66D8EE] transition-colors text-sm">
              Terms of service
            </Link>
            <Link href="#" className="text-white/40 hover:text-[#66D8EE] transition-colors text-sm">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
