import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  Building2, 
  Zap,
  Sparkles,
  MapPin,
  Phone
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const stats = [
    {
      icon: TrendingUp,
      value: '3+ Years',
      label: 'B2B SaaS BA Experience',
      sublabel: 'Healthcare & Enterprise SaaS',
      badgeColor: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      icon: Layers,
      value: '4+ Core',
      label: 'Products & Platforms Delivered',
      sublabel: 'CTMS, LegalTech, HR SaaS & Infra',
      badgeColor: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      icon: Building2,
      value: 'US Healthcare',
      label: 'Clinical Trial Platforms',
      sublabel: 'Sponsors, Sites & Health Orgs',
      badgeColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      icon: Zap,
      value: 'AI-Enabled',
      label: 'Product Workflows Driven',
      sublabel: 'Salesforce Einstein AI, ChatGPT & APIs',
      badgeColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    }
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients & Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-gradient-to-tr from-brand-600/15 via-cyan-500/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-brand-500/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Executive Subtitle Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-slate-100 dark:bg-slate-800/80 text-brand-600 dark:text-brand-300 border border-slate-300/80 dark:border-white/10 shadow-sm mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-brand-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Business Analyst &bull; AI-Enabled B2B SaaS Product Specialist</span>
          </div>

          {/* High Impact Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
            Bridging{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-brand-500 to-cyan-400 bg-clip-text text-transparent">
              Business Strategy,
            </span>{' '}
            Product Discovery &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              AI-Assisted Delivery.
            </span>
          </h1>

          {/* Value Prop Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-3xl mb-6">
            Hi, I'm <span className="font-semibold text-slate-900 dark:text-white">Nikhil Zade</span>. Business Analyst with 3 years of experience contributing to AI-enabled B2B SaaS product development across healthcare and enterprise platforms. Experienced in Product Discovery, PRD/BRD authoring, Agile Scrum, and architecting workflows with Salesforce Einstein AI, ChatGPT, and modern APIs.
          </p>

          {/* Location & Quick Contact Strip */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400 mb-10">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-500" />
              Hyderabad, Telangana, India
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-brand-500" />
              nikhildzade@outlook.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-500" />
              +91-7066720542
            </span>
          </div>

          {/* CTA Buttons & Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14 w-full">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-102 active:scale-98 transition-all duration-200"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-white/15 shadow-sm hover:scale-102 active:scale-98 transition-all duration-200 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-brand-500" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-transparent hover:border-slate-300 dark:hover:border-white/10 transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-cyan-500" />
              <span>Get in Touch</span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-slate-300 dark:sm:border-white/10">
              <a
                href="https://www.linkedin.com/in/nikhilzade"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-brand-50 dark:hover:bg-brand-950/50 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200 dark:border-white/10 transition-all duration-200 shadow-sm"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-brand-50 dark:hover:bg-brand-950/50 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200 dark:border-white/10 transition-all duration-200 shadow-sm"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Trust Highlights Checklist */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400 mb-16">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Salesforce & Einstein AI Workflows
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Product Discovery & PRD / BRD Authoring
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Agile Scrum & Backlog Grooming
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Figma & Miro Wireframing
            </span>
          </div>

        </div>

        {/* Key Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative group p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md dark:hover:border-brand-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2.5 rounded-xl border ${stat.badgeColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">0{idx + 1}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
