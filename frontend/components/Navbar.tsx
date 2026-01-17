import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        <div className="space-x-6 text-sm mx-auto @md:mx-0">
          <a href="#home" className="hover:text-cyan-400">Inicio</a>
          <a href="#about" className="hover:text-cyan-400">Sobre mí</a>
          <a href="#skills" className="hover:text-cyan-400">Habilidades</a>
          <a href="#projects" className="hover:text-cyan-400">Proyectos</a>
          <a href="#contact" className="hover:text-cyan-400">Contacto</a>
        </div>
      </div>
    </nav>
  )
}

