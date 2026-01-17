export default function Contact({ data }: { data: any }) {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <p className="text-slate-400">Email: {data.email}</p>
        <p className="text-slate-400">WhatsApp: {data.whatsapp}</p>
      </div>
    </section>
  )
}
