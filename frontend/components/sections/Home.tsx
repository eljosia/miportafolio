export default function Home({ data }: { data: any }) {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-slate-900 to-slate-950 text-white px-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold">
        {data.title}
      </h1>
      <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-xl">
        {data.subtitle}
      </p>
    </section>
  )
}
