import profile from "../assets/profile.jpg";

function Home() {
  return (
    <div className="space-y-40 pb-32">

      {/* HERO */}
      <section id="home" className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-20">

        <div className="flex-1 space-y-10">

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-500">
              Saurav Prakash Shejwal
            </span>{" "}
            <span className="animate-wave inline-block">👋</span>
          </h1>

          <p className="text-2xl text-slate-400 max-w-2xl leading-relaxed">
            Data Analyst & BI Specialist transforming raw data into measurable business impact 
            using Power BI, SQL, Python, and advanced forecasting models.
          </p>

          <div className="flex flex-wrap gap-6 pt-6">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black rounded-full text-lg font-semibold"
            >
              View Top Projects
            </a>

            <a
              href="https://github.com/shejucodes"
              target="_blank"
              className="px-8 py-4 border border-white/20 rounded-full text-lg"
            >
              Connect on GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sauravshejwal/"
              target="_blank"
              className="px-8 py-4 border border-white/20 rounded-full text-lg"
            >
              Explore LinkedIn
            </a>
          </div>

        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={profile}
            alt="Saurav"
            className="w-[420px] h-[520px] object-cover rounded-3xl shadow-2xl border border-white/10"
          />
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="space-y-8 max-w-5xl">
        <h2 className="text-5xl font-semibold">About Me</h2>
        <p className="text-xl text-slate-400 leading-relaxed">
          I specialize in business-focused analytics and automation. My expertise spans
          Power BI dashboards, SQL-driven insights, forecasting models like SVR and ARIMA,
          KPI tracking, ETL workflows, and decision-support reporting systems.
        </p>
      </section>

      {/* INDUSTRY EXPERIENCE */}
      <section id="experience" className="space-y-10">
        <h2 className="text-5xl font-semibold">Industry Experience</h2>

        <div className="border border-white/10 rounded-2xl p-8 space-y-4">
          <h3 className="text-2xl font-semibold">
            Project Coordinator – Energispeak Analytics Pvt. Ltd. - Industry Capstone Project 
          </h3>
          <p className="text-slate-400 text-lg">
            Built an SVR-based Solar PV Energy Forecasting Model using weather and IoT data,
            improving prediction accuracy by 18%. Automated Power BI dashboards reducing 
            monthly reporting effort by 40%. Led a cross-functional team delivering 
            stakeholder-ready analytical insights.
          </p>
        </div>

        <div className="border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold">IEEE SIES GST – Publicity Head</h3>
          <p className="text-slate-400 text-lg">
            Managed digital campaigns increasing event engagement by 20–25%.
            Led multimedia strategy and cross-functional coordination.
          </p>
        </div>

        <div className="border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold">Rotaract Club of Ramnarain Ruia College– Secretary & Director of Services</h3>
          <p className="text-slate-400 text-lg">
            Led community service projects, documentation systems, and club coordination,
            improving operational efficiency and engagement.
          </p>
        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="space-y-12">
        <h2 className="text-5xl font-semibold">Core Skills</h2>

        <div className="grid md:grid-cols-3 gap-16 text-xl text-slate-400">
          <div>
            <h3 className="font-semibold text-white mb-4">Data & Programming</h3>
            <ul className="space-y-3">
              <li>Python (Pandas, Scikit-Learn)</li>
              <li>SQL</li>
              <li>Data Cleaning & ETL</li>
              <li>Preprocessing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Business Intelligence</h3>
            <ul className="space-y-3">
              <li>Power BI</li>
              <li>DAX</li>
              <li>Power Query</li>
              <li>KPI Reporting</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Analytics</h3>
            <ul className="space-y-3">
              <li>Forecasting Models (SVR, ARIMA)</li>
              <li>RFM Segmentation</li>
              <li>Sales & Cost Analysis</li>
              <li>Trend Detection</li>
            </ul>
          </div>
        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="space-y-12">
        <h2 className="text-5xl font-semibold">Top 5 Projects</h2>

        <div className="grid md:grid-cols-2 gap-12">

          {[
            "Solar PV Energy Forecasting Model",
            "Superstore Sales Analysis",
            "Power BI Cost Analytics Dashboard",
            "E-Commerce RFM Segmentation",
            "Business KPI Automation Dashboard"
          ].map((project, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project}
              </h3>
              <a
                href="https://github.com/shejucodes"
                target="_blank"
                className="text-blue-400"
              >
                View on GitHub →
              </a>
            </div>
          ))}

        </div>

        <div className="pt-8">
          <a
            href="https://github.com/shejucodes"
            target="_blank"
            className="px-8 py-4 border border-white/20 rounded-full text-lg"
          >
            Explore More on GitHub →
          </a>
        </div>

      </section>
{/* ================= CERTIFICATIONS ================= */}
      <section
        id="certifications"
        className="min-h-screen flex items-center px-6 md:px-20 py-32"
      >
        <div className="max-w-6xl w-full space-y-16">

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Certifications
          </h2>

          <div className="space-y-8 text-lg text-slate-400">

            <div>
              <span className="font-semibold text-white">1.</span>{" "}
              AI Assisted Developer –{" "}
              <span className="font-bold text-white">
                Code360 (Coding Ninjas)
              </span>
            </div>

            <div>
              <span className="font-semibold text-white">2.</span>{" "}
              Databases for Developers –{" "}
              <span className="font-bold text-white">
                Oracle Corporation
              </span>
            </div>

            <div>
              <span className="font-semibold text-white">3.</span>{" "}
              Data Analytics Certification –{" "}
              <span className="font-bold text-white">
                Deloitte
              </span>
            </div>

            <div>
              <span className="font-semibold text-white">4.</span>{" "}
              Quantitative Research Program –{" "}
              <span className="font-bold text-white">
                JPMorgan Chase & Co.
              </span>
            </div>

            <div>
              <span className="font-semibold text-white">5.</span>{" "}
              Data Visualisation & GenAI Analytics –{" "}
              <span className="font-bold text-white">
                Tata Group
              </span>
            </div>

          </div>

        </div>
      </section>
    
      

      {/* CONTACT */}
      <section id="contact" className="space-y-8 pt-20">
        <h2 className="text-5xl font-semibold">Let's Connect</h2>

        <div className="flex flex-wrap gap-6 pt-6">
          <a
            href="mailto:sauravshejwal@gmail.com"
            className="px-8 py-4 bg-white text-black rounded-full text-lg font-semibold"
          >
            Email Me
          </a>

          <a
            href="https://github.com/shejucodes"
            target="_blank"
            className="px-8 py-4 border border-white/20 rounded-full text-lg"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sauravshejwal/"
            target="_blank"
            className="px-8 py-4 border border-white/20 rounded-full text-lg"
          >
            LinkedIn
          </a>
        </div>

        <p className="pt-16 text-slate-500 text-lg">
          © 2026 Saurav Prakash Shejwal®
        </p>
      </section>

    </div>
  );
}

export default Home;