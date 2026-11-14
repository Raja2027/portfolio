import { ScrollReveal } from '../hooks/useScrollReveal';
import { skills } from '../data/profile';

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section className="py-24 px-6 lg:px-12 border-t border-[#8DB9F0]/30 bg-[#E9E8F8]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-3">
          Toolkit
        </p>
        <h2 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(28px,4vw,40px)] font-normal text-[#171E2B] mb-12">
          Technical Proficiency
        </h2>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#8DB9F0]/30 border border-[#8DB9F0]/30 rounded-sm overflow-hidden">
            {categories.map(([category, items]) => (
              <div key={category} className="bg-white p-6">
                <h3 className="text-[11px] tracking-[0.15em] uppercase text-[#F5B69E] font-bold mb-4 font-mono">
                  {category}
                </h3>
                <div className="flex flex-col gap-2">
                  {items.map((skill) => (
                    <p key={skill} className="text-[14px] text-[#171E2B] flex items-center gap-2">
                      <span className="text-[#8DB9F0] font-bold">–</span>
                      <span>{skill}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
