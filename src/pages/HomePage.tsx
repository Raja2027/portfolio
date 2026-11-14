import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { profile } from '../data/profile';
import { research } from '../data/research';
import { projects } from '../data/projects';

export default function HomePage() {
  const selectedProjects = projects.slice(0, 3);
  const adaface = research.adaface;
  const cactusTsp = research.cactusTsp;

  return (
    <div className="min-h-screen bg-[#E9E8F8] text-[#171E2B] flex flex-col justify-between font-['Inter',sans-serif]">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION — Clean, Asymmetrical Editorial Above-the-Fold */}
        <section className="pt-16 pb-20 md:py-24 px-6 lg:px-12 border-b border-[#8DB9F0]/30">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <ScrollReveal>
              <div>
                <p className="text-[11px] tracking-[0.22em] uppercase font-['Inter',sans-serif] font-semibold text-[#F5B69E] mb-5">
                  Machine Learning Researcher &amp; AI Engineer
                </p>

                <h1 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(34px,5vw,56px)] leading-[1.12] font-normal text-[#171E2B] mb-6">
                  {profile.tagline}
                </h1>

                <p className="text-[16px] lg:text-[17px] leading-[1.8] text-[#171E2B]/75 font-['Inter',sans-serif] mb-8 max-w-xl">
                  {profile.intro}
                </p>

                {/* Primary Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/research"
                    className="inline-block bg-[#8DB9F0] text-[#171E2B] px-6 py-3 text-[13px] font-semibold hover:bg-[#8DB9F0]/80 transition-colors font-['Inter',sans-serif] rounded-sm shadow-xs"
                  >
                    Explore Research
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-block border border-[#8DB9F0] bg-white/50 text-[#171E2B] px-6 py-3 text-[13px] font-medium hover:bg-[#8DB9F0]/20 transition-colors font-['Inter',sans-serif] rounded-sm"
                  >
                    View Projects
                  </Link>
                </div>

                {/* Availability Badge */}
                {profile.availability && (
                  <div className="mt-8 flex items-center gap-2.5 text-[12px] text-[#171E2B]/60 font-['Inter',sans-serif]">
                    <span className="w-2 h-2 rounded-full bg-[#F5B69E] shrink-0" />
                    <span>{profile.availability}</span>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Right: Refined Portrait Crop */}
            <ScrollReveal delay={150}>
              <div className="flex flex-col items-center lg:items-end">
                <div className="w-full max-w-[320px] aspect-[4/5] overflow-hidden rounded-sm border border-[#8DB9F0]/40 shadow-xs bg-white/40">
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="w-full max-w-[320px] flex justify-between items-center text-[11px] text-[#171E2B]/55 mt-2.5 px-0.5 font-['Inter',sans-serif]">
                  <span>Raja Babu</span>
                  <span>Lovely Professional University</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION A: SELECTED RESEARCH PREVIEW — Showcasing Both Investigations */}
        <section className="py-20 px-6 lg:px-12 border-b border-[#8DB9F0]/30">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#F5B69E] font-semibold mb-2">
                  Featured Research
                </p>
                <h2 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(26px,3.5vw,38px)] font-normal text-[#171E2B]">
                  Academic Manuscripts &amp; Investigations
                </h2>
              </div>
              <Link
                to="/research"
                className="text-[13px] text-[#171E2B] font-semibold hover:text-[#8DB9F0] transition inline-flex items-center gap-1 shrink-0 underline decoration-[#8DB9F0]"
              >
                All Research Listings (2) →
              </Link>
            </div>

            <div className="space-y-16">
              {/* Research 01: AdaFace */}
              <ScrollReveal>
                <div className="space-y-5 pb-12 border-b border-[#8DB9F0]/25">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[10px] tracking-widest uppercase bg-[#8DB9F0]/25 border border-[#8DB9F0] text-[#171E2B] px-3 py-0.5 rounded-full font-medium">
                      {adaface.status}
                    </span>
                    <span className="text-[10px] tracking-widest uppercase bg-[#F5B69E]/30 border border-[#F5B69E] text-[#171E2B] px-3 py-0.5 rounded-full font-semibold">
                      CASIA-WebFace Protocol
                    </span>
                    <span className="text-[11px] font-mono text-[#171E2B]/50 ml-auto">
                      Investigation 01 · Robust ML
                    </span>
                  </div>

                  <div>
                    <h3 className="font-[family-name:'Source_Serif_4',serif] text-[22px] lg:text-[28px] font-normal text-[#171E2B] mb-2 leading-tight">
                      <Link to="/research/adaface" className="hover:text-[#8DB9F0] transition-colors">
                        {adaface.title}
                      </Link>
                    </h3>
                    <p className="text-[15px] text-[#171E2B]/70 italic">
                      {adaface.subtitle}
                    </p>
                  </div>

                  <div className="border-l-2 border-[#8DB9F0] pl-6 py-1">
                    <p className="text-[15px] text-[#171E2B]/80 leading-[1.85] max-w-3xl">
                      {adaface.description[0]}
                    </p>
                  </div>

                  {/* Metrics Strip */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 border-t border-b border-[#8DB9F0]/25">
                    <div>
                      <p className="text-[10px] text-[#171E2B]/55 uppercase font-mono tracking-wider">Dataset Scope</p>
                      <p className="font-mono text-[15px] font-medium text-[#171E2B] mt-0.5">100k Images · 2k IDs</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#171E2B]/55 uppercase font-mono tracking-wider">Noise Robustness</p>
                      <p className="font-mono text-[15px] font-semibold text-[#171E2B] mt-0.5">0%, 5%, 10%, 20% Noise</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#171E2B]/55 uppercase font-mono tracking-wider">Historical Best Clean</p>
                      <p className="font-mono text-[15px] font-semibold text-[#8DB9F0] mt-0.5">91.725% Accuracy</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-5 pt-1">
                    <Link
                      to="/research/adaface"
                      className="inline-block bg-[#8DB9F0] text-[#171E2B] px-5 py-2.5 text-[13px] font-semibold hover:bg-[#8DB9F0]/80 transition-colors rounded-sm shadow-xs"
                    >
                      Read AdaFace Case Study →
                    </Link>

                    {adaface.paperPdf && (
                      <a
                        href={adaface.paperPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-[#171E2B]/75 hover:text-[#171E2B] transition-colors inline-flex items-center gap-1 font-mono underline decoration-[#8DB9F0]/50"
                      >
                        Download Manuscript (PDF) ↓
                      </a>
                    )}

                    <a
                      href={adaface.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-[#171E2B]/75 hover:text-[#171E2B] transition-colors inline-flex items-center gap-1 font-mono underline decoration-[#8DB9F0]/50"
                    >
                      GitHub Codebase ↗
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Research 02: Cactus-Discount TSP */}
              <ScrollReveal>
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[10px] tracking-widest uppercase bg-[#8DB9F0]/25 border border-[#8DB9F0] text-[#171E2B] px-3 py-0.5 rounded-full font-medium">
                      {cactusTsp.status}
                    </span>
                    <span className="text-[10px] tracking-widest uppercase bg-[#F5B69E]/30 border border-[#F5B69E] text-[#171E2B] px-3 py-0.5 rounded-full font-semibold">
                      Graph Algorithms · Optimization
                    </span>
                    <span className="text-[11px] font-mono text-[#171E2B]/50 ml-auto">
                      Investigation 02 · Theoretical CS
                    </span>
                  </div>

                  <div>
                    <h3 className="font-[family-name:'Source_Serif_4',serif] text-[22px] lg:text-[28px] font-normal text-[#171E2B] mb-2 leading-tight">
                      <Link to="/research/cactus-tsp" className="hover:text-[#8DB9F0] transition-colors">
                        {cactusTsp.title}
                      </Link>
                    </h3>
                    <p className="text-[15px] text-[#171E2B]/70 italic">
                      {cactusTsp.subtitle}
                    </p>
                  </div>

                  <div className="border-l-2 border-[#8DB9F0] pl-6 py-1">
                    <p className="text-[15px] text-[#171E2B]/80 leading-[1.85] max-w-3xl">
                      {cactusTsp.description[1]}
                    </p>
                  </div>

                  {/* Metrics Strip */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 border-t border-b border-[#8DB9F0]/25">
                    <div>
                      <p className="text-[10px] text-[#171E2B]/55 uppercase font-mono tracking-wider">Recognition Bound</p>
                      <p className="font-mono text-[15px] font-semibold text-[#8DB9F0] mt-0.5">O(n²) Arithmetic Operations</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#171E2B]/55 uppercase font-mono tracking-wider">Tour Optimization</p>
                      <p className="font-mono text-[15px] font-semibold text-[#171E2B] mt-0.5">O(n) Block-Cut Tree DP</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#171E2B]/55 uppercase font-mono tracking-wider">Max Tested Instance</p>
                      <p className="font-mono text-[15px] font-semibold text-[#F5B69E] mt-0.5">2,001 Cities (&lt;1s)</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-5 pt-1">
                    <Link
                      to="/research/cactus-tsp"
                      className="inline-block bg-[#8DB9F0] text-[#171E2B] px-5 py-2.5 text-[13px] font-semibold hover:bg-[#8DB9F0]/80 transition-colors rounded-sm shadow-xs"
                    >
                      Read Cactus TSP Case Study →
                    </Link>

                    {cactusTsp.paperPdf && (
                      <a
                        href={cactusTsp.paperPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-[#171E2B]/75 hover:text-[#171E2B] transition-colors inline-flex items-center gap-1 font-mono underline decoration-[#8DB9F0]/50"
                      >
                        Download Paper (PDF) ↓
                      </a>
                    )}

                    <a
                      href={cactusTsp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-[#171E2B]/75 hover:text-[#171E2B] transition-colors inline-flex items-center gap-1 font-mono underline decoration-[#8DB9F0]/50"
                    >
                      GitHub Codebase ↗
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* SECTION B: SELECTED PROJECTS PREVIEW */}
        <section className="py-20 px-6 lg:px-12 border-b border-[#8DB9F0]/30">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#F5B69E] font-semibold mb-2">
                  Selected Work
                </p>
                <h2 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(26px,3.5vw,38px)] font-normal text-[#171E2B]">
                  Engineered Machine Learning Systems
                </h2>
              </div>
              <Link
                to="/projects"
                className="text-[13px] text-[#171E2B] font-semibold hover:text-[#8DB9F0] transition inline-flex items-center gap-1 shrink-0 underline decoration-[#8DB9F0]"
              >
                View All Projects ({projects.length}) →
              </Link>
            </div>

            {/* Three Selected Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedProjects.map((proj) => {
                const projectRoute = `/projects/${proj.id}`;
                const thumbnail = proj.screenshots.length > 0 ? proj.screenshots[0] : null;

                return (
                  <ScrollReveal key={proj.id} className="h-full">
                    <div className="bg-white border border-[#8DB9F0]/30 rounded-sm overflow-hidden flex flex-col justify-between h-full hover:border-[#8DB9F0] transition-colors shadow-2xs group">
                      <div>
                        {/* Preview Image */}
                        <div className="aspect-[16/10] bg-[#E9E8F8]/60 overflow-hidden border-b border-[#8DB9F0]/25">
                          {thumbnail ? (
                            <img
                              src={thumbnail}
                              alt={proj.title}
                              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[12px] text-[#171E2B]/50 font-mono">
                              System Architecture
                            </div>
                          )}
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                          <p className="text-[10px] font-mono tracking-wider uppercase text-[#171E2B]/50 mb-1.5">
                            Project {proj.number} · {proj.date}
                          </p>
                          <h3 className="font-[family-name:'Source_Serif_4',serif] text-[18px] font-medium text-[#171E2B] mb-2 leading-snug">
                            <Link to={projectRoute} className="hover:text-[#8DB9F0] transition-colors">
                              {proj.title}
                            </Link>
                          </h3>
                          <p className="text-[13px] text-[#171E2B]/75 leading-[1.65] mb-4 line-clamp-3">
                            {proj.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {proj.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] bg-[#8DB9F0]/15 text-[#171E2B] border border-[#8DB9F0]/30 px-2 py-0.5 rounded-2xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="px-6 pb-6 pt-0">
                        <Link
                          to={projectRoute}
                          className="text-[12px] font-semibold text-[#171E2B] hover:text-[#8DB9F0] transition inline-flex items-center gap-1 underline decoration-[#8DB9F0]"
                        >
                          View Case Study →
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION C: SHORT ABOUT PREVIEW */}
        <section className="py-16 px-6 lg:px-12 border-b border-[#8DB9F0]/30">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
            <ScrollReveal>
              <div>
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#F5B69E] font-semibold mb-2">
                  About the Investigator
                </p>
                <p className="text-[16px] lg:text-[17px] text-[#171E2B]/75 leading-[1.8] font-['Inter',sans-serif] max-w-2xl">
                  I am a Computer Science undergraduate at Lovely Professional University driven by curiosity about machine intelligence and mathematical foundations. My work spans robust machine learning under noisy data and exact polynomial-time algorithms for structured combinatorial problems.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Link
                to="/about"
                className="shrink-0 border border-[#8DB9F0] bg-white/50 text-[#171E2B] px-5 py-2.5 text-[13px] font-medium hover:bg-[#8DB9F0]/20 transition-colors rounded-sm inline-flex items-center gap-1.5 shadow-2xs"
              >
                <span>Read Full Biography &amp; Education</span>
                <span>→</span>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION D: CONTACT CALL-TO-ACTION */}
        <section className="py-20 px-6 lg:px-12 bg-[#171E2B] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#F5B69E] font-semibold mb-3">
                Research Inquiries &amp; Opportunities
              </p>
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(26px,3.8vw,38px)] font-normal text-white mb-4">
                Let's discuss research, ideas and possibilities.
              </h2>
              <p className="text-[15px] text-white/80 mb-8 leading-relaxed max-w-xl mx-auto">
                Open to discussions surrounding robust machine learning, academic graduate studies, and research-driven collaborations in algorithms and AI systems.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="bg-[#8DB9F0] text-[#171E2B] px-6 py-2.5 text-[13px] font-semibold hover:bg-[#8DB9F0]/80 transition-colors rounded-sm shadow-xs"
                >
                  Email Me: {profile.email}
                </a>
                <Link
                  to="/contact"
                  className="border border-[#8DB9F0]/60 text-white px-6 py-2.5 text-[13px] font-medium hover:bg-[#8DB9F0]/20 transition-colors rounded-sm"
                >
                  Contact Details &amp; Profiles →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
