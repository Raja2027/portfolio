import { ScrollReveal } from '../hooks/useScrollReveal';
import { researchInterests } from '../data/profile';

export default function ResearchInterests() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#E9E8F8]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-3">
          Research Direction
        </p>
        <h2 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(24px,3.5vw,36px)] font-normal text-[#171E2B] mb-12">
          What I'm interested in exploring next.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchInterests.map((interest, index) => (
            <ScrollReveal key={index}>
              <div className="bg-white border border-[#8DB9F0]/30 p-6 rounded-sm h-full shadow-2xs">
                <h3 className="text-[16px] font-medium text-[#171E2B] mb-2">
                  {interest.title}
                </h3>
                <p className="text-[14px] text-[#171E2B]/75 leading-[1.7]">
                  {interest.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
