export default function Skills({ data }: { data: any[] }) {
  return (
    <section id="skills" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Habilidades</h2>

        <div className="space-y-4">
          {data.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded h-2">
                <div
                  className="bg-cyan-500 h-2 rounded"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
