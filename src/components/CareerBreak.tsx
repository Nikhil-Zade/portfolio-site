import React from 'react';
import {
  Compass,
  CheckCircle2,
  Brain,
  Award
} from 'lucide-react';

export const CareerBreak: React.FC = () => {
  const domains = [
    'Governance & Public Policy',
    'Macroeconomics',
    'Ethics & Decision Making',
    'International Relations',
    'Science & Technology',
    'Disaster & Risk Management'
  ];

  return (
    <section id="career-pursuit" className="py-12 md:py-16 relative bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Compact Card Container */}
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-lg relative overflow-hidden">

          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Personal Goal Pursuit &bull; Career Break</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                UPSC Civil Services Preparation
              </h2>
            </div>

            <div className="flex flex-col sm:items-end gap-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <Award className="w-3.5 h-3.5" />
                2x UPSC Mains Written
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Jan 2021 – Jun 2023 &bull; Full-Time Preparation
              </span>
            </div>
          </div>

          {/* 2-Column Concise Content */}
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

            {/* Left: Journey & Intellectual Synthesis */}
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Dedicated 2 years to intensive UPSC preparation, qualifying for the <strong className="text-slate-900 dark:text-white">Mains stage twice</strong> (a benchmark achieved by ~1% of over 1.3 million annual applicants). This transformative journey served as an incubator for multi-dimensional problem-solving and structured critical analysis.
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

            {/* Right: How It Powers My Business Analyst Role */}
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

      </div>
    </section>
  );
};
