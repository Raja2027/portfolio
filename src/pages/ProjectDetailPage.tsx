import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { getProjectById } from '../data/projects';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project && project.screenshots.length > 0) {
      setSelectedImage(project.screenshots[0]);
    } else {
      setSelectedImage(null);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#E9E8F8] text-[#171E2B] flex flex-col justify-between font-['Inter',sans-serif]">
        <Navbar />
        <main className="max-w-3xl mx-auto py-32 px-6 text-center">
          <p className="text-[12px] uppercase tracking-widest text-[#171E2B]/55 mb-2 font-mono">
            404
          </p>
          <h1 className="font-[family-name:'Source_Serif_4',serif] text-3xl font-normal mb-4">
            Project Not Found
          </h1>
          <p className="text-[15px] text-[#171E2B]/75 mb-8">
            The project you are looking for does not exist or has been relocated.
          </p>
          <Link
            to="/projects"
            className="border border-[#8DB9F0] bg-white text-[#171E2B] px-6 py-2.5 text-[13px] font-medium hover:bg-[#8DB9F0] transition rounded-sm shadow-xs"
          >
            ← Return to Projects
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Parse architecture string into nodes for visualization
  const architectureNodes = project.architecture
    ? project.architecture.split('→').map((node) => node.trim())
    : [];

  return (
    <div className="min-h-screen bg-[#E9E8F8] text-[#171E2B] flex flex-col justify-between font-['Inter',sans-serif]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto py-12 px-6 lg:px-8 w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 text-[12px] text-[#171E2B]/55 flex items-center gap-2 font-mono">
          <Link to="/" className="hover:text-[#171E2B] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/projects" className="hover:text-[#171E2B] transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-[#171E2B] font-medium truncate max-w-xs sm:max-w-md">{project.title}</span>
        </nav>

        {/* Project Header */}
        <header className="border-b border-[#8DB9F0]/30 pb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-[11px] tracking-wider uppercase text-[#171E2B]/55">
              Project {project.number}
            </span>
            <span className="text-[#8DB9F0]">•</span>
            <span className="text-[12px] text-[#171E2B]/55">{project.date}</span>
            {project.isPrototype && (
              <span className="text-[10px] tracking-widest uppercase bg-[#F5B69E]/30 border border-[#F5B69E] text-[#171E2B] px-2.5 py-0.5 ml-2 font-semibold rounded-full">
                Prototype
              </span>
            )}
            {project.isEarlierProject && (
              <span className="text-[10px] tracking-widest uppercase bg-[#8DB9F0]/25 border border-[#8DB9F0] text-[#171E2B] px-2.5 py-0.5 ml-2 font-medium rounded-full">
                Earlier Project
              </span>
            )}
          </div>

          <h1 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(28px,4vw,44px)] font-normal text-[#171E2B] leading-tight mb-2">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-[17px] text-[#F5B69E] font-semibold mb-6">
              {project.subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#8DB9F0]/20 text-[13px]">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#8DB9F0] bg-white text-[#171E2B] px-5 py-2 text-[12px] font-medium hover:bg-[#8DB9F0] transition rounded-sm inline-flex items-center gap-2 font-mono shadow-2xs"
            >
              <span>GitHub Repository</span>
              <span>↗</span>
            </a>
          </div>
        </header>

        {/* Visual Preview / Screenshots Gallery */}
        {project.screenshots.length > 0 && (
          <ScrollReveal>
            <section className="my-10">
              <h2 className="text-[11px] tracking-[0.2em] uppercase text-[#F5B69E] font-semibold mb-3">
                Interface Previews &amp; Artifacts
              </h2>

              {/* Main Displayed Image */}
              {selectedImage && (
                <div className="bg-white border border-[#8DB9F0]/30 p-2 rounded-sm mb-3 shadow-xs">
                  <img
                    src={selectedImage}
                    alt={`${project.title} screenshot`}
                    className="w-full max-h-[500px] object-contain rounded-sm bg-[#E9E8F8]/40"
                  />
                </div>
              )}

              {/* Thumbnails */}
              {project.screenshots.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-2">
                  {project.screenshots.map((shot, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(shot)}
                      className={`relative shrink-0 w-24 h-16 rounded-sm border overflow-hidden cursor-pointer transition ${
                        selectedImage === shot
                          ? 'border-[#8DB9F0] ring-2 ring-[#8DB9F0]'
                          : 'border-[#8DB9F0]/30 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={shot}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </section>
          </ScrollReveal>
        )}

        {/* Case Study Content */}
        <article className="space-y-12">
          {/* 1. Overview */}
          <ScrollReveal>
            <section className="border-t border-[#8DB9F0]/30 pt-8">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[22px] font-normal text-[#171E2B] mb-3">
                Overview
              </h2>
              <p className="text-[15px] text-[#171E2B]/75 leading-[1.8]">
                {project.description}
              </p>
            </section>
          </ScrollReveal>

          {/* 2. Problem Statement */}
          <ScrollReveal>
            <section className="border-t border-[#8DB9F0]/30 pt-8">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[22px] font-normal text-[#171E2B] mb-3">
                Problem Statement
              </h2>
              <p className="text-[15px] text-[#171E2B]/75 leading-[1.8]">
                {project.problemStatement}
              </p>
            </section>
          </ScrollReveal>

          {/* 3. System Architecture Flow */}
          {architectureNodes.length > 0 && (
            <ScrollReveal>
              <section className="border-t border-[#8DB9F0]/30 pt-8">
                <h2 className="font-[family-name:'Source_Serif_4',serif] text-[22px] font-normal text-[#171E2B] mb-3">
                  System Architecture
                </h2>
                <p className="text-[14px] text-[#171E2B]/70 mb-4">
                  End-to-end data pipeline and execution flow:
                </p>

                {/* Flow Diagram */}
                <div className="border border-[#8DB9F0]/30 bg-white/70 p-6 rounded-sm overflow-x-auto shadow-2xs">
                  <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 min-w-max">
                    {architectureNodes.map((node, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="bg-[#E9E8F8] border border-[#8DB9F0]/40 px-4 py-3 rounded-sm text-center shadow-xs">
                          <p className="text-[10px] font-mono text-[#171E2B]/50 uppercase tracking-wider mb-0.5">
                            Stage 0{index + 1}
                          </p>
                          <p className="text-[13px] font-medium text-[#171E2B]">
                            {node}
                          </p>
                        </div>
                        {index < architectureNodes.length - 1 && (
                          <span className="text-[#F5B69E] font-bold text-lg select-none">
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </ScrollReveal>
          )}

          {/* 4. Technical Contribution */}
          <ScrollReveal>
            <section className="border-t border-[#8DB9F0]/30 pt-8">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[22px] font-normal text-[#171E2B] mb-3">
                Technical Contribution
              </h2>
              <p className="text-[15px] text-[#171E2B]/75 leading-[1.8]">
                {project.technicalContribution}
              </p>
            </section>
          </ScrollReveal>

          {/* 5. Implementation Details */}
          <ScrollReveal>
            <section className="border-t border-[#8DB9F0]/30 pt-8">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[22px] font-normal text-[#171E2B] mb-4">
                Implementation Details
              </h2>
              <ul className="space-y-3">
                {project.detailedDescription.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[14px] text-[#171E2B]/75 leading-[1.75]"
                  >
                    <span className="text-[#8DB9F0] font-bold mt-0.5">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          {/* 6. Technology Stack */}
          <ScrollReveal>
            <section className="border-t border-[#8DB9F0]/30 pt-8">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[22px] font-normal text-[#171E2B] mb-4">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[12px] bg-white text-[#171E2B] border border-[#8DB9F0]/30 px-3 py-1.5 rounded-sm font-medium shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* 7. Challenges & Limitations */}
          <ScrollReveal>
            <section className="border-t border-[#8DB9F0]/30 pt-8">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[22px] font-normal text-[#171E2B] mb-4">
                Engineering Challenges &amp; Documented Limitations
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Engineering Challenges */}
                <div className="bg-white border border-[#8DB9F0]/30 p-5 rounded-sm shadow-2xs">
                  <h3 className="text-[11px] tracking-[0.15em] uppercase text-[#F5B69E] font-semibold mb-3">
                    Technical Challenges Addressed
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges.map((c, idx) => (
                      <li
                        key={idx}
                        className="text-[13px] text-[#171E2B]/75 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#F5B69E] font-bold shrink-0">–</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* System Limitations */}
                <div className="bg-white border border-[#8DB9F0]/30 p-5 rounded-sm shadow-2xs">
                  <h3 className="text-[11px] tracking-[0.15em] uppercase text-[#171E2B]/60 font-semibold mb-3">
                    Documented Scope &amp; Limitations
                  </h3>
                  <ul className="space-y-2">
                    {project.limitations.map((l, idx) => (
                      <li
                        key={idx}
                        className="text-[13px] text-[#171E2B]/75 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#8DB9F0] font-bold shrink-0">•</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Status Caveat Note */}
              {project.isPrototype && (
                <div className="mt-4 border-l-2 border-[#F5B69E] pl-4 py-1 text-[13px] text-[#171E2B]/75 italic">
                  Status Note: Prototype demonstration. Designed to evaluate API-assisted mathematical parsing. Not tested or hardened for multi-tenant production traffic.
                </div>
              )}
              {project.isEarlierProject && (
                <div className="mt-4 border-l-2 border-[#8DB9F0] pl-4 py-1 text-[13px] text-[#171E2B]/75 italic">
                  Status Note: Earlier academic exploratory project in computer vision. Quantitative metrics represent development checkpoints and should be verified on clinical rPPG benchmarks before comparison.
                </div>
              )}
            </section>
          </ScrollReveal>
        </article>

        {/* Bottom Actions */}
        <div className="mt-16 pt-8 border-t border-[#8DB9F0]/30 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/projects"
            className="text-[13px] text-[#171E2B] font-semibold hover:text-[#8DB9F0] transition underline decoration-[#8DB9F0]"
          >
            ← Return to Selected Projects
          </Link>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#8DB9F0] bg-white text-[#171E2B] px-5 py-2 text-[12px] font-medium hover:bg-[#8DB9F0] transition rounded-sm font-mono shadow-2xs"
          >
            Inspect Source on GitHub ↗
          </a>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
