'use client'
import AnimateOnScroll from "../AnimateOnScroll"

export default function Skills({ data }: { data: any[] }) {
  return (
    <AnimateOnScroll>
      <section id="skills" className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Habilidades
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((group, i) => (
              <div
                key={i}
                className="bg-slate-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill: string, j: number) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-sm bg-slate-700 rounded-full hover:bg-cyan-500 hover:text-black transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </AnimateOnScroll>
  )
}
