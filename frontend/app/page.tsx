import Image from "next/image";
import Home from '@/components/sections/Home'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function Page() {
  const data = {
    home: {
      title: 'José Ángel',
      subtitle: 'Full Stack Developer',
    },
    about: {
      description:
        'Desarrollador Full Stack con experiencia en Laravel, Node.js y NestJS.',
    },
    skills: [
      { name: 'Laravel', level: 90 },
      { name: 'NestJS', level: 80 },
      { name: 'Node.js', level: 85 },
    ],
    education: [
      {
        title: 'Ingeniería en Sistemas',
        place: 'Universidad X',
        year: '2018 - 2022',
      },
    ],
    projects: [
      {
        title: 'POS Restaurante',
        image: '/demo.jpg',
      },
      {
        title: 'POS Restaurante',
        image: '/demo.jpg',
      },
      {
        title: 'POS Restaurante',
        image: '/demo.jpg',
      },
      {
        title: 'POS Restaurante',
        image: '/demo.jpg',
      },
    ],
    contact: {
      email: 'correo@mail.com',
      whatsapp: '123456789',
    },
  }

  return (
    <>
      <Home data={data.home} />
      <About data={data.about} />
      <Skills data={data.skills} />
      <Education data={data.education} />
      <Projects data={data.projects} />
      <Contact data={data.contact} />
    </>
  )
}