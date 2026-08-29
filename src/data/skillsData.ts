import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: 'product-business-analysis',
    title: 'Product Management & Business Analysis',
    tagline: 'Translating business problems into crisp PRDs, Epics, and feature roadmaps',
    iconName: 'Target',
    colorScheme: 'indigo',
    skills: [
      {
        name: 'Product Discovery & Problem Framing',
        description: 'Conducting discovery sessions with stakeholders to identify pain points, define product vision, and prioritize high-impact features.',
        proficiency: 95,
        tags: ['Product Discovery', 'Stakeholder Discovery', 'MVP Definition', 'Value Proposition'],
        featured: true
      },
      {
        name: 'BRD, FRD & PRD Documentation',
        description: 'Authoring clear, comprehensive Product Requirement Documents, Business Requirement Documents, and functional specifications.',
        proficiency: 96,
        tags: ['BRD', 'FRD', 'PRD', 'Product Documentation', 'Functional Specs'],
        featured: true
      },
      {
        name: 'User Stories, Epics & Acceptance Criteria',
        description: 'Translating business requirements into structured Epics and User Stories with testable Given-When-Then Acceptance Criteria.',
        proficiency: 98,
        tags: ['User Stories', 'Epics', 'Acceptance Criteria', 'Behavior-Driven Specs'],
        featured: true
      },
      {
        name: 'Feature Prioritization & Roadmapping',
        description: 'Strategic roadmap planning, MVP scoping, release planning, and prioritization frameworks balancing user value and delivery effort.',
        proficiency: 92,
        tags: ['Product Strategy', 'Roadmapping', 'Feature Prioritization', 'Scope Management'],
        featured: true
      },
      {
        name: 'Stakeholder & Cross-Functional Leadership',
        description: 'Partnering closely with Product Owners, Engineering squads, QA, UI/UX designers, and executive client stakeholders.',
        proficiency: 94,
        tags: ['Stakeholder Management', 'Cross-functional Collaboration', 'Client Demos', 'Feedback Loops']
      },
      {
        name: 'Workflow & Impact Analysis',
        description: 'Analyzing operational business workflows, conducting change management, and performing technical impact analysis.',
        proficiency: 90,
        tags: ['Workflow Analysis', 'Impact Analysis', 'Effort Estimation', 'Change Management']
      }
    ]
  },
  {
    id: 'agile-product-design',
    title: 'Agile Delivery & Product Design (UI/UX)',
    tagline: 'Figma wireframing, user journeys, and full Agile Scrum lifecycle governance',
    iconName: 'Cpu',
    colorScheme: 'cyan',
    skills: [
      {
        name: 'Agile Scrum Delivery & Ceremonies',
        description: 'Driving sprint goals across Sprint Planning, Backlog Grooming, Story Refinement, Sprint Reviews, and Daily Stand-ups.',
        proficiency: 96,
        tags: ['Agile Scrum', 'Sprint Planning', 'Backlog Grooming', 'Story Refinement', 'Sprint Reviews'],
        featured: true
      },
      {
        name: 'Wireframing & UI Prototyping (Figma)',
        description: 'Designing low-to-high fidelity wireframes, clickable mockups, and UI components to communicate clear product vision.',
        proficiency: 92,
        tags: ['Figma', 'Wireframing', 'UI/UX Mockups', 'Rapid Prototyping', 'Component States'],
        featured: true
      },
      {
        name: 'User Flows & Journey Mapping (Miro)',
        description: 'Mapping end-to-end user journeys, system state machines, and business process diagrams in Miro.',
        proficiency: 94,
        tags: ['Miro', 'User Flows', 'Journey Mapping', 'Process Architecture', 'BPMN'],
        featured: true
      },
      {
        name: 'Jira & Backlog Management Tooling',
        description: 'Expert organization of Jira boards, sprints, custom filters, story points, and Trello boards for transparent tracking.',
        proficiency: 95,
        tags: ['Jira Software', 'Trello', 'Confluence', 'Sprint Burndown', 'Issue Tracking']
      },
      {
        name: 'User Acceptance Testing (UAT) & QA Sync',
        description: 'Structuring UAT test scenarios, verifying feature builds against acceptance criteria, and managing bug resolution.',
        proficiency: 93,
        tags: ['UAT Orchestration', 'QA Collaboration', 'Defect Triage', 'Release Verification']
      }
    ]
  },
  {
    id: 'ai-technologies-integrations',
    title: 'AI Product Development & Platforms',
    tagline: 'Salesforce ecosystem, Einstein AI, ChatGPT, DocuSign, and AWS S3 integrations',
    iconName: 'Sparkles',
    colorScheme: 'emerald',
    skills: [
      {
        name: 'AI-Assisted Product Development',
        description: 'Leveraging Salesforce Einstein AI, ChatGPT, GitHub Copilot, and AI APIs to automate workflows and accelerate requirements.',
        proficiency: 94,
        tags: ['Salesforce Einstein AI', 'ChatGPT', 'GitHub Copilot', 'AI APIs', 'Prompt Engineering'],
        featured: true
      },
      {
        name: 'Salesforce Ecosystem & Architecture',
        description: 'Driving product definition for Salesforce-based B2B multi-tenant SaaS platforms (Custom Objects, Fields, Flows).',
        proficiency: 92,
        tags: ['Salesforce B2B SaaS', 'Custom Objects & Flows', 'Multi-Tenant Architecture', 'CTMS'],
        featured: true
      },
      {
        name: 'DocuSign & AWS S3 Integrations',
        description: 'Defining integration specifications for AWS S3 document repositories and DocuSign automated digital agreement lifecycles.',
        proficiency: 90,
        tags: ['AWS S3', 'DocuSign API', 'API Workflows', 'Digital Agreements', 'HIPAA/GDPR'],
        featured: true
      },
      {
        name: 'BI Dashboards & Engineering Analytics',
        description: 'Building telemetry dashboards and data models using Microsoft Power BI, Advanced Excel, and AutoCAD infrastructure drafting.',
        proficiency: 88,
        tags: ['Power BI', 'Microsoft Excel', 'AutoCAD', 'Data Analytics', 'Progress Telemetry']
      }
    ]
  }
];
