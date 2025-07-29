'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, User, Code, Coffee } from 'lucide-react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '500+' },
    { icon: User, label: 'Happy Clients', value: '10+' },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what skills I have
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Get to know me!
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm Abdalrhman Saber from Cairo, Egypt, with strong experience in web application development using Angular, ASP.NET Core, Next.js, Docker, and PostgreSQL.
              </p>
              <p>
                My goal is to develop modern and secure software solutions that meet client needs. I love working on projects that challenge my abilities and help me grow continuously.
              </p>
              <p>
                I always strive to learn new technologies and contribute to the programming community by sharing knowledge and experiences.
              </p>
            </div>
            
            <motion.a
              href="https://drive.google.com/file/d/1lZYQFlxt9S7yA-1WZF9LqWxbWO-YQNWW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map(({ icon: Icon, label, value }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <Icon className="mx-auto mb-4 text-blue-600 dark:text-blue-400" size={32} />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}