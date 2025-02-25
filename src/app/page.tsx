import Hero from '@/components/sections/Hero';
import ProjectShowcase from '@/components/sections/ProjectShowcase';
import TechStack from '@/components/sections/TechStack';
import Contact from '@/components/sections/Contact';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Projects Section */}
      <ScrollReveal>
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl mb-16 text-center">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <ProjectShowcase />
            
            <div className="mt-16 text-center">
              <a href="/projects" className="btn-primary">
                View All Projects
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
      
      {/* Tech Stack Section */}
      <ScrollReveal>
        <section className="py-24 px-6 bg-zinc-900/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl mb-16 text-center">
              My <span className="text-gradient">Tech Stack</span>
            </h2>
            <TechStack />
          </div>
        </section>
      </ScrollReveal>
      
      {/* Contact Section */}
      <ScrollReveal>
        <section className="py-24 px-6" id="contact">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl mb-16 text-center">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <Contact />
          </div>
        </section>
      </ScrollReveal>
      
      {/* Noise texture overlay */}
      <div className="noise" aria-hidden="true" />
    </>
  );
}