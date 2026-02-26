import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import profile from "../assets/profile.jpg";

function Home() {
  const fullText = "Data that drives decisions.";
  const [displayText, setDisplayText] = useState("");
  const form = useRef();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC
      )
      .then(() => alert("Message sent successfully!"))
      .catch((error) => console.log(error));

    e.target.reset();
  };

  const skills = [
    { name: "SQL", level: 90 },
    { name: "Python", level: 85 },
    { name: "Power BI", level: 88 },
    { name: "Machine Learning", level: 75 },
  ];

  return (
    <div className="space-y-48 pb-32">

      {/* HERO */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pt-32 grid md:grid-cols-2 items-center gap-16"
      >
        <div className="space-y-8">
          <h1 className="text-5xl font-semibold leading-tight">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl">
            I'm Saurav Shejwal — Data Analyst specializing in SQL,
            Python, and Power BI.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <img
            src={profile}
            alt="Saurav Shejwal"
            className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl border border-white/10 shadow-2xl float"
          />
        </div>
      </motion.section>


      {/* ABOUT */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-semibold">About</h2>

        <p className="text-slate-400 max-w-3xl leading-relaxed">
          I help businesses turn raw data into actionable insights.
          My focus is KPI tracking, dashboard automation, and
          decision-support analytics using SQL, Python and Power BI.
        </p>
      </motion.section>


      {/* SKILLS */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-semibold">Technical Skills</h2>

        <div className="space-y-8 max-w-2xl">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span className="text-slate-500">{skill.level}%</span>
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-full bg-white rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.section>


      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <h2 className="text-3xl font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl">
            <h3 className="font-medium mb-3">Superstore Sales Analysis</h3>
            <p className="text-slate-400 text-sm mb-4">
              Revenue and profitability insights using Python & Power BI.
            </p>
            <a
              href="https://github.com/shejucodes/superstore-sales-analysis"
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
            >
              View Project →
            </a>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl">
            <h3 className="font-medium mb-3">Customer Churn Analysis</h3>
            <p className="text-slate-400 text-sm mb-4">
              Predictive churn modeling and segmentation analysis.
            </p>
            <a
              href="https://github.com/shejucodes/customer-churn-analysis"
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
            >
              View Project →
            </a>
          </div>

        </div>
      </motion.section>


      {/* CONTACT */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-8 max-w-xl"
      >
        <h2 className="text-3xl font-semibold">Contact</h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full bg-transparent border border-white/10 rounded-xl p-4"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full bg-transparent border border-white/10 rounded-xl p-4"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full bg-transparent border border-white/10 rounded-xl p-4"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>

    </div>
  );
}

export default Home;