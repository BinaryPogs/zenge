// src/components/sections/ProjectShowcase.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Sample featured projects - you would replace these with your own
const featuredProjects = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with custom animations and seamless checkout flow.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    image: '/images/projects/project1.jpg', // You'll need to add these images
    link: '/projects/e-commerce-platform',
  },
  {
    id: 'project-2',
    title: 'Agency Website',
    description: 'Corporate website for a creative agency with interactive elements and 3D animations.',
    tags: ['React', 'Three.js', 'GSAP', 'Styled Components'],
    image: '/images/projects/project2.jpg',
    link: '/projects/agency-website',
  },
  {
    id: 'project-3',
    title: 'SaaS Dashboard',
    description: 'Interactive dashboard with real-time data visualization and user analytics.',
    tags: ['Next.js', 'TypeScript', 'D3.js', 'Tailwind CSS'],
    image: '/images/projects/project3.jpg',
    link: '/projects/saas-dashboard',
  },
];

// Project card component
const ProjectCard = ({ project, index }: { project: typeof featuredProjects[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-xl bg-zinc-900 hover-card"
    >
      <Link href={project.link} className="block">
        {/* Project Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-60" />
        </div>
        
        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-zinc-400 mb-4">{project.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* View Project Button */}
          <div className="mt-6 flex items-center text-emerald-400 font-medium group">
            <span>View Project</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function ProjectShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}