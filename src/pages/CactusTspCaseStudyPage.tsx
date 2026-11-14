import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { research } from '../data/research';

const tocItems = [
  { id: 'motivation', label: '1. Motivation & Context' },
  { id: 'understanding-cactus-tsp', label: '2. Understanding Cactus-Discount TSP' },
  { id: 'problem-formulation', label: '3. Problem Formulation & Decomposition' },
  { id: 'recognition-algorithm', label: '4. The 35-Anchor Recognition Theorem' },
  { id: 'small-instances', label: '5. Small Instances & Polyhedral Fallback' },
  { id: 'optimization-dp', label: '6. Linear-Time Tour Optimization' },
  { id: 'theoretical-bounds', label: '7. Query Lower Bounds & Separations' },
  { id: 'benchmarks', label: '8. Benchmark Comparisons & 6-City Case Study' },
  { id: 'scaling-verification', label: '9. Scaling & Implementation Verification' },
  { id: 'limitations', label: '10. Limitations & Scope' },
  { id: 'future-directions', label: '11. Future Directions' },
  { id: 'references', label: '12. References' },
];

export default function CactusTspCaseStudyPage() {
  const project = research.cactusTsp;
  const { detailPage } = project;
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
          <span className="text-[#171E2B] font-medium truncate max-w-xs sm:max-w-md">Cactus Discount TSP</span>
        </nav>

        {/* Paper Header — Open Academic Layout */}
        <header className="border-b border-[#8DB9F0]/30 pb-10 mb-14">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-[10px] tracking-widest uppercase bg-[#8DB9F0]/25 border border-[#8DB9F0] text-[#171E2B] px-3 py-0.5 font-medium rounded-full">
              {project.status}
            </span>
            <span className="text-[10px] tracking-widest uppercase bg-[#F5B69E]/30 border border-[#F5B69E] text-[#171E2B] px-3 py-0.5 font-semibold rounded-full">
              Theoretical Computer Science · Graph Algorithms
            </span>
          </div>

          <h1 className="font-[family-name:'Source_Serif_4',serif] text-[clamp(30px,4.5vw,48px)] font-normal text-[#171E2B] leading-[1.12] mb-3">
            {project.title}
          </h1>

          <p className="text-[18px] text-[#171E2B]/75 italic mb-6">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#8DB9F0]/20 text-[13px] text-[#171E2B]/60">
            <div>
              <span className="text-[#171E2B] font-medium">Investigator:</span> Raja Babu · Lovely Professional University
            </div>
            <div className="flex items-center gap-5">
              {project.paperPdf && (
                <a
                  href={project.paperPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#171E2B] font-semibold hover:text-[#8DB9F0] transition-colors inline-flex items-center gap-1 font-mono text-[12px] underline decoration-[#8DB9F0]"
                >
                  Download Research Paper (PDF) ↓
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#171E2B] font-semibold hover:text-[#8DB9F0] transition-colors inline-flex items-center gap-1 font-mono text-[12px] underline decoration-[#8DB9F0]"
              >
                GitHub Codebase ↗
              </a>
            </div>
          </div>
        </header>

        {/* Two-Column Technical Layout: Minimal Sticky TOC + Open Main Article */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Clean Sticky Table of Contents */}
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
              <p>Complexity: O(n²) Recognition</p>
              <p className="text-[#F5B69E] font-medium mt-1">Tour DP: O(n) Linear Time</p>
            </div>
          </aside>

          {/* Right Column: Case Study Sections */}
          <article className="space-y-16 max-w-3xl">
            {/* Abstract / Executive Summary — Open Left-Accented Lead */}
            <div className="border-l-2 border-[#8DB9F0] pl-6 py-1 space-y-3">
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#F5B69E] font-bold">
                Abstract &amp; Core Contribution
              </p>
              <div className="space-y-3 text-[15px] lg:text-[16px] leading-[1.85] text-[#171E2B]/85">
                {project.description.map((p, i) => (
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
                Exact algorithms for restricted Traveling Salesperson Problem (TSP) instances are invaluable both practically and theoretically. However, a significant gap exists between having an algorithm that requires a pre-decomposed graph and having one that can autonomously discover whether a raw, unannotated distance matrix possesses that favorable structure. This research bridges that gap for matrices governed by additive city baselines and cactus-supported discounts.
              </p>
            </section>

            {/* 2. Understanding Cactus-Discount TSP */}
            <section id="understanding-cactus-tsp">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-6 pb-2 border-b border-[#8DB9F0]/25">
                2. Understanding Cactus-Discount TSP: Theoretical Foundations
              </h2>

              <div className="space-y-8 text-[15px] lg:text-[16px] text-[#171E2B]/80 leading-[1.85]">
                {/* 2.1 The Traveling Salesperson Problem & Special Solvable Cases */}
                <div>
                  <h3 className="text-[17px] font-medium text-[#171E2B] mb-2.5 flex items-baseline gap-2">
                    <span className="font-mono text-[12px] text-[#F5B69E] font-bold">2.1</span>
                    <span>The Traveling Salesperson Problem &amp; Tractable Classes</span>
                  </h3>
                  <p>
                    The classical Traveling Salesperson Problem seeks the minimum-cost closed tour visiting each of n cities exactly once. In its general form, the problem is NP-hard, and standard solvers rely on exponential worst-case branch-and-cut algorithms. Nevertheless, specific structured cost matrices—such as Monge matrices, Demidenko permutations, and Kalmanson circular arrangements—admit exact polynomial-time solutions. Identifying new solvable matrix classes with efficient recognition algorithms deepens our understanding of the mathematical boundary between tractability and computational hardness.
                  </p>
                </div>

                {/* 2.2 The Additive Baseline & Constant Tour Invariant */}
                <div>
                  <h3 className="text-[17px] font-medium text-[#171E2B] mb-2.5 flex items-baseline gap-2">
                    <span className="font-mono text-[12px] text-[#F5B69E] font-bold">2.2</span>
                    <span>The Additive Baseline &amp; Constant Tour Invariant</span>
                  </h3>
                  <p>
                    Consider a scenario where each city possesses an intrinsic individual charge, and the baseline cost to travel between city i and city j is simply the sum of their individual charges. In any valid Hamiltonian tour, every city is entered through one edge and exited through another—meaning every single vertex has degree exactly two in the tour. Because every city is visited twice, the sum of all endpoint charges across all edges in the tour equals exactly twice the sum of all individual city charges. This means the additive component contributes an identical constant cost to every conceivable Hamiltonian tour, regardless of visit order.
                  </p>
                </div>

                {/* 2.3 The Cactus Discount Graph Model */}
                <div>
                  <h3 className="text-[17px] font-medium text-[#171E2B] mb-2.5 flex items-baseline gap-2">
                    <span className="font-mono text-[12px] text-[#F5B69E] font-bold">2.3</span>
                    <span>The Cactus Discount Graph Model</span>
                  </h3>
                  <p>
                    Departures from the baseline cost are modeled through pairwise travel discounts: direct transit between city i and city j offers a positive discount, reducing the cost below the additive sum. The crucial structural constraint is that the network of positive discounts forms a cactus graph. A cactus is a connected graph in which any two simple cycles share at most one vertex, meaning every edge belongs to at most one simple cycle. While the overall travel graph remains completely connected, the preferential discount interactions are restricted to this treewidth-2 topological family.
                  </p>
                </div>

                {/* 2.4 Reduction to Maximum-Weight Linear Forest Selection */}
                <div>
                  <h3 className="text-[17px] font-medium text-[#171E2B] mb-2.5 flex items-baseline gap-2">
                    <span className="font-mono text-[12px] text-[#F5B69E] font-bold">2.4</span>
                    <span>Reduction to Maximum-Weight Linear Forest Selection</span>
                  </h3>
                  <p>
                    Because the additive baseline cost is invariant across all valid tours, minimizing total tour cost is mathematically equivalent to maximizing the total discounts collected along the chosen tour edges. In any Hamiltonian tour, the subset of edges selected from the discount graph cannot contain closed cycles (unless the entire discount graph is a single spanning cycle) and cannot exceed degree two at any vertex. Therefore, the optimal tour edges in the cactus must form a linear forest—a collection of disjoint simple paths. Once the maximum-weight linear forest is selected, closing its paths in the complete travel graph yields an exact optimal TSP tour.
                  </p>
                </div>

                {/* 2.5 The Hidden Structure Recognition Challenge */}
                <div>
                  <h3 className="text-[17px] font-medium text-[#171E2B] mb-2.5 flex items-baseline gap-2">
                    <span className="font-mono text-[12px] text-[#F5B69E] font-bold">2.5</span>
                    <span>The Hidden Structure Recognition Challenge</span>
                  </h3>
                  <p>
                    In practical computational applications, algorithms are not handed the individual city charges or the layout of the cactus graph. Instead, the solver is presented solely with a dense, symmetric matrix of pairwise numerical costs. The primary theoretical difficulty is inverse discovery: determining whether there exist non-negative city charges and a valid cactus support that generate the observed matrix, reconstructing those latent components, or certifying that no such decomposition exists.
                  </p>
                </div>

                {/* 2.6 The 35-Anchor Triple Theorem */}
                <div className="border-l-2 border-[#8DB9F0] pl-6 py-2">
                  <h3 className="text-[17px] font-medium text-[#171E2B] mb-2.5 flex items-baseline gap-2">
                    <span className="font-mono text-[12px] text-[#F5B69E] font-bold">2.6</span>
                    <span>The 35-Anchor Triple Theorem</span>
                  </h3>
                  <p>
                    The central breakthrough of this research is an exact recognition theorem that executes in quadratic time. Every cactus is 3-colorable. By the pigeonhole principle, among any 7 vertices in a cactus, at least 3 share the same color class and therefore form an independent triple with zero mutual discount edges. The pairwise costs between these 3 anchor cities represent uncorrupted additive sums, allowing their individual charges to be solved directly. Furthermore, because a cactus cannot contain complete bipartite subgraphs on 2 and 3 vertices (the forbidden K_2,3 property), projecting lower estimates from these anchors is guaranteed to leave at most one city charge underestimated, which is rectified through a single-coordinate repair step. Scanning the 35 candidate triples among the first 7 vertices solves recognition in O(n²) operations.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Problem Formulation & Decomposition */}
            <section id="problem-formulation">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                3. Problem Formulation &amp; Algebraic Decomposition
              </h2>
              <p className="text-[15px] text-[#171E2B]/75 leading-[1.85] mb-6">
                {detailPage.problemFormulation}
              </p>

              {/* Structural Comparison Matrix */}
              <div className="overflow-x-auto my-6 border-t border-b border-[#8DB9F0]/30 py-2">
                <table className="w-full text-left text-[13px] border-collapse">
                  <thead>
                    <tr className="border-b border-[#8DB9F0]/30 text-[#171E2B] font-semibold">
                      <th className="py-3 pr-4">Matrix Representation</th>
                      <th className="py-3 px-4">Latent Structure</th>
                      <th className="py-3 px-4">Algorithmic Consequence</th>
                      <th className="py-3 pl-4">Computational Complexity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#8DB9F0]/20 text-[#171E2B]/75">
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#171E2B]">Additive Component</td>
                      <td className="py-3 px-4 font-mono text-[12px]">City charges a_i + a_j</td>
                      <td className="py-3 px-4">Invariant constant baseline 2·Σ(a_i) for all tours</td>
                      <td className="py-3 pl-4 text-[#8DB9F0] font-semibold">O(n) arithmetic evaluation</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#171E2B]">Sparse Discounts</td>
                      <td className="py-3 px-4 font-mono text-[12px]">Cactus graph G = (V, E)</td>
                      <td className="py-3 px-4">Reduces to maximum-weight linear forest selection</td>
                      <td className="py-3 pl-4 text-[#8DB9F0] font-semibold">O(n) dynamic programming</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#171E2B]">Dense Input Matrix</td>
                      <td className="py-3 px-4 font-mono text-[12px] font-semibold text-[#F5B69E]">Raw pairwise distances</td>
                      <td className="py-3 px-4">Constant-anchor independent triple recovery &amp; repair</td>
                      <td className="py-3 pl-4 text-[#F5B69E] font-semibold">O(n²) optimal query recognition</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4. The 35-Anchor Recognition Theorem */}
            <section id="recognition-algorithm">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                4. The 35-Anchor Recognition Algorithm
              </h2>
              <div className="space-y-4 text-[15px] text-[#171E2B]/80 leading-[1.85]">
                <p>
                  The recognition procedure operates on an arbitrary symmetric n × n distance matrix for n ≥ 7 without prior knowledge of charges or discounts:
                </p>
                <ol className="space-y-3.5 my-4">
                  {detailPage.methodology.slice(0, 4).map((step, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-[14px] leading-relaxed">
                      <span className="font-mono text-[12px] font-bold text-[#F5B69E] shrink-0 mt-0.5">
                        0{idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="border-l-2 border-[#8DB9F0] pl-6 py-2 my-2 space-y-2">
                  <p className="text-[11px] font-mono tracking-wider uppercase text-[#F5B69E] font-semibold">
                    The Combinatorial Anchor Guarantee
                  </p>
                  <p className="text-[14px]">
                    Selecting the first 7 cities guarantees 35 possible triples. Since every cactus is 3-colorable, at least one triple is completely independent. Evaluating the matrix against that clean triple correctly recovers all uncorrupted charges, with the single-coordinate repair restoring any remaining coordinate in O(n²) time.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Small Instances & Polyhedral Fallback */}
            <section id="small-instances">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                5. Small Instances &amp; Polyhedral Active-Basis Search
              </h2>
              <p className="text-[15px] text-[#171E2B]/75 leading-[1.85] mb-4">
                For instances with 3 to 6 cities, an independent clean triple among 7 vertices cannot be formed. To ensure complete soundness and completeness across all inputs, the framework deploys a polyhedral active-basis enumeration over the face of tight pair inequalities.
              </p>
              <div className="border-l-2 border-[#F5B69E] pl-6 py-2 space-y-1">
                <p className="text-[11px] uppercase tracking-wider text-[#F5B69E] font-semibold">
                  Half-Integral Witness Property
                </p>
                <p className="text-[14px] text-[#171E2B]/80 leading-[1.8]">
                  For integer cost inputs, all vertices of the bounding polyhedron are half-integral. Multiplying charges and discounts by two allows the entire recognition and reconstruction pipeline to execute in exact BigInteger arithmetic, eliminating floating-point rounding errors and numerical instability.
                </p>
              </div>
            </section>

            {/* 6. Linear-Time Tour Optimization */}
            <section id="optimization-dp">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                6. Linear-Time Tour Dynamic Programming on Block-Cut Trees
              </h2>
              <div className="space-y-4 text-[15px] text-[#171E2B]/80 leading-[1.85]">
                <p>
                  Once the cactus discount graph is recognized, exact tour construction executes in O(n) time and O(n) auxiliary memory. The algorithm constructs the block-cut tree decomposition of the cactus and performs a bottom-up dynamic program.
                </p>
                <p>
                  Each vertex tracks three degree-capacity states corresponding to using 0, 1, or 2 incident discount edges. Child blocks (bridges or simple cycles) report maximum discount savings for consuming parent capacities. By prohibiting full-cycle selections inside individual cycle blocks, the solver guarantees that the selected edge set forms a valid linear forest without subtours. Concatenating the reconstructed path endpoints in the complete graph closes the exact optimal tour.
                </p>
                {project.heroImage && (
                  <div className="my-6">
                    <img
                      src={project.heroImage}
                      alt="Cactus Discount Graph Example"
                      className="w-full max-h-[360px] object-contain rounded-sm border border-[#8DB9F0]/30 bg-white/60 p-4 shadow-xs"
                    />
                    <p className="text-[11px] text-[#171E2B]/55 text-center mt-2 font-mono">
                      Figure 1: Six-city metric instance with cycles and articulation nodes in the discount graph.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* 7. Theoretical Bounds & Separations */}
            <section id="theoretical-bounds">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                7. Query Lower Bounds &amp; Structural Separations
              </h2>
              <p className="text-[15px] text-[#171E2B]/75 leading-[1.85] mb-4">
                The research establishes matching deterministic lower bounds: any algorithm that correctly decides class membership must inspect at least (n-1)(n-2)/2 matrix entries in the worst case. This proves that the O(n²) arithmetic recognition algorithm is asymptotically query-optimal.
              </p>
              <p className="text-[15px] text-[#171E2B]/75 leading-[1.85]">
                Furthermore, the paper proves explicit separations from adjacent tractable TSP classes: the 6-city benchmark instance possesses no permuted Demidenko ordering, separating it from Demidenko matrix families, while remaining distinct from Kalmanson and general metrics.
              </p>
            </section>

            {/* 8. Benchmark Comparisons & 6-City Case Study */}
            <section id="benchmarks">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                8. Benchmark Comparisons: 6-City Case Study
              </h2>
              <p className="text-[15px] text-[#171E2B]/75 leading-[1.85] mb-4">
                To evaluate solution quality and structural mechanics, the algorithm was tested against 10 classic exact and heuristic methods on a certified 6-city metric instance:
              </p>

              {/* 10-Method Comparison Table */}
              <div className="overflow-x-auto my-6 border-t border-b border-[#8DB9F0]/30 py-2">
                <table className="w-full text-left text-[13px] border-collapse">
                  <thead>
                    <tr className="border-b border-[#8DB9F0]/30 text-[#171E2B] font-semibold">
                      <th className="py-2.5 pr-4">Algorithm / Solver</th>
                      <th className="py-2.5 px-4">Tour Cost</th>
                      <th className="py-2.5 pl-4">Optimality &amp; Convergence Guarantee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#8DB9F0]/20 text-[#171E2B]/75 font-mono text-[12px]">
                    <tr>
                      <td className="py-2.5 pr-4 font-semibold text-[#171E2B]">Cactus Recognition + DP</td>
                      <td className="py-2.5 px-4 font-bold text-[#8DB9F0]">27</td>
                      <td className="py-2.5 pl-4 font-sans text-[13px] text-[#8DB9F0] font-semibold">Exact in class (Deterministic O(n²))</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-[#171E2B]">Brute Force Enumeration</td>
                      <td className="py-2.5 px-4">27</td>
                      <td className="py-2.5 pl-4 font-sans text-[13px]">Exact (Enumerated all 60 distinct tours)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-[#171E2B]">Held-Karp Dynamic Program</td>
                      <td className="py-2.5 px-4">27</td>
                      <td className="py-2.5 pl-4 font-sans text-[13px]">Exact (Computed 80 subset states)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-[#171E2B]">Branch and Bound (MST Bound)</td>
                      <td className="py-2.5 px-4">27</td>
                      <td className="py-2.5 pl-4 font-sans text-[13px]">Exact (18 nodes visited, 13 prunes)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-[#171E2B]">Nearest Neighbor Heuristic</td>
                      <td className="py-2.5 px-4 text-[#F5B69E]">27–29</td>
                      <td className="py-2.5 pl-4 font-sans text-[13px]">Start-dependent heuristic (Suboptimal from city F)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-[#171E2B]">Best-Improvement 2-opt</td>
                      <td className="py-2.5 px-4">27</td>
                      <td className="py-2.5 pl-4 font-sans text-[13px]">Local search (Reduced tour from 32 to 27)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-[#171E2B]">Simulated Annealing</td>
                      <td className="py-2.5 px-4">27</td>
                      <td className="py-2.5 pl-4 font-sans text-[13px]">Attained 27 in 20/20 fixed seed runs</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-[#171E2B]">Genetic Algorithm</td>
                      <td className="py-2.5 px-4 text-[#F5B69E]">27 in 19/20</td>
                      <td className="py-2.5 pl-4 font-sans text-[13px]">Stochastic budget (Seed 7 trapped at cost 28)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-[#171E2B]">Ant Colony System</td>
                      <td className="py-2.5 px-4">27</td>
                      <td className="py-2.5 pl-4 font-sans text-[13px]">Attained 27 in 20/20 fixed seed runs</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-[#171E2B]">Christofides 1.5-Approximation</td>
                      <td className="py-2.5 px-4 text-[#F5B69E] font-bold">28</td>
                      <td className="py-2.5 pl-4 font-sans text-[13px] text-[#F5B69E]">Suboptimal approximation (Metric ratio 1.5 bound)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {project.benchmarkImage && (
                <div className="my-6">
                  <img
                    src={project.benchmarkImage}
                    alt="TSP Algorithm Comparison"
                    className="w-full max-h-[360px] object-contain rounded-sm border border-[#8DB9F0]/30 bg-white/60 p-4 shadow-xs"
                  />
                  <p className="text-[11px] text-[#171E2B]/55 text-center mt-2 font-mono">
                    Figure 2: Empirical benchmark comparison across exact and heuristic approaches.
                  </p>
                </div>
              )}
            </section>

            {/* 9. Scaling & Implementation Verification */}
            <section id="scaling-verification">
              <h2 className="font-[family-name:'Source_Serif_4',serif] text-[24px] font-normal text-[#171E2B] mb-4 pb-2 border-b border-[#8DB9F0]/25">
                9. Scaling &amp; Implementation Verification
              </h2>
              <p className="text-[15px] text-[#171E2B]/75 leading-[1.85] mb-4">
                The solver was evaluated across parametric instances up to 2,001 cities, demonstrating sub-second execution on large structured networks:
              </p>

              {/* Scaling Table */}
              <div className="overflow-x-auto my-4 border-t border-b border-[#8DB9F0]/30 py-2">
                <table className="w-full text-left text-[13px] border-collapse">
                  <thead>
                    <tr className="border-b border-[#8DB9F0]/30 text-[#171E2B] font-semibold">
                      <th className="py-2 px-3">City Count</th>
                      <th className="py-2 px-3">Mixed Cactus</th>
                      <th className="py-2 px-3">Windmill Topology</th>
                      <th className="py-2 px-3">Star Topology</th>
                      <th className="py-2 px-3">Negative (Rejected)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#8DB9F0]/20 font-mono text-[12px] text-[#171E2B]/80">
                    <tr>
                      <td className="py-2 px-3 font-semibold text-[#171E2B]">100 Cities</td>
                      <td className="py-2 px-3">0.0027s</td>
                      <td className="py-2 px-3">0.0035s</td>
                      <td className="py-2 px-3">0.0029s</td>
                      <td className="py-2 px-3">0.0098s</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-[#171E2B]">300 Cities</td>
                      <td className="py-2 px-3">0.0166s</td>
                      <td className="py-2 px-3">0.0162s</td>
                      <td className="py-2 px-3">0.0148s</td>
                      <td className="py-2 px-3">0.0685s</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-[#171E2B]">1,000 Cities</td>
                      <td className="py-2 px-3">0.1790s</td>
                      <td className="py-2 px-3">0.1645s</td>
                      <td className="py-2 px-3">0.1633s</td>
                      <td className="py-2 px-3">0.9032s</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-[#171E2B]">2,000 Cities</td>
                      <td className="py-2 px-3 font-bold text-[#8DB9F0]">0.8668s</td>
                      <td className="py-2 px-3 font-bold text-[#8DB9F0]">0.8449s</td>
                      <td className="py-2 px-3 font-bold text-[#8DB9F0]">0.8103s</td>
                      <td className="py-2 px-3">3.1513s</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#8DB9F0]" />
                    <p className="text-[12px] font-semibold text-[#171E2B] uppercase tracking-wider">
                      Verified Milestones
                    </p>
                  </div>
                  <ul className="space-y-2 text-[13px] text-[#171E2B]/75">
                    {project.experimentalStatus.completed.map((item, idx) => (
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
                      Active Investigations
                    </p>
                  </div>
                  <ul className="space-y-2 text-[13px] text-[#171E2B]/75">
                    {project.experimentalStatus.pending.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#F5B69E] font-mono mt-0.5">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              <div className="border-l-2 border-[#F5B69E] pl-4 py-1 text-[13px] text-[#171E2B]/80 italic mt-4">
                {project.disclaimer}
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

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-[#8DB9F0]/30 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/research"
                className="text-[13px] text-[#171E2B] font-semibold hover:text-[#8DB9F0] transition underline decoration-[#8DB9F0]"
              >
                ← Return to Research Overview
              </Link>

              <div className="flex items-center gap-4">
                {project.paperPdf && (
                  <a
                    href={project.paperPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#8DB9F0] text-[#171E2B] px-5 py-2.5 text-[12px] font-medium hover:bg-[#8DB9F0]/20 transition rounded-sm font-mono"
                  >
                    Download Paper (PDF) ↓
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8DB9F0] text-[#171E2B] px-5 py-2.5 text-[12px] font-semibold hover:bg-[#8DB9F0]/80 transition rounded-sm font-mono shadow-xs"
                >
                  GitHub Repository ↗
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

