import { ScrollReveal } from '../hooks/useScrollReveal';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-[#171E2B] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-3">
            Inquiries &amp; Opportunities
          </p>
          <h2 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(28px,4vw,42px)] font-normal text-white mb-4 leading-tight">
            Let's discuss research, ideas and possibilities.
          </h2>
          <p className="text-[16px] text-white/80 mb-10 leading-relaxed max-w-xl mx-auto">
            I'm interested in research conversations, meaningful collaborations and opportunities to work on challenging machine learning problems.
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href={`mailto:${profile.email}`}
              className="bg-[#8DB9F0] text-[#171E2B] px-7 py-3 text-[13px] font-semibold hover:bg-[#8DB9F0]/80 transition-colors rounded-sm inline-flex items-center gap-2 shadow-xs"
            >
              Email Me
            </a>
            <a
              href={profile.cvPath}
              download="Raja_Babu_CV.pdf"
              className="border border-[#8DB9F0]/60 text-white px-7 py-3 text-[13px] font-medium hover:bg-[#8DB9F0]/20 transition-colors rounded-sm inline-flex items-center gap-2"
            >
              Download CV
            </a>
          </div>
        </ScrollReveal>

        {/* Social / External Links */}
        <ScrollReveal delay={150}>
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10 text-[13px]">
            <a
              href={`mailto:${profile.email}`}
              className="text-white/70 hover:text-[#8DB9F0] transition-colors tracking-wide"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#8DB9F0] transition-colors tracking-wide"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#8DB9F0] transition-colors tracking-wide"
            >
              GitHub ↗
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
