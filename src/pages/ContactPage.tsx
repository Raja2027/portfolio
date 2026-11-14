import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { profile } from '../data/profile';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#E9E8F8] text-[#171E2B] flex flex-col justify-between font-['Inter',sans-serif]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto py-16 px-6 lg:px-12 w-full">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-[12px] text-[#171E2B]/55 flex items-center gap-2 font-mono">
          <Link to="/" className="hover:text-[#171E2B] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#171E2B] font-medium">Contact</span>
        </nav>

        {/* Page Header */}
        <header className="border-b border-[#8DB9F0]/30 pb-10 mb-12">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-3">
            Inquiries &amp; Channels
          </p>
          <h1 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(32px,4.5vw,50px)] font-normal text-[#171E2B] leading-tight mb-4">
            Let's discuss research, ideas and possibilities.
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#171E2B]/75 max-w-2xl leading-relaxed">
            I'm interested in research conversations, meaningful collaborations and opportunities to work on challenging machine learning problems.
          </p>
        </header>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Email Direct */}
          <ScrollReveal>
            <div className="bg-white border border-[#8DB9F0]/30 p-8 rounded-sm h-full flex flex-col justify-between shadow-2xs">
              <div>
                <p className="text-[11px] tracking-wider uppercase text-[#F5B69E] font-bold mb-2">
                  Direct Inquiries
                </p>
                <h2 className="font-[family-name:'Source_Serif_4',serif] text-[20px] font-normal text-[#171E2B] mb-2">
                  Electronic Mail
                </h2>
                <p className="text-[14px] text-[#171E2B]/75 mb-6">
                  Best channel for research inquiries, graduate school discussions, or project questions.
                </p>
                <p className="font-mono text-[14px] text-[#171E2B] font-semibold select-all mb-6">
                  {profile.email}
                </p>
              </div>

              <div>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-block bg-[#8DB9F0] text-[#171E2B] px-5 py-2.5 text-[13px] font-semibold hover:bg-[#8DB9F0]/80 transition-colors rounded-sm shadow-xs"
                >
                  Compose Email ↗
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Download Curriculum Vitae */}
          <ScrollReveal delay={100}>
            <div className="bg-white border border-[#8DB9F0]/30 p-8 rounded-sm h-full flex flex-col justify-between shadow-2xs">
              <div>
                <p className="text-[11px] tracking-wider uppercase text-[#F5B69E] font-bold mb-2">
                  Documentation
                </p>
                <h2 className="font-[family-name:'Source_Serif_4',serif] text-[20px] font-normal text-[#171E2B] mb-2">
                  Curriculum Vitae
                </h2>
                <p className="text-[14px] text-[#171E2B]/75 mb-6">
                  Download my verified resume detailing undergraduate coursework, projects, and academic background.
                </p>
                <p className="text-[12px] font-mono text-[#171E2B]/55 mb-6">
                  Format: PDF document · Verified 2026
                </p>
              </div>

              <div>
                <a
                  href={profile.cvPath}
                  download="Raja_Babu_CV.pdf"
                  className="inline-block border border-[#8DB9F0] bg-white text-[#171E2B] px-5 py-2.5 text-[13px] font-medium hover:bg-[#8DB9F0] transition-colors rounded-sm shadow-2xs"
                >
                  Download CV (PDF) ↓
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Professional Profiles */}
        <section className="mb-16 border-t border-[#8DB9F0]/30 pt-12">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-2">
            Online Presence
          </p>
          <h2 className="font-[family-name:'Source_Serif_4',serif] text-[22px] font-normal text-[#171E2B] mb-6">
            Professional Networks &amp; Repositories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#8DB9F0]/30 p-6 rounded-sm hover:border-[#8DB9F0] transition-colors flex items-center justify-between group shadow-2xs"
            >
              <div>
                <p className="text-[10px] font-mono uppercase text-[#171E2B]/50">Professional Network</p>
                <p className="text-[16px] font-medium text-[#171E2B] group-hover:text-[#8DB9F0] transition-colors">
                  LinkedIn Profile
                </p>
                <p className="text-[12px] text-[#171E2B]/70 mt-1">linkedin.com/in/rajabsh</p>
              </div>
              <span className="text-[#8DB9F0] text-lg font-mono">
                ↗
              </span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#8DB9F0]/30 p-6 rounded-sm hover:border-[#8DB9F0] transition-colors flex items-center justify-between group shadow-2xs"
            >
              <div>
                <p className="text-[10px] font-mono uppercase text-[#171E2B]/50">Open Source Code</p>
                <p className="text-[16px] font-medium text-[#171E2B] group-hover:text-[#8DB9F0] transition-colors">
                  GitHub Repositories
                </p>
                <p className="text-[12px] text-[#171E2B]/70 mt-1">github.com/Raja2027</p>
              </div>
              <span className="text-[#8DB9F0] text-lg font-mono">
                ↗
              </span>
            </a>
          </div>
        </section>

        {/* Current Availability Note */}
        {profile.availability && (
          <section className="border-l-2 border-[#F5B69E] pl-6 py-2 mb-12 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5B69E] shrink-0" />
            <p className="text-[13px] text-[#171E2B]/80 leading-relaxed">
              <span className="font-semibold text-[#171E2B]">Current Availability:</span> {profile.availability}
            </p>
          </section>
        )}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
