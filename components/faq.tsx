"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Сколько времени нужно?",
      answer: "20-30 минут в день + 2 встречи по 1.5 часа в неделю.",
    },
    {
      question: "Нужны ли знания?",
      answer: "Нет, программа подходит для новичков.",
    },
    {
      question: "Что, если я занят?",
      answer: "Записи встреч и чат доступны 24/7.",
    },
    {
      question: "Как проходят занятия?",
      answer:
        "Занятия проходят в онлайн-формате через Zoom. Вы получаете доступ к записям, материалам и групповому чату поддержки.",
    },
    {
      question: "Есть ли гарантия результата?",
      answer: "Если не почувствуешь изменений после первой недели, мы вернём 100% стоимости.",
    },
    {
      question: "Что такое нейро-бот?",
      answer: "Это ИИ-ассистент, который помогает закреплять материал программы и отвечает на вопросы 24/7.",
    },
  ]

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Часто задаваемые вопросы</h2>
        <p className="mb-12 text-center text-lg text-white/70">Ответы на самые популярные вопросы о программе</p>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 py-4">
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-white/70">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
