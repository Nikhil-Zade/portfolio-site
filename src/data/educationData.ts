import type { EducationItem, ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-option-matrix',
    company: 'Option Matrix InfoTech',
    role: 'Business Analyst',
    location: 'Hyderabad, Telangana',
    period: 'Mar 2025 - Present',
    badge: 'Current Role',
    description: 'Driving product definition and feature delivery for a Salesforce-based B2B Clinical Trial Management System (CTMS) used by US healthcare organizations.',
    responsibilities: [
      'Conduct Product Discovery sessions with stakeholders to identify business problems, define product vision, and prioritize high-impact features.',
      'Translate customer and business requirements into Product Requirement Documents (PRDs), BRDs, User Stories, Epics, Acceptance Criteria, and functional specifications.',
      'Partner with Product Owners, Engineering, QA, UI/UX designers, and client stakeholders throughout the complete product lifecycle.',
      'Define MVP scope, feature roadmap, release planning, and sprint goals for multiple product modules.',
      'Create wireframes, workflow diagrams, and product flows using Figma and Miro to communicate product vision.',
      'Participate in Sprint Planning, Backlog Grooming, Story Refinement, Sprint Reviews, and Daily Stand-ups in Agile Scrum environment.',
      'Perform impact analysis, effort estimation, feature prioritization, and change management for product enhancements.',
      'Drive AI-assisted product development by defining workflows powered by Salesforce Einstein AI, ChatGPT, and AI APIs.',
      'Define business workflows for AWS S3 document management and DocuSign digital agreement integrations.',
      'Collaborate closely with global stakeholders to validate requirements through demos, feedback sessions, and iterative product improvements.',
      'Support strategic product roadmap planning for future integrations including EDC, eTMF, REDCap, and patient engagement platforms.'
    ],
    technologies: ['Salesforce', 'Salesforce Einstein AI', 'DocuSign', 'AWS S3', 'Figma', 'Miro', 'Jira', 'Agile Scrum']
  },
  {
    id: 'exp-qloron',
    company: 'Qloron Pvt. Ltd.',
    role: 'Business Analyst',
    location: 'Hyderabad, Telangana',
    period: 'Jan 2023 - Jul 2024',
    badge: 'Enterprise SaaS',
    description: 'Contributed to end-to-end product planning and workflow design for Sortboxs (sortboxs.com) — an all-in-one multi-tenant HR & Business Management SaaS platform.',
    responsibilities: [
      'Conducted Product Discovery sessions with enterprise HR leaders and operations heads to identify friction in disconnected systems and manual spreadsheets.',
      'Architected end-to-end business workflows and authored BRDs, FRDs, Epics, and User Stories with acceptance criteria across HRMS, Automated Payroll, Attendance, Project Tracking, and Lead Management modules.',
      'Designed intuitive wireframes and user journeys in Figma and Miro for Employee Self-Service, HR Admin Dashboards, and Multi-Tenant RBAC hierarchies.',
      'Formulated automated calculation rules connecting biometric/check-in attendance logs directly into compliant payroll processing, eliminating manual spreadsheet errors.',
      'Collaborated daily with Engineering, QA, and UI teams across two-week Agile Scrum sprints, backlog grooming, and user story refinement.',
      'Facilitated User Acceptance Testing (UAT), gathered usability feedback from pilot clients, and prioritized iterative enhancements for release.'
    ],
    technologies: ['Sortboxs SaaS', 'Jira / Confluence', 'Figma', 'Miro', 'BRD / FRD', 'Multi-Tenant RBAC', 'Agile Scrum', 'UAT']
  },
  {
    id: 'exp-ggi',
    company: 'GGI Impact Lab',
    role: 'Strategic Intern – Young Leaders Program (YLP)',
    location: 'Remote',
    period: 'Aug 2023 - Jan 2024',
    badge: 'Strategy & Leadership',
    description: 'Selected for competitive strategic fellowship focused on consulting-style problem articulation and execution.',
    responsibilities: [
      'Assisted in structured problem analysis, documentation, and solution articulation in consulting-style assignments.',
      'Contributed to execution planning across parallel workstreams in a globally distributed setup.',
      'Strengthened stakeholder communication and cross-functional collaboration skills in remote environments.'
    ],
    technologies: ['Strategic Analysis', 'Problem Structuring', 'Cross-functional Collaboration', 'Stakeholder Communication']
  },
  {
    id: 'exp-pachurkar',
    company: 'Pachurkar & Associates',
    role: 'Civil Engineering Analyst',
    location: 'Pune, Maharashtra',
    period: 'Jan 2019 - Jan 2021',
    badge: 'Infrastructure Analytics',
    description: 'Coordinated multi-stakeholder execution and data tracking for 12 kms water pipeline and treatment infrastructure project for Shirdi International Airport.',
    responsibilities: [
      'Liaised with Maharashtra Airport Development Company (MADC), Forest Dept., PWD, and local authorities.',
      'Prepared project estimates, AutoCAD drawings, and progress dashboards (Excel & Power BI).',
      'Supported milestone tracking, risk identification, and on-site quality validation.'
    ],
    technologies: ['Power BI', 'Advanced Excel', 'AutoCAD', 'Inter-Agency Coordination', 'Milestone Telemetry']
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'degree-be-civil',
    type: 'Degree',
    title: 'Bachelor of Engineering (B.E.) in Civil Engineering',
    institution: 'Dr. Babasaheb Ambedkar Marathwada University',
    location: 'Aurangabad, Maharashtra',
    year: 'Jun 2014 - Aug 2018',
    badge: 'Engineering Degree',
    highlights: [
      'Solid analytical, mathematical modeling, and structural problem-solving foundation.',
      'Practical engineering execution, project estimation, and workflow optimization principles.'
    ],
    iconName: 'GraduationCap'
  },
  {
    id: 'program-ylp-ggi',
    type: 'Program',
    title: 'Young Leaders Program (YLP) – Strategy & Consulting',
    institution: 'GGI Impact Lab',
    location: 'Remote',
    year: 'Aug 2023 - Jan 2024',
    badge: 'Strategic Leadership',
    highlights: [
      'Intensive training in structured problem breakdown, hypothesis-driven consulting frameworks, and stakeholder alignment.',
      'Executed parallel research and strategy synthesis workstreams in a globally distributed environment.'
    ],
    iconName: 'Award'
  }
];

export const languagesData = [
  { language: 'English', proficiency: 'Professional Proficiency', level: '100%' },
  { language: 'Hindi', proficiency: 'Native / Bilingual', level: '100%' }
];
