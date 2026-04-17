import {
  Navbar, Hero, About, Skills, Experience,
  Education, Projects, Certifications, Talks, Writing, Contact, Footer,
} from './components';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Skills /> */}
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
