import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ResearchOverviewPage from './pages/ResearchOverviewPage';
import AdaFaceCaseStudyPage from './pages/AdaFaceCaseStudyPage';
import CactusTspCaseStudyPage from './pages/CactusTspCaseStudyPage';
import ProjectsOverviewPage from './pages/ProjectsOverviewPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/research" element={<ResearchOverviewPage />} />
        <Route path="/research/adaface" element={<AdaFaceCaseStudyPage />} />
        <Route path="/research/cactus-tsp" element={<CactusTspCaseStudyPage />} />
        <Route path="/projects" element={<ProjectsOverviewPage />} />

        {/* Individual Project Case Studies */}
        <Route path="/projects/:id" element={<ProjectDetailPage />} />

        {/* About & Background */}
        <Route path="/about" element={<AboutPage />} />

        {/* Contact & Availability */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
