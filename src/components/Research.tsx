import { research } from '../data/research';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

export default function Research() {
  const { mainProject } = research;

  return (
    <section id="research" className="py-24 px-6 lg:px-12 bg-[#E9E8F8]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-3">
            Academic Focus &amp; Investigation
          </p>
          <h2 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(28px,4vw,44px)] font-normal text-[#171E2B] mb-3">
            {research.sectionTitle}
          </h2>
          <p className="text-[16px] text-[#171E2B]/75 mb-14 max-w-2xl leading-relaxed">
            {research.sectionSubtitle}
          </p>
        </ScrollReveal>

        {/* Open Editorial Research Presentation (No Surrounding Box) */}
        <ScrollReveal>
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[10px] tracking-widest uppercase bg-[#8DB9F0]/25 border border-[#8DB9F0] text-[#171E2B] px-3 py-0.5 rounded-full font-medium">
                {mainProject.status}
              </span>
              <span className="text-[10px] tracking-widest uppercase bg-[#F5B69E]/30 border border-[#F5B69E] text-[#171E2B] px-3 py-0.5 rounded-full font-semibold">
                CASIA-WebFace Protocol
              </span>
            </div>

            <div>
              <h3 className="font-[family-name:'Source_Serif_4',serif] text-[24px] lg:text-[30px] font-normal text-[#171E2B] mb-2 leading-tight">
                {mainProject.title}
              </h3>
              <p className="text-[16px] text-[#171E2B]/70 italic">
                {mainProject.subtitle}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 border-l-2 border-[#8DB9F0] pl-6 py-1 text-[15px] lg:text-[16px] text-[#171E2B]/80 leading-[1.85] max-w-3xl">
              {mainProject.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Study Parameters Spec List (Open) */}
            <div className="pt-4">
              <p className="text-[11px] font-mono tracking-wider uppercase text-[#F5B69E] font-semibold mb-3">
                Study Framework &amp; Parameters
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 border-t border-b border-[#8DB9F0]/25 py-4">
                {mainProject.studyDetails.map((detail, index) => (
                  <div key={index} className="flex flex-col py-1">
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

            {/* Historical Diagnostics (Open Typographic Stats) */}
            <div className="py-2">
              <div className="flex flex-col sm:flex-row items-baseline justify-between gap-6 pb-6 border-b border-[#8DB9F0]/25">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#F5B69E] font-semibold block mb-1">
                    Diagnostics
                  </span>
                  <h4 className="font-[family-name:'Source_Serif_4',serif] text-[20px] font-normal text-[#171E2B]">
                    Initial Checkpoint Measurements
                  </h4>
                </div>
                <div className="flex flex-wrap gap-8 sm:gap-12">
                  {mainProject.findings.metrics.map((metric, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="font-mono text-[32px] font-semibold text-[#171E2B] leading-none">
                        {metric.value}
                      </span>
                      <span className="text-[11px] text-[#171E2B]/60 mt-1 uppercase font-mono tracking-wider">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[12px] text-[#171E2B]/60 italic mt-3">
                {mainProject.findings.note}
              </p>
            </div>

            {/* Verification Status (Open Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#8DB9F0]" />
                  <p className="text-[11px] tracking-wider uppercase text-[#171E2B] font-semibold">
                    Completed Diagnostics
                  </p>
                </div>
                <ul className="space-y-2 text-[13px] text-[#171E2B]/75">
                  {mainProject.experimentalStatus.completed.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className="text-[#8DB9F0] font-mono mt-0.5">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#F5B69E]" />
                  <p className="text-[11px] tracking-wider uppercase text-[#171E2B] font-semibold">
                    Pending Verification
                  </p>
                </div>
                <ul className="space-y-2 text-[13px] text-[#171E2B]/75">
                  {mainProject.experimentalStatus.pending.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className="text-[#F5B69E] font-mono mt-0.5">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Scientific Caveat */}
            <div className="border-l-2 border-[#F5B69E] pl-4 py-1 text-[13px] text-[#171E2B]/75 italic">
              {mainProject.disclaimer}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/research/adaface"
                className="bg-[#8DB9F0] text-[#171E2B] px-6 py-3 text-[13px] font-semibold hover:bg-[#8DB9F0]/80 transition rounded-sm shadow-xs"
              >
                Read Full Case Study &amp; Protocol →
              </Link>

              <a
                href={mainProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#8DB9F0] text-[#171E2B] px-5 py-3 text-[12px] font-medium hover:bg-[#8DB9F0]/20 transition rounded-sm font-mono"
              >
                GitHub Repository ↗
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
