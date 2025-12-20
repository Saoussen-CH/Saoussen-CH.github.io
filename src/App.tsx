import {
  Background,
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Writing,
  Experience,
  Education,
  Contact,
  Footer,
} from './components';

function App() {
  return (
    <div className="relative">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Writing />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
