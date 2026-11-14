export interface ResearchProject {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  track: string;
  githubUrl: string;
  paperPdf?: string;
  heroImage?: string;
  benchmarkImage?: string;
  description: string[];
  studyDetails: { label: string; value: string }[];
  findings: {
    note: string;
    metrics: { label: string; value: string }[];
  };
  experimentalStatus: {
    completed: string[];
    pending: string[];
  };
  disclaimer: string;
  detailPage: {
    motivation: string;
    problemFormulation: string;
    relatedWork: string[];
    methodology: string[];
    datasetDesign: string;
    mathematicalFormulation: string;
    results: string[];
    limitations: string[];
    futureDirections: string[];
    references: string[];
  };
}

export const adafaceProject: ResearchProject = {
  id: 'adaface',
  title: 'Quality-Gated Label-Conflict Suppression for AdaFace',
  subtitle: 'Controlled Diagnostics and a Proposed Training Protocol for Face Recognition under Identity-Label Noise',
  status: 'Research Manuscript',
  track: 'Robust Machine Learning · Computer Vision · Loss Formulations',
  githubUrl: 'https://github.com/Raja2027/adaFace-noise-study',
  paperPdf: '/assets/documents/adaface_manuscript.pdf',
  description: [
    'My research investigates the distinction between image quality and identity-label correctness in face-recognition training.',
    'AdaFace uses feature norm to adapt its classification margin according to image quality. However, image quality does not independently establish whether a supplied identity label is correct.',
    'I investigated the behaviour of AdaFace under controlled identity-label noise using CASIA-WebFace and explored reference-assisted approaches for identifying conflicting labels.',
  ],

  studyDetails: [
    { label: '100,000-image training study', value: 'Controlled noise injection across CASIA-WebFace' },
    { label: '2,000 identities', value: 'Systematic corruption of identity assignments' },
    { label: 'Noise levels', value: '0%, 5%, 10% and 20% synthetic identity-label noise' },
    { label: 'Clean-validation analysis', value: 'Performance, sample difficulty and gradient behaviour' },
    { label: 'Reference verification', value: 'Experimental investigation of reference-based identity verification' },
    { label: 'Mathematical analysis', value: 'Detached sample-weight suppression formulation' },
  ],

  findings: {
    note: 'These are archived historical development measurements with documented validation limitations, not final unbiased benchmark results.',
    metrics: [
      {
        label: 'Historical best clean-validation accuracy at 0% noise',
        value: '91.725%',
      },
      {
        label: 'Historical best clean-validation accuracy at 20% noise',
        value: '84.075%',
      },
    ],
  },

  experimentalStatus: {
    completed: [
      'Controlled noise experiments across 0%, 5%, 10%, and 20% noise ratios',
      'Detector diagnostics and label-conflict precision/recall analysis',
      'Mathematical formulation of detached sample-weight gating',
      'Implementation checks and loss gradient variance measurements',
    ],
    pending: [
      'The final 30,000-image four-arm recognition-training experiment',
    ],
  },

  disclaimer: 'The proposed method\'s recognition benefit has not yet been established. The final recognition-training experiment is pending.',

  detailPage: {
    motivation: 'Face recognition models trained with angular-margin losses like AdaFace adapt their learning signal based on image quality (estimated via feature norm). However, a critical question arises: does low image quality necessarily indicate an incorrect identity label? My investigation explores this distinction — understanding when image quality signals are informative about label correctness and when they are not.',

    problemFormulation: 'AdaFace modulates its margin penalty using feature norm as a proxy for image quality. This creates an implicit assumption that low-quality samples deserve relaxed margins. However, when training data contains identity-label noise — where images are assigned to incorrect identities — low feature norm may not correlate with mislabelling. The research formalises this gap and investigates whether reference-assisted quality gating can help identify and suppress conflicting identity labels.',

    relatedWork: [
      'Angular-margin face recognition losses: ArcFace, CosFace, AdaFace',
      'Learning with noisy labels: Co-teaching, DivideMix, symmetric cross-entropy',
      'Data cleaning and label verification in large-scale face datasets',
      'Sample weighting and curriculum learning strategies',
    ],

    methodology: [
      'Systematic injection of synthetic identity-label noise at controlled rates (0%, 5%, 10%, 20%) into CASIA-WebFace.',
      'Training AdaFace under each noise condition and tracking clean-validation accuracy, gradient norms, and loss landscape behaviour.',
      'Implementing and evaluating reference-based identity verification using clean reference embeddings.',
      'Mathematical formulation of detached sample-weight suppression as a training modification.',
      'Diagnostic analysis of detector precision, recall, and calibration across noise levels.',
    ],

    datasetDesign: 'CASIA-WebFace (approximately 100,000 images, 2,000 identities) was used as the training set. Identity-label noise was injected by randomly reassigning a specified fraction of training images to incorrect identity labels, ensuring uniform noise distribution across identities.',

    mathematicalFormulation: 'The suppression mechanism operates through a detached sample weight that gates the loss contribution of each sample. The gating factor is determined by evaluating cosine alignment between the candidate sample embedding and a clean reference prototype. Detaching the gating computation guarantees that no backpropagation gradients flow through the verification module.',

    results: [
      'AdaFace shows measurable degradation under identity-label noise, with clean-validation accuracy dropping from 91.725% (0% noise) to 84.075% (20% noise).',
      'Feature norm distributions shift under noise injection, but the correlation between low feature norm and label incorrectness is not straightforward.',
      'Reference-based detection can identify a subset of conflicting labels, but detector precision varies with noise rate and reference quality.',
      'The mathematical framework for detached suppression is well-defined, but its recognition benefit has not been empirically established in the final experiment.',
    ],

    limitations: [
      'All experiments use CASIA-WebFace, which is smaller than datasets used in production face recognition. Results may not directly transfer to larger-scale settings.',
      'Validation was performed on a held-out clean subset of the training distribution, not on standard face recognition benchmarks (LFW, CFP-FP, AgeDB-30). This introduces potential validation bias.',
      'The reference-based detection assumes access to clean reference embeddings, which may not always be available in practice.',
      'The final recognition-training experiment (four-arm, 30,000 images) that would establish whether suppression improves recognition accuracy has not yet been conducted.',
    ],

    futureDirections: [
      'Conduct the four-arm recognition-training experiment to determine whether label-conflict suppression improves or degrades recognition accuracy.',
      'Evaluate on standard face recognition benchmarks to establish unbiased performance metrics.',
      'Investigate adaptive thresholding for the suppression mechanism.',
      'Explore the interaction between image quality and label noise in other angular-margin losses.',
      'Scale experiments to larger datasets (MS1MV2, WebFace260M) to test generalization.',
    ],

    references: [
      'Kim et al., "AdaFace: Quality Adaptive Margin for Face Recognition," CVPR 2022.',
      'Deng et al., "ArcFace: Additive Angular Margin Loss for Deep Face Recognition," CVPR 2019.',
      'Han et al., "Co-teaching: Robust Training of Deep Neural Networks with Extremely Noisy Labels," NeurIPS 2018.',
      'Li et al., "DivideMix: Learning with Noisy Labels as Semi-Supervised Learning," ICLR 2020.',
      'Yi et al., "Learning Face Representation from Scratch," arXiv 2014 (CASIA-WebFace).',
    ],
  },
};

export const cactusTspProject: ResearchProject = {
  id: 'cactus-tsp',
  title: 'Quadratic Recognition of Additive Costs with Cactus-Supported Discounts',
  subtitle: 'Exact Graph Recognition and Linear-Time Tour Optimization for Structured TSP',
  status: 'Ongoing Research',
  track: 'Theoretical Computer Science · Graph Algorithms · Combinatorial Optimization',
  githubUrl: 'https://github.com/Raja2027/cactus-discount-tsp',
  paperPdf: '/assets/documents/cactus_discount_tsp_paper.pdf',
  heroImage: '/assets/images/discount_graph.png',
  benchmarkImage: '/assets/images/tsp_benchmark.png',
  description: [
    'Investigates complete symmetric Traveling Salesperson Problem (TSP) cost matrices that decompose into an unknown additive city-charge baseline minus non-negative discounts supported on an unknown cactus graph.',
    'Presents an exact recognition and reconstruction algorithm using O(n²) arithmetic operations and O(n) auxiliary storage. For n ≥ 7, at most 35 independent anchor triples suffice to recover city charges with a single-coordinate repair, matching deterministic input-query lower bounds.',
    'Proves that tour optimization on the recovered cactus reduces to a maximum-weight linear forest solved in O(n) time via dynamic programming on the block-cut tree, validated across 33,864 small-graph enumerations and scaled up to 2,001 cities.',
  ],

  studyDetails: [
    { label: 'Time Complexity', value: 'O(n²) exact recognition, O(n) tour dynamic programming' },
    { label: 'Anchor Theorem', value: 'At most 35 independent triples with single-coordinate repair' },
    { label: 'Structural Property', value: '3-colorability of cacti & forbidden K_{2,3} subgraphs' },
    { label: 'Arithmetic Precision', value: 'Half-integral exact arithmetic with BigInteger in Java 17' },
    { label: 'Benchmark Scope', value: 'Evaluated against 10 standard exact and heuristic TSP methods' },
    { label: 'Extensive Validation', value: '33,864 small-graph enumerations & 2,509 reference suites' },
  ],

  findings: {
    note: 'These results represent exact mathematical theorems, software verification across 2,509 test cases, and empirical runtime scaling on synthetic instances. General unconstrained TSP remains NP-hard.',
    metrics: [
      {
        label: 'Arithmetic Recognition Complexity',
        value: 'O(n²)',
      },
      {
        label: 'Tour Optimization Complexity',
        value: 'O(n)',
      },
      {
        label: 'Max Scaled City Benchmark',
        value: '2,001',
      },
      {
        label: 'Verified Reference Cases',
        value: '2,509',
      },
    ],
  },

  experimentalStatus: {
    completed: [
      'Exact constant-anchor recognition theorem and soundness/completeness proofs',
      'Java 17 and Python 3 reference solvers with exact BigInteger arithmetic',
      'Exhaustive validation on all 33,864 small graphs (n = 3 to 6)',
      'Benchmark comparison against 10 algorithms on a 6-city metric instance',
      'Deterministic input-query lower bounds proving O(n²) optimality',
      'Scaling experiments up to 2,001 cities across path, cycle, star, and windmill graphs',
    ],
    pending: [
      'Heuristic extensions to noisy distance matrices with bounded surrogate error',
      'Investigation of broader support graph classes beyond bounded-treewidth cacti',
      'Empirical prevalence auditing across industrial and geographic routing instances',
    ],
  },

  disclaimer: 'This is an exact polynomial-time algorithm for a restricted structural matrix class. It does not imply a polynomial-time algorithm for general unconstrained TSP.',

  detailPage: {
    motivation: 'While the general Traveling Salesperson Problem is NP-hard, structured cost matrices can admit exact polynomial-time solutions. However, in practical routing, cost decompositions are rarely known in advance. The core theoretical question is whether one can detect an unknown additive baseline and unknown sparse discount structure directly from the raw pairwise cost matrix alone, without prior decomposition hints.',

    problemFormulation: 'A complete symmetric matrix C on n cities decomposes into city charges a_i and pairwise discounts d_{ij} such that C_{ij} = a_i + a_j - d_{ij}. The positive discounts are supported on a simple cactus graph G (where every edge belongs to at most one simple cycle). Neither the baseline charges nor the support graph are given. The algorithm must determine class membership, reconstruct exact charges and discounts, and compute an optimal tour in polynomial time, or reject with a certificate.',

    relatedWork: [
      'Weak-sum and additive cost matrices in combinatorial optimization',
      'Bounded-treewidth graph optimization and dynamic programming',
      'Recovering corrupted pair-sums and distance matrix decomposition',
      'Permuted Demidenko, Kalmanson, and Monge solvable TSP matrix classes',
      'Classic exact TSP methods: Held-Karp dynamic programming, branch-and-cut, Concorde',
    ],

    methodology: [
      'Formulating the constant-anchor recognition theorem exploiting the 3-colorability of cacti to identify clean triples among the first 7 vertices.',
      'Proving that the forbidden K_{2,3} property of cacti restricts charge underestimation to at most one vertex, resolvable via a single-coordinate repair.',
      'Developing a polyhedral active-basis search over tight pair inequalities for small instances (n = 3 to 6) with half-integral exact arithmetic.',
      'Designing a linear-time dynamic program on the rooted block-cut tree that optimizes the maximum-weight linear forest with degree capacities {0, 1, 2}.',
      'Establishing adversary input-query lower bounds showing at least (n-1)(n-2)/2 queries are necessary, proving O(n²) query optimality.',
      'Constructing comprehensive test harnesses in Java 17 and Python verifying exact outputs against brute-force and standard baselines.',
    ],

    datasetDesign: 'Evaluated across synthetic parametric graph families (simple cycles, joined cycles, stars, paths, windmills up to 2,001 cities) and real geographic benchmark instances (including dj38 and wi29), combined with exhaustive structural testing across all 33,864 labeled small graphs.',

    mathematicalFormulation: 'Every Hamiltonian tour visits each vertex with degree two, meaning the sum of endpoint charges equals 2 * sum(a_i) for every possible tour. Consequently, minimizing tour cost is strictly equivalent to maximizing collected discounts along the tour edges. On a cactus, this corresponds to selecting a maximum-weight linear forest, whose paths are closed into a complete Hamiltonian tour in the underlying complete graph.',

    results: [
      'Quadratic recognition time: Processes 100 cities in 2.7ms, 1,000 cities in 0.179s, and 2,000 cities in 0.867s, confirming O(n²) scaling.',
      'Six-city benchmark comparison: Exactly found optimal tour cost 27, matching brute-force (60 tours), Held-Karp (80 states), branch-and-bound, while beating standard Christofides approximation (cost 28).',
      'Exhaustive correctness: Successfully passed 33,864 small graph checks and 2,509 Java reference suites (including 2,422 accepted and 87 rejected inputs).',
      'Query optimality: Proved matching deterministic lower bounds of at least (n-1)(n-2)/2 matrix queries for exact recognition.',
    ],

    limitations: [
      'The exact algebraic decomposition requires exact equalities on undiscounted pairs; dense random noise destroys the latent algebraic structure.',
      'The support is restricted to cactus graphs (treewidth at most 2); graphs with higher-order cyclomatic complexity are not covered by this recognizer.',
      'Approximation bounds under small perturbations depend on having an externally supplied representable surrogate.',
    ],

    futureDirections: [
      'Extend anchor-based recognition to edge-deletion-closed graph classes of higher treewidth.',
      'Develop robust approximate recognition algorithms that find nearest cactus-discount representations under bounded Frobenius or L-infinity matrix noise.',
      'Investigate hybrid solvers that run quadratic recognition as a polynomial-time pre-filter before invoking general branch-and-cut solvers.',
    ],

    references: [
      'Held and Karp, "The Traveling-Salesman Problem and Minimum Spanning Trees," Operations Research 1970.',
      'Burkard et al., "Special Cases of the Traveling Salesman Problem," Optimization 1998.',
      'Moran and Wolfstahl, "Covering a Cactus by Paths," Discrete Applied Mathematics 2002.',
      'Cook, Helsgaun, Hougardy, and Schroeder, "Local Elimination in the Traveling Salesman Problem," arXiv 2023.',
      'Demidenko, "Special Cases of the Traveling Salesman Problem," Automation and Remote Control 1979.',
      'Applegate, Bixby, Chvatal, and Cook, "The Traveling Salesman Problem: A Computational Study," Princeton University Press 2006 (Concorde).',
    ],
  },
};

export const research = {
  sectionTitle: 'Research & Investigation',
  sectionSubtitle: 'Understanding the limitations of intelligent systems, investigating robust model behavior, and discovering exact combinatorial structures.',
  mainProject: adafaceProject,
  adaface: adafaceProject,
  cactusTsp: cactusTspProject,
  projects: [adafaceProject, cactusTspProject],
  getResearchById: (id: string): ResearchProject | undefined => {
    if (id === 'adaface') return adafaceProject;
    if (id === 'cactus-tsp') return cactusTspProject;
    return undefined;
  },
};
