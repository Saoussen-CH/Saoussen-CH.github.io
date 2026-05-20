import { Routes, Route } from 'react-router-dom';
import {
  Navbar, Hero, About, Experience,
  Education, Projects, Certifications, Talks, Writing, Contact, Footer, BackToTop,
} from './components';
import { WritingServices } from './pages/WritingServices';

function Portfolio() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Talks />
        <Writing />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/writing-services" element={<WritingServices />} />
    </Routes>
  );
}
