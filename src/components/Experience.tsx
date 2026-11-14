import { ScrollReveal } from '../hooks/useScrollReveal';
import { profile, experience } from '../data/profile';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 border-t border-[#8DB9F0]/30 bg-[#E9E8F8]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-3">
          Background
        </p>
        <h2 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(28px,4vw,40px)] font-normal text-[#171E2B] mb-12">
          Experience &amp; Education
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-[#8DB9F0]/30" />

          {/* Experience Section */}
          <div>
            <p className="text-[12px] tracking-[0.15em] uppercase text-[#171E2B]/55 font-mono mb-8 ml-8">
              Experience
            </p>

            {experience.map((item, index) => (
              <ScrollReveal key={index}>
                <div className="relative mb-10">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[#8DB9F0] border-2 border-[#E9E8F8]" />

                  {/* Card */}
                  <div className="ml-8">
                    <p className="text-[12px] text-[#171E2B]/50 font-mono tracking-wide mb-1">
                      {item.period}
                    </p>
                    <h3 className="text-[18px] font-semibold text-[#171E2B] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-[#F5B69E] font-semibold mb-3">
                      {item.organization} · {item.location}
                    </p>

                    {item.type === 'training' && item.achievement && (
                      <span className="text-[11px] bg-[#F5B69E]/25 text-[#171E2B] border border-[#F5B69E] px-2.5 py-0.5 inline-block mb-3 rounded-full font-medium">
                        {item.achievement}
                      </span>
                    )}

                    {item.responsibilities.length > 0 && (
                      <ul className="space-y-1">
                        {item.responsibilities.map((resp, rIndex) => (
                          <li
                            key={rIndex}
                            className="text-[14px] text-[#171E2B]/75 leading-[1.75] flex gap-2"
                          >
                            <span className="text-[#8DB9F0] font-bold shrink-0">–</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Education Section */}
          <div>
            <p className="text-[12px] tracking-[0.15em] uppercase text-[#171E2B]/55 font-mono mb-8 mt-16 ml-8">
              Education
            </p>

            {/* B.Tech - Main education card */}
            <ScrollReveal>
              <div className="relative mb-10">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[#8DB9F0] border-2 border-[#E9E8F8]" />

                <div className="ml-8 bg-white border border-[#8DB9F0]/30 p-6 rounded-sm shadow-2xs">
                  <h3 className="font-[family-name:'Source_Serif_4',serif] text-[20px] font-normal text-[#171E2B] mb-3">
                    {profile.education.degree}
                  </h3>
                  <div className="space-y-1.5">
                    <p className="text-[14px] text-[#171E2B]/75">
                      {profile.education.university}
                    </p>
                    <p className="text-[12px] text-[#171E2B]/50 font-mono tracking-wide">
                      {profile.education.period}
                    </p>
                    <p className="text-[14px] text-[#171E2B]/75">
                      CGPA: <span className="text-[#171E2B] font-mono font-semibold">{profile.education.cgpa}</span>
                    </p>
                    <p className="text-[14px] text-[#171E2B]/75">
                      Minor: <span className="text-[#171E2B] font-medium">{profile.education.minor}</span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* School Education */}
            {profile.schoolEducation.map((school, index) => (
              <ScrollReveal key={index}>
                <div className="relative mb-6">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[#F5B69E] border-2 border-[#E9E8F8]" />

                  <div className="ml-8">
                    <p className="text-[12px] text-[#171E2B]/50 font-mono tracking-wide mb-1">
                      {school.period}
                    </p>
                    <h4 className="text-[16px] font-medium text-[#171E2B] mb-1">
                      {school.level}
                    </h4>
                    <p className="text-[14px] text-[#171E2B]/70 mb-1">
                      {school.school}
                    </p>
                    <p className="text-[14px] text-[#F5B69E] font-mono font-semibold">
                      Result: <span className="text-[#171E2B] font-medium">{school.result}</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
