import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { research } from '../data/research';

const tocItems = [
  { id: 'motivation', label: '1. Motivation & Context' },
  { id: 'understanding-adaface', label: '2. Understanding AdaFace' },
  { id: 'problem-formulation', label: '3. Problem Formulation' },
  { id: 'dataset-corruption', label: '4. CASIA-WebFace & Corruption' },
  { id: 'methodology', label: '5. Methodology & Protocol' },
  { id: 'suppression-strategy', label: '6. Suppression Strategy' },
  { id: 'gradient-analysis', label: '7. Gradient Dynamics & Diagnostics' },
  { id: 'results', label: '8. Results & Historical Findings' },
  { id: 'status', label: '9. Experimental Verification Status' },
  { id: 'limitations', label: '10. Limitations & Scope' },
  { id: 'future-directions', label: '11. Future Directions' },
  { id: 'references', label: '12. References' },
];

export default function AdaFaceCaseStudyPage() {
  const { mainProject } = research;
  const { detailPage } = mainProject;
  const [activeSection, setActiveSection] = useState('motivation');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of tocItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#E9E8F8] text-[#171E2B] flex flex-col justify-between font-['Inter',sans-serif]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto py-12 px-6 lg:px-12 w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 text-[12px] text-[#171E2B]/55 flex items-center gap-2 font-mono">
          <Link to="/" className="hover:text-[#171E2B] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/research" className="hover:text-[#171E2B] transition-colors">Research</Link>
          <span>/</span>
          <span className="text-[#171E2B] font-medium truncate max-w-xs sm:max-w-md">AdaFace Noise Study</span>
        </nav>

        {/* Paper Header — Open Academic Layout */}
        <header className="border-b border-[#8DB9F0]/30 pb-10 mb-14">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-[10px] tracking-widest uppercase bg-[#8DB9F0]/25 border border-[#8DB9F0] text-[#171E2B] px-3 py-0.5 font-medium rounded-full">
              {mainProject.status}
            </span>
            <span className="text-[10px] tracking-widest uppercase bg-[#F5B69E]/30 border border-[#F5B69E] text-[#171E2B] px-3 py-0.5 font-semibold rounded-full">
              Undergraduate Research Investigation
            </span>
          </div>

          <h1 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(30px,4.5vw,48px)] font-normal text-[#171E2B] leading-[1.12] mb-3">
            {mainProject.title}
          </h1>

          <p className="text-[18px] text-[#171E2B]/75 italic mb-6">
            {mainProject.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#8DB9F0]/20 text-[13px] text-[#171E2B]/60">
            <div>
              <span className="text-[#171E2B] font-medium">Investigator:</span> Raja Babu · Lovely Professional University
            </div>
            <div className="flex items-center gap-4">
              {mainProject.paperPdf && (
                <a
                  href={mainProject.paperPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8DB9F0] text-[#171E2B] px-4 py-1.5 text-[12px] font-semibold hover:bg-[#8DB9F0]/80 transition-colors rounded-sm inline-flex items-center gap-1.5 shadow-2xs"
                >
                  <span>Download Manuscript (PDF)</span>
                  <span>↓</span>
                </a>
              )}
              <a
                href={mainProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#171E2B] font-semibold hover:text-[#8DB9F0] transition-colors inline-flex items-center gap-1 font-mono text-[12px] underline decoration-[#8DB9F0]"
              >
                GitHub Repository ↗
              </a>
            </div>
          </div>
        </header>

        {/* Two-Column Technical Layout: Minimal Sticky TOC + Open Main Article */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Clean Sticky Table of Contents (Desktop only, No Box) */}
          <aside className="hidden lg:block sticky top-28 py-2">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#F5B69E] font-bold mb-4 font-mono">
              Table of Contents
            </p>
            <nav className="flex flex-col space-y-2 border-l border-[#8DB9F0]/30 pl-3">
              {tocItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className={`text-left text-[12px] transition-colors py-1 cursor-pointer bg-transparent border-none ${
                    activeSection === item.id
                      ? 'text-[#171E2B] font-semibold -ml-[13px] pl-3 border-l-2 border-[#8DB9F0]'
                      : 'text-[#171E2B]/60 hover:text-[#171E2B]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-4 border-t border-[#8DB9F0]/25 text-[11px] text-[#171E2B]/55 font-mono">
              <p>Stage: Diagnostics Complete</p>
              <p className="text-[#F5B69E] font-medium mt-1">Pending: 30k 4-Arm Run</p>
            </div>
          </aside>

          {/* Right Column: Case Study Sections (Open Editorial Flow) */}
          <article className="space-y-16 max-w-3xl">
            {/* Abstract / Executive Summary — Open Left-Accented Lead */}
            <div className="border-l-2 border-[#8DB9F0] pl-6 py-1 space-y-3">
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#F5B69E] font-bold">
                Abstract &amp; Problem Orientation
              </p>
              <div className="space-y-3 text-[15px] lg:text-[16px] leading-[1.85] text-[#171E2B]/85">
                {mainProject.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* 1. Motivation */}
            <section id="motivation" className="pt-2">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                1. Motivation &amp; Context
              </h2>
              <p className="text-[15px] text-[#171E2B]/75 leading-[1.85] mb-4">
                {detailPage.motivation}
              </p>
              <p className="text-[15px] text-[#171E2B]/75 leading-[1.85]">
                Modern angular-margin loss functions represent the state of the art in deep feature learning for biometric face recognition. However, in web-scale datasets, identity-label noise—where facial images are assigned to the wrong individuals—directly distorts the learned hypersphere embeddings. To evaluate how quality-adaptive architectures react to corrupted data, we must first examine the theoretical principles underlying quality-adaptive loss design.
              </p>
            </section>

            {/* 2. Understanding AdaFace (Theory & Conceptual Foundations) */}
            <section id="understanding-adaface">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-6 pb-2 border-b border-[#8DB9F0]/25">
                2. Understanding AdaFace: Conceptual &amp; Theoretical Foundations
              </h2>

              <div className="space-y-8 text-[15px] lg:text-[16px] text-[#171E2B]/80 leading-[1.85]">
                {/* 2.1 Face Representation Learning */}
                <div>
                  <h3 className="text-[17px] font-medium text-[#171E2B] mb-2.5 flex items-baseline gap-2">
                    <span className="font-mono text-[12px] text-[#F5B69E] font-bold">2.1</span>
                    <span>Face Representation Learning</span>
                  </h3>
                  <p>
                    Modern deep face recognition models operate by converting high-dimensional facial images into compact numerical feature representations, commonly referred to as embeddings. The fundamental goal of this representation space is geometric: photographs of the same individual should map to closely clustered vectors, while representations of distinct individuals should remain clearly distinguishable and pushed far apart. During deployment, recognizing or verifying a subject does not require classifying them into fixed predefined categories; instead, it relies on calculating distance or angular alignment between these learned feature vectors. To structure this embedding space effectively, training frameworks employ classification objectives that enforce angular separation margins around each identity center on a normalized hypersphere.
                  </p>
                </div>

                {/* 2.2 The Image Quality Problem */}
                <div>
                  <h3 className="text-[17px] font-medium text-[#171E2B] mb-2.5 flex items-baseline gap-2">
                    <span className="font-mono text-[12px] text-[#F5B69E] font-bold">2.2</span>
                    <span>The Image Quality Problem in Face Recognition</span>
                  </h3>
                  <p>
                    In real-world data collection, facial images rarely conform to studio-quality standards. Large training corpora contain broad variations in photographic conditions, including motion blur, extreme head pose, low illumination, sensor noise, and partial facial occlusions. When a neural network processes a degraded face, the essential structural landmarks that define identity become obscured or ambiguous. Consequently, the resulting feature representations become intrinsically less reliable. In traditional face-recognition training schemes where every sample is subjected to an identical, rigid classification margin, the model is penalized aggressively for failing to cleanly separate degraded faces. This frequently leads to unstable gradient updates and compromises the geometry of the learned representation space.
                  </p>
                </div>

                {/* 2.3 AdaFace's Core Idea */}
                <div>
                  <h3 className="text-[17px] font-medium text-[#171E2B] mb-2.5 flex items-baseline gap-2">
                    <span className="font-mono text-[12px] text-[#F5B69E] font-bold">2.3</span>
                    <span>AdaFace's Core Idea: Feature Magnitude as an Image Quality Proxy</span>
                  </h3>
                  <p>
                    AdaFace addresses this dilemma by introducing a quality-adaptive margin mechanism that operates without requiring auxiliary quality assessment networks or human labels. The foundational insight of AdaFace is that the magnitude—or Euclidean length—of the unnormalized feature vector produced by deep backbones naturally correlates with perceived image clarity. Because deep convolutional networks find clear, high-contrast, informative faces easier to encode with strong activations, they assign them systematically larger feature norms. Conversely, ambiguous, blurred, or occluded faces produce weaker activation patterns with smaller vector lengths. AdaFace utilizes this unnormalized feature magnitude as an intrinsic proxy for image quality, dynamically adapting the classification margin during training so that clear faces face stringent separation requirements while degraded faces receive softer margin boundaries.
                  </p>
                </div>

                {/* 2.4 Why Quality-Adaptive Learning Matters */}
                <div>
                  <h3 className="text-[17px] font-medium text-[#171E2B] mb-2.5 flex items-baseline gap-2">
                    <span className="font-mono text-[12px] text-[#F5B69E] font-bold">2.4</span>
                    <span>Why Quality-Adaptive Learning Matters</span>
                  </h3>
                  <p>
                    Treating every training image identically creates an unproductive learning dynamic. A high-resolution, unoccluded portrait provides dependable visual evidence of true facial identity; demanding that the network push this sample into a tight, distant cluster strengthens identity discrimination. In contrast, forcing a severely degraded image to satisfy that exact same demanding margin compels the network to overfit to camera artifacts, pixel noise, or irrelevant background cues rather than generalizable facial features. By scaling supervisory pressure according to image clarity, AdaFace prevents low-quality images from destabilizing training while extracting the maximum discriminative signal from high-quality images.
                  </p>
                </div>

                {/* 2.5 An Important Limitation */}
                <div>
                  <h3 className="text-[17px] font-medium text-[#171E2B] mb-2.5 flex items-baseline gap-2">
                    <span className="font-mono text-[12px] text-[#F5B69E] font-bold">2.5</span>
                    <span>An Important Limitation: Quality Is Not Identity-Label Confidence</span>
                  </h3>
                  <p>
                    Despite its theoretical elegance, AdaFace possesses a fundamental blind spot: feature magnitude reflects learned visual clarity, not the veracity of the identity annotation. A crisp, perfectly lit photograph of Person B that has been incorrectly tagged with the identity of Person A will still generate a high feature magnitude because visually it is pristine. Because AdaFace equates large feature magnitude with an easy, trustworthy sample, it imposes a maximal angular margin on that mislabeled image. In doing so, it heavily penalizes the network for correctly not placing Person B near Person A's center, generating destructive gradient forces that pull identity centers toward erroneous representations. AdaFace possesses no internal mechanism to verify whether a high-norm sample actually matches the identity label assigned to it.
                  </p>
                </div>

                {/* 2.6 Connection to My Research */}
                <div className="border-l-2 border-[#8DB9F0] pl-6 py-2">
                  <h3 className="text-[17px] font-medium text-[#171E2B] mb-2.5 flex items-baseline gap-2">
                    <span className="font-mono text-[12px] text-[#F5B69E] font-bold">2.6</span>
                    <span>Connection to My Research: Investigating Label-Noise Vulnerability</span>
                  </h3>
                  <p>
                    This critical divergence between image clarity and identity correctness defines the core motivation of my research. Web-scale face recognition datasets regularly contain identity-label noise resulting from automated web scraping and imperfect indexing. My investigation evaluates how AdaFace behaves under systematic identity-label corruption, examining the hypothesis that intrinsic image quality signals must be accompanied by independent, reference-assisted identity consistency evidence. By exploring whether sample difficulty and identity-consistency evidence can complement each other, my research aims to design training protocols that retain AdaFace's resilience to physical image degradation while preventing mislabeled clean samples from polluting representation learning.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Problem Formulation */}
            <section id="problem-formulation">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                3. Problem Formulation: Disentangling Quality from Label Correctness
              </h2>
              <p className="text-[15px] text-[#171E2B]/75 leading-[1.85] mb-6">
                {detailPage.problemFormulation}
              </p>

              {/* Conceptual Comparison Table — Minimal Open Styling */}
              <div className="overflow-x-auto my-6 border-t border-b border-[#8DB9F0]/30 py-2">
                <table className="w-full text-left text-[13px] border-collapse">
                  <thead>
                    <tr className="border-b border-[#8DB9F0]/30 text-[#171E2B] font-semibold">
                      <th className="py-3 pr-4">Scenario</th>
                      <th className="py-3 px-4">Feature Vector Magnitude</th>
                      <th className="py-3 px-4">AdaFace Default Behavior</th>
                      <th className="py-3 pl-4">Desired Robust Behavior</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#8DB9F0]/20 text-[#171E2B]/75">
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#171E2B]">Blurry / Low-Quality Face</td>
                      <td className="py-3 px-4 font-mono text-[12px]">Low Feature Norm</td>
                      <td className="py-3 px-4">Reduces margin penalty (treats as ambiguous)</td>
                      <td className="py-3 pl-4 text-[#8DB9F0] font-semibold">Appropriate adaptation</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#171E2B]">Clean Face, Incorrect Identity</td>
                      <td className="py-3 px-4 font-mono text-[12px] font-semibold text-[#F5B69E]">High Feature Norm</td>
                      <td className="py-3 px-4">Enforces maximal margin penalty (treats as easy)</td>
                      <td className="py-3 pl-4 text-[#F5B69E] font-semibold">Gated suppression required</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4. Dataset & Corruption Design */}
            <section id="dataset-corruption">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                4. CASIA-WebFace &amp; Synthetic Corruption Design
              </h2>
              <p className="text-[15px] text-[#171E2B]/75 leading-[1.85] mb-6">
                {detailPage.datasetDesign}
              </p>

              {/* 4 Noise Arms — Open Process Spectrum */}
              <div className="border-t border-b border-[#8DB9F0]/30 py-5">
                <p className="text-[11px] font-mono tracking-wider uppercase text-[#F5B69E] font-semibold mb-3">
                  Four-Arm Controlled Noise Spectrum
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div>
                    <span className="font-mono text-[11px] text-[#171E2B]/50 block">ARM 01</span>
                    <span className="font-mono text-[22px] font-semibold text-[#171E2B] block mt-0.5">0%</span>
                    <span className="text-[12px] text-[#171E2B]/70 block mt-0.5">Clean Baseline</span>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[#171E2B]/50 block">ARM 02</span>
                    <span className="font-mono text-[22px] font-semibold text-[#171E2B] block mt-0.5">5%</span>
                    <span className="text-[12px] text-[#171E2B]/70 block mt-0.5">Light Corruption</span>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[#171E2B]/50 block">ARM 03</span>
                    <span className="font-mono text-[22px] font-semibold text-[#171E2B] block mt-0.5">10%</span>
                    <span className="text-[12px] text-[#171E2B]/70 block mt-0.5">Moderate Corruption</span>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[#F5B69E] font-semibold block">ARM 04</span>
                    <span className="font-mono text-[22px] font-semibold text-[#F5B69E] block mt-0.5">20%</span>
                    <span className="text-[12px] text-[#171E2B]/70 block mt-0.5">Severe Stress-Test</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Methodology */}
            <section id="methodology">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                5. Experimental Methodology &amp; Diagnostic Protocol
              </h2>
              <ol className="space-y-4 my-6">
                {detailPage.methodology.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-[14px] text-[#171E2B]/80 leading-relaxed">
                    <span className="font-mono text-[12px] font-bold text-[#F5B69E] shrink-0 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* 6. Suppression Strategy */}
            <section id="suppression-strategy">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                6. Proposed Suppression Strategy: Reference-Assisted Sample Gating
              </h2>
              <div className="space-y-4 text-[15px] text-[#171E2B]/80 leading-[1.85]">
                <p>
                  To mitigate the destructive impact of mislabeled high-norm images, the proposed framework introduces an independent verification layer during training. For each training sample, the network's extracted representation is evaluated against an accumulated, high-confidence reference prototype corresponding to the declared identity label.
                </p>
                <p>
                  When a clean image with a correct identity is presented, its feature representation aligns closely with the reference prototype, confirming label validity and allowing AdaFace to apply its standard quality-adapted margin. Conversely, when a visually sharp face carries a contradictory identity label, its feature vector points far from the declared identity's cluster center.
                </p>
                <div className="border-l-2 border-[#8DB9F0] pl-6 py-2 my-2 space-y-2">
                  <p className="text-[11px] font-mono tracking-wider uppercase text-[#F5B69E] font-semibold">
                    Detached Binary Gating Mechanism
                  </p>
                  <p className="text-[14px]">
                    The verification module produces a detached binary gating factor that determines whether the sample contributes to gradient backpropagation. If the alignment between the sample and the declared identity prototype falls below an adaptive quality-conditioned threshold, the sample's loss weighting is zeroed out.
                  </p>
                  <p className="text-[13px] text-[#171E2B]/70 italic pt-1">
                    Crucial architectural design: Detaching the gating computation guarantees that no backward gradients flow through the reference verification path, preventing noisy label assignments from distorting the anchor representations.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Gradient Dynamics & Diagnostics */}
            <section id="gradient-analysis">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                7. Gradient Dynamics &amp; Detector Diagnostics
              </h2>
              <p className="text-[15px] text-[#171E2B]/75 leading-[1.85] mb-4">
                Under standard AdaFace training with 20% identity noise, gradient norms with respect to class weights exhibit sharp variance spikes during early epochs. Conflicting label samples cause contradictory weight updates that pull identity anchors toward noisy clusters.
              </p>
              <div className="border-l-2 border-[#F5B69E] pl-6 py-2">
                <p className="text-[11px] uppercase tracking-wider text-[#F5B69E] font-semibold mb-1">
                  Diagnostic Observations
                </p>
                <p className="text-[14px] text-[#171E2B]/80 leading-[1.8]">
                  Reference-assisted gating successfully flags 72–78% of synthetic label noise in isolated evaluation passes, but detector calibration becomes sensitive to the availability and fidelity of clean identity anchors.
                </p>
              </div>
            </section>

            {/* 8. Results */}
            <section id="results">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                8. Results &amp; Historical Measurements
              </h2>
              <div className="border-l-2 border-[#F5B69E] pl-4 py-1 text-[13px] text-[#171E2B]/75 italic mb-6">
                {mainProject.findings.note}
              </div>

              {/* Open Numerical Metrics */}
              <div className="flex flex-wrap gap-8 sm:gap-14 py-4 border-t border-b border-[#8DB9F0]/30 mb-6">
                {mainProject.findings.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-mono text-[34px] font-semibold text-[#171E2B] leading-tight">
                      {m.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#171E2B]/60 font-mono mt-1">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {detailPage.results.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[14px] text-[#171E2B]/80 leading-relaxed">
                    <span className="text-[#8DB9F0] font-bold mt-0.5">–</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 9. Status */}
            <section id="status">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                9. Experimental Verification Status
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#8DB9F0]" />
                    <p className="text-[12px] font-semibold text-[#171E2B] uppercase tracking-wider">
                      Completed Stages
                    </p>
                  </div>
                  <ul className="space-y-2 text-[13px] text-[#171E2B]/75">
                    {mainProject.experimentalStatus.completed.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#8DB9F0] font-mono mt-0.5">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#F5B69E]" />
                    <p className="text-[12px] font-semibold text-[#171E2B] uppercase tracking-wider">
                      Pending Verification
                    </p>
                  </div>
                  <ul className="space-y-2 text-[13px] text-[#171E2B]/75">
                    {mainProject.experimentalStatus.pending.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#F5B69E] font-mono mt-0.5">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-l-2 border-[#F5B69E] pl-4 py-1 text-[13px] text-[#171E2B]/80 italic">
                Scientific statement: The proposed method has not yet been demonstrated to improve recognition accuracy. Its recognition benefit remains to be established in the pending 30,000-image four-arm experiment.
              </div>
            </section>

            {/* 10. Limitations */}
            <section id="limitations">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                10. Documented Limitations &amp; Scope
              </h2>
              <div className="space-y-3.5 my-4">
                {detailPage.limitations.map((lim, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-[13px] text-[#171E2B]/80 leading-relaxed">
                    <span className="text-[#F5B69E] font-mono text-[12px] shrink-0 font-bold">!</span>
                    <span>{lim}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 11. Future Directions */}
            <section id="future-directions">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                11. Future Research Directions
              </h2>
              <div className="space-y-3.5 my-4">
                {detailPage.futureDirections.map((dir, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-[14px] text-[#171E2B]/80 leading-relaxed">
                    <span className="font-mono text-[12px] font-semibold text-[#8DB9F0] shrink-0 mt-0.5">
                      11.{idx + 1}
                    </span>
                    <span>{dir}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 12. References */}
            <section id="references">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                12. References &amp; Cited Literature
              </h2>
              <ol className="space-y-2.5 my-4">
                {detailPage.references.map((ref, idx) => (
                  <li key={idx} className="text-[13px] text-[#171E2B]/75 leading-relaxed pl-2 border-l border-[#8DB9F0]/30">
                    <span className="font-mono text-[11px] text-[#171E2B]/50 mr-2">[{idx + 1}]</span>
                    {ref}
                  </li>
                ))}
              </ol>
            </section>

            {/* GitHub & Manuscript Links at Bottom */}
            <div className="pt-8 border-t border-[#8DB9F0]/30 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/research"
                className="text-[13px] text-[#171E2B] font-semibold hover:text-[#8DB9F0] transition underline decoration-[#8DB9F0]"
              >
                ← Return to Research Overview
              </Link>

              <div className="flex flex-wrap items-center gap-3">
                {mainProject.paperPdf && (
                  <a
                    href={mainProject.paperPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#8DB9F0] text-[#171E2B] px-5 py-2.5 text-[12px] font-semibold hover:bg-[#8DB9F0]/80 transition rounded-sm inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>Download Manuscript (PDF)</span>
                    <span>↓</span>
                  </a>
                )}

                <a
                  href={mainProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#8DB9F0] text-[#171E2B] px-5 py-2.5 text-[12px] font-medium hover:bg-[#8DB9F0]/20 transition rounded-sm font-mono"
                >
                  View Repository on GitHub ↗
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
