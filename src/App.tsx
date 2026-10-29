import { certifications, experiences, languages, profile, projects, skillGroups } from '@/data/profile';
import {
  ArrowUpRight,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';

type Route = '/' | '/skills' | '/experience' | '/projects' | '/education' | '/contact';

const navItems: Array<{ label: string; path: Route }> = [
  { label: 'About', path: '/' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Education', path: '/education' },
  { label: 'Contact', path: '/contact' },
];

function getRoute(): Route {
  const path = window.location.pathname as Route;
  return navItems.some((item) => item.path === path) ? path : '/';
}

function LinkButton({ path, children, primary = false }: { path: Route; children: ReactNode; primary?: boolean }) {
  return <a className={`button ${primary ? 'button-primary' : 'button-ghost'}`} href={path}>{children}</a>;
}

function Header({ route, menuOpen, setMenuOpen }: { route: Route; menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  return <header className="topbar">
    <a className="brand" href="/" onClick={() => setMenuOpen(false)}><span>{profile.name}</span></a>
    <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
      {navItems.map((item) => <a key={item.path} className={route === item.path ? 'active' : ''} href={item.path} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
      <a className="nav-resume" href="/resume/Resume_(1).pdf" download><Download size={15} /> Resume</a>
    </nav>
    <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
  </header>;
}

function Footer() {
  return <footer><span>© {new Date().getFullYear()} {profile.name}</span><span>Designed & built with intention.</span><a href="/">Back to top <ArrowUpRight size={14} /></a></footer>;
}

function PageIntro({ number, title, copy }: { number: string; title: string; copy: string }) {
  return <div className="page-intro section-wrap"><span className="kicker">{number} / Arjun P</span><h1>{title}</h1><p>{copy}</p></div>;
}

function HomePage() {
  return <>
    <section className="hero section-wrap">
      <div className="hero-copy reveal"><div className="availability"><span className="status-dot" /> Computer Science & Engineering undergraduate</div><h1>Building thoughtful software for <em>intelligent</em> systems.</h1><p className="hero-lede">{profile.summary}</p><div className="hero-actions"><LinkButton path="/projects" primary>Explore projects <ArrowUpRight size={17} /></LinkButton><a className="button button-ghost" href={`mailto:${profile.email}`}>Contact me <Mail size={17} /></a></div><div className="hero-meta"><span><MapPin size={15} /> {profile.location}</span><span className="meta-divider" /><span>Python · AI/ML · Backend</span></div></div>
      <div className="hero-visual reveal reveal-delay"><div className="portrait-card"><div className="portrait-glow" /><div className="portrait-placeholder"><img src="/profile/profile.jpeg" alt={`${profile.name} profile`} onError={(event) => { event.currentTarget.style.display = 'none'; }} /><span>{profile.initials}</span><small>Profile photo<br />placeholder</small></div><div className="portrait-caption"><span>Currently exploring</span><strong>Agentic AI & Multi-Agent Systems</strong></div></div><div className="float-card float-top"><Sparkles size={15} /><span>Curious by design</span></div><div className="float-card float-bottom"><Code2 size={15} /><span>Python · Django · APIs</span></div></div>
    </section>
    <section className="stats-strip section-wrap"><div><strong>04</strong><span>Selected projects</span></div><div><strong>02</strong><span>Internship experiences</span></div><div><strong>07</strong><span>Certifications & courses</span></div><div><strong>03</strong><span>Spoken languages</span></div></section>
    <section className="home-links section-wrap"><div><span className="kicker">01 / Explore</span><h2>Everything I’m learning, building, and becoming.</h2></div><div className="home-link-grid">{navItems.slice(1, 5).map((item, index) => <a className="home-link-card" href={item.path} key={item.path}><span>0{index + 1}</span><strong>{item.label}</strong><ArrowUpRight size={18} /></a>)}</div></section>
  </>;
}

function SkillsPage() {
  return <><PageIntro number="01" title="A practical technical toolkit." copy="A growing set of tools shaped by hands-on projects, internships, and focused learning." /><section className="content-section section-wrap page-content"><div className="skills-grid">{skillGroups.map((group, index) => <article className={`skill-card ${index === 5 ? 'skill-wide' : ''}`} key={group.label}><span className="card-number">0{index + 1}</span><h2>{group.label}</h2><div className="chips">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></section></>;
}

function ExperiencePage() {
  return <><PageIntro number="02" title="Learning by building in the real world." copy="Internship experiences across artificial intelligence and full-stack web development." /><section className="content-section section-wrap page-content"><div className="experience-list">{experiences.map((item, index) => <article className="experience-item" key={item.role}><div className="timeline-marker"><span>0{index + 1}</span></div><div className="experience-content"><div className="experience-top"><div><span className="kicker">{item.date}</span><h2>{item.role}</h2><p className="company">{item.company}</p></div>{item.location && <span className="location-tag">{item.location}</span>}</div><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div></section></>;
}

function ProjectsPage() {
  return <><PageIntro number="03" title="Ideas, translated into systems." copy="Every project here reflects a specific curiosity — from financial forecasting to healthcare and developer tooling." /><section className="content-section section-wrap page-content"><div className="projects-grid">{projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.title}><div className="project-art">{index === 1 ? <div className="project-loading"><span className="loading-orbit" /><strong>Building healthcare intelligence</strong><small>Loading framework modules...</small><span className="loading-bar"><i /></span></div> : <img className="project-art-image" src={index === 0 ? '/profile/Screenshot%202026-10-28%20185814.png' : index === 2 ? '/profile/Screenshot%202026-10-30%20002059.png' : index === 3 ? '/profile/Screenshot%202026-10-30%20011513.png' : '/profile/profile.jpeg'} alt={`${project.title} preview`} />}<span className="project-index">0{index + 1}</span></div><div className="project-body"><div className="project-label"><span>{project.eyebrow}</span>{project.status && <b>{project.status}</b>}</div><h2>{project.title}</h2><p>{project.description}</p><ul className="project-bullets">{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="project-footer"><div className="project-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><a className="github-switch" href={project.links.live || project.links.repository} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><span className="github-switch-track"><span className="github-switch-thumb"><ExternalLink size={12} /></span></span><span>GitHub</span></a></div></div></article>)}</div></section></>;
}

function EducationPage() {
  return <><PageIntro number="04" title="Grounded in fundamentals." copy="A computer science foundation supported by consistent learning in AI, software development, and data systems." /><section className="content-section section-wrap page-content education-page"><div className="education-card"><div className="edu-icon"><GraduationCap /></div><div><span className="kicker">{profile.education.date}</span><h2>{profile.education.degree}</h2><p>{profile.education.institution}</p><strong>{profile.education.grade}</strong></div></div><div className="school-list">{profile.education.school.map((school) => <div key={school.title}><div><h3>{school.title}</h3><span>{school.result}</span></div><GraduationCap size={18} /></div>)}</div><div className="certifications"><div className="section-heading"><span className="kicker">05 / Certifications</span><h2>Always learning.</h2></div><div className="cert-list">{certifications.map((cert) => <div className="cert-item" key={cert.name}><div><h3>{cert.name}</h3><p>{cert.issuer}</p></div><span className={cert.status === 'In Progress' ? 'cert-status progress' : 'cert-status'}>{cert.status}</span></div>)}</div></div><div className="languages"><div className="language-intro"><span className="kicker">06 / Beyond code</span><h2>Communication across contexts.</h2></div><div className="language-list">{languages.map((language) => <div key={language.name}><span>{language.name}</span><small>{language.level}</small></div>)}</div></div></section></>;
}

function ContactPage() {
  return <><PageIntro number="07" title="Have a problem worth solving?" copy="I’m open to conversations around software engineering, backend development, and intelligent applications." /><section className="contact-section section-wrap"><div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" /><div className="contact-inner"><Sparkles className="contact-spark" size={20} /><h2>Let’s start a conversation.</h2><p>Whether it’s an idea, a role, or a chance to learn from each other, the best way to reach me is directly.</p><a className="button button-primary" href={`mailto:${profile.email}`}>Send an email <ArrowUpRight size={17} /></a><div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a><a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={16} /> {profile.phone}</a><span><MapPin size={16} /> {profile.location}</span></div></div></section></>;
}

function App() {
  const [route, setRoute] = useState<Route>(getRoute);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => setRoute(getRoute());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleNavigation = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest('a');
      if (!target || !target.href.startsWith(window.location.origin) || target.hasAttribute('download')) return;
      const nextRoute = target.pathname as Route;
      if (!navItems.some((item) => item.path === nextRoute)) return;
      event.preventDefault();
      window.history.pushState({}, '', nextRoute);
      setRoute(nextRoute);
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    document.addEventListener('click', handleNavigation);
    return () => document.removeEventListener('click', handleNavigation);
  }, []);

  const page = route === '/' ? <HomePage /> : route === '/skills' ? <SkillsPage /> : route === '/experience' ? <ExperiencePage /> : route === '/projects' ? <ProjectsPage /> : route === '/education' ? <EducationPage /> : <ContactPage />;
  return <div className="site-shell"><div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grid-overlay" /><Header route={route} menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><main className="page-transition" key={route}>{page}</main><Footer /></div>;
}

export default App;
