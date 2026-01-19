import Image from "next/image";
import Home from '@/components/sections/Home'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default async function Page() {
  async function getHome() {
    const res = await fetch('http://localhost:3000/api/home', {
      cache: 'no-store', // sin cache
    })
    return res.json()
  }

  async function getAbout() {
    const res = await fetch('http://localhost:3000/api/about', {
      cache: 'no-store', // sin cache
    })
    return res.json()
  }

  async function getSkills() {
    const res = await fetch('http://localhost:3000/api/skills', {
      cache: 'no-store', // sin cache
    })
    return res.json()
  }

  async function getEducation() {
    const res = await fetch('http://localhost:3000/api/education', {
      cache: 'no-store', // sin cache
    })
    return res.json()
  }

  async function getProjects() {
    const res = await fetch('http://localhost:3000/api/projects', {
      cache: 'no-store', // sin cache
    })
    return res.json()
  }

  async function getContact() {
    const res = await fetch('http://localhost:3000/api/contact', {
      cache: 'no-store', // sin cache
    })
    return res.json()
  }

  return (
    <>
      <Home data={await getHome()} />
      <About data={await getAbout()} />
      <Skills data={await getSkills()} />
      <Education data={await getEducation()} />
      <Projects data={await getProjects()} />
      <Contact data={await getContact()} />
    </>
  )
}