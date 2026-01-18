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
      {
        category: "Backend",
        skills: ["Laravel", "NestJS", "Node.js", "MySQL", "PostgreSQL"]
      },
      {
        category: "Frontend",
        skills: ["Next.js", "React", "Tailwind", "HTML", "CSS"]
      },
      {
        category: "DevOps",
        skills: ["Linux", "Docker", "Nginx", "Git"]
      }
    ]
    ,
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
        gitHubUrl: 'https://github.com/user/repo',
        demoUrl: 'https://demo.com',
      },
      {
        title: 'POS Restaurante',
        image: '/demo.jpg',
      },
      {
        title: 'POS Restaurante',
        image: '/demo.jpg',
        gitHubUrl: 'https://github.com/user/repo',
        demoUrl: 'https://demo.com',
      },
      {
        title: 'POS Restaurante',
        image: '/demo.jpg',
      },
    ],
    contact: {
      email: 'correo@mail.com',
      whatsapp: '123456789',
      gitHubUrl: 'https://github.com/user/repo',
      demoUrl: 'https://demo.com',
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