import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  FileDown, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 }
    });

    const resumeContent = `========================================================================================
NIKHIL ZADE | BUSINESS ANALYST & PRODUCT SPECIALIST
nikhildzade@outlook.com | +91-7066720542 | Hyderabad, Telangana | LinkedIn
========================================================================================

SUMMARY:
Business Analyst with 3 years of experience contributing to AI-enabled B2B SaaS product
development and product management across healthcare and enterprise platforms. Experienced in
Product Discovery, requirement gathering, feature prioritization, stakeholder management, Agile
product delivery, and AI-assisted product development. Skilled in translating business problems
into product requirements, writing User Stories, Epics, Acceptance Criteria, and collaborating
with cross-functional teams to deliver scalable digital products. Hands-on experience with Figma,
Miro, Jira, ChatGPT, GitHub Copilot, and Salesforce Einstein AI.

----------------------------------------------------------------------------------------
CORE SKILLS & COMPETENCIES:
----------------------------------------------------------------------------------------
* PRODUCT MANAGEMENT: Product Discovery, Product Strategy, Product Lifecycle Management,
  Feature Prioritization, Product Roadmapping, Stakeholder Management, Cross-functional Collaboration
* BUSINESS ANALYSIS: Requirement Gathering, BRD, FRD, User Stories, Epics, Acceptance Criteria,
  Workflow Analysis, Product Documentation
* AGILE: Scrum, Sprint Planning, Backlog Grooming, Requirement Refinement, Sprint Reviews,
  Agile Product Delivery
* AI PRODUCT DEVELOPMENT: AI-assisted Product Development, ChatGPT, GitHub Copilot,
  Salesforce Einstein AI, AI APIs, Prompt Engineering
* PRODUCT DESIGN: Figma, Miro, Wireframing, User Flows, Journey Mapping, MVP Definition
* TECHNOLOGIES: Salesforce, AWS S3, DocuSign, GitHub, Jira, Trello, Power BI, Excel, AutoCAD
* DOMAIN: B2B SaaS Products, Healthcare SaaS, Multi-Tenant SaaS Platforms

----------------------------------------------------------------------------------------
WORK EXPERIENCE & CAREER PURSUIT:
----------------------------------------------------------------------------------------
Option Matrix InfoTech, Hyderabad
Business Analyst | Mar 2025 - Present
• Driving product definition and feature delivery for a Salesforce-based B2B Clinical Trial
  Management System (CTMS) used by US healthcare organizations.
• Conduct Product Discovery sessions with stakeholders to identify business problems, define
  product vision, and prioritize high-impact features.
• Translate customer and business requirements into Product Requirement Documents (PRDs), BRDs,
  User Stories, Epics, Acceptance Criteria, and functional specifications.
• Partner with Product Owners, Engineering, QA, UI/UX designers, and client stakeholders
  throughout the complete product lifecycle.
• Define MVP scope, feature roadmap, release planning, and sprint goals for multiple modules.
• Create wireframes, workflow diagrams, and product flows using Figma and Miro.
• Participate in Sprint Planning, Backlog Grooming, Story Refinement, Sprint Reviews, and Daily
  Stand-ups in Agile Scrum environment.
• Perform impact analysis, effort estimation, feature prioritization, and change management.
• Drive AI-assisted product development by defining workflows powered by Salesforce Einstein AI,
  ChatGPT, and AI APIs.
• Define business workflows for AWS S3 document management and DocuSign digital agreement integrations.
• Collaborate closely with global stakeholders to validate requirements through demos and feedback.
• Support strategic product roadmap planning for future integrations (EDC, eTMF, REDCap, patient engagement).

Qloron Pvt. Ltd., Hyderabad
Business Analyst | Jan 2023 - Jul 2024
• Contributed to end-to-end product planning and workflow design for Sortboxs (sortboxs.com) — an all-in-one
  multi-tenant HR & Business Management SaaS platform.
• Conducted Product Discovery sessions with enterprise HR and operations leaders to map pain points in
  disconnected tools and spreadsheet sprawl.
• Authored BRDs, FRDs, User Stories, Epics, and Acceptance Criteria across Complete HRMS, Automated Payroll,
  Attendance Tracking, Project Management, Lead Tracking, and Multi-Tenant RBAC modules.
• Designed wireframes and user journeys in Figma/Miro for Employee Self-Service and HR Admin Dashboards.
• Formulated calculation rules linking biometric attendance logs directly to automated compliant payroll processing.
• Collaborated with Engineering, QA, and UI teams throughout Agile Scrum development, backlog grooming, and UAT.

GGI Impact Lab, Remote
Strategic Intern – Young Leaders Program (YLP) | Aug 2023 - Jan 2024
• Assisted in structured problem analysis, documentation, and solution articulation in consulting-style assignments.
• Contributed to execution planning across parallel workstreams in a globally distributed setup.
• Strengthened stakeholder communication and cross-functional collaboration skills in remote environments.

Personal Goal Pursuit | Career Break
UPSC Civil Services Exam Preparation | Jan 2021 – Jan 2023 (2 Years Full-Time Preparation)
• Dedicated 2 years towards UPSC Civil Services Examination, with 2 Mains written — a process
  where only ~1% of ~1.3 million applicants advance to Mains stage annually.
• Gained deep exposure across Polity, Governance, Macroeconomics, International Relations, Ethics,
  Science & Tech, and Social Justice.
• Developed multi-dimensional problem solving, high-pressure resilience, research synthesis,
  and structured critical analysis skills.

Pachurkar & Associates, Pune
Civil Engineering Analyst | Jan 2019 - Jan 2021
• Coordinated multi-stakeholder execution for 12 kms water pipeline and treatment infrastructure project
  for Shirdi International Airport.
• Liaised with Maharashtra Airport Development Company (MADC), Forest Dept., PWD, and local authorities.
• Prepared project estimates, AutoCAD drawings, and progress dashboards (Excel & Power BI).
• Supported milestone tracking, risk identification, and on-site quality validation.

----------------------------------------------------------------------------------------
KEY PROJECTS:
----------------------------------------------------------------------------------------
* SIGNAL - datosX (Clinical Trial Management System)
  - Led product definition for a Salesforce-based B2B CTMS platform connecting Sponsors, Sites,
    and Healthcare Organizations.
  - Defined MVP scope, user journeys, Epics, User Stories, and AI-enabled reporting workflows.
  - Ensured all product workflows aligned with HIPAA and GDPR compliance requirements.

* Medical Life Care Solutions (MLCS) — Healthcare Collaboration Platform (medicallifecaresolutions.com)
  - Led Product Discovery and requirement engineering for a med-legal SaaS platform connecting attorneys,
    clinical evaluators, and certified life care planners.
  - Defined 4-step workflow: Record Review -> Clinical & Cost Analysis -> Report Development -> Case Support.
  - Designed AI medical record chronology extraction workflows and actuarial cost calculation engines for
    lifetime healthcare damages modeling in litigation and settlement.

* Sortboxs — All-in-One HR & Business Management Platform (sortboxs.com)
  - Designed core workflows for an all-in-one SaaS platform unifying HRMS, Automated Payroll, Attendance,
    Project Task Management, and Lead CRM.
  - Authored BRDs, FRDs, User Stories, Multi-Tenant RBAC hierarchies, and automated payroll calculation rules.

----------------------------------------------------------------------------------------
EDUCATION:
----------------------------------------------------------------------------------------
* Dr. Babasaheb Ambedkar Marathwada University, Aurangabad
  Bachelor of Engineering (B.E.) in Civil Engineering | Jun 2014 - Dec 2018

----------------------------------------------------------------------------------------
LANGUAGES:
----------------------------------------------------------------------------------------
* English: Professional
* Hindi: Native
========================================================================================`;

    const element = document.createElement('a');
    const file = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Nikhil_Zade_Business_Analyst_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-fadeIn"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-slide-up">
        
        {/* Top Action Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-900 dark:text-white">
              Nikhil Zade &bull; Official Resume Preview
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-sm transition-colors cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              Download Resume
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200 font-sans text-xs sm:text-sm">
          
          {/* Header Identity */}
          <div className="border-b border-slate-200 dark:border-white/10 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Nikhil Zade
            </h1>
            <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mt-0.5">
              Business Analyst &bull; AI-Enabled B2B SaaS Product Specialist
            </p>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-500" /> Hyderabad, Telangana, India
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-brand-500" /> nikhildzade@outlook.com
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-brand-500" /> +91-7066720542
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">
              Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              Business Analyst with 3 years of experience contributing to AI-enabled B2B SaaS product development and product management across healthcare and enterprise platforms. Experienced in Product Discovery, requirement gathering, feature prioritization, stakeholder management, Agile product delivery, and AI-assisted product development. Skilled in translating business problems into product requirements, writing User Stories, Epics, Acceptance Criteria, and collaborating with cross-functional teams to deliver scalable digital products.
            </p>
          </div>

          {/* Core Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">
              Skills & Methodologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/5">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Product Management & Analysis:</span>
                <p className="text-slate-600 dark:text-slate-400">Product Discovery, PRD, BRD, FRD, User Stories, Epics, Acceptance Criteria, Roadmapping, Backlog Grooming.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/5">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Tools & Platforms:</span>
                <p className="text-slate-600 dark:text-slate-400">Salesforce, Einstein AI, ChatGPT, Figma, Miro, Jira, AWS S3, DocuSign, Power BI, Excel.</p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
              Work Experience & Career Pursuits
            </h2>

            <div className="space-y-4">
              <div className="border-l-2 border-brand-500 pl-4 py-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white text-xs">
                    Business Analyst &bull; Option Matrix InfoTech (Hyderabad)
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Mar 2025 - Present</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Driving product definition and feature delivery for a Salesforce-based B2B Clinical Trial Management System (CTMS) for US healthcare orgs. Managing discovery, PRDs, user stories, Einstein AI summarization, AWS S3, and DocuSign workflows.
                </p>
              </div>

              <div className="border-l-2 border-cyan-500 pl-4 py-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white text-xs">
                    Business Analyst &bull; Qloron Pvt. Ltd. (Sortboxs.com)
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Jan 2023 - Jul 2024</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Contributed to end-to-end product planning and workflow design for Sortboxs (sortboxs.com) — an all-in-one HRMS, automated payroll, attendance, project management, and lead tracking SaaS platform. Created BRDs/FRDs, user stories, wireframes, and multi-tenant RBAC logic.
                </p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-4 py-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white text-xs">
                    Strategic Intern (YLP) &bull; GGI Impact Lab (Remote)
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Aug 2023 - Jan 2024</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Assisted in structured problem analysis, consulting-style documentation, and execution planning across parallel workstreams.
                </p>
              </div>

              <div className="border-l-2 border-indigo-500 pl-4 py-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white text-xs">
                    Personal Goal Pursuit &bull; UPSC Civil Services Exam Preparation
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Jan 2021 – Jan 2023</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Dedicated 2 years towards UPSC CSE, with 2 Mains written. Gained deep exposure in Polity, Governance, Macroeconomics, Ethics, and structured problem-solving.
                </p>
              </div>

              <div className="border-l-2 border-amber-500 pl-4 py-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white text-xs">
                    Civil Engineering Analyst &bull; Pachurkar & Associates (Pune)
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Jan 2019 - Jan 2021</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Coordinated multi-stakeholder execution for 12 kms water pipeline and treatment infrastructure project for Shirdi International Airport (MADC, Forest Dept, PWD) with Power BI analytics.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Languages */}
          <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-1">
                Education
              </h2>
              <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                🎓 B.E. in Civil Engineering &bull; Dr. Babasaheb Ambedkar Marathwada University (2014 - 2018)
              </p>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-1">
                Languages
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                English (Professional) &bull; Hindi (Native)
              </p>
            </div>
          </div>

        </div>

        {/* Modal Bottom CTA */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between sticky bottom-0 z-20">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Official text version ready for instant download
          </span>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-colors cursor-pointer"
          >
            <FileDown className="w-4 h-4" />
            Download Complete Resume
          </button>
        </div>

      </div>
    </div>
  );
};
