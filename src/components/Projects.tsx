import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import type { Project, ProjectCategory } from '../types';
import { 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  UserCheck
} from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', 'Healthcare SaaS', 'Enterprise SaaS', 'Infrastructure & Analytics'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const getDomainBadge = (category: string) => {
    switch (category) {
      case 'Healthcare SaaS':
        return 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800/60';
      case 'Enterprise SaaS':
        return 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/60';
      case 'Infrastructure & Analytics':
        return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60';
      default:
        return 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 border-brand-200 dark:border-brand-800/60';
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Project Case Studies & Platforms</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Products & Client Deliveries
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              In-depth product case studies detailing Product Discovery, PRD/BRD authoring, AI-assisted workflow engineering, and Agile sprint deliveries.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-brand-500/40 transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold border ${getDomainBadge(project.category)}`}>
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-brand-600 dark:text-brand-400 mb-4">
                    {project.subtitle}
                  </p>

                  {/* BA Role Pill */}
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-white/5 mb-5 text-xs text-slate-700 dark:text-slate-300">
                    <UserCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-slate-900 dark:text-white">Role:</span>
                    <span>{project.role}</span>
                  </div>

                  {/* Problem & BA Solutions Summary */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">The Problem & Context:</span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        {project.problemStatement}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Solutions & Deliverables:</span>
                      <ul className="mt-1.5 space-y-2">
                        {project.keySolutions.map((sol, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Mini Ribbon */}
                <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-white/5 mb-6">
                  {project.metrics.slice(0, 2).map((metric, mIdx) => (
                    <div key={mIdx} className="px-2">
                      <div className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-brand-600 dark:hover:bg-brand-400 dark:hover:text-slate-950 transition-all duration-200 shadow-sm group/btn cursor-pointer"
                >
                  <span>View Highlights & Workflow Spec</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
