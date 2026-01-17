export default function Projects({ data }: { data: any[] }) {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Proyectos</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((project, i) => (
            <div
              key={i}
              className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
