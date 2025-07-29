'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '@/types'

const projects: Project[] = [
  {
    id: '1',
    title: 'Management System',
    description: 'A comprehensive management system built with ASP.NET Core for employee and internal operations management with an advanced user interface.',
    image: '/projects/management.svg',
    technologies: ['ASP.NET Core', 'SQL Server', 'Bootstrap', 'Entity Framework'],
    githubUrl: 'https://github.com/Abdalrhman45/Mangment-Sys',
    featured: true,
  },
  {
    id: '2',
    title: 'Trello Clone',
    description: 'An advanced Trello clone built with Next.js and Prisma for task and project management with drag-and-drop capabilities.',
    image: '/projects/trello.svg',
    technologies: ['Next.js', 'Prisma', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Abdalrhman45/Trello-Clone',
    featured: true,
  },
  {
    id: '3',
    title: 'Hotel Booking System',
    description: 'A complete hotel booking system using Angular and ASP.NET Core with login, room booking, and reservation management features.',
    image: '/projects/hotel.svg',
    technologies: ['Angular', 'ASP.NET Core', 'Entity Framework', 'SQL Server'],
    githubUrl: 'https://github.com/Abdalrhman45/HOTEL/tree/main/upskilling-hotel-main',
    featured: true,
  },
  {
    id: '4',
    title: 'Quiz Application',
    description: 'An interactive quiz application built with Angular and Node.js with support for result tracking and question management.',
    image: '/projects/quiz.svg',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Express.js'],
    githubUrl: 'https://github.com/Abdalrhman45/QuizAppProjec/tree/master/quiz-app-project',
  },
  {
    id: '5',
    title: 'Task Manager',
    description: 'A daily task management application built with React and Node.js featuring a simple and effective user interface.',
    image: '/projects/taskmanager.svg',
    technologies: ['React', 'Node.js', 'Express.js', 'CSS3'],
    githubUrl: 'https://github.com/Abdalrhman45/taskManager',
  },
  {
    id: '6',
    title: 'Weather App',
    description: 'A simple weather application that displays current weather data and forecasts through external API with attractive design.',
    image: '/projects/weather.svg',
    technologies: ['JavaScript', 'Weather API', 'CSS3', 'HTML5'],
    githubUrl: 'https://github.com/Abdalrhman45/weather_app',
  },
  {
    id: '7',
    title: 'To Do List',
    description: 'A simple and practical daily task management application built with HTML, CSS, and JavaScript with local storage.',
    image: '/projects/todo.svg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    githubUrl: 'https://github.com/Abdalrhman45/TO_DO_LIST',
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}