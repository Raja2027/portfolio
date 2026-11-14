export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  date: string;
  category: 'research' | 'systems' | 'computer-vision' | 'prototype';
  description: string;
  detailedDescription: string[];
  problemStatement: string;
  technicalContribution: string;
  architecture?: string;
  challenges: string[];
  limitations: string[];
  techStack: string[];
  tags: string[];
  screenshots: string[];
  githubUrl: string;
  featured: boolean;
  isPrototype?: boolean;
  isEarlierProject?: boolean;
}

export const projects: Project[] = [
  {
    id: 'facial-attendance',
    number: '01',
    title: 'Facial Attendance System with Liveness Detection',
    subtitle: 'AI-Powered Biometric Verification',
    date: 'March 2026',
    category: 'systems',
    description: 'An AI-powered biometric attendance system combining face recognition, liveness detection and backend infrastructure.',
    detailedDescription: [
      'Built a complete biometric attendance system that combines deep-learning face recognition with anti-spoofing liveness detection.',
      'The system uses a microservice architecture: a Spring Boot backend handles authentication, session management, and attendance records, while a separate Flask/Python service processes face embeddings and liveness verification.',
      'Face embeddings are generated using FaceNet and InsightFace, producing 512-dimensional vectors stored in MongoDB Atlas with vector search indexing for efficient cosine similarity matching.',
      'Liveness detection uses MiniFASNet to prevent spoofing through photos or screen replays.',
    ],
    problemStatement: 'Traditional attendance systems are vulnerable to proxy attendance and lack biometric verification. This project addresses the need for a secure, automated attendance system that can verify identity while preventing spoofing attacks.',
    technicalContribution: 'Designed and implemented the complete system architecture including the microservice communication pattern, face embedding pipeline, vector search integration, and liveness detection workflow.',
    architecture: 'Frontend → Spring Boot API → Flask AI Service → Face Embedding → Vector Search → Attendance Result',
    challenges: [
      'Integrating Java and Python services with low-latency communication.',
      'Tuning cosine similarity thresholds for accurate face matching.',
      'Handling edge cases in liveness detection under varying lighting conditions.',
    ],
    limitations: [
      'Performance under large-scale concurrent requests has not been stress-tested.',
      'Liveness detection accuracy may degrade with certain camera qualities.',
    ],
    techStack: ['Spring Boot', 'Flask', 'Python', 'FaceNet', 'InsightFace', 'RetinaFace', 'MiniFASNet', 'MongoDB Atlas Vector Search', 'JWT', 'Docker', 'Docker Compose'],
    tags: ['Java', 'Spring Boot', 'Python', 'FaceNet', 'MongoDB Atlas', 'Docker'],
    screenshots: ['/assets/images/face1.png', '/assets/images/face2.png', '/assets/images/face3.png'],
    githubUrl: 'https://github.com/Raja2027/Facial-Attendance-System-with-Liveness-Detection-',
    featured: true,
  },
  {
    id: 'network-security',
    number: '02',
    title: 'End-to-End MLOps Network Security System',
    subtitle: 'ML Pipeline for Network Intrusion Detection',
    date: 'December 2025',
    category: 'systems',
    description: 'An end-to-end machine learning workflow for network security, covering data processing, feature engineering, model training, deployment and monitoring.',
    detailedDescription: [
      'Built a complete MLOps pipeline for network intrusion detection covering the full lifecycle from data ingestion to model monitoring.',
      'The ETL pipeline handles raw network traffic data through validation, cleaning, transformation, and feature engineering stages.',
      'Model training uses Scikit-learn and XGBoost with experiment tracking through MLflow for reproducibility.',
      'The system is containerized with Docker and includes CI/CD workflows for automated testing and deployment via FastAPI.',
    ],
    problemStatement: 'Network security requires rapid detection of intrusion attempts. This project implements a reproducible ML pipeline that can process network traffic data, train classification models, and deploy them with monitoring.',
    technicalContribution: 'Designed the modular pipeline architecture, implemented the ETL workflow, configured experiment tracking, and set up the containerized deployment with monitoring.',
    challenges: [
      'Designing a modular pipeline that supports both batch and incremental processing.',
      'Ensuring model reproducibility across different environments.',
      'Implementing meaningful data drift detection for network traffic patterns.',
    ],
    limitations: [
      'The system has been tested with specific network traffic datasets and may require adaptation for different network environments.',
      'Model monitoring covers basic drift detection; advanced anomaly detection in production metrics is not yet implemented.',
    ],
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'FastAPI', 'MLflow', 'Docker', 'MongoDB Atlas', 'CI/CD'],
    tags: ['Python', 'MLflow', 'Docker', 'FastAPI', 'XGBoost'],
    screenshots: ['/assets/images/mloops1.png', '/assets/images/mloops2.png', '/assets/images/mloops3.png'],
    githubUrl: 'https://github.com/Raja2027/NetworkSecurtiy',
    featured: true,
  },
  {
    id: 'heart-rate',
    number: '03',
    title: 'Real-Time Heart Rate Estimation',
    subtitle: 'Non-Contact Vital Sign Monitoring via rPPG',
    date: 'July 2025',
    category: 'computer-vision',
    description: 'An earlier computer vision project investigating non-contact heart-rate estimation from facial video using deep learning.',
    detailedDescription: [
      'Investigated non-contact heart rate estimation using the DeepPhys deep learning architecture applied to facial video analysis.',
      'The system uses remote photoplethysmography (rPPG) principles to extract physiological signals from subtle color changes in facial skin.',
      'Implemented a video processing pipeline that handles face detection, region-of-interest extraction, and temporal signal processing.',
      'Integrated the model with a Flask-based interface for live video stream monitoring.',
    ],
    problemStatement: 'Traditional heart rate monitoring requires physical contact with sensors. This project explores using computer vision and deep learning to estimate heart rate from facial video alone.',
    technicalContribution: 'Implemented the DeepPhys architecture, built the video processing pipeline, and created the real-time inference interface.',
    challenges: [
      'Handling motion artifacts and lighting variations in real-time video.',
      'Achieving sufficient temporal resolution for accurate heart rate estimation.',
      'Optimizing the inference pipeline for real-time performance.',
    ],
    limitations: [
      'This is an earlier project. Performance metrics should be verified against standardized physiological benchmarks before drawing conclusions.',
      'Accuracy may vary significantly with lighting conditions, skin tone, and subject motion.',
    ],
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'DeepPhys', 'Flask', 'NumPy'],
    tags: ['Python', 'TensorFlow', 'DeepPhys', 'OpenCV', 'rPPG'],
    screenshots: ['/assets/images/hr1.png', '/assets/images/hr2.png'],
    githubUrl: 'https://github.com/Raja2027/Real-time-heart-rate-estimation-via-DeepPhys',
    featured: false,
    isEarlierProject: true,
  },
  {
    id: 'math-solver',
    number: '04',
    title: 'AI Math Solving Assistant',
    subtitle: 'Prototype Mathematical Problem Solver',
    date: '2025',
    category: 'prototype',
    description: 'A prototype AI-based mathematical problem-solving assistant using image input and the Gemini API.',
    detailedDescription: [
      'Built a prototype application that accepts mathematical problems through image input and processes them using OCR-assisted analysis.',
      'The application uses the Gemini API for mathematical reasoning and problem-solving.',
      'Built with Streamlit for rapid prototyping and a simple user interface.',
    ],
    problemStatement: 'Exploring how large language model APIs can be combined with image input to assist with mathematical problem solving.',
    technicalContribution: 'Implemented the image processing pipeline and Gemini API integration for mathematical problem analysis.',
    challenges: [
      'Handling diverse mathematical notation in image inputs.',
      'Managing API latency for interactive use.',
    ],
    limitations: [
      'This is a prototype and has not been deployed to production.',
      'Accuracy depends entirely on the underlying Gemini API capabilities.',
      'No custom model fine-tuning has been performed.',
    ],
    techStack: ['Python', 'Streamlit', 'Gemini API', 'Image Processing'],
    tags: ['Python', 'Streamlit', 'Gemini API'],
    screenshots: [],
    githubUrl: 'https://github.com/Raja2027/MATH-SOLVER-AI',
    featured: false,
    isPrototype: true,
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(
    p => p.id === id ||
    (id === 'mlops-network-security' && p.id === 'network-security') ||
    (id === 'heart-rate-estimation' && p.id === 'heart-rate')
  );
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(p => p.category === category);
};

