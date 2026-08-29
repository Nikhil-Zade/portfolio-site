import React, { useState } from 'react';
import { educationData, experienceData, languagesData } from '../data/educationData';
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Languages, 
  Building2,
  Compass,
  Brain
} from 'lucide-react';

export const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  const domains = [
    'Governance & Public Policy',
    'Macroeconomics',
    'Ethics & Decision Making',
    'International Relations',
    'Science & Technology',
    'Disaster & Risk Management'
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Journey & Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Work Experience & Academic Foundation
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              A comprehensive track record spanning B2B healthcare SaaS platforms, enterprise HR systems, strategic consulting fellowships, and engineering analytics.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white dark:bg-brand-600 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Trajectory
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-white dark:bg-brand-600 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-brand-600 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Education & Programs
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="space-y-12">
          
          {/* Work Experience Section */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                <Building2 className="w-4 h-4 text-brand-500" />
                <span>Professional Work Experience</span>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {experienceData.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Top row */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                            {item.role}
                          </h3>
                          {item.badge && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-medium text-brand-600 dark:text-brand-400 mt-0.5">
                          {item.company}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Responsibilities list */}
                    <ul className="space-y-2 mb-6">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Pills */}
                    <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold mr-1">Skills & Tools:</span>
                      {item.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education & Programs Section */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                <GraduationCap className="w-4 h-4 text-cyan-500" />
                <span>Education & Strategic Programs</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educationData.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 md:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                          {item.iconName === 'Award' ? <Award className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                        {item.institution}
                      </div>
                      <div className="text-xs text-slate-400 mb-4 flex items-center gap-2">
                        {item.location && <span>{item.location}</span>}
                        <span>&bull;</span>
                        <span className="font-mono">{item.year}</span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {item.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Personal Goal Pursuit (Career Break) Section - Directly Above Languages */}
          <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-md relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-white/5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-2">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Personal Goal Pursuit &bull; Career Break</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  UPSC Civil Services Preparation & Analytical Rigor
                </h3>
              </div>

              <div className="flex flex-col sm:items-end gap-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Award className="w-3.5 h-3.5" />
                  2x UPSC Mains Written
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Jan 2021 – Jan 2023 &bull; 2 Years Full-Time Preparation
                </span>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-3">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Dedicated 2 years to intensive UPSC preparation, qualifying for the <strong className="text-slate-900 dark:text-white">Mains stage twice</strong> (achieved by ~1% of over 1.3 million annual applicants). This transformative journey served as an incubator for multi-dimensional problem-solving and structured critical analysis.
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-800 dark:text-slate-200">Multi-Dimensional Perspective:</strong> Gained deep cross-domain exposure across economics, governance, ethics, and technology to analyze complex systems from all angles.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-800 dark:text-slate-200">Rapid Synthesis & Articulation:</strong> Mastered the ability to distill vast, dense information into structured, concise, and actionable written frameworks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-800 dark:text-slate-200">High-Pressure Resilience:</strong> Built relentless discipline, focus, and composure when tackling demanding deadlines and ambiguous problem spaces.</span>
                  </li>
                </ul>
              </div>

              {/* Right Column: BA Value Bridge */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-brand-500/5 to-transparent border border-indigo-500/20">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                  <Brain className="w-4 h-4" />
                  <span>How This Powers My Business Analyst Role</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  This foundation seamlessly translates into product management—enabling me to grasp complex multi-stakeholder requirements faster, ask the right root-cause questions during Product Discovery, and author clear, edge-case-proof PRDs.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-indigo-500/10">
                  {domains.map((domain, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages Strip */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Language Proficiencies</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Effective global stakeholder communication</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {languagesData.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">{lang.language}:</span>
                  <span className="text-brand-600 dark:text-brand-400 font-medium">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
