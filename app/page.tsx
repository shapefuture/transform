import Hero from "@/components/hero"
import FeaturedIn from "@/components/featured-in"
import Testimonials from "@/components/testimonials"
import Benefits from "@/components/benefits"
import ProgramStructure from "@/components/program-structure"
import ExpectSection from "@/components/expect-section"
import ReviewsSection from "@/components/reviews-section"
import AuthorSection from "@/components/author-section"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import ResearchStats from "@/components/research-stats"

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedIn />
      <Testimonials />
      <Benefits />
      <ProgramStructure />
      <ExpectSection />
      <ReviewsSection />
      <ResearchStats />
      <AuthorSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
