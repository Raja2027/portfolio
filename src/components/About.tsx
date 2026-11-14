import { profile } from '../data/profile';
import { ScrollReveal } from '../hooks/useScrollReveal';

const paragraphs = [
  'I am a Computer Science undergraduate who became interested in intelligent machines and how they can work independently.',
  'My curiosity about autonomous machines gradually led me towards engineering, machine learning and research.',
  'Today, I am particularly interested in understanding how machine learning models behave under imperfect data, uncertain labels and challenging conditions.',
  'I enjoy connecting theoretical questions with practical implementation, whether through computer vision systems or controlled machine learning experiments.',
];

const infoItems = [
  { label: 'University', value: profile.education.university },
  { label: 'Degree', value: profile.education.degree },
  { label: 'CGPA', value: profile.education.cgpa },
  { label: 'Minor', value: profile.education.minor },
  { label: 'Expected Graduation', value: profile.education.expectedGraduation },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 border-t border-[#8DB9F0]/30 bg-[#E9E8F8]">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <ScrollReveal>
          <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-3">
            Perspective
          </p>
          <h2 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(28px,4vw,40px)] font-normal text-[#171E2B] mb-4">
            A little about my journey.
          </h2>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left — text content */}
          <ScrollReveal>
            <div className="space-y-5">
              {paragraphs.map((text, i) => (
                <p
                  key={i}
                  className="text-[16px] leading-[1.85] text-[#171E2B]/75 font-['Inter',sans-serif]"
                >
                  {text}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — info card */}
          <ScrollReveal delay={150}>
            <div className="bg-white border border-[#8DB9F0]/30 p-8 rounded-sm h-fit shadow-2xs">
              <div className="space-y-6">
                {infoItems.map((item) => (
                  <div key={item.label}>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-[#171E2B]/50 font-mono">
                      {item.label}
                    </p>
                    <p className="text-[15px] font-medium text-[#171E2B] mt-1 font-['Inter',sans-serif]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
