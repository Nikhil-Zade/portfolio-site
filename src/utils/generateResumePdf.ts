import { jsPDF } from 'jspdf';

export const generateResumePdf = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginX = 14;
  const marginTop = 15;
  const marginBottom = 15;
  const contentWidth = pageWidth - marginX * 2;

  let currentY = marginTop;

  const ensureSpace = (neededHeight: number) => {
    if (currentY + neededHeight > pageHeight - marginBottom) {
      doc.addPage();
      currentY = marginTop;
      return true;
    }
    return false;
  };

  const drawSectionHeader = (title: string) => {
    ensureSpace(13);
    currentY += 2;

    // Accent left indicator bar
    doc.setFillColor(37, 99, 235); // Brand Blue (#2563eb)
    doc.rect(marginX, currentY - 3.2, 2.5, 4.5, 'F');

    // Title text
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42); // Slate 900
    doc.text(title.toUpperCase(), marginX + 4.5, currentY);

    // Subtle divider line
    const titleWidth = doc.getTextWidth(title.toUpperCase());
    doc.setDrawColor(226, 232, 240); // Slate 200
    doc.setLineWidth(0.35);
    doc.line(marginX + 4.5 + titleWidth + 3, currentY - 0.8, pageWidth - marginX, currentY - 0.8);

    currentY += 4.5;
  };

  // --- HEADER SECTION (PAGE 1) ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42);
  doc.text('NIKHIL ZADE', marginX, currentY);
  currentY += 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(37, 99, 235);
  doc.text('Business Analyst • AI-Enabled B2B SaaS Product Specialist', marginX, currentY);
  currentY += 4.8;

  // Contact line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  const contactText = 'Hyderabad, Telangana, India   •   nikhildzade@outlook.com   •   +91-7066720542   •   linkedin.com/in/nikhilzade';
  doc.text(contactText, marginX, currentY);
  currentY += 3.2;

  // Top divider
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(0.6);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);
  currentY += 3;

  // --- EXECUTIVE SUMMARY ---
  drawSectionHeader('Executive Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const summaryText =
    'Business Analyst with 3 years of experience contributing to AI-enabled B2B SaaS product development and product management across healthcare and enterprise platforms. Experienced in Product Discovery, requirement gathering, feature prioritization, stakeholder management, Agile product delivery, and AI-assisted product development. Skilled in translating business problems into product requirements, writing User Stories, Epics, Acceptance Criteria, and collaborating with cross-functional engineering teams to deliver scalable digital products. Hands-on expertise with Figma, Miro, Jira, ChatGPT, GitHub Copilot, and Salesforce Einstein AI.';

  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, marginX, currentY, { lineHeightFactor: 1.3 });
  currentY += splitSummary.length * 3.8 + 2.5;

  // --- CORE SKILLS & METHODOLOGIES ---
  drawSectionHeader('Core Skills & Methodologies');

  const skills = [
    {
      category: 'Product Management & Analysis:',
      items: 'Product Discovery, PRD, BRD, FRD, User Stories, Epics, Acceptance Criteria, Roadmapping, Backlog Grooming, Feature Prioritization, MVP Scope Definition, Stakeholder Management.',
    },
    {
      category: 'AI Product Development:',
      items: 'Salesforce Einstein AI, ChatGPT, AI APIs, Prompt Engineering, AI Medical Record Chronology Extraction, Document Summarization Workflows, GitHub Copilot.',
    },
    {
      category: 'Agile & Scrum Methodologies:',
      items: 'Sprint Planning, Story Point Estimation, Backlog Refinement, Sprint Reviews, Retrospectives, Stakeholder Demos, User Acceptance Testing (UAT).',
    },
    {
      category: 'Tools & Platforms:',
      items: 'Salesforce, AWS S3, DocuSign, Figma, Miro, Jira, Trello, Confluence, Power BI, Advanced Excel, GitHub, AutoCAD.',
    },
    {
      category: 'Domain Expertise:',
      items: 'B2B SaaS Products, Healthcare SaaS (Clinical Trial Management Systems - CTMS, Med-Legal Collaboration), Multi-Tenant Enterprise HRMS & Payroll.',
    },
  ];

  skills.forEach((skill) => {
    ensureSpace(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);

    // Bullet dot
    doc.setFillColor(37, 99, 235);
    doc.circle(marginX + 1.5, currentY - 1, 0.7, 'F');

    const prefix = `${skill.category} `;
    doc.text(prefix, marginX + 3.5, currentY);
    const prefixWidth = doc.getTextWidth(prefix);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);

    const firstLineAvailable = contentWidth - 3.5 - prefixWidth;
    const remainingText = skill.items;

    const allLines = doc.splitTextToSize(`${prefix}${remainingText}`, contentWidth - 3.5);
    const firstLineItems = doc.splitTextToSize(remainingText, firstLineAvailable)[0];
    doc.text(firstLineItems, marginX + 3.5 + prefixWidth, currentY);

    if (allLines.length > 1) {
      const restOfText = remainingText.substring(firstLineItems.length).trim();
      if (restOfText) {
        const subsequentLines = doc.splitTextToSize(restOfText, contentWidth - 3.5);
        currentY += 3.8;
        doc.text(subsequentLines, marginX + 3.5, currentY, { lineHeightFactor: 1.25 });
        currentY += (subsequentLines.length - 1) * 3.8;
      }
    }
    currentY += 4.5;
  });

  // --- WORK EXPERIENCE & CAREER PURSUITS ---
  drawSectionHeader('Work Experience & Career Pursuits');

  const page1Roles = [
    {
      role: 'Business Analyst',
      company: 'Option Matrix InfoTech',
      location: 'Hyderabad, India',
      period: 'Mar 2025 – Present',
      points: [
        'Driving product definition and feature delivery for a Salesforce-based B2B Clinical Trial Management System (CTMS) for US healthcare organizations.',
        'Conduct Product Discovery sessions with healthcare stakeholders to identify business problems, define product vision, and prioritize high-impact features.',
        'Translate customer and business requirements into Product Requirement Documents (PRDs), BRDs, User Stories, Epics, Acceptance Criteria, and functional specifications.',
        'Partner with Product Owners, Engineering, QA, UI/UX designers, and client stakeholders throughout the complete product lifecycle.',
        'Define MVP scope, feature roadmaps, release planning, and sprint goals for multiple CTMS modules.',
        'Drive AI-assisted product development by architecting workflows powered by Salesforce Einstein AI, ChatGPT, and AI APIs for automated document summarization.',
        'Design business workflows for AWS S3 document repository management and DocuSign digital agreement e-signature integrations.',
        'Participate in Sprint Planning, Backlog Grooming, Story Refinement, and Sprint Reviews in an Agile Scrum environment.',
      ],
    },
    {
      role: 'Business Analyst',
      company: 'Qloron Pvt. Ltd. (Sortboxs.com)',
      location: 'Hyderabad, India',
      period: 'Jan 2023 – Jul 2024',
      points: [
        'Contributed to end-to-end product planning and workflow design for Sortboxs (sortboxs.com) — an all-in-one multi-tenant HR & Business Management SaaS platform.',
        'Conducted Product Discovery sessions with enterprise HR and operations leaders to map pain points in disconnected tools and spreadsheet sprawl.',
        'Authored BRDs, FRDs, User Stories, Epics, and Acceptance Criteria across Complete HRMS, Automated Payroll, Attendance Tracking, Project Task Management, and Multi-Tenant RBAC modules.',
        'Designed wireframes and user journeys in Figma/Miro for Employee Self-Service and HR Admin Dashboards.',
        'Formulated calculation rules linking biometric attendance logs directly to automated compliant payroll processing.',
        'Collaborated with Engineering, QA, and UI teams throughout Agile Scrum development, backlog grooming, and UAT.',
      ],
    },
  ];

  const renderJob = (exp: { role: string; company: string; location: string; period: string; points: string[] }) => {
    ensureSpace(16);

    // Job Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(exp.role, marginX, currentY);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(37, 99, 235);
    const periodWidth = doc.getTextWidth(exp.period);
    doc.text(exp.period, pageWidth - marginX - periodWidth, currentY);
    currentY += 4;

    // Company & Location
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(`${exp.company} • ${exp.location}`, marginX, currentY);
    currentY += 4;

    // Bullet points
    exp.points.forEach((pt) => {
      ensureSpace(8);
      doc.setFillColor(100, 116, 139);
      doc.circle(marginX + 1.5, currentY - 1, 0.55, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.2);
      doc.setTextColor(51, 65, 85);

      const splitPt = doc.splitTextToSize(pt, contentWidth - 4);
      doc.text(splitPt, marginX + 4, currentY, { lineHeightFactor: 1.25 });
      currentY += splitPt.length * 3.5 + 1.2;
    });

    currentY += 2;
  };

  page1Roles.forEach(renderJob);

  // --- PAGE 2 ---
  doc.addPage();
  currentY = marginTop;

  // Header banner on Page 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  const nameW = doc.getTextWidth('NIKHIL ZADE');
  doc.text('NIKHIL ZADE', marginX, currentY);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text(' • Business Analyst Resume (Continued)', marginX + nameW, currentY);

  doc.setTextColor(37, 99, 235);
  const contactSnippet = 'nikhildzade@outlook.com | +91-7066720542';
  const snippetWidth = doc.getTextWidth(contactSnippet);
  doc.text(contactSnippet, pageWidth - marginX - snippetWidth, currentY);
  currentY += 2.5;

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);
  currentY += 2.5;

  drawSectionHeader('Career Pursuits & Earlier Experience');

  const page2Roles = [
    {
      role: 'Strategic Intern – Young Leaders Program (YLP)',
      company: 'GGI Impact Lab',
      location: 'Remote',
      period: 'Aug 2023 – Jan 2024',
      points: [
        'Assisted in structured problem analysis, consulting-style documentation, and solution articulation across parallel client workstreams.',
        'Conducted secondary research, market benchmarking, and quantitative synthesis for strategic decision frameworks.',
        'Strengthened stakeholder communication, executive presentations, and cross-functional collaboration in a distributed team.',
      ],
    },
    {
      role: 'Personal Goal Pursuit | Career Break',
      company: 'UPSC Civil Services Examination Preparation',
      location: 'New Delhi / Pune',
      period: 'Jan 2021 – Jan 2023',
      points: [
        'Dedicated 2 years towards full-time UPSC Civil Services Examination preparation, advancing to write 2 CSE Mains — a selective tier reached by only ~1% of 1.3M+ annual candidates.',
        'Gained deep analytical exposure across Governance, Public Policy, Macroeconomics, Ethics, and Science & Technology.',
        'Honed high-pressure decision resilience, structured critical thinking, research synthesis, and complex problem decomposition skills.',
      ],
    },
    {
      role: 'Civil Engineering Analyst',
      company: 'Pachurkar & Associates',
      location: 'Pune, India',
      period: 'Jan 2019 – Jan 2021',
      points: [
        'Coordinated multi-stakeholder execution for a 12 km water pipeline and treatment infrastructure project for Shirdi International Airport.',
        'Liaised with Maharashtra Airport Development Company (MADC), Forest Dept., PWD, and municipal authorities.',
        'Prepared engineering estimates, AutoCAD diagrams, and progress dashboards using Excel and Power BI.',
      ],
    },
  ];

  page2Roles.forEach(renderJob);

  // --- KEY PRODUCT INITIATIVES ---
  drawSectionHeader('Key Product Initiatives & Case Studies');

  const projects = [
    {
      title: 'SIGNAL - datosX (Clinical Trial Management System - CTMS)',
      tags: 'Salesforce • Healthcare CTMS • AI Workflows • HIPAA/GDPR',
      desc: 'Led product definition for a Salesforce-based B2B CTMS platform connecting Sponsors, Clinical Sites, and Healthcare Orgs. Defined MVP scope, user journeys, Epics, User Stories, AI-enabled reporting workflows, and ensured compliance with HIPAA & GDPR.',
    },
    {
      title: 'Medical Life Care Solutions (MLCS) — Healthcare Med-Legal Platform',
      tags: 'Med-Legal SaaS • AI Chronology • Actuarial Cost Modeling',
      desc: 'Led Product Discovery and requirement engineering for a med-legal SaaS platform connecting attorneys and clinical evaluators. Designed AI medical record chronology extraction workflows and actuarial cost calculation engines for lifetime healthcare damage modeling.',
    },
    {
      title: 'Sortboxs — All-in-One HR & Business Management Platform',
      tags: 'Multi-Tenant SaaS • HRMS • Automated Payroll • RBAC',
      desc: 'Designed core workflows for an all-in-one SaaS platform unifying HRMS, Automated Payroll, Attendance, Project Task Management, and Lead CRM. Authored BRDs, FRDs, User Stories, and Multi-Tenant RBAC hierarchies.',
    },
  ];

  projects.forEach((proj) => {
    ensureSpace(14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(15, 23, 42);

    doc.setFillColor(37, 99, 235);
    doc.circle(marginX + 1.5, currentY - 1, 0.65, 'F');
    doc.text(proj.title, marginX + 3.5, currentY);

    // Tags
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(37, 99, 235);
    const tagsWidth = doc.getTextWidth(proj.tags);
    doc.text(proj.tags, pageWidth - marginX - tagsWidth, currentY);
    currentY += 3.8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.2);
    doc.setTextColor(51, 65, 85);
    const splitDesc = doc.splitTextToSize(proj.desc, contentWidth - 3.5);
    doc.text(splitDesc, marginX + 3.5, currentY, { lineHeightFactor: 1.25 });
    currentY += splitDesc.length * 3.5 + 2.5;
  });

  // --- EDUCATION & LANGUAGES ---
  drawSectionHeader('Education & Languages');
  ensureSpace(14);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(15, 23, 42);
  doc.text('Bachelor of Engineering (B.E.) in Civil Engineering', marginX, currentY);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  const gradYear = '2014 – 2018';
  const gradYearWidth = doc.getTextWidth(gradYear);
  doc.text(gradYear, pageWidth - marginX - gradYearWidth, currentY);
  currentY += 3.8;

  doc.text('Dr. Babasaheb Ambedkar Marathwada University, Aurangabad, Maharashtra', marginX, currentY);
  currentY += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(15, 23, 42);
  doc.text('Languages: ', marginX, currentY);
  const langPrefixWidth = doc.getTextWidth('Languages: ');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('English (Professional Working Proficiency), Hindi (Native)', marginX + langPrefixWidth, currentY);
  currentY += 5;

  // --- FOOTERS ON ALL PAGES ---
  const totalPages = doc.internal.pages.length - 1;
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.line(marginX, pageHeight - 10, pageWidth - marginX, pageHeight - 10);

    doc.text('Nikhil Zade • Business Analyst Resume', marginX, pageHeight - 6.5);

    const pageNumText = `Page ${i} of ${totalPages}`;
    const pageNumWidth = doc.getTextWidth(pageNumText);
    doc.text(pageNumText, pageWidth - marginX - pageNumWidth, pageHeight - 6.5);
  }

  // Save the PDF
  doc.save('Nikhil_Zade_Business_Analyst_Resume.pdf');
};
