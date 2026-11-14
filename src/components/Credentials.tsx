import { ScrollReveal } from '../hooks/useScrollReveal';
import { credentials } from '../data/profile';

export default function Credentials() {
  return (
    <section className="py-20 px-6 lg:px-12 border-t border-[#8DB9F0]/30 bg-[#E9E8F8]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-3">
          Verification
        </p>
        <h2 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(24px,3.5vw,32px)] font-normal text-[#171E2B] mb-8">
          Credentials &amp; Academic Activities
        </h2>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {credentials.map((cred, index) => (
            <ScrollReveal key={index}>
              <div className="bg-white border border-[#8DB9F0]/30 p-4 rounded-sm flex items-start gap-3 h-full shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8DB9F0] mt-2 shrink-0" />
                <div>
                  <h3 className="text-[14px] text-[#171E2B] font-medium">
                    {cred.name}
                  </h3>
                  <p className="text-[12px] text-[#171E2B]/55 font-mono mt-0.5">
                    {cred.issuer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Academic Reading Activity */}
        <ScrollReveal>
          <div className="mt-8 border-l-2 border-[#8DB9F0] pl-6 py-2">
            <p className="text-[11px] tracking-[0.15em] uppercase text-[#F5B69E] font-bold mb-1">
              Independent Literature Study
            </p>
            <p className="text-[14px] text-[#171E2B]/75 leading-relaxed">
              Reviewed more than ten research papers involving face recognition, remote photoplethysmography (rPPG), and foundational quantum computing.
            </p>
            <p className="text-[12px] text-[#171E2B]/55 mt-2 italic">
              Note: Literature exploration and seminar reading notes conducted for independent academic development.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
