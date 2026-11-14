import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';

const filterCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'systems', label: 'Systems & Backend' },
  { key: 'computer-vision', label: 'Computer Vision' },
  { key: 'prototype', label: 'Prototypes' },
];

export default function ProjectsOverviewPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#E9E8F8] text-[#171E2B] flex flex-col justify-between font-['Inter',sans-serif]">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto py-16 px-6 lg:px-12 w-full">
        {/* Page Header */}
        <header className="border-b border-[#8DB9F0]/30 pb-10 mb-10">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-3">
            Portfolio of Work
          </p>
          <h1 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(32px,4.5vw,50px)] font-normal text-[#171E2B] leading-tight mb-4">
            Selected Projects
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#171E2B]/75 max-w-2xl leading-relaxed">
            Architected systems, applied computer vision pipelines, and production machine learning engineering.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-8">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 text-[12px] font-medium transition-colors rounded-sm cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-[#8DB9F0] text-[#171E2B] border border-[#8DB9F0] font-semibold shadow-xs'
                    : 'bg-white/60 border border-[#8DB9F0]/30 text-[#171E2B]/70 hover:border-[#8DB9F0] hover:text-[#171E2B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => {
            const thumbnail = project.screenshots.length > 0 ? project.screenshots[0] : null;
            const projectRoute = `/projects/${project.id}`;

            return (
              <ScrollReveal key={project.id} className="h-full">
                <div className="bg-white border border-[#8DB9F0]/30 rounded-sm overflow-hidden flex flex-col justify-between h-full hover:border-[#8DB9F0] transition-all duration-200 shadow-2xs group">
                  <div>
                    {/* Visual Preview / Screenshot */}
                    <div className="aspect-[16/10] bg-[#E9E8F8]/50 overflow-hidden border-b border-[#8DB9F0]/25 relative">
                      {thumbnail ? (
                        <img
                          src={thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#171E2B]/55">
                          <p className="font-mono text-[12px] mb-1">Architecture &amp; API Prototype</p>
                          <p className="text-[11px] text-[#F5B69E] font-semibold">Interactive Notebook / Streamlit</p>
                        </div>
                      )}

                      {/* Status Badges */}
                      <div className="absolute top-3 right-3 flex gap-1.5">
                        {project.isPrototype && (
                          <span className="text-[10px] tracking-widest uppercase bg-white/95 backdrop-blur-xs border border-[#F5B69E] text-[#171E2B] px-2.5 py-0.5 rounded-full font-semibold">
                            Prototype
                          </span>
                        )}
                        {project.isEarlierProject && (
                          <span className="text-[10px] tracking-widest uppercase bg-white/95 backdrop-blur-xs border border-[#8DB9F0]/40 text-[#171E2B]/75 px-2.5 py-0.5 rounded-full font-medium">
                            Earlier Project
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-7">
                      <div className="flex items-center justify-between text-[11px] text-[#171E2B]/50 font-mono mb-2">
                        <span>Project {project.number}</span>
                        <span>{project.date}</span>
                      </div>

                      <h2 className="font-[family-name:'Source_Serif_4',serif] text-[22px] font-normal text-[#171E2B] mb-2 leading-snug">
                        <Link to={projectRoute} className="hover:text-[#8DB9F0] transition-colors">
                          {project.title}
                        </Link>
                      </h2>

                      {project.subtitle && (
                        <p className="text-[13px] text-[#F5B69E] font-semibold mb-3">
                          {project.subtitle}
                        </p>
                      )}

                      <p className="text-[14px] text-[#171E2B]/75 leading-[1.7] mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] bg-[#8DB9F0]/15 text-[#171E2B] border border-[#8DB9F0]/30 px-2.5 py-1 rounded-2xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="px-7 pb-7 pt-2 border-t border-[#8DB9F0]/20 flex items-center justify-between">
                    <Link
                      to={projectRoute}
                      className="text-[13px] font-semibold text-[#171E2B] hover:text-[#8DB9F0] transition inline-flex items-center gap-1.5 underline decoration-[#8DB9F0]"
                    >
                      <span>View Case Study</span>
                      <span>→</span>
                    </Link>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] font-mono text-[#171E2B]/60 hover:text-[#171E2B] transition-colors"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
