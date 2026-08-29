import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'signal-datosx-ctms',
    title: 'SIGNAL - datosX (Clinical Trial Management System)',
    subtitle: 'Salesforce-based B2B CTMS for Sponsors, Sites & Healthcare Orgs',
    category: 'Healthcare SaaS',
    domain: 'Healthcare SaaS & Clinical Trials Operations',
    period: '2025 - Present',
    role: 'Lead Business Analyst',
    overview: 'Led product definition and feature delivery for a multi-tenant Salesforce-based Clinical Trial Management platform connecting clinical sponsors, trial sites, and healthcare organizations across the US.',
    problemStatement: 'Clinical trial stakeholders operated in disjointed silos, leading to fragmented sponsor communication, manual protocol review bottlenecks, inefficient paper-based agreement tracking, and non-standardized study reporting.',
    baResponsibilities: [
      'Conducted continuous Product Discovery sessions with healthcare stakeholders to define product vision and prioritize high-impact capabilities.',
      'Authored comprehensive Product Requirement Documents (PRDs), BRDs, User Stories, Epics, and Acceptance Criteria for end-to-end clinical trial lifecycles.',
      'Designed intuitive wireframes, workflow diagrams, and interactive product flows using Figma and Miro.',
      'Defined business integration specifications for AWS S3 secure document management and DocuSign digital agreement execution.',
      'Engineered AI-enabled reporting workflows leveraging Salesforce Einstein AI and AI APIs to automate clinical study summaries and sponsor progress reports.',
      'Orchestrated Sprint Planning, Backlog Grooming, Story Refinement, Sprint Reviews, and Daily Stand-ups in an Agile Scrum environment.'
    ],
    keySolutions: [
      'Architected end-to-end sponsor onboarding, clinical site management, and protocol review workflows.',
      'Implemented automated document management pipelines utilizing AWS S3 and DocuSign e-signatures.',
      'Designed AI-assisted clinical study summary generators reducing reporting latency significantly.',
      'Ensured strict compliance governance adhering to HIPAA and GDPR healthcare standards.'
    ],
    deliverables: [
      'Comprehensive PRDs & BRDs (CTMS Modules)',
      'User Story Backlog with Gherkin Acceptance Criteria',
      'Figma Wireframes & Miro Process Maps',
      'AWS S3 & DocuSign Integration Blueprints',
      'HIPAA & GDPR Compliance Traceability Matrix',
      'Future Integration Specs (EDC, eTMF, REDCap)'
    ],
    techStack: [
      'Salesforce Ecosystem',
      'Salesforce Einstein AI',
      'AWS S3',
      'DocuSign API',
      'Figma',
      'Miro',
      'Jira / Agile Scrum',
      'AI APIs & Prompt Engineering'
    ],
    metrics: [
      { label: 'Study Summary Gen Time', value: '-65%', subtext: 'Powered by Einstein AI', isPositive: true },
      { label: 'Agreement Turnaround', value: '-50%', subtext: 'DocuSign automated flow', isPositive: true },
      { label: 'Stakeholder Alignment', value: '100%', subtext: 'Validated through demos', isPositive: true },
      { label: 'Compliance Level', value: 'HIPAA/GDPR', subtext: 'Strict patient data privacy', isPositive: true }
    ],
    workflow: [
      {
        stepNumber: 1,
        phase: 'Product Discovery',
        title: 'Stakeholder Interviews & Problem Definition',
        description: 'Engaged with US healthcare sponsors, trial site coordinators, and clinical leads to map operational friction in study management and document workflows.',
        deliverables: ['Product Vision Document', 'Stakeholder Journey Maps', 'MVP Scope & Feature Matrix']
      },
      {
        stepNumber: 2,
        phase: 'Requirement Definition',
        title: 'PRDs, Epics, User Stories & Wireframing',
        description: 'Authored granular functional specs, Epics, and developer-ready User Stories with Acceptance Criteria. Created clickable low/mid-fi wireframes in Figma and Miro.',
        deliverables: ['Detailed PRD Suite', 'Figma Product Flows', 'Integration Sequence Diagrams']
      },
      {
        stepNumber: 3,
        phase: 'Agile Execution & AI Integration',
        title: 'Sprint Delivery & AI Workflow Orchestration',
        description: 'Collaborated with engineering, QA, and UI/UX squads across two-week sprints. Defined AI prompt pipelines in Salesforce Einstein for automated study summarization.',
        deliverables: ['Sprint Backlog Grooming Logs', 'AI Prompt Guidelines', 'DocuSign & AWS S3 Specs']
      },
      {
        stepNumber: 4,
        phase: 'Validation & Roadmap Planning',
        title: 'Iterative Demos, UAT & Future Integrations',
        description: 'Conducted live validation demos with global client stakeholders, refined acceptance criteria, and scoped the future roadmap for EDC, eTMF, and REDCap integrations.',
        deliverables: ['UAT Sign-off Checklist', 'Stakeholder Feedback Logs', 'Future Integration Roadmap']
      }
    ],
    architectureSummary: 'Clinical Sponsor / Site Portal -> Salesforce CTMS Core -> Einstein AI Summary Engine -> AWS S3 Document Repository -> DocuSign E-Signature Pipeline.',
    featured: true
  },
  {
    id: 'medical-life-care-solutions-platform',
    title: 'Medical Life Care Solutions (MLCS) — Healthcare Collaboration Platform',
    subtitle: 'Future Care Cost Projections, AI Chronology Summarization & Litigation-Grade Planning',
    category: 'Healthcare SaaS',
    domain: 'Healthcare SaaS, Med-Legal Collaboration, Life Care Planning & Actuarial Cost Estimation',
    period: '2025',
    role: 'Lead Business Analyst & Product Specialist',
    overview: 'Led Product Discovery and workflow engineering for Medical Life Care Solutions (medicallifecaresolutions.com) — an advanced med-legal SaaS platform connecting attorneys, clinical evaluators, and life care planners to analyze, model, and project future medical damages for catastrophic injury and chronic care litigation.',
    problemStatement: 'Evaluating future medical damages for personal injury and chronic disability cases required weeks of manual record reviews across multi-hundred-page provider files, fragmented legal-medical annotations, and complex, error-prone lifetime cost projections requiring defensible actuarial rigor.',
    baResponsibilities: [
      'Conducted in-depth Product Discovery sessions with trial attorneys, certified life care planners, and clinical experts to map end-to-end case intake and evaluation lifecycles.',
      'Authored comprehensive BRD/FRD documentation, User Stories, and Epics for core modules: Record Intake, Clinical Needs Assessment, Future Cost Calculator, and Rebuttal / Methodology Review.',
      'Formulated mathematical business rules and actuarial lookup engines incorporating medical inflation indexers, CPT/HCPCS code pricing tables, and geographic cost multipliers.',
      'Designed AI-assisted medical chronology summarization workflows using AI APIs and prompt engineering to extract key diagnoses, impairments, and treatment milestones from dense EHR dossiers.',
      'Created clickable UI wireframes and user journey maps in Figma and Miro for Collaborative Legal Portals, Case Evaluation Dashboards, and Court-Ready PDF Exports.',
      'Facilitated Agile backlog grooming, sprint planning, and conducted rigorous UAT validation with med-legal specialists to ensure compliance with evidentiary standards.'
    ],
    keySolutions: [
      'Architected 4-step digital workflow engine (Record Review -> Clinical & Cost Analysis -> Report Development -> Case Support) enabling rapid turnarounds on comprehensive Life Care Plans.',
      'Engineered AI-assisted medical record chronology extractor that structures hundreds of pages of unstructured medical records into categorized clinical timelines.',
      'Defined automated actuarial projection tables calculating future costs for surgery, therapy, DME equipment, medications, and attendant care over projected life expectancies.',
      'Built a structured Life Care Plan Review & Rebuttal Analysis module for auditing methodology, clinical assumptions, and pricing deviations in opposing expert reports.'
    ],
    deliverables: [
      'Comprehensive BRD / FRD Suite (Life Care Planning, Cost Engine & Review Modules)',
      'Actuarial Multiplier & Future Care Calculation Rules Specification',
      'User Story Backlog with Gherkin Evidentiary Acceptance Criteria in Jira',
      'Figma Interactive Wireframes for Attorney and Clinical Evaluator Dashboards',
      'AI Medical Chronology Extraction Prompt Architecture & Field Mappings',
      'UAT Defect Tracker, Evidentiary Verification Matrix & User Training Playbooks'
    ],
    techStack: [
      'Medical Life Care Planning Architecture',
      'AI APIs & Prompt Engineering (Medical Chronology Extraction)',
      'Figma & Miro (Med-Legal User Flows & Wireframes)',
      'Jira / Confluence (Agile Scrum Delivery)',
      'Actuarial & CPT/HCPCS Cost Schemas',
      'REST APIs & Document Parsing Pipelines'
    ],
    metrics: [
      { label: 'Plan Drafting Velocity', value: '-60%', subtext: 'AI medical chronology & cost engine', isPositive: true },
      { label: 'Calculation Accuracy', value: '99.9%', subtext: 'Grounded in actuarial multipliers', isPositive: true },
      { label: 'Record Review Speed', value: '3x Faster', subtext: 'Automated clinical data extraction', isPositive: true },
      { label: 'Report Defensibility', value: 'Litigation-Ready', subtext: 'Built for court & mediation', isPositive: true }
    ],
    workflow: [
      {
        stepNumber: 1,
        phase: 'Discovery & Personas',
        title: 'Med-Legal Stakeholder Discovery & Persona Mapping',
        description: 'Interviewed personal injury attorneys, life care planners, and medical economists to define distinct personas and uncover bottlenecks in records intake and damages calculation.',
        deliverables: ['Med-Legal Persona Profiles', 'Case Intake Journey Maps', 'MVP Scope & Evidentiary Requirements']
      },
      {
        stepNumber: 2,
        phase: 'Logic & Architecture',
        title: 'Business Rules, Cost Engine & AI Extraction Specs',
        description: 'Engineered math logic for life expectancy calculations, medical inflation indexing, CPT cost lookups, and structured AI prompt guidelines for medical chronology synthesis.',
        deliverables: ['Actuarial Cost Rules Matrix', 'AI Chronology Prompt Blueprints', 'Figma Interactive Wireframes']
      },
      {
        stepNumber: 3,
        phase: 'Sprint Execution',
        title: 'Agile Backlog Refinement & Cross-Functional Delivery',
        description: 'Collaborated with engineering squads across two-week Agile sprints. Refined user stories, validated edge cases for pediatric/catastrophic cost curves, and mapped export data schemas.',
        deliverables: ['Sprint User Story Backlog', 'Calculation Test Harness Specs', 'API Field Mappings']
      },
      {
        stepNumber: 4,
        phase: 'Evidentiary Validation',
        title: 'UAT Sign-off & Defensible Report Export Verification',
        description: 'Conducted rigorous User Acceptance Testing with trial lawyers and certified planners, ensuring exported reports met evidentiary standards for court, mediation, and arbitration.',
        deliverables: ['UAT Sign-off Matrix', 'Litigation Report Template Guide', 'Commercial Release Notes']
      }
    ],
    architectureSummary: 'EHR / Medical Record Upload -> AI Medical Chronology Extractor -> Clinical & Support Needs Engine -> Actuarial Cost & Damages Calculator -> Collaborative Review Portal -> Court-Admissible PDF Export.',
    featured: true
  },
  {
    id: 'sortboxs-hr-business-platform',
    title: 'Sortboxs — All-in-One HR & Business Management Platform',
    subtitle: 'Unified SaaS for HRMS, Automated Payroll, Attendance, Project Tracking & Leads',
    category: 'Enterprise SaaS',
    domain: 'Enterprise SaaS, HRMS, Payroll & Operations Workflow Automation',
    period: '2023 - 2024',
    role: 'Business Analyst (Qloron Pvt. Ltd.)',
    overview: 'Contributed to end-to-end product workflow architecture, BRD/FRD authoring, and Agile feature delivery for Sortboxs (sortboxs.com) — an all-in-one multi-tenant SaaS platform unifying HRMS, automated payroll, attendance, project management, and lead tracking.',
    problemStatement: 'Growing enterprises suffered from disconnected systems where HR, attendance, payroll, task management, and sales leads operated in separate tools without a single source of truth—leading to manual repetitive tasks, spreadsheet sprawl, severe payroll calculation errors, and lack of real-time operational visibility.',
    baResponsibilities: [
      'Conducted in-depth Product Discovery sessions with business heads and HR admins to map friction across employee onboarding, attendance, payroll cutoffs, and project tracking.',
      'Authored comprehensive Business Requirement Documents (BRDs), Functional Requirement Documents (FRDs), Epics, and User Stories with granular Acceptance Criteria for core modules.',
      'Designed end-to-end business workflows and interactive wireframes in Figma and Miro for Complete HRMS, Automated Payroll Processing, Leave & Attendance, Project Management, Lead Tracking, and Multi-Tenant RBAC.',
      'Collaborated daily with Engineering, QA, and UI/UX teams throughout bi-weekly Agile Scrum sprints, backlog grooming, and user story refinement.',
      'Formulated automated rule-based calculations for compliant payroll processing, tax deductions, leave carryovers, and multi-tier approval hierarchies.',
      'Facilitated User Acceptance Testing (UAT), gathered usability feedback from pilot enterprise users, and prioritized iterative enhancements.'
    ],
    keySolutions: [
      'Architected unified cross-module workflows connecting employee attendance logs directly into the automated payroll engine, eliminating manual calculation errors.',
      'Designed multi-tenant role-based access control (RBAC) supporting isolated organization tenants, admin hierarchies, and employee self-service portals.',
      'Defined modular project management and lead tracking workflows to unify operations, sprint task tracking, and pipeline management under one platform.',
      'Created wireframes for the Sortboxs Chat Box and approval notification workflows to streamline internal cross-department collaboration.'
    ],
    deliverables: [
      'Comprehensive BRDs & FRDs (HRMS, Payroll, Attendance, Projects & Leads Modules)',
      'User Story Backlog with Given-When-Then Acceptance Criteria in Jira',
      'Figma Wireframes & User Journey Flows for Employee Self-Service & Admin Dashboards',
      'Multi-Tier Approval Hierarchy & Payroll Calculation Business Rules Matrix',
      'Multi-Tenant RBAC Permission Architecture Blueprint',
      'UAT Test Scripts, Usability Reports & Release Documentation'
    ],
    techStack: [
      'Sortboxs Multi-Tenant Architecture',
      'Figma & Miro (UI/UX Wireframing & Flow Diagrams)',
      'Jira & Confluence (Agile Scrum Governance)',
      'REST APIs & Webhooks',
      'B2B SaaS Workflow Automation',
      'Role-Based Access Control (RBAC)'
    ],
    metrics: [
      { label: 'Payroll & Admin Time', value: '-60%', subtext: 'Automated attendance-to-payroll sync', isPositive: true },
      { label: 'Disjointed Tools', value: '1 Unified Suite', subtext: 'Replaced multiple point solutions', isPositive: true },
      { label: 'Approval Turnaround', value: '<24 hrs', subtext: 'Multi-level automated routing', isPositive: true },
      { label: 'Payroll Accuracy', value: '99.9%', subtext: 'Eliminated manual calculation errors', isPositive: true }
    ],
    workflow: [
      {
        stepNumber: 1,
        phase: 'Product Discovery',
        title: 'Multi-Module Pain Point Mapping',
        description: 'Interviewed enterprise HR managers, project leads, and operations directors to identify bottlenecks in disconnected spreadsheets, attendance anomalies, and manual payroll calculations.',
        deliverables: ['Sortboxs Product Vision Map', 'Persona Journey Maps (Admin, Manager, Employee)', 'Module Interdependency Matrix']
      },
      {
        stepNumber: 2,
        phase: 'Workflow Architecture',
        title: 'BRD, FRD, Business Logic & Wireframing',
        description: 'Authored exhaustive BRD/FRD specs for HRMS, Payroll, Attendance, Project Management, and Lead CRM. Created clickable low-to-mid fidelity wireframes in Figma and workflow logic diagrams in Miro.',
        deliverables: ['Module-Specific BRD/FRD Suite', 'Attendance-to-Payroll Business Rules Matrix', 'Figma Interactive Wireframes']
      },
      {
        stepNumber: 3,
        phase: 'Agile Sprint Execution',
        title: 'Sprint Backlog Grooming & Cross-Functional Governance',
        description: 'Partnered with development squads across two-week Agile sprints in Jira. Conducted story refinement, defined edge-case handling for leave accruals, and validated API payload specifications.',
        deliverables: ['Jira Epics & User Stories', 'API Field Requirement Blueprints', 'Sprint Clarification Logs']
      },
      {
        stepNumber: 4,
        phase: 'UAT & Platform Rollout',
        title: 'Pilot UAT, User Feedback & Release Governance',
        description: 'Led end-to-end User Acceptance Testing with pilot client organizations, validating real-world payroll runs, project boards, and lead management workflows before commercial rollout.',
        deliverables: ['UAT Sign-off Checklist', 'Admin & Employee User Onboarding Playbook', 'Feature Release Notes']
      }
    ],
    architectureSummary: 'Multi-Tenant Client Layer -> Role-Based Employee Self-Service & Admin Portal -> Core Workflow Engine (HRMS, Attendance, Payroll, Projects, Leads) -> In-App Chat & Notification Service -> Export & Reporting APIs.',
    featured: true
  },
  {
    id: 'shirdi-airport-infrastructure-analytics',
    title: 'Shirdi International Airport Water Infrastructure & Analytics',
    subtitle: '12 km Pipeline & Treatment Facility Telemetry and Multi-Agency Execution',
    category: 'Infrastructure & Analytics',
    domain: 'Infrastructure Projects, Analytics & Public Sector Coordination',
    period: '2019 - 2021',
    role: 'Civil Engineering Analyst (Pachurkar & Associates)',
    overview: 'Coordinated multi-stakeholder execution and data-driven project tracking for a 12 km dedicated water pipeline and treatment infrastructure project for Shirdi International Airport.',
    problemStatement: 'The newly operational international airport faced critical water supply constraints requiring multi-departmental right-of-way permissions, stringent terrain engineering, and complex multi-agency governance.',
    baResponsibilities: [
      'Liaised and coordinated between Maharashtra Airport Development Company (MADC), Forest Department, PWD, and local civic authorities.',
      'Prepared detailed engineering project estimates, hydraulic calculations, and AutoCAD infrastructure layout drawings.',
      'Built and maintained executive progress dashboards using Microsoft Excel and Power BI for milestone and burn-rate tracking.',
      'Supported risk identification, dependency mapping, and on-site quality validation across active construction zones.'
    ],
    keySolutions: [
      'Established unified inter-agency progress tracking dashboards in Power BI, reducing milestone review friction.',
      'Optimized pipeline route alignment through terrain data analysis, avoiding costly forest clearance delays.',
      'Implemented daily on-site quality verification check-sheets ensuring zero structural non-conformances.'
    ],
    deliverables: [
      'Comprehensive Project Cost Estimates & Bill of Quantities',
      'AutoCAD Route Layouts & Hydraulic Gradient Schemas',
      'Power BI Executive Milestone Tracking Dashboards',
      'Inter-Agency Regulatory Compliance Dossiers',
      'On-Site Quality & Risk Verification Reports'
    ],
    techStack: [
      'Microsoft Power BI',
      'Advanced Excel',
      'AutoCAD',
      'Multi-Stakeholder Project Governance',
      'Milestone Analytics'
    ],
    metrics: [
      { label: 'Pipeline Length', value: '12 km', subtext: 'Dedicated airport water supply', isPositive: true },
      { label: 'Regulatory Approvals', value: '100%', subtext: 'MADC, Forest Dept & PWD', isPositive: true },
      { label: 'Milestone Tracking', value: 'Real-Time', subtext: 'Power BI visual dashboards', isPositive: true },
      { label: 'Quality Conformity', value: '100%', subtext: 'Passed all municipal audits', isPositive: true }
    ],
    workflow: [
      {
        stepNumber: 1,
        phase: 'Feasibility & Estimation',
        title: 'Terrain Survey & Cost Estimation',
        description: 'Evaluated topographical surveys and prepared granular Bill of Quantities (BOQ) and cost estimations for the 12 km pipeline corridor.',
        deliverables: ['Detailed Project Report', 'BOQ Cost Model', 'Initial Risk Log']
      },
      {
        stepNumber: 2,
        phase: 'Inter-Agency Liaison',
        title: 'Regulatory Permissions & Alignment',
        description: 'Coordinated joint site inspections with MADC, Forest Department, and PWD to clear right-of-way clearances and environmental safeguards.',
        deliverables: ['Right-of-Way Approvals', 'Statutory Compliance Matrix', 'Agency Minutes of Meeting']
      },
      {
        stepNumber: 3,
        phase: 'Execution Analytics',
        title: 'Power BI Dashboarding & Telemetry',
        description: 'Designed automated progress dashboards tracking daily pipelaying footage, material burn rates, and contractor performance.',
        deliverables: ['Power BI Milestone Dashboard', 'Weekly Executive Variance Reports']
      },
      {
        stepNumber: 4,
        phase: 'Quality & Handover',
        title: 'Pressure Testing & Quality Sign-off',
        description: 'Facilitated hydrostatic pressure testing, water treatment plant quality audits, and final commissioning documentation for MADC handover.',
        deliverables: ['Quality Assurance Dossier', 'Hydrostatic Test Logs', 'Commissioning Handover Report']
      }
    ],
    architectureSummary: 'Water Source & Treatment Plant -> 12 km High-Pressure Pipeline -> Shirdi International Airport Reservoir -> Telemetry Analytics Dashboard.',
    featured: false
  }
];
