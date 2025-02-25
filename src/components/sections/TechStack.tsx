'use client';

import { motion } from 'framer-motion';

// Define tech stack categories
const technologies = {
  frontend: [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '𝕋' },
    { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'Framer Motion', icon: '🔄' },
  ],
  design: [
    { name: 'Figma', icon: '🎨' },
    { name: 'Adobe XD', icon: '🖌️' },
    { name: 'Photoshop', icon: '📷' },
    { name: 'Illustrator', icon: '✏️' },
  ],
  backend: [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚂' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Firebase', icon: '🔥' },
  ],
  tools: [
    { name: 'Git', icon: '📊' },
    { name: 'VSCode', icon: '💻' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Vercel', icon: '▲' },
  ],
};

// Tech pill component
const TechPill = ({ tech, index }: { tech: { name: string; icon: string }, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex items-center gap-2 bg-zinc-800 rounded-full px-4 py-2 text-sm"
    >
      <span className="text-lg">{tech.icon}</span>
      <span>{tech.name}</span>
    </motion.div>
  );
};

// Category section component
const TechCategory = ({ 
  title, 
  items 
}: { 
  title: string; 
  items: { name: string; icon: string }[] 
}) => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((tech, index) => (
          <TechPill key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </div>
  );
};

export default function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <TechCategory title="Frontend Development" items={technologies.frontend} />
      <TechCategory title="Design Tools" items={technologies.design} />
      <TechCategory title="Backend Development" items={technologies.backend} />
      <TechCategory title="Other Tools" items={technologies.tools} />
    </div>
  );
}