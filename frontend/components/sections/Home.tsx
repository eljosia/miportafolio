'use client'
import AnimateOnScroll
  from "../AnimateOnScroll"
import { motion } from 'framer-motion'
import TypingText from "../TypingText"


export default function Home({ data }: { data: any }) {
  return (
    <AnimateOnScroll>
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-slate-900 to-slate-950 text-white px-6"
      >
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          {data.title}
        </motion.h1>

        <div className="mt-4 text-lg md:text-xl text-slate-400 max-w-xl">
          <TypingText texts={[data.subtitle]} typeSpeed={100} deleteSpeed={30} pause={10000} />
        </div>
      </section>
    </AnimateOnScroll>
  )
}
