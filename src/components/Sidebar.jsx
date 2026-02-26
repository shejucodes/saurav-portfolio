import { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";

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

  const linkClass = (id) =>
    active === id
      ? "text-white font-medium transition"
      : "text-slate-500 hover:text-white transition";

  return (
    <div className="h-full flex flex-col justify-between p-10">

      {/* TOP */}
      <div>

        {/* Photo with glow */}
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl" />
          <img
            src={profile}
            alt="Saurav Shejwal"
            className="relative w-24 h-24 rounded-full object-cover border border-white/10 hover:scale-105 transition duration-300"
          />
        </div>

        <h2 className="text-lg font-semibold tracking-tight">
          Saurav Shejwal
        </h2>

        <p className="text-sm text-slate-400 mt-1">
          Data Analyst
        </p>

        <p className="text-xs text-slate-500 mt-2">
          Mumbai, India
        </p>

        <nav className="mt-10 flex flex-col gap-4 text-sm">

          <a href="#home" className={linkClass("home")}>
            Home
          </a>

          <a href="#about" className={linkClass("about")}>
            About
          </a>

          <a href="#skills" className={linkClass("skills")}>
            Skills
          </a>

          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>

        </nav>
      </div>

      {/* BOTTOM */}
      <div className="space-y-4">

        <div className="flex flex-col gap-2 text-sm text-slate-500">
          <a
            href="https://github.com/shejucodes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sauravshejwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>

        <button className="w-full bg-white text-black hover:opacity-90 transition py-2 rounded-full text-sm font-medium">
          Contact
        </button>

      </div>

    </div>
  );
}

export default Sidebar;