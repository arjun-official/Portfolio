export type LinkSet = {
  live?: string;
  repository?: string;
  documentation?: string;
};

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  bullets: string[];
  status?: string;
  image?: string;
  links: LinkSet;
};

export type Experience = {
  role: string;
  company: string;
  date: string;
  location: string;
  bullets: string[];
};

export const profile = {
  name: 'Arjun P',
  initials: 'AP',
  location: 'Chennai, Tamil Nadu, India',
  phone: '+91 9633371362',
  email: 'arjunpoffc@gmail.com',
  links: {
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  summary:
    'Computer Science and Engineering undergraduate with internship experience in Python Django development, REST API development, and exposure to Agentic AI and Multi-Agent Systems. Experienced in developing a clinical management system and AI-powered applications. Skilled in Python, SQL, Django, MySQL, Git, and API testing using Postman. Interested in software engineering, backend development, and building reliable intelligent systems.',
  education: {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'SRM Institute of Science and Technology, Ramapuram',
    date: 'Expected 2027',
    grade: 'CGPA: 8.71 / 10',
    school: [
      { title: 'Class XII — Arya Central School (CBSE)', result: '2023 · 75%' },
      { title: 'Class X — Christ Nagar Higher Secondary School (CISCE)', result: '2021 · 89%' },
    ],
  },
};

export const skillGroups = [
  { label: 'Programming languages', items: ['Python', 'C', 'C++', 'SQL'] },
  { label: 'Backend development', items: ['Python Django', 'REST APIs'] },
  { label: 'Web technologies', items: ['HTML5', 'CSS3'] },
  { label: 'Databases', items: ['MySQL'] },
  { label: 'Development tools', items: ['Git', 'GitHub', 'Postman'] },
  { label: 'AI & machine learning', items: ['Machine Learning', 'NLP', 'Generative AI', 'LLM Applications', 'Agentic AI', 'Multi-Agent Systems', 'Prompt Engineering'] },
  { label: 'Additional skills', items: ['API Testing', 'Technical Documentation', 'AI Workflow Automation', 'Data Analytics'] },
];

export const experiences: Experience[] = [
  {
    role: 'AI Intern',
    company: 'IBM Technology',
    date: 'Jul 2025 — Aug 2025',
    location: 'Remote',
    bullets: [
      'Explored Agentic AI and Multi-Agent Systems through practical projects and technical learning.',
      'Worked with IBM Cloud technologies and studied AI deployment concepts.',
      'Studied autonomous AI agents, orchestration frameworks, and intelligent decision-making systems.',
    ],
  },
  {
    role: 'Full Stack Web Development Intern',
    company: 'Faith InfoTech, Thiruvananthapuram',
    date: 'Jun 2025',
    location: '',
    bullets: [
      'Developed a Clinical Management System using Python Django and MySQL.',
      'Built REST APIs to support backend communication and application integration.',
      'Used Postman to test and validate API endpoints.',
      'Applied HTML5, CSS3, Django, and MySQL in full-stack application development.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Stock Market Prediction Using CNN-LSTM Architecture',
    eyebrow: 'Predictive analytics',
    description: 'A stock market prediction system using a hybrid CNN-LSTM architecture to model patterns in historical stock price data.',
    technologies: ['Python', 'CNN-LSTM', 'Machine Learning', 'YFinance API'],
    bullets: [
      'Integrated the Yahoo Finance API through YFinance to retrieve stock market data for analysis and prediction.',
      'Applied convolutional and recurrent neural network techniques to learn patterns and sequential dependencies in stock price data.',
      'Incorporated stop-loss calculation functionality to support risk-aware analysis of predicted price movements.',
    ],
    links: { repository: 'https://github.com/arjun-official/StockPrediction-CNN-LSTM-Model' },
  },
  {
    title: 'Hybrid AI Framework for Health Risk Assessment and Severity-Triggered Emergency Response System',
    eyebrow: 'Healthcare AI',
    description: 'A multi-agent healthcare framework for health risk assessment, medical report analysis, and severity-based response workflows.',
    technologies: ['Machine Learning', 'Multi-Agent Systems', 'Healthcare AI'],
    status: 'In Progress',
    bullets: [
      'Developing the project around analysis of patient symptoms, medical reports, prescriptions, and health vitals to support risk assessment.',
      'Defining a 1–10 severity scale with response workflows for different risk levels.',
      'Proposing smart ring and smartwatch integration for continuous health monitoring and automated emergency escalation.',
    ],
    links: { repository: 'https://github.com/arjun-official/HEALTH_TECH_AI' },
  },
  {
    title: 'Medical AI Bot',
    eyebrow: 'Conversational healthcare',
    description: 'An AI-powered healthcare chatbot for symptom analysis and healthcare guidance, with disease severity classification.',
    technologies: ['Python', 'Machine Learning', 'NLP'],
    bullets: [
      'Developed an AI-powered healthcare chatbot to predict diseases from user-provided symptoms.',
      'Implemented disease severity classification to support preliminary health risk assessment.',
      'Built a conversational interface for symptom analysis and healthcare guidance.',
    ],
    links: { repository: 'https://github.com/arjun-official/Medical_Bot' },
  },
  {
    title: 'Flight Review Tracker Support Agent',
    eyebrow: 'Aviation analytics automation',
    description: 'An intelligent support tool for flight data analysts that reviews customer feedback, identifies the key flight and service issues, and automates accurate, context-aware responses.',
    technologies: ['ML', 'Automation', 'CNN'],
    bullets: [
      'Analyzes flight review data to identify recurring customer concerns, service patterns, and areas requiring attention.',
      'Uses machine learning to classify review context and support consistent responses for different customer situations.',
      'Automates analyst workflows by turning review insights into clear, accurate, and timely customer replies.',
    ],
    links: { repository: 'https://google.com' },
  },
];

export const certifications = [
  { name: 'OCI Agentic AI Professional', issuer: 'Oracle', status: 'In Progress' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services (AWS)', status: 'In Progress' },
  { name: 'From Learner to Builder: Become an AI Agent Architect', issuer: 'IBM SkillsBuild', status: 'Completed' },
  { name: 'C Programming: Increase Career Options and Become a Better Developer', issuer: 'Tim Buchalka, Udemy', status: 'Completed' },
  { name: 'Machine Learning A-Z [2026]: ML, DL, AI with AWS, Python & R', issuer: 'Udemy', status: 'Completed' },
  { name: 'Database and Management System', issuer: 'NPTEL', status: 'Completed' },
];

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Malayalam', level: 'Bilingual' },
  { name: 'French', level: 'Elementary' },
];
