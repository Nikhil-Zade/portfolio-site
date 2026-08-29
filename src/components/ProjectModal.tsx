import React, { useEffect } from 'react';
import type { Project } from '../types';
import { 
  X, 
  Layers, 
  CheckCircle2, 
  Workflow, 
  Cpu, 
  FileCheck, 
  Share2, 
  Calendar, 
  UserCheck
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getDomainColor = (category: string) => {
    switch (category) {
      case 'Healthcare SaaS':
        return 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800';
      case 'Enterprise SaaS':
        return 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800';
      case 'Infrastructure & Analytics':
        return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800';
      default:
        return 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 border-brand-200 dark:border-brand-800';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-fadeIn"
      />

      {/* Modal Content Box */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-slide-up">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${getDomainColor(project.category)}`}>
              {project.category}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {project.period}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Project link copied to clipboard!');
              }}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
              title="Share Project"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Close Modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8">
          
          {/* Header Summary */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base font-medium text-brand-600 dark:text-brand-400 mb-4">
              {project.subtitle}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pb-4 border-b border-slate-200 dark:border-white/10">
              <UserCheck className="w-4 h-4 text-emerald-500" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">Role:</span> {project.role}
              <span className="mx-2">&bull;</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Domain:</span> {project.domain}
            </div>
          </div>

          {/* Quantified Impact Metrics Grid */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-brand-500" />
              Quantified Outcomes & Delivery Impact
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((metric, mIdx) => (
                <div 
                  key={mIdx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-0.5">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    {metric.label}
                  </div>
                  {metric.subtext && (
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {metric.subtext}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Problem Statement & BA Scope */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
              <h4 className="text-sm font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">
                Problem Statement & Operational Context
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/20">
              <h4 className="text-sm font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider mb-2">
                Key Solutions Delivered
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {project.keySolutions.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Architecture / Data Flow Summary Banner */}
          <div className="p-5 rounded-2xl bg-slate-900 dark:bg-black/60 border border-slate-700 dark:border-white/10 text-slate-200">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              <Workflow className="w-4 h-4" />
              <span>Product Flow & Integration Architecture</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 border border-slate-800 overflow-x-auto leading-relaxed">
              <code>{project.architectureSummary}</code>
            </div>
          </div>

          {/* BA Responsibilities & Functional Deliverables */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-emerald-500" />
              Lead BA Responsibilities & Owned Deliverables
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.baResponsibilities.map((resp, rIdx) => (
                <div 
                  key={rIdx}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-500/10 text-brand-500 text-[10px] font-bold shrink-0 mt-0.5">
                    {rIdx + 1}
                  </span>
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive BA Workflow Stages */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-4 flex items-center gap-1.5">
              <Workflow className="w-4 h-4 text-cyan-500" />
              End-to-End Product Lifecycle & Discovery Stages
            </h3>
            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-6 space-y-6">
              {project.workflow.map((step) => (
                <div key={step.stepNumber} className="relative group">
                  <div className="absolute -left-[31px] top-1 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-brand-500 text-brand-600 dark:text-brand-400 flex items-center justify-center text-xs font-bold shadow-sm">
                    {step.stepNumber}
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-semibold uppercase text-brand-600 dark:text-brand-400">
                        {step.phase}
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                      {step.title}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold mr-1">Deliverables:</span>
                      {step.deliverables.map((del, dIdx) => (
                        <span 
                          key={dIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-brand-500" />
              Technologies, Platforms & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between sticky bottom-0 z-20">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-mono">Esc</kbd> to close
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-colors cursor-pointer"
          >
            Close Highlights
          </button>
        </div>

      </div>
    </div>
  );
};
