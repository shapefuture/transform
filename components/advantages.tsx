import { Card, CardContent } from "@/components/ui/card"
import { Clock, Lightbulb, HeadphonesIcon } from "lucide-react"

export default function Advantages() {
  const advantages = [
    {
      icon: Clock,
      title: "Быстрый результат",
      description: "Заметные изменения уже на первой неделе.",
    },
    {
      icon: Lightbulb,
      title: "Научный подход",
      description: "Методики, проверенные нейронаукой.",
    },
    {
      icon: HeadphonesIcon,
      title: "Поддержка 24/7",
      description: "Доступ к чату и нейро-боту в любое время.",
    },
  ]

  const whyUs = [
    {
      title: "Нейропластичность",
      description: "Используем науку для перепрограммирования мозга.",
    },
    {
      title: "Индивидуальность",
      description: "Подход, адаптированный под твои цели.",
    },
    {
      title: "Результат",
      description: "Фокус на реальных изменениях, а не пустых обещаниях.",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Наши преимущества</h2>
        <p className="mb-12 text-center text-lg text-white/70">
          Мы обещаем: ты начнёшь действовать без сомнений уже через 5 недель.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500">
                  <advantage.icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{advantage.title}</h3>
                <p className="text-white/70">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Почему Лаборатория Трансформации?</h2>
          <p className="mb-12 text-center text-lg text-white/70">
            Мы не просто учим — мы меняем твой мозг на клеточном уровне.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {whyUs.map((item, index) => (
              <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-bold text-cyan-400">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
