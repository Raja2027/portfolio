import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { profile, experience, skills, credentials, researchInterests } from '../data/profile';

export default function AboutPage() {
  const skillCategories = Object.entries(skills);

  return (
    <div className="min-h-screen bg-[#E9E8F8] text-[#171E2B] flex flex-col justify-between font-['Inter',sans-serif]">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto py-16 px-6 lg:px-12 w-full">
        {/* Page Header */}
        <header className="border-b border-[#8DB9F0]/30 pb-10 mb-12">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-3">
            Biography &amp; Background
          </p>
          <h1 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(32px,4.5vw,50px)] font-normal text-[#171E2B] leading-tight mb-4">
            About Raja Babu
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#171E2B]/75 max-w-2xl leading-relaxed">
            Final-year Computer Science undergraduate at Lovely Professional University, exploring model reliability, learning with noisy labels, and computer vision systems.
          </p>
        </header>

        {/* 1. Personal Introduction & Philosophy */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
            <ScrollReveal>
              <div className="space-y-4 text-[15px] leading-[1.85] text-[#171E2B]/80">
                <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4">
                  A little about my journey
                </h2>
                <p>
                  I am a Computer Science undergraduate who became interested in intelligent machines and how they can work independently. My initial curiosity about autonomous robotics and algorithmic decision-making gradually evolved into a rigorous focus on machine learning theory and applied engineering.
                </p>
                <p>
                  Today, I am particularly interested in understanding how machine learning models behave under imperfect data, uncertain labels, and challenging distribution shifts. In face recognition and computer vision, standard benchmarks often mask failure modes that arise in real-world deployment.
                </p>
                <p>
                  I enjoy connecting theoretical mathematical formulations with practical system implementation—whether by architecting microservice attendance pipelines or running controlled noise studies on 100,000-image datasets.
                </p>
              </div>
            </ScrollReveal>

            {/* Academic Summary Card */}
            <ScrollReveal delay={100}>
              <div className="bg-white border border-[#8DB9F0]/30 p-6 rounded-sm shadow-2xs space-y-4">
                <p className="text-[11px] font-mono tracking-widest uppercase text-[#F5B69E] font-semibold pb-2 border-b border-[#8DB9F0]/25">
                  Academic Profile
                </p>
                <div>
                  <p className="text-[10px] uppercase text-[#171E2B]/50 font-mono">University</p>
                  <p className="text-[13px] font-medium text-[#171E2B]">{profile.education.university}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-[#171E2B]/50 font-mono">Degree</p>
                  <p className="text-[13px] font-medium text-[#171E2B]">{profile.education.degree}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-[10px] uppercase text-[#171E2B]/50 font-mono">CGPA</p>
                    <p className="font-mono text-[16px] font-semibold text-[#171E2B]">{profile.education.cgpa}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-[#171E2B]/50 font-mono">Minor</p>
                    <p className="text-[12px] font-medium text-[#171E2B]">{profile.education.minor}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-[#171E2B]/50 font-mono">Expected Graduation</p>
                  <p className="font-mono text-[12px] text-[#171E2B]/75">{profile.education.expectedGraduation}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 2. Education & Experience Timelines */}
        <section className="mb-20 border-t border-[#8DB9F0]/30 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Experience Timeline */}
            <div>
              <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-2">
                Work &amp; Training
              </p>
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-8">
                Experience
              </h2>

              <div className="relative pl-6 border-l border-[#8DB9F0]/30 space-y-10">
                {experience.map((item, idx) => (
                  <ScrollReveal key={idx}>
                    <div className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#8DB9F0] border-2 border-[#E9E8F8]" />

                      <p className="font-mono text-[11px] text-[#171E2B]/55 mb-1">
                        {item.period} · {item.location}
                      </p>
                      <h3 className="text-[16px] font-semibold text-[#171E2B]">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-[#F5B69E] font-semibold mb-2">
                        {item.organization}
                      </p>

                      {item.type === 'training' && item.achievement && (
                        <span className="inline-block text-[11px] bg-[#F5B69E]/25 text-[#171E2B] border border-[#F5B69E] px-2.5 py-0.5 rounded-full mb-2 font-medium">
                          {item.achievement}
                        </span>
                      )}

                      {item.responsibilities.length > 0 && (
                        <ul className="space-y-1 mt-2 text-[13px] text-[#171E2B]/75">
                          {item.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <span className="text-[#8DB9F0] font-bold">–</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div>
              <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-2">
                Academic Background
              </p>
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-8">
                Education
              </h2>

              <div className="relative pl-6 border-l border-[#8DB9F0]/30 space-y-10">
                {/* B.Tech */}
                <ScrollReveal>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#8DB9F0] border-2 border-[#E9E8F8]" />
                    <p className="font-mono text-[11px] text-[#171E2B]/55 mb-1">
                      {profile.education.period}
                    </p>
                    <h3 className="text-[16px] font-semibold text-[#171E2B]">
                      {profile.education.degree}
                    </h3>
                    <p className="text-[13px] text-[#171E2B]/75 mb-2">
                      {profile.education.university}
                    </p>
                    <div className="flex flex-wrap gap-2 text-[11px]">
                      <span className="bg-white border border-[#8DB9F0]/30 px-2 py-0.5 font-mono text-[#171E2B] font-semibold rounded-2xs">
                        CGPA: {profile.education.cgpa}
                      </span>
                      <span className="bg-white border border-[#8DB9F0]/30 px-2 py-0.5 text-[#171E2B]/75 rounded-2xs">
                        Minor: {profile.education.minor}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* School Education */}
                {profile.schoolEducation.map((school, sIdx) => (
                  <ScrollReveal key={sIdx}>
                    <div className="relative">
                      <span className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-[#F5B69E] border-2 border-[#E9E8F8]" />
                      <p className="font-mono text-[11px] text-[#171E2B]/55 mb-1">
                        {school.period}
                      </p>
                      <h4 className="text-[14px] font-medium text-[#171E2B]">
                        {school.level}
                      </h4>
                      <p className="text-[12px] text-[#171E2B]/70">
                        {school.school}
                      </p>
                      <p className="text-[12px] text-[#F5B69E] font-mono mt-0.5 font-semibold">
                        Percentage: {school.result}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Technical Expertise (Skills Matrix) */}
        <section className="mb-20 border-t border-[#8DB9F0]/30 pt-12">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-2">
            Competencies &amp; Stack
          </p>
          <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-8">
            Technical Expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#8DB9F0]/30 border border-[#8DB9F0]/30 rounded-sm overflow-hidden">
            {skillCategories.map(([category, items]) => (
              <div key={category} className="bg-white p-6">
                <h3 className="text-[11px] font-mono tracking-wider uppercase text-[#F5B69E] font-bold mb-4">
                  {category}
                </h3>
                <ul className="space-y-2 text-[13px] text-[#171E2B]">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="text-[#8DB9F0] font-bold">–</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Certifications & Academic Credentials */}
        <section className="mb-20 border-t border-[#8DB9F0]/30 pt-12">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-2">
            Verification
          </p>
          <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-8">
            Certifications &amp; Training
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {credentials.map((cred, idx) => (
              <div key={idx} className="bg-white border border-[#8DB9F0]/30 p-4 rounded-sm flex items-start gap-3 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8DB9F0] mt-2 shrink-0" />
                <div>
                  <h3 className="text-[13px] font-medium text-[#171E2B]">{cred.name}</h3>
                  <p className="text-[11px] text-[#171E2B]/55 font-mono">{cred.issuer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-l-2 border-[#8DB9F0] pl-6 py-2">
            <p className="text-[11px] uppercase tracking-wider text-[#F5B69E] font-bold mb-1">
              Academic Literature Seminar
            </p>
            <p className="text-[13px] text-[#171E2B]/75 leading-relaxed">
              Reviewed more than ten research publications covering deep angular face losses, remote photoplethysmography (rPPG), and quantum algorithms.
            </p>
          </div>
        </section>

        {/* 5. Primary Research Interests */}
        <section className="mb-16 border-t border-[#8DB9F0]/30 pt-12">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-2">
            Focus Areas
          </p>
          <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-8">
            Research Interests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchInterests.map((interest, idx) => (
              <div key={idx} className="bg-white border border-[#8DB9F0]/30 p-5 rounded-sm shadow-2xs">
                <h3 className="text-[15px] font-medium text-[#171E2B] mb-1.5">
                  {interest.title}
                </h3>
                <p className="text-[13px] text-[#171E2B]/75 leading-[1.65]">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="border-t border-[#8DB9F0]/30 pt-8 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="text-[13px] text-[#171E2B] font-semibold hover:text-[#8DB9F0] transition underline decoration-[#8DB9F0]">
            ← Return to Home
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-[#8DB9F0] text-[#171E2B] px-5 py-2.5 text-[13px] font-semibold hover:bg-[#8DB9F0]/80 transition-colors rounded-sm shadow-xs"
          >
            Get in Touch →
          </Link>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
