export interface Profile {
  name: string;
  tagline: string;
  intro: string;
  labels: readonly string[];
  availability?: string;
  email: string;
  linkedin: string;
  github: string;
  cvPath: string;
  profileImage: string;
  education: {
    degree: string;
    university: string;
    period: string;
    cgpa: string;
    minor: string;
    admissionYear: number;
    expectedGraduation: string;
  };
  schoolEducation: readonly {
    level: string;
    school: string;
    period: string;
    result: string;
  }[];
}

export const profile: Profile = {
  name: 'Raja Babu',
  tagline: 'Building and investigating machine learning systems that remain reliable beyond the benchmark.',
  intro: "I'm Raja Babu, a Computer Science and Engineering undergraduate at Lovely Professional University, interested in robust and trustworthy machine learning. My work explores face recognition, learning with noisy labels, and the engineering of AI-driven systems.",
  labels: ['Machine Learning', 'Computer Vision', 'Research'],
  // availability: 'Open to research opportunities, collaborations and graduate study.',
  email: 'mergetech2027@gmail.com',

  linkedin: 'https://www.linkedin.com/in/rajabsh',
  github: 'https://github.com/Raja2027',
  cvPath: '/assets/documents/Raja_Babu_CV.pdf',
  profileImage: '/assets/images/profile.jpeg',
  education: {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    university: 'Lovely Professional University, Phagwara',
    period: '2023 – Expected June 2027',
    cgpa: '7.23/10',
    minor: 'Machine Learning',
    admissionYear: 2023,
    expectedGraduation: 'June 2027',
  },
  schoolEducation: [
    {
      level: 'Class XII (Intermediate)',
      school: 'Govt Co-ed Sr Sec School, New Delhi',
      period: 'Apr 2021 – Mar 2023',
      result: '66%',
    },
    {
      level: 'Class X (Matriculation)',
      school: 'Govt Co-ed Sr Sec School, New Delhi',
      period: 'Apr 2020 – Mar 2021',
      result: '76%',
    },
  ],
} as const;

export const experience = [
  {
    title: 'Summer Peer Tutoring — AI & Data Science',
    organization: 'DNK Skill',
    period: 'July 2026',
    location: 'Remote',
    type: 'experience' as const,
    responsibilities: [
      'Tutored students in AI, Machine Learning and Data Science fundamentals.',
      'Explained technical concepts, algorithms and statistical methods.',
      'Guided learners in Python programming and data analysis.',
      'Helped students understand model development and experimental results.',
    ],
  },
  {
    title: 'AI & ML for Real-World Problem-Solving — Training Program',
    organization: 'Lovely Professional University',
    period: 'June – July 2025',
    location: 'LPU Campus',
    type: 'training' as const,
    achievement: 'Grade A and Certificate of Merit',
    responsibilities: [],
  },
] as const;

export const skills = {
  'Programming': ['Java', 'Python', 'C++', 'SQL'],
  'ML & Data Science': ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Scikit-learn'],
  'Computer Vision': ['OpenCV', 'FaceNet', 'ArcFace', 'AdaFace', 'RetinaFace', 'DeepPhys'],
  'Backend & Systems': ['Spring Boot', 'Flask', 'FastAPI', 'REST APIs'],
  'Infra & Tools': ['Docker', 'Docker Compose', 'MongoDB Atlas', 'MLflow', 'Git', 'Automation Anywhere'],
} as const;

export const researchInterests = [
  {
    title: 'Robust and Trustworthy Machine Learning',
    description: 'Understanding how models fail under distribution shift, corrupted data, and adversarial conditions — and building defenses against these failure modes.',
  },
  {
    title: 'Learning with Noisy Labels',
    description: 'Investigating training methodologies that remain effective when supervision signals are imperfect, mislabelled, or ambiguous.',
  },
  {
    title: 'Reliable Face Recognition',
    description: 'Exploring how face recognition systems behave under challenging conditions including low image quality, identity-label noise, and domain gaps.',
  },
  {
    title: 'Model Generalization and Evaluation',
    description: 'Studying how to properly evaluate model performance beyond standard benchmarks and understand generalization behaviour.',
  },
  {
    title: 'Efficient Computer Vision',
    description: 'Investigating architectures and training strategies that achieve strong visual understanding with practical computational constraints.',
  },
] as const;

export const credentials = [
  {
    name: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle',
    type: 'certification',
  },
  {
    name: 'Certified Essentials Automation Professional',
    issuer: 'Automation Anywhere',
    type: 'certification',
  },
  {
    name: 'AI & ML Training — Grade A, Certificate of Merit',
    issuer: 'Lovely Professional University',
    type: 'training',
  },
  {
    name: 'Data Science, Machine Learning & Deep Learning Coursework',
    issuer: 'Academic',
    type: 'coursework',
  },
] as const;

