import {
  Navbar, Hero, About, Experience,
  Education, Projects, Certifications, Talks, Writing, Contact, Footer,
} from './components';

export default function App() {
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
    </div>
  );
}
