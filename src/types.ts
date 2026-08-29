export type ProjectCategory = 'All' | 'Healthcare SaaS' | 'Enterprise SaaS' | 'Infrastructure & Analytics';

export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
  isPositive?: boolean;
}

export interface WorkflowStep {
  stepNumber: number;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Healthcare SaaS' | 'Enterprise SaaS' | 'Infrastructure & Analytics';
  domain: string;
  period: string;
  role: string;
  overview: string;
  problemStatement: string;
  baResponsibilities: string[];
  keySolutions: string[];
  deliverables: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  workflow: WorkflowStep[];
  architectureSummary: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  description: string;
  proficiency: number; // 0 to 100
  tags: string[];
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  colorScheme: 'indigo' | 'cyan' | 'emerald' | 'amber';
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  badge?: string;
}

export interface EducationItem {
  id: string;
  type: 'Degree' | 'Program' | 'Certification';
  title: string;
  institution: string;
  location?: string;
  year: string;
  badge: string;
  highlights: string[];
  iconName: string;
}
