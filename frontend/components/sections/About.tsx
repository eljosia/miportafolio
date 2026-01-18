'use client'
import AnimateOnScroll from "../AnimateOnScroll"

export default function About({ data }: { data: any }) {
  return (
    <AnimateOnScroll>
    <section id="about" className="py-24 bg-slate-950 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
        <p className="text-slate-300 leading-relaxed">
          {data.description}
        </p>
      </div>
    </section>
    </AnimateOnScroll>
  )
}
