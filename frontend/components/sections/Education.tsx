export default function Education({ data }: { data: any[] }) {
  return (
    <section id="education" className="py-24 bg-slate-950 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Formación</h2>

        <div className="space-y-6">
          {data.map((edu, i) => (
            <div key={i} className="border border-slate-800 p-6 rounded-lg">
              <h3 className="font-semibold text-lg">{edu.title}</h3>
              <p className="text-slate-400">{edu.place}</p>
              <span className="text-sm text-slate-500">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
