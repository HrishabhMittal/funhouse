import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-base text-textMain font-mono leading-relaxed pb-12">
      <Header />
      <Hero />
      <main className="max-w-[800px] mx-auto px-5 flex flex-col gap-10">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
