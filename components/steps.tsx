import { CheckCircle } from "lucide-react"

export default function Steps() {
  const steps = [
    {
      number: 1,
      title: "Диагностика",
      description: "Выявляем внутренние конфликты и причины прокрастинации.",
    },
    {
      number: 2,
      title: "Очистка",
      description: "Очищаем психику и наводим порядок во внутреннем мире.",
    },
    {
      number: 3,
      title: "Балансировка",
      description: "Осваиваем инструменты балансировки и формируем новые опоры.",
    },
  ]

  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">3 шага к трансформации</h2>
        <p className="mb-12 text-center text-lg text-white/70">Как работает программа</p>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-cyan-400">
                Шаг {step.number}: {step.title}
              </h3>
              <p className="mb-4 text-white/70">{step.description}</p>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <p>Вы начнете действовать без сомнений.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
