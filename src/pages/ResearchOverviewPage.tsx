import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { research } from '../data/research';
import { researchInterests } from '../data/profile';

export default function ResearchOverviewPage() {
  const adaface = research.adaface;
  const cactusTsp = research.cactusTsp;

  return (
    <div className="min-h-screen bg-[#E9E8F8] text-[#171E2B] flex flex-col justify-between font-['Inter',sans-serif]">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto py-16 px-6 lg:px-12 w-full">
        {/* Page Header */}
        <header className="border-b border-[#8DB9F0]/30 pb-10 mb-14">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-3">
            Academic Focus &amp; Investigation
          </p>
          <h1 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(32px,4.5vw,50px)] font-normal text-[#171E2B] leading-tight mb-4">
            Research &amp; Investigation
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#171E2B]/75 max-w-2xl leading-relaxed">
            Understanding model limitations under corrupted data, learning with noisy labels, and discovering exact polynomial-time algorithms for structured combinatorial optimization.
          </p>
        </header>

        {/* 1. Research Project 01 — AdaFace */}
        <section className="mb-24 pb-16 border-b border-[#8DB9F0]/30">
          <ScrollReveal>
            <div className="space-y-8">
              {/* Category & Status Tags */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] tracking-widest uppercase bg-[#8DB9F0]/25 border border-[#8DB9F0] text-[#171E2B] px-3 py-1 font-medium rounded-full">
                  {adaface.status}
                </span>
                <span className="text-[10px] tracking-widest uppercase bg-[#F5B69E]/30 border border-[#F5B69E] text-[#171E2B] px-3 py-1 font-semibold rounded-full">
                  CASIA-WebFace Protocol
                </span>
                <span className="text-[11px] font-mono text-[#171E2B]/50 ml-auto">
                  Research Investigation 01 · Computer Vision
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h2 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(26px,3.8vw,38px)] font-normal text-[#171E2B] leading-tight mb-3">
                  <Link
                    to="/research/adaface"
                    className="hover:text-[#8DB9F0] transition-colors underline decoration-[#8DB9F0]/40 hover:decoration-[#8DB9F0] underline-offset-4"
                  >
                    {adaface.title}
                  </Link>
                </h2>
                <p className="text-[17px] text-[#171E2B]/70 italic">
                  {adaface.subtitle}
                </p>
              </div>

              {/* Editorial Prose Overview */}
              <div className="space-y-4 text-[15px] lg:text-[16px] text-[#171E2B]/80 leading-[1.85] max-w-3xl border-l-2 border-[#8DB9F0] pl-6 py-1">
                {adaface.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Study Parameters Spec-Sheet */}
              <div className="pt-4">
                <p className="text-[11px] font-mono tracking-wider uppercase text-[#F5B69E] font-semibold mb-3">
                  Experimental Parameters &amp; Framework
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 border-t border-b border-[#8DB9F0]/25 py-4">
                  {adaface.studyDetails.map((detail, idx) => (
                    <div key={idx} className="flex flex-col py-1">
                      <span className="text-[11px] font-mono uppercase text-[#171E2B]/55">
                        {detail.label}
                      </span>
                      <span className="text-[14px] font-medium text-[#171E2B] mt-0.5">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Open Statistical Indicators */}
              <div className="py-2">
                <div className="flex flex-col sm:flex-row items-baseline justify-between gap-6 pb-6 border-b border-[#8DB9F0]/25">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#F5B69E] font-semibold block mb-1">
                      Historical Diagnostics
                    </span>
                    <h3 className="font-[family-name:'Source_Serif_4',serif] text-[20px] font-normal text-[#171E2B]">
                      Initial Diagnostic Pass Checkpoints
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-8 sm:gap-12">
                    {adaface.findings.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="font-mono text-[32px] font-semibold text-[#171E2B] leading-none">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-[#171E2B]/60 mt-1 uppercase font-mono tracking-wider">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[12px] text-[#171E2B]/60 italic mt-3">
                  {adaface.findings.note}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/research/adaface"
                  className="bg-[#8DB9F0] text-[#171E2B] px-6 py-3 text-[13px] font-semibold hover:bg-[#8DB9F0]/80 transition-colors rounded-sm inline-flex items-center gap-2 shadow-xs"
                >
                  <span>Open Full AdaFace Case Study</span>
                  <span>→</span>
                </Link>

                {adaface.paperPdf && (
                  <a
                    href={adaface.paperPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#8DB9F0] text-[#171E2B] px-5 py-3 text-[12px] font-medium hover:bg-[#8DB9F0]/20 transition-colors rounded-sm font-mono"
                  >
                    Download Manuscript (PDF) ↓
                  </a>
                )}

                <a
                  href={adaface.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#8DB9F0] text-[#171E2B] px-5 py-3 text-[12px] font-medium hover:bg-[#8DB9F0]/20 transition-colors rounded-sm font-mono"
                >
                  GitHub: adaFace-noise-study ↗
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 2. Research Project 02 — Cactus-Discount TSP */}
        <section className="mb-24 pb-16 border-b border-[#8DB9F0]/30">
          <ScrollReveal>
            <div className="space-y-8">
              {/* Category & Status Tags */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] tracking-widest uppercase bg-[#8DB9F0]/25 border border-[#8DB9F0] text-[#171E2B] px-3 py-1 font-medium rounded-full">
                  {cactusTsp.status}
                </span>
                <span className="text-[10px] tracking-widest uppercase bg-[#F5B69E]/30 border border-[#F5B69E] text-[#171E2B] px-3 py-1 font-semibold rounded-full">
                  Graph Algorithms · Combinatorial Optimization
                </span>
                <span className="text-[11px] font-mono text-[#171E2B]/50 ml-auto">
                  Research Investigation 02 · Theoretical CS
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h2 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(26px,3.8vw,38px)] font-normal text-[#171E2B] leading-tight mb-3">
                  <Link
                    to="/research/cactus-tsp"
                    className="hover:text-[#8DB9F0] transition-colors underline decoration-[#8DB9F0]/40 hover:decoration-[#8DB9F0] underline-offset-4"
                  >
                    {cactusTsp.title}
                  </Link>
                </h2>
                <p className="text-[17px] text-[#171E2B]/70 italic">
                  {cactusTsp.subtitle}
                </p>
              </div>

              {/* Editorial Prose Overview */}
              <div className="space-y-4 text-[15px] lg:text-[16px] text-[#171E2B]/80 leading-[1.85] max-w-3xl border-l-2 border-[#8DB9F0] pl-6 py-1">
                {cactusTsp.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Study Parameters Spec-Sheet */}
              <div className="pt-4">
                <p className="text-[11px] font-mono tracking-wider uppercase text-[#F5B69E] font-semibold mb-3">
                  Algorithmic Specifications &amp; Structural Theorems
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 border-t border-b border-[#8DB9F0]/25 py-4">
                  {cactusTsp.studyDetails.map((detail, idx) => (
                    <div key={idx} className="flex flex-col py-1">
                      <span className="text-[11px] font-mono uppercase text-[#171E2B]/55">
                        {detail.label}
                      </span>
                      <span className="text-[14px] font-medium text-[#171E2B] mt-0.5">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Open Statistical Indicators */}
              <div className="py-2">
                <div className="flex flex-col sm:flex-row items-baseline justify-between gap-6 pb-6 border-b border-[#8DB9F0]/25">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#F5B69E] font-semibold block mb-1">
                      Verified Complexities
                    </span>
                    <h3 className="font-[family-name:'Source_Serif_4',serif] text-[20px] font-normal text-[#171E2B]">
                      Exact Optimization &amp; Query Scaling
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-8 sm:gap-12">
                    {cactusTsp.findings.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="font-mono text-[32px] font-semibold text-[#171E2B] leading-none">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-[#171E2B]/60 mt-1 uppercase font-mono tracking-wider">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[12px] text-[#171E2B]/60 italic mt-3">
                  {cactusTsp.findings.note}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/research/cactus-tsp"
                  className="bg-[#8DB9F0] text-[#171E2B] px-6 py-3 text-[13px] font-semibold hover:bg-[#8DB9F0]/80 transition-colors rounded-sm inline-flex items-center gap-2 shadow-xs"
                >
                  <span>Open Full Cactus TSP Case Study</span>
                  <span>→</span>
                </Link>

                {cactusTsp.paperPdf && (
                  <a
                    href={cactusTsp.paperPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#8DB9F0] text-[#171E2B] px-5 py-3 text-[12px] font-medium hover:bg-[#8DB9F0]/20 transition-colors rounded-sm font-mono"
                  >
                    Download Paper (PDF) ↓
                  </a>
                )}

                <a
                  href={cactusTsp.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#8DB9F0] text-[#171E2B] px-5 py-3 text-[12px] font-medium hover:bg-[#8DB9F0]/20 transition-colors rounded-sm font-mono"
                >
                  GitHub: cactus-discount-tsp ↗
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 3. Research Interests & Core Agenda */}
        <section className="mb-24 border-t border-[#8DB9F0]/30 pt-16">
          <div className="mb-10">
            <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-2">
              Research Agenda
            </p>
            <h2 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(26px,3.5vw,36px)] font-normal text-[#171E2B]">
              Core Theoretical Questions
            </h2>
            <p className="text-[15px] text-[#171E2B]/70 mt-2 max-w-2xl">
              Foundational questions bridging machine learning robustness, loss dynamics, and polynomial-time combinatorial algorithms.
            </p>
          </div>

          <div className="divide-y divide-[#8DB9F0]/25">
            {researchInterests.map((interest, idx) => (
              <ScrollReveal key={idx}>
                <div className="py-8 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 items-baseline">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[13px] text-[#F5B69E] font-bold">
                      0{idx + 1}
                    </span>
                    <span className="h-px w-8 bg-[#F5B69E]/50 hidden md:block" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:'Source_Serif_4',serif] text-[20px] font-medium text-[#171E2B] mb-2">
                      {interest.title}
                    </h3>
                    <p className="text-[14px] text-[#171E2B]/75 leading-[1.8] max-w-2xl">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 4. Independent Literature Study */}
        <section className="mb-16 border-t border-[#8DB9F0]/30 pt-12">
          <div className="border-l-2 border-[#8DB9F0] pl-6 space-y-2">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#F5B69E] font-semibold">
              Independent Paper Reading &amp; Seminars
            </p>
            <h3 className="font-[family-name:'Source_Serif_4',serif] text-[20px] font-medium text-[#171E2B]">
              Theoretical Literature Exploration
            </h3>
            <p className="text-[14px] text-[#171E2B]/75 leading-[1.8] max-w-3xl">
              Reviewed more than ten research publications focusing on face recognition loss formulations (ArcFace, AdaFace, CosFace), exact combinatorial algorithms for the Traveling Salesperson Problem (Held-Karp, 1-tree relaxations, Concorde branch-and-cut), and foundational quantum machine learning concepts.
            </p>
            <p className="text-[12px] text-[#171E2B]/55 italic pt-1">
              Note: This literature activity reflects independent academic reading and theoretical study.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
