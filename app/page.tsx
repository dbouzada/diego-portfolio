"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const translations = {
  es: {
    badge: "Disponible para oportunidades remotas Data & AI",

    title: "Data & Analytics Engineer",

    subtitle:
      "Automatización, plataformas cloud y sistemas analytics potenciados con IA.",

    about:
      "Data & Analytics Engineer con experiencia en fintech, analytics y productos digitales LATAM. Especializado en arquitecturas cloud-native, pipelines ETL, automatización, APIs y workflows con IA.",

    globalTitle:
      "Trabajando con sistemas analytics cloud-native en LATAM y Europa.",

    globalDesc:
      "Enfocado en ecosistemas de datos escalables, arquitecturas automation-first y soluciones impulsadas por IA.",

    services: "Servicios",
    experience: "Experiencia",
    certifications: "Certificaciones",
    architecture: "Arquitectura",
    contact: "Contacto",

    contactButton: "Enviar Mensaje",
  },

  en: {
    badge: "Open to remote Data & AI opportunities",

    title: "Data & Analytics Engineer",

    subtitle:
      "Automation, cloud platforms and AI-powered analytics systems.",

    about:
      "Data & Analytics Engineer with experience across fintech, analytics and LATAM digital products. Specialized in cloud-native architectures, ETL pipelines, automation, APIs and AI workflows.",

    globalTitle:
      "Working with cloud-native analytics systems across LATAM and Europe.",

    globalDesc:
      "Focused on scalable data ecosystems, automation-first architectures and AI-powered workflows.",

    services: "Services",
    experience: "Experience",
    certifications: "Certifications",
    architecture: "Architecture",
    contact: "Contact",

    contactButton: "Send Message",
  },
};

const stack = [
  "BigQuery",
  "Power BI",
  "Python",
  "Tableau",
  "Azure",
  "Fabric",
  "dbt",
  "SQL",
  "APIs",
  "n8n",
];

const services = [
  "Analytics Engineering",
  "Cloud Data Platforms",
  "AI Automation",
  "Business Intelligence",
  "ETL & Pipelines",
  "API Integrations",
];

const certifications = [
  {
    title: "Fabric Analytics Engineer Associate (DP-600)",
    issuer: "Microsoft",
    year: "2024",
    link: "https://learn.microsoft.com/en-us/users/dbou/credentials/aaee0b7ba85fb37?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    title: "dbt Fundamentals",
    issuer: "dbt Labs",
    year: "2026",
    link: "https://credentials.getdbt.com/86d4ab40-12fe-48d1-9c0d-eb96e02a6cf6#acc.63Dk7AcW",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    year: "2022",
    link: "https://www.credly.com/badges/4b0aa3d1-2e93-4453-90fe-1de002b96e61/linked_in?t=rji2k3",
  },
];

const experiences = [
  {
    company: "Mindata · Spain (Remote)",
    role: "Data & Analytics Engineer",
    period: "2026 - Present",
    description:
      "Design and development of cloud-native analytics solutions for international clients. Building data pipelines, API integrations, automation workflows and AI-powered processes using BigQuery, Python, dbt and modern cloud technologies.",
  },
  {
    company: "Quales Group",
    role: "Data AI Engineer",
    period: "2025 - 2026",
    description:
      "Development of AI automation solutions integrating LLMs, APIs and business processes. Designed analytics workflows, data pipelines and intelligent automations focused on operational efficiency and decision-making.",
  },
  {
    company: "Mercado Libre",
    role: "Data & Analytics Engineer",
    period: "2024 - 2025",
    description:
      "Built and maintained regional analytics solutions for Seller Experience LATAM. Developed scalable data models, ETL processes and executive dashboards using BigQuery, Dataflow, SQL and Tableau to support data-driven decisions.",
  },
  {
    company: "Inteligencia Analítica",
    role: "BI & Data Consultant",
    period: "2023 - 2024",
    description:
      "Delivered Business Intelligence projects for multiple clients across different industries. Designed data models, dashboards and reporting solutions using Power BI, SQL and cloud-based analytics platforms.",
  },
  {
    company: "Seidor Analytics",
    role: "Data Consultant",
    period: "2023",
    description:
      "Participated in enterprise analytics and reporting initiatives, supporting data integration, dashboard development and business performance analysis using Microsoft data technologies.",
  },
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("es");

  const t = translations[lang as keyof typeof translations];

  useEffect(() => {
    document.body.className = dark
      ? "bg-black text-white"
      : "bg-white text-black";
  }, [dark]);

  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <main
      className={`min-h-screen overflow-hidden transition duration-500 ${
        dark
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: dark ? "#000000" : "#ffffff",
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 45,
            },
            color: {
              value: ["#06b6d4", "#8b5cf6"],
            },
            links: {
              enable: true,
              color: "#06b6d4",
              distance: 140,
              opacity: 0.2,
            },
            move: {
              enable: true,
              speed: 1,
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: 2,
            },
          },
        }}
      />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-10">

        <nav className="flex justify-between items-center mb-24">

        <div>
        <p className="uppercase tracking-[0.35em] text-sm opacity-60">
           Diego Bouzada
          </p>

          <p className="text-sm opacity-60 mt-2">
            🇦🇷 Argentina • Data & Analytics Engineer • LATAM & Europe Experience
           </p>
          </div>

          <div className="flex items-center gap-6">

            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="border border-zinc-700 px-3 py-1 rounded-full text-sm hover:border-cyan-400 transition"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>

            <button
              onClick={() => setDark(!dark)}
              className="text-xl opacity-70 hover:opacity-100 transition"
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>

            <a
              href="https://www.linkedin.com/in/bouzadadiego/"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://github.com/dbouzada"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub size={22} />
            </a>

          </div>

        </nav>

   <motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="mb-36 grid lg:grid-cols-2 gap-20 items-center"
>
  <div>

    <div className="inline-flex items-center border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 rounded-full text-sm mb-8 backdrop-blur">
      {t.badge}
    </div>

    <h1 className="text-6xl md:text-[110px] font-black leading-[0.9] tracking-tight mb-8">
      {t.title}
    </h1>

    <p className="text-cyan-400 text-2xl md:text-3xl max-w-4xl leading-relaxed mb-10">
      {t.subtitle}
    </p>

    <p className="max-w-3xl text-lg opacity-70 leading-relaxed mb-12">
      {t.about}
    </p>

    <div className="flex flex-wrap gap-4">
      {stack.map((item) => (
        <motion.div
          whileHover={{ y: -5 }}
          key={item}
          className="border border-zinc-800 bg-zinc-900/60 px-4 py-2 rounded-full text-sm backdrop-blur"
        >
          {item}
        </motion.div>
      ))}
    </div>

  </div>

  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
    }}
    className="relative flex justify-center"
  >

    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-3xl rounded-full scale-90" />

    <div className="relative border border-zinc-800 rounded-[40px] overflow-hidden p-2 bg-zinc-900/50 backdrop-blur-xl shadow-2xl">

      <Image
        src="/profile.jpg"
        alt="Diego Bouzada"
        width={300}
        height={600}
        priority
        className="rounded-[32px] object-cover"
      />

    </div>

  </motion.div>

</motion.section>

        <section className="mb-36">

          <p className="uppercase tracking-[0.3em] opacity-50 text-sm mb-6">
            Global Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-5xl mb-10">

            {t.globalTitle}

          </h2>

          <p className="max-w-3xl text-lg opacity-70 leading-relaxed mb-16">

            {t.globalDesc}

          </p>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              {
                title: "Cloud Analytics",
                desc:
                  lang === "es"
                    ? "Plataformas modernas de datos y ecosistemas analytics escalables."
                    : "Modern data platforms and scalable analytics ecosystems.",
              },
              {
                title: "AI Workflows",
                desc:
                  lang === "es"
                    ? "Automatización de sistemas integrando APIs y soluciones IA."
                    : "Automation systems integrating APIs and AI solutions.",
              },
              {
                title: "Data Platforms",
                desc:
                  lang === "es"
                    ? "BigQuery, Fabric, dbt y arquitecturas BI enterprise."
                    : "BigQuery, Fabric, dbt and enterprise BI architectures.",
              },
              {
                title: "Business Intelligence",
                desc:
                  lang === "es"
                    ? "Storytelling de datos y dashboards ejecutivos."
                    : "Data storytelling and executive-level dashboards.",
              },
            ].map((item) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={item.title}
                className="border border-zinc-800 rounded-[32px] p-8 bg-zinc-900/40 backdrop-blur"
              >

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 mb-8" />

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="opacity-60 leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </section>

        <section className="mb-24">

  <h2 className="text-3xl font-bold mb-8 opacity-90">
    {t.services}
  </h2>

  <div className="flex flex-wrap gap-3">

    {services.map((service) => (
      <span
        key={service}
        className="px-4 py-2 text-sm border border-zinc-800 rounded-full bg-zinc-900/40 hover:border-cyan-400 transition"
      >
        {service}
      </span>
    ))}

  </div>

</section>    

        <section className="mb-36">

          <h2 className="text-5xl font-bold mb-14">
            {t.experience}
          </h2>

          <div className="space-y-8">

            {experiences.map((job) => (
              <motion.div
                whileHover={{ x: 10 }}
                key={job.company}
                className="relative border border-zinc-800 rounded-[32px] p-10 bg-zinc-900/40 backdrop-blur"
              >

                <div className="absolute left-0 top-10 bottom-10 w-[2px] bg-gradient-to-b from-cyan-400 to-violet-500 rounded-full" />

                <div className="pl-8">

                  <p className="opacity-50 text-sm mb-3">
                    {job.period}
                  </p>

                  <h3 className="text-4xl font-bold mb-3">
                    {job.role}
                  </h3>

                  <p className="text-cyan-400 text-lg mb-5">
                    {job.company}
                  </p>

                  <p className="opacity-70 leading-relaxed max-w-3xl">
                    {job.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </section>

        
        <section className="mb-36">

  <h2 className="text-5xl font-bold mb-14">
    {t.certifications}
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {certifications.map((cert) => (

      <motion.a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -8 }}
        key={cert.title}
        className="border border-zinc-800 rounded-[32px] p-8 bg-zinc-900/40 hover:border-cyan-500 transition block"
      >

        <p className="text-cyan-400 mb-4">
          {cert.issuer}
        </p>

        <h3 className="text-xl font-bold mb-4 leading-snug">
          {cert.title}
        </h3>

        <p className="opacity-60 mb-6">
          {cert.year}
        </p>

        <span className="text-cyan-400 font-semibold">
          View Credential →
        </span>

      </motion.a>

    ))}

  </div>

</section>      


        <section className="mb-36">

          <div className="border border-zinc-800 rounded-[40px] p-12 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">

            <div className="absolute inset-0 opacity-20">

              <div className="absolute top-16 left-10 w-40 h-[2px] bg-cyan-400" />
              <div className="absolute top-32 left-56 w-40 h-[2px] bg-violet-400" />
              <div className="absolute top-48 left-96 w-40 h-[2px] bg-cyan-400" />

            </div>

            <div className="relative">

              <p className="uppercase tracking-[0.3em] opacity-50 text-sm mb-6">
                {t.architecture}
              </p>

              <h2 className="text-5xl md:text-7xl font-black leading-tight mb-10">

                APIs → ETL → BigQuery → dbt → BI → AI

              </h2>

              <p className="max-w-3xl text-xl opacity-70 leading-relaxed">

                {lang === "es"
                  ? "Construyendo ecosistemas analytics escalables conectando cloud, automatización e inteligencia de negocio."
                  : "Building scalable analytics ecosystems connecting cloud infrastructure, automation and business intelligence."}

              </p>

            </div>

          </div>

        </section>

        <section className="mb-36">

  <div className="border border-zinc-800 rounded-[40px] p-14 bg-gradient-to-br from-zinc-900 to-black text-center relative overflow-hidden">

    <div className="absolute inset-0 opacity-20">

      <div className="absolute top-10 left-20 w-48 h-[1px] bg-cyan-400" />
      <div className="absolute bottom-16 right-20 w-48 h-[1px] bg-violet-400" />

    </div>

    <div className="relative">

      <p className="uppercase tracking-[0.3em] opacity-50 text-sm mb-6">
        {lang === "es" ? "Contacto" : "Contact"}
      </p>

      <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">

        {lang === "es"
          ? "Construyamos algo increíble."
          : "Let's build something amazing."}

      </h2>

      <p className="max-w-2xl mx-auto text-xl opacity-70 leading-relaxed mb-10">

        {lang === "es"
          ? "Disponible para oportunidades remotas, proyectos de datos, analytics engineering y automatización con IA."
          : "Available for remote opportunities, analytics engineering, cloud data platforms and AI automation projects."}

      </p>

      <div className="flex justify-center gap-6 flex-wrap">

        <a
          href="mailto:dbouzada@gmail.com"
          className="bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-4 rounded-2xl font-semibold hover:scale-[1.03] transition"
        >
          dbouzada@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/bouzadadiego/"
          target="_blank"
          className="border border-zinc-700 px-8 py-4 rounded-2xl hover:border-cyan-400 transition"
        >
          LinkedIn
        </a>

      </div>

    </div>

  </div>

</section>

        <footer className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between gap-6 opacity-60">

          <p>
            © 2026 Diego Bouzada · Data & Analytics Engineer
          </p>

          <div className="flex gap-8">

            <a href="mailto:dbouzada@gmail.com">
              Email
            </a>

            <a href="https://github.com/dbouzada">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/bouzadadiego/">
              LinkedIn
            </a>

          </div>

        </footer>

      </section>

    </main>
  );
}