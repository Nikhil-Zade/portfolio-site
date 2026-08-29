import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import type { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-brand-500 selection:text-white">
        
        {/* Subtle Background Pattern */}
        <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />
        
        {/* Top Glow Ambient Accent */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-glow pointer-events-none -z-10" />

        {/* Sticky Header */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <Hero 
            onOpenResume={() => setResumeOpen(true)} 
            onOpenContact={handleOpenContact} 
          />

          <Projects 
            onSelectProject={(project) => setSelectedProject(project)} 
          />

          <Education />

          <Contact />
        </main>

        {/* Global Modals */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />

        <ResumeModal 
          isOpen={resumeOpen} 
          onClose={() => setResumeOpen(false)} 
        />

        {/* Executive Footer */}
        <Footer onOpenResume={() => setResumeOpen(true)} />

      </div>
    </ThemeProvider>
  );
}

export default App;
