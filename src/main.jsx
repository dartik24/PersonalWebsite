import React from 'react';
import { createRoot } from 'react-dom/client';
import resume from '../CurrentResume.pdf?url';
import profilePhoto from '../IMG_4862.jpg';
import './style.css';

const email = 'timofey.fayzullin123@gmail.com';
const linkedin = 'https://www.linkedin.com/in/timofey-fayzullin-b78bb5192/';

const experience = [
  {
    company: 'ARA & PIERS Labs', affiliation: 'UMass Lowell · NSF AICaring grant',
    role: 'Research Assistant', date: 'Jun 2024 — Present',
    points: [
      'Designed, conducted, and analyzed human-robot interaction studies.',
      'Developed an inference-enabled voice user interface integrating GPT-4o, ROS 2, and autonomous task execution on the Hello Robot Stretch platform.',
      'Prepared and presented reports for academic conferences, research meetings, and instructional sessions.',
    ],
    tags: ['Human-robot interaction', 'ROS 2', 'Voice interfaces'],
  },
  {
    company: 'Raytheon', role: 'Software Engineer', date: 'Sep 2023 — Dec 2023',
    points: [
      'Converted and modernized hardware drivers using C and C++.',
      'Used Git-based version-control workflows to develop, review, and integrate production software.',
      'Collaborated with multidisciplinary engineering teams to diagnose and resolve software and hardware integration issues.',
    ],
    tags: ['C / C++', 'Hardware integration', 'Git'],
  },
  {
    company: 'ID Tech', role: 'Programming Instructor', date: 'Jun 2021 — Aug 2022',
    points: [
      'Taught introductory programming and machine learning concepts to students across varying experience levels.',
      'Developed weekly curricula, assessed student progress, and provided individualized technical feedback.',
    ],
    tags: ['Programming', 'Machine learning', 'Teaching'],
  },
];

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Timofey Fayzullin home">tf<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#experience">Experience</a><a href="#research">Research</a>
          <a className="nav-contact" href="#contact">Let’s connect</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">PHD STUDENT & RESEARCH ASSISTANT</p>
            <div className="hero-heading">
              <h1 id="hero-title">Timofey Fayzullin</h1>
              <img className="profile-photo" src={profilePhoto} alt="Timofey Fayzullin" width="144" height="144" />
            </div>
            <p className="hero-statement">Exploring how people and robots work together.</p>
            <p className="hero-description">Human-robot interaction, voice user interfaces, and assistive robotics at UMass Lowell.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${email}`}>Get in touch</a>
              <a className="button button-secondary" href={resume} download="Timofey-Fayzullin-Resume.pdf">Download résumé </a>
            </div>
            <p className="location"> Winchester, Massachusetts</p>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div><h2 id="about-title">About</h2></div>
          <div className="about-copy"><p>I’m a Computer Science PhD student and research assistant at UMass Lowell, specializing in human-robot interaction (HRI), voice user interfaces (VUIs), and assistive robotics.</p><p>My work spans HRI study design, autonomous robot systems, voice-based interfaces, data analysis, and research communication. I bring a software engineering background, with professional experience at Raytheon and ID Tech.</p><a className="text-link" href={linkedin} target="_blank" rel="noreferrer">More about me on LinkedIn</a></div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading"><div><h2 id="experience-title">Experience</h2></div></div>
          <div className="experience-list">{experience.map((job) => <article className="experience-item" key={job.company}>
            <div className="experience-meta"><p className="date">{job.date}</p><h3>{job.company}</h3>{job.affiliation && <p className="affiliation">{job.affiliation}</p>}</div>
            <div><h4>{job.role}</h4><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul><div className="tags">{job.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          </article>)}</div>
        </section>

        <section className="research-section" id="research" aria-labelledby="research-title">
          <div className="section-heading"><div><h2 id="research-title">Research</h2></div></div>
          <p className="research-intro">Peer-reviewed papers and abstracts at robotics research venues.</p>
          <div className="venues"><article><span className="venue-year">2025</span><h3>ICRA</h3><p>HRII workshop</p></article><article><span className="venue-year">2024 & 2025</span><h3>NERC</h3><p>Papers / abstracts</p></article><article><span className="venue-year">2026</span><h3>IROS</h3><p>Late-Breaking Results abstract</p></article></div>
        </section>

        <section className="section education-skills" aria-label="Education and skills">
          <div><h2>Education</h2><p className="university">University of Massachusetts Lowell</p><div className="education-list">{[
            ['2025 — Present', 'PhD in Computer Science', 'Human-Robot Interaction'],
            ['2024 — 2025', 'M.S. in Computer Science', 'Human-Robot Interaction'],
            ['2019 — 2023', 'B.S. in Computer Science', 'Fullstack Development'],
          ].map(([date, degree, focus]) => <article key={degree}><span className="date">{date}</span><h3>{degree}</h3><p>{focus}</p></article>)}</div></div>
          <div className="skills-panel"><h2>Skills & tools</h2><div className="skill-group"><h3>Research & communication</h3><div className="tags">{['Research methodologies', 'Data analysis', 'Report writing', 'Presentation skills'].map(skill => <span key={skill}>{skill}</span>)}</div></div><div className="skill-group"><h3>Proficient</h3><div className="tags">{['Python', 'Dart', 'ROS 2', 'GitHub', 'Flutter', 'Figma'].map(skill => <span key={skill}>{skill}</span>)}</div></div><div className="skill-group"><h3>Working knowledge</h3><div className="tags">{['C', 'C++', 'Java', 'JavaScript', 'VirtualBox', 'Adobe Creative Suite'].map(skill => <span key={skill}>{skill}</span>)}</div></div></div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><h2 id="contact-title">Contact</h2><p>Connect about human-robot interaction, assistive robotics, and software.</p><a className="contact-email" href={`mailto:${email}`}>{email}</a><div className="contact-details"><span>Winchester, MA, United States</span><a href="tel:+14103703380">410-370-3380</a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div></section>
      </main>
      <footer><a className="wordmark" href="#home" aria-label="Back to top">tf<span>.</span></a><p>Timofey Fayzullin · Researcher & engineer</p><a href="#home">Back to top</a></footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
