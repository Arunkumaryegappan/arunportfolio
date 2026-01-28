// Portfolio for Arunkumar Y (Java Backend Developer)
// Dark theme, text header, GitHub Pages ready

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-200 font-sans">
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Experience", to: "/experience" },
    { label: "Projects", to: "/projects" },
    { label: "Skills", to: "/skills" },
    { label: "Contact", to: "/contact" },
    { label: "Resume", to: "/resume" },
    ,
  ];

  return (
    <header className="border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold tracking-tight text-white">
          Arunkumar Y
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-blue-400 pb-1"
                  : "text-gray-400 hover:text-white"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Home() {
  return (
    <section className="space-y-6">
      <div className="bg-gray-900 shadow-sm rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-white">Java Backend Developer</h1>
        <p className="mt-2 text-gray-300 leading-relaxed">
          Java Developer with 2 years of experience in backend development, production support, and rule engine migration. Skilled in Core Java, Spring Boot, REST APIs, MySQL, and Perl, with strong experience troubleshooting production issues and managing client escalations within SLA timelines.
        </p>
        <p className="mt-2 text-gray-300 leading-relaxed">
          Completed a 6-month Java Full Stack internship at Virtusa. Contributed to microservices migration and automation initiatives, seeking roles in Java Backend or Full Stack Development to build scalable enterprise applications.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="mailto:arunixius0203@gmail.com"
            className="inline-block px-4 py-2 border border-gray-700 rounded-2xl text-sm font-medium hover:bg-gray-800"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/arunkumar-y-990335208"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-4 py-2 border border-gray-700 rounded-2xl text-sm font-medium hover:bg-gray-800"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Arunkumaryegappan"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-4 py-2 border border-gray-700 rounded-2xl text-sm font-medium hover:bg-gray-800"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Location" content="Chennai, India" />
        <Card title="Experience" content="2 Years" />
        <Card title="Role" content="Java Backend Developer" />
        <Card title="Availability" content="Immediate" />
      </div>
    </section>
  );
}

function Card({ title, content }) {
  return (
    <div className="bg-gray-900 shadow-sm rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-gray-200">{title}</h3>
      <p className="mt-2 text-gray-300 text-base">{content}</p>
    </div>
  );
}
function Experience() {
  const experience = [
    {
      role: "Junior Java Developer — GAVS Technologies",
      period: "May 2024 – Present",
      bullets: [
        "Developed backend services using Core Java, Spring Boot, and REST APIs.",
        "Provided production support and resolved high-priority issues.",
        "Handled client escalations and met SLA requirements with a consistent 12-hour turnaround.",
        "Automated post-deployment reporting using scripting.",
        "Troubleshot live production issues and deployed hotfixes.",
        "Participated in Agile ceremonies and used Git + CI/CD pipelines.",
      ],
    },
    {
      role: "Intern — Delivery Team, Virtusa",
      period: "Jan 2023 – Apr 2023",
      bullets: [
        "Built CRUD functionalities using Spring Boot.",
        "Worked with MySQL for data management.",
        "Developed a stopwatch application using React.",
        "Designed database models and access layers.",
        "Conducted debugging, code reviews, and troubleshooting.",
      ],
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Experience</h2>
      <div className="space-y-4">
        {experience.map((exp) => (
          <div key={exp.role} className="bg-gray-900 shadow-sm rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
              {exp.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      name: "AthenaHealth — Rules Engine Migration & Claims Processing",
      tech: "Java, Spring Boot, Perl, MySQL, REST APIs",
      description:
        "Migrated legacy Perl-based business rules to Java for improved reliability and performance. Worked on ClaimScrub, Pre-Processor, Post-Processor, and DMN modules.",
      bullets: [
        "Migrated Perl rules to Java",
        "Handled production issues, bug fixes, and escalations",
        "Performed end-to-end testing and cluster deployments",
      ],
    },
    {
      name: "Asynchronous Collaboration Application",
      tech: "React, Node.js, Express.js, MongoDB, REST APIs",
      description:
        "A collaboration tool with video recording, cloud storage, and sharing features.",
      bullets: [
        "Screen, voice, and webcam recording",
        "Cloud-based video storage and sharing",
        "Optimized upload/download performance",
      ],
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Projects</h2>
      <div className="space-y-4">
        {projects.map((p) => (
          <div key={p.name} className="bg-gray-900 shadow-sm rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white">{p.name}</h3>
            <p className="mt-2 text-gray-300">{p.description}</p>
            <p className="mt-2 text-sm text-gray-500">Tech: {p.tech}</p>
            <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
              {p.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://github.com/Arunkumaryegappan"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 border border-gray-700 rounded-2xl text-sm font-medium hover:bg-gray-800"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



function Skills() {
  const skills = [
    "Core Java",
    "Spring Boot",
    "REST APIs",
    "MySQL",
    "Perl (Legacy support/scripting)",
    "Docker ",
    "Linux Bash",
    "AWS ",
    "Git, Maven, Postman, JIRA",
    "Grafana, Prometheus",
    "CI/CD, Agile/Scrum",
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skills.map((s) => (
          <div key={s} className="bg-gray-900 shadow-sm rounded-2xl p-4">
            <p className="text-gray-200 font-medium">{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Resume</h2>
      <p className="text-gray-300">
        Download the latest resume (pdf format) below.
      </p>
      <a
        href="/resume/Arunkumar_Y_Resume.pdf"
        download
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-2xl text-sm font-medium hover:bg-blue-500"
      >
        Download Arunkumar Yegappan Resume
      </a>
      
    </section>
  );
}

function Contact() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Contact</h2>
      <div className="bg-gray-900 shadow-sm rounded-2xl p-6">
        <p className="text-gray-300">
          Email: <a href="mailto:arunixius0203@gmail.com" className="text-white font-medium">arunixius0203@gmail.com</a>
        </p>
        <p className="text-gray-300">Phone: <span className="font-medium">8525043021</span></p>
        <p className="text-gray-300">
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/arunkumar-y-990335208" target="_blank" rel="noreferrer" className="text-white font-medium">
            linkedin.com/in/arunkumar-y-990335208
          </a>
        </p>
        <p className="text-gray-300">
          GitHub:{" "}
          <a href="https://github.com/Arunkumaryegappan" target="_blank" rel="noreferrer" className="text-white font-medium">
            github.com/Arunkumaryegappan
          </a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-10">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Arunkumar Y. Built with React + Tailwind.
      </div>
    </footer>
  );
}

export default App;
