import React, { useState } from 'react';
import { skillsData } from '../data/skillsData';
import { 
  Target, 
  Cpu, 
  Sparkles, 
  Search, 
  Layers, 
  Check, 
  ArrowUpRight,
  Sliders
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const getCategoryBadgeStyles = (scheme: string) => {
    switch (scheme) {
      case 'indigo':
        return 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/60';
      case 'cyan':
        return 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800/60';
      case 'emerald':
        return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60';
      default:
        return 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 border-brand-200 dark:border-brand-800/60';
    }
  };

  const filteredCategories = skillsData.map(category => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) {
      return null;
    }

    const matchingSkills = category.skills.filter(skill => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const nameMatch = skill.name.toLowerCase().includes(q);
      const descMatch = skill.description.toLowerCase().includes(q);
      const tagMatch = skill.tags.some(tag => tag.toLowerCase().includes(q));
      return nameMatch || descMatch || tagMatch;
    });

    if (matchingSkills.length === 0) return null;

    return {
      ...category,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>Core Competencies & Toolchain</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Strategic Discovery & Technical Systems Mastery
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              A balanced matrix of business discovery acumen, deep enterprise platform architecture, and cutting-edge agentic prototyping capabilities.
            </p>
          </div>

          {/* Quick Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skills (e.g. LWC, PRD, REST)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-slate-200 dark:border-white/10 pb-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Competencies
          </button>
          {skillsData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {getIcon(cat.iconName)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => {
            if (!category) return null;
            const badgeClasses = getCategoryBadgeStyles(category.colorScheme);

            return (
              <div
                key={category.id}
                className="flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300 p-6 md:p-7 relative overflow-hidden group"
              >
                {/* Header of Column */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl border ${badgeClasses}`}>
                    {getIcon(category.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {category.skills.length} Modules
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {category.tagline}
                </p>

                {/* Skills List inside Category */}
                <div className="space-y-4 flex-1">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5 font-semibold text-sm text-slate-800 dark:text-slate-100">
                          {skill.featured && (
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                          )}
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-[11px] font-mono font-medium text-brand-600 dark:text-brand-400">
                          {skill.proficiency}%
                        </span>
                      </div>

                      {/* Mini Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700/60 rounded-full overflow-hidden mb-2.5">
                        <div
                          className="h-full bg-gradient-to-r from-brand-500 to-cyan-400 rounded-full transition-all duration-500"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                        {skill.description}
                      </p>

                      {/* Pill Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {skill.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Highlight */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    Production Proven
                  </span>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1 text-brand-600 dark:text-brand-400 hover:underline font-medium"
                  >
                    View in Action <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
