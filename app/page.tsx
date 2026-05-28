"use client";

import { useState } from "react";

const content = {
  es: {
    badge: "Analytics Engineering · Automation · Cloud Systems",

    title: "Data & Analytics Engineer",

    subtitle:
      "Automatización de procesos, arquitecturas cloud y soluciones analytics end-to-end.",

    aboutTitle: "Sobre mí",

    about:
      "Ingeniero de Datos & Analytics con experiencia en fintech, healthtech y productos digitales LATAM. Especializado en automatización, ETL pipelines, cloud analytics, APIs y ecosistemas modernos de datos orientados a negocio.",

    metrics: [
      {
        value: "40+",
        label: "Automatizaciones",
      },
      {
        value: "100+",
        label: "Dashboards",
      },
      {
        value: "15+",
        label: "APIs Integradas",
      },
      {
        value: "LATAM",
        label: "Experiencia Regional",
      },
    ],

    systemsTitle: "Lo que construyo",

    systems: [
      {
        title: "Analytics Platforms",
        description:
          "Dashboards ejecutivos, KPIs y ecosistemas de Business Intelligence.",
      },
      {
        title: "Cloud Pipelines",
        description:
          "ETLs escalables y arquitecturas cloud modernas orientadas a analytics.",
      },
      {
        title: "AI Workflows",
        description:
          "Automatizaciones con APIs, IA y procesos operacionales.",
      },
      {
        title: "Data Automation",
        description:
          "Monitoreo, automatización de refreshes y optimización de reporting.",
      },
    ],

    experienceTitle: "Experiencia",

    architecture: "Arquitectura",

    architectureDescription:
      "Diseño ecosistemas analytics escalables conectando APIs, pipelines cloud y decisiones de negocio.",

    footer: "Data & Analytics Engineer",
  },

  en: {
    badge: "Analytics Engineering · Automation · Cloud Systems",

    title: "Data & Analytics Engineer",

    subtitle:
      "Process automation, cloud architectures and end-to-end analytics solutions.",

    aboutTitle: "About Me",

    about:
      "Data & Analytics Engineer with experience across fintech, healthtech and LATAM digital products. Specialized in automation, ETL pipelines, cloud analytics, APIs and modern business-oriented data ecosystems.",

    metrics: [
      {
        value: "40+",
        label: "Automated Workflows",
      },
      {
        value: "100+",
        label: "Dashboards",
      },
      {
        value: "15+",
        label: "Integrated APIs",
      },
      {
        value: "LATAM",
        label: "Regional Experience",
      },
    ],

    systemsTitle: "What I Build",

    systems: [
      {
        title: "Analytics Platforms",
        description:
          "Executive dashboards, KPI ecosystems and business intelligence solutions.",
      },
      {
        title: "Cloud Pipelines",
        description:
          "Scalable ETLs and modern cloud-first analytics architectures.",
      },
      {
        title: "AI Workflows",
        description:
          "Automation systems integrating APIs, AI and operational processes.",
      },
      {
        title: "Data Automation",
        description:
          "Monitoring systems, refresh automation and reporting optimization.",
      },
    ],

    experienceTitle: "Experience",

    architecture: "Architecture",

    architectureDescription:
      "Designing scalable analytics ecosystems connecting APIs, cloud pipelines and business decisions.",

    footer: "Data & Analytics Engineer",
  },
};

const experiences = [
  {
    company: "Mindata",
    role: "Data & Analytics Engineer",
    period: "2026 - Actualidad",
    description:
      "Automatización de procesos, APIs, analytics engineering y soluciones cloud orientadas a negocio.",
  },
    {
    company: "Quales Group",
    role: "Data AI Engineer",
    period: "2025 - 2026",
    description:
      "Automatizaciones IA, workflows analytics y soluciones modernas de datos.",
  },
  {
    company: "Mercado Libre",
    role: "Data & Analytics Engineer",
    period: "2024 - 2025",
    description:
      "Desarrollo de pipelines BigQuery, Tableau analytics y soluciones regionales Seller Experience LATAM.",
  },

   {
    company: "Inteligencia Ana",
    role: "BI Developer",
    period: "2023 - 2024 ",
    description:
      "Desarrollo de ETLs SSIS, automatización de procesos y dashboards corporativos.",
  },
  {
    company: "Seidor Analytics",
    role: "BI & Data Consultant",
    period: "2023",
    description:
      "Implementación de soluciones Power BI, modelado de datos y reporting ejecutivo.",
  },
];

const stack = [
  "BigQuery",
  "Power BI",
  "Tableau",
  "Python",
  "Azure",
  "Fabric",
  "dbt",
  "n8n",
  "Databricks",
  "SQL",
  "Looker",
  "APIs",
];

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");

  const t = content[lang];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] animate-pulse" />
      <div className="absolute top-[400px] right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] animate-pulse" />

      <section className="relative max-w-7xl mx-auto px-6 py-10">

        <nav className="flex justify-between items-center mb-24">

          <div>
            <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
              Diego Bouzada
            </p>
          </div>

          <div className="flex items-center gap-8">

            <div className="flex gap-3 text-sm">

              <button
                onClick={() => setLang("es")}
                className={`transition ${
                  lang === "es"
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                ES
              </button>

              <span className="text-zinc-700">/</span>

              <button
                onClick={() => setLang("en")}
                className={`transition ${
                  lang === "en"
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                EN
              </button>

            </div>

          </div>
        </nav>

        <section className="mb-36">

          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/60 backdrop-blur px-5 py-2 rounded-full text-sm text-zinc-300 mb-10">
            {t.badge}
          </div>

          <h1 className="text-6xl md:text-[110px] font-black leading-[0.9] tracking-tight mb-6">
            {t.title}
          </h1>

          <h2 className="text-2xl md:text-3xl text-cyan-400 font-medium mb-8 max-w-4xl">
            {t.subtitle}
          </h2>

          <div className="flex flex-wrap gap-4">

            {stack.map((item) => (
              <span
                key={item}
                className="border border-zinc-800 bg-zinc-900/50 px-4 py-2 rounded-full text-sm text-zinc-300 hover:border-cyan-500 hover:-translate-y-1 transition duration-300"
              >
                {item}
              </span>
            ))}

          </div>

        </section>

        <section className="mb-36">

          <div className="border border-zinc-900 rounded-[32px] p-10 bg-zinc-950/40 backdrop-blur">

            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-6">
              {t.aboutTitle}
            </p>

            <p className="text-2xl leading-relaxed text-zinc-300 max-w-5xl">
              {t.about}
            </p>

          </div>

        </section>

        <section className="grid md:grid-cols-4 gap-6 mb-36">

          {t.metrics.map((metric) => (
            <div
              key={metric.label}
              className="border border-zinc-900 bg-zinc-900/40 rounded-3xl p-8 hover:border-cyan-500/40 hover:-translate-y-2 transition duration-300"
            >

              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mb-6 animate-pulse" />

              <p className="text-5xl font-bold mb-3">
                {metric.value}
              </p>

              <p className="text-zinc-500">
                {metric.label}
              </p>

            </div>
          ))}

        </section>

        <section className="mb-36">

          <h2 className="text-5xl font-bold mb-14">
            {t.systemsTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {t.systems.map((system) => (
              <div
                key={system.title}
                className="group border border-zinc-900 hover:border-cyan-500/40 transition duration-300 rounded-[32px] p-10 bg-gradient-to-b from-zinc-900 to-black hover:-translate-y-2"
              >

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 mb-8 animate-pulse" />

                <h3 className="text-3xl font-bold mb-5">
                  {system.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-lg">
                  {system.description}
                </p>

              </div>
            ))}

          </div>

        </section>

        <section className="mb-36">

          <h2 className="text-5xl font-bold mb-14">
            {t.experienceTitle}
          </h2>

          <div className="space-y-8">

            {experiences.map((job) => (
              <div
                key={job.company}
                className="relative border border-zinc-900 hover:border-violet-500/40 transition duration-300 rounded-[32px] p-10 bg-zinc-950/40 hover:-translate-y-1"
              >

                <div className="absolute left-0 top-10 bottom-10 w-[2px] bg-gradient-to-b from-cyan-500 to-violet-500 rounded-full animate-pulse" />

                <div className="pl-8">

                  <p className="text-zinc-500 text-sm mb-3">
                    {job.period}
                  </p>

                  <h3 className="text-4xl font-bold mb-3">
                    {job.role}
                  </h3>

                  <p className="text-cyan-400 text-lg mb-6">
                    {job.company}
                  </p>

                  <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                    {job.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>

        <section className="mb-36">

          <div className="border border-zinc-900 rounded-[40px] p-12 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">

            <div className="absolute inset-0 opacity-10">

              <div className="absolute top-10 left-10 w-40 h-[2px] bg-cyan-400 animate-pulse" />
              <div className="absolute top-24 left-52 w-40 h-[2px] bg-violet-400 animate-pulse" />
              <div className="absolute top-40 left-96 w-40 h-[2px] bg-cyan-400 animate-pulse" />
              <div className="absolute top-56 left-[600px] w-40 h-[2px] bg-violet-400 animate-pulse" />

            </div>

            <div className="relative">

              <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-6">
                {t.architecture}
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-10">
                APIs → ETL → BigQuery → dbt → BI → Decisions
              </h2>

              <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed">
                {t.architectureDescription}
              </p>

            </div>

          </div>

        </section>

        <footer className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between gap-6 text-zinc-500">

          <p>
            © 2026 Diego Bouzada · {t.footer}
          </p>

          <div className="flex gap-8">

            <a
              href="mailto:dbouzada@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>

            <a
              href="https://linkedin.com"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              className="hover:text-white transition"
            >
              GitHub
            </a>

          </div>

        </footer>

      </section>
    </main>
  );
}