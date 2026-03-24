import {
  Background,
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Writing,
  Experience,
  Talks,
  Education,
  Contact,
  Footer,
  BackToTop,
} from './components';

function App() {
  return (
    <div className="relative">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Writing />
        <Talks />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
