import { useEffect, useState } from "react";

function Sidebar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const linkStyle = (id) =>
    active === id
      ? "text-white font-semibold"
      : "text-slate-400 hover:text-white transition";

  return (
    <aside className="w-80 h-screen fixed left-0 top-0 bg-gradient-to-b from-slate-900 to-slate-950 border-r border-white/5 flex flex-col justify-between px-10 py-12">

      {/* TOP SECTION */}
      <div className="space-y-10">

        {/* Logo */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl">
          SP
        </div>

        {/* Identity */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold leading-snug">
            Saurav Prakash Shejwal
          </h2>

          <p className="text-base text-slate-400">
            Data Analyst & BI Specialist
          </p>

          <p className="text-sm text-slate-500">
            Mumbai, India
          </p>
        </div>

        {/* Navigation */}
        <nav className="pt-10 flex flex-col gap-6 text-lg">

          <a href="#home" className={linkStyle("home")}>
            Home
          </a>

          <a href="#about" className={linkStyle("about")}>
            About
          </a>

          <a href="#experience" className={linkStyle("experience")}>
            Experience
          </a>

          <a href="#skills" className={linkStyle("skills")}>
            Skills
          </a>

          <a href="#projects" className={linkStyle("projects")}>
            Projects
          </a>

          <a href="#certifications" className={linkStyle("certifications")}>
            Certifications
          </a>

          <a href="#contact" className={linkStyle("contact")}>
            Contact
          </a>

        </nav>
      </div>

      {/* BOTTOM SECTION */}
      <div className="space-y-6">

        <a
          href="/resume.pdf"
          download
          className="block w-full text-center bg-white text-black py-3 rounded-full text-base font-semibold hover:opacity-90 transition"
        >
          Download Resume
        </a>

        <div className="space-y-3 text-base text-slate-400">
          <a
            href="https://github.com/shejucodes"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sauravshejwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;