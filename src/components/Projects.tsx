import { projectsData } from '../data';

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-[1.5em] font-bold text-textMain border-b border-border pb-2 mb-8 uppercase tracking-widest">/ Projects</h2>
      <div className="grid grid-cols-1 gap-6">
        {projectsData.map((project, idx) => (
          <div 
            key={idx} 
            className="p-6 border border-border bg-base transition-all duration-300 hover:border-textMain hover:-translate-y-1"
          >
            <h3 className="text-[1.5em] text-textMain mb-3 font-bold">{project.title}</h3>
            <p className="text-muted mb-6 leading-relaxed">{project.description}</p>
            <div className="flex gap-6">
              {project.links.map((link, i) => (
                <a 
                  key={i}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-textMain text-sm uppercase tracking-widest font-bold no-underline transition-colors duration-300 hover:text-muted flex items-center gap-2"
                >
                  <span className="text-muted">{'>'}</span> {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
