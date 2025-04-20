import { CheckCircle } from "lucide-react"

export default function ForWhom() {
  const problems = [
    {
      title: "Застреваешь",
      description: "Часами обдумываешь решения, которые другие принимают за минуты.",
      solution: "Переключи мозг на ясность.",
    },
    {
      title: "Тормозишь",
      description: "Знаешь, что нужно делать, но что-то внутри постоянно сомневается.",
      solution: "Запусти продуктивный поток.",
    },
    {
      title: "Боишься",
      description: "После неудач сложно решаться на смелые шаги.",
      solution: "Сломай страх действия.",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Для кого это?</h2>
        <p className="mb-12 text-center text-lg text-white/70">
          Для предпринимателей, которые хотят масштабировать бизнес без самосаботажа.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-cyan-400">{problem.title}</h3>
              <p className="mb-4 text-white/70">{problem.description}</p>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <p>{problem.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
