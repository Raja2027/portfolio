import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ScrollReveal } from '../hooks/useScrollReveal';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'systems', label: 'Systems' },
  { key: 'computer-vision', label: 'Computer Vision' },
  { key: 'prototype', label: 'Prototype' },
];

function FeaturedProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const hasScreenshot = project.screenshots.length > 0;

  return (
    <ScrollReveal className="mb-6">
      <div className="bg-white border border-[#8DB9F0]/30 rounded-sm overflow-hidden shadow-2xs hover:border-[#8DB9F0] transition-colors">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="aspect-[16/10] overflow-hidden bg-[#E9E8F8]/50">
            {hasScreenshot ? (
              <img
                src={project.screenshots[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#E9E8F8]/50 flex items-center justify-center">
                <span className="text-[#171E2B]/50 text-[14px] font-mono">
                  No preview available
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#171E2B]/50 font-mono mb-2">
              Project {project.number}
            </p>
            <Link
              to={`/projects/${project.id}`}
              className="font-[family-name:'Source_Serif_4',serif] text-[22px] font-normal text-[#171E2B] hover:text-[#8DB9F0] transition-colors"
            >
              {project.title}
            </Link>
            <p className="text-[12px] text-[#171E2B]/55 mb-4 mt-2">
              {project.date}
            </p>
            <p className="text-[14px] text-[#171E2B]/75 leading-[1.75] mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] bg-[#8DB9F0]/15 text-[#171E2B] border border-[#8DB9F0]/30 px-2.5 py-1 rounded-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.isPrototype && (
                <span className="text-[10px] tracking-[0.1em] uppercase bg-[#F5B69E]/25 border border-[#F5B69E] text-[#171E2B] px-2.5 py-1 font-semibold rounded-full">
                  Prototype
                </span>
              )}
              {project.isEarlierProject && (
                <span className="text-[10px] tracking-[0.1em] uppercase bg-[#8DB9F0]/25 border border-[#8DB9F0] text-[#171E2B] px-2.5 py-1 font-medium rounded-full">
                  Earlier Project
                </span>
              )}
            </div>

            <Link
              to={`/projects/${project.id}`}
              className="text-[13px] text-[#171E2B] font-semibold hover:text-[#8DB9F0] transition underline decoration-[#8DB9F0] inline-flex items-center gap-1"
            >
              View Case Study →
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function CompactProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <ScrollReveal className="mb-4">
      <div className="bg-white border border-[#8DB9F0]/30 p-6 rounded-sm shadow-2xs hover:border-[#8DB9F0] transition-colors">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#171E2B]/50 font-mono mb-2">
          Project {project.number}
        </p>
        <Link
          to={`/projects/${project.id}`}
          className="font-[family-name:'Source_Serif_4',serif] text-[18px] font-normal text-[#171E2B] hover:text-[#8DB9F0] transition-colors"
        >
          {project.title}
        </Link>
        <p className="text-[12px] text-[#171E2B]/55 mb-3 mt-1">{project.date}</p>
        <p className="text-[14px] text-[#171E2B]/75 leading-[1.7] mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] bg-[#8DB9F0]/15 text-[#171E2B] border border-[#8DB9F0]/30 px-2.5 py-1 rounded-2xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.isPrototype && (
            <span className="text-[10px] tracking-[0.1em] uppercase bg-[#F5B69E]/25 border border-[#F5B69E] text-[#171E2B] px-2.5 py-1 font-semibold rounded-full">
              Prototype
            </span>
          )}
          {project.isEarlierProject && (
            <span className="text-[10px] tracking-[0.1em] uppercase bg-[#8DB9F0]/25 border border-[#8DB9F0] text-[#171E2B] px-2.5 py-1 font-medium rounded-full">
              Earlier Project
            </span>
          )}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="text-[13px] text-[#171E2B] font-semibold hover:text-[#8DB9F0] transition underline decoration-[#8DB9F0] inline-flex items-center gap-1"
        >
          View Details →
        </Link>
      </div>
    </ScrollReveal>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-[#E9E8F8]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-[11px] tracking-[0.24em] uppercase text-[#F5B69E] font-semibold mb-3">
            Portfolio
          </p>
          <h2 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(28px,4vw,40px)] font-normal text-[#171E2B] mb-4">
            Selected Projects
          </h2>
          <p className="text-[15px] text-[#171E2B]/75 mb-8 max-w-2xl">
            A collection of engineering projects spanning systems design,
            computer vision, and applied machine learning.
          </p>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 text-[12px] tracking-wide font-medium transition-colors rounded-sm cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-[#8DB9F0] text-[#171E2B] border border-[#8DB9F0] font-semibold shadow-xs'
                    : 'bg-white/60 border border-[#8DB9F0]/30 text-[#171E2B]/75 hover:border-[#8DB9F0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project Cards */}
        <div className="space-y-0">
          {filteredProjects.map((project) => {
            if (project.featured) {
              return (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                />
              );
            }
            return (
              <CompactProjectCard key={project.id} project={project} />
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[15px] text-[#171E2B]/55">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
