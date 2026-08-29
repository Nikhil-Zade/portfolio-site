import React from 'react';
import {
  ArrowUp,
  Mail,
  Phone,
  FileText,
  MapPin
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#060911] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Col 1: Identity & Persona */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <span className="font-bold text-base text-slate-900 dark:text-white block">
                Nikhil Zade
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Business Analyst & AI-Enabled B2B SaaS Specialist
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Translating business problems into product requirements, User Stories, and scalable AI-assisted workflows across healthcare and enterprise SaaS platforms.
            </p>

            <div className="flex flex-col gap-1.5 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-500" /> Hyderabad, Telangana, India
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-500" /> nikhildzade@outlook.com
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-500" /> +91-7066720542
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/nikhilzade"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 text-slate-600 dark:text-slate-400 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 text-slate-600 dark:text-slate-400 transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:nikhildzade@outlook.com"
                aria-label="Email"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 text-slate-600 dark:text-slate-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a href="#hero" className="hover:text-brand-500 transition-colors">Overview</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-500 transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-brand-500 transition-colors">Work Experience & Education</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-500 transition-colors">Get in Touch</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Executive Assets
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Nikhil Zade Resume (Preview & Download)</span>
              </button>
              <div className="text-xs text-slate-500 dark:text-slate-400 pt-2">
                Available for full-time Business Analyst / Product Specialist opportunities in B2B SaaS and healthcare domains.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Nikhil Zade. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
