import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Author() {
  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="w-full md:w-1/3">
            <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-lg md:w-full">
              <Image src="/placeholder.svg?height=400&width=400" alt="Имя Автора" fill className="object-cover" />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Автор проекта</h2>

            <h3 className="mb-2 text-2xl font-bold text-cyan-400">Имя Автора</h3>

            <p className="mb-6 text-lg text-white/70">
              Нейроучёный и коуч с 10-летним опытом. Помог 1000+ предпринимателям сломать внутренние барьеры и
              масштабировать бизнес.
            </p>

            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <p className="text-white/90">
                  Автор методики психического метаболизма, основанной на последних исследованиях нейропластичности
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <p className="text-white/90">
                  Консультант крупнейших технологических компаний по вопросам продуктивности и принятия решений
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <p className="text-white/90">Спикер международных конференций по нейронауке и бизнес-психологии</p>
              </li>
            </ul>

            <Button className="btn-primary">Забронировать место</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
