import { profile } from '../data/profile';
import { ScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-24 pb-16 px-6 lg:px-12 bg-[#E9E8F8]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center w-full">
        {/* Left column */}
        <ScrollReveal>
          <div>
            {/* Label */}
            <p className="text-[11px] tracking-[0.24em] uppercase font-['Inter',sans-serif] font-semibold text-[#F5B69E] mb-6">
              Machine Learning · Computer Vision · Research
            </p>

            {/* Headline */}
            <h1 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(32px,5vw,52px)] leading-[1.15] font-normal text-[#171E2B] mb-6">
              {profile.tagline}
            </h1>

            {/* Intro paragraph */}
            <p className="text-[16px] lg:text-[17px] leading-[1.75] text-[#171E2B]/75 font-['Inter',sans-serif] mb-8 max-w-xl">
              {profile.intro}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#research"
                className="inline-block bg-[#8DB9F0] text-[#171E2B] px-6 py-3 text-[13px] font-semibold hover:bg-[#8DB9F0]/80 transition-colors font-['Inter',sans-serif] rounded-sm shadow-xs"
              >
                Explore My Research
              </a>
              <a
                href="#projects"
                className="inline-block border border-[#8DB9F0] bg-white/50 text-[#171E2B] px-6 py-3 text-[13px] font-medium hover:bg-[#8DB9F0]/20 transition-colors font-['Inter',sans-serif] rounded-sm"
              >
                View Selected Projects
              </a>
            </div>

            {/* Availability */}
            {profile.availability && (
              <div className="mt-8 flex items-center gap-2 text-[12px] text-[#171E2B]/60 font-['Inter',sans-serif]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B69E] shrink-0" />
                <span>{profile.availability}</span>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Right column */}
        <ScrollReveal delay={200}>
          <div className="flex flex-col items-center lg:items-end">
            <img
              src={profile.profileImage}
              alt={`${profile.name} — Profile`}
              className="w-full max-w-[340px] aspect-[3/4] object-cover rounded-sm border border-[#8DB9F0]/40 shadow-sm bg-white/40"
            />
            <p className="text-[11px] text-[#171E2B]/55 text-center mt-3 font-['Inter',sans-serif]">
              Raja Babu — LPU, India
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
