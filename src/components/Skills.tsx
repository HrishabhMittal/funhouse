import { skillsData } from '../data';

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-[1.5em] font-bold text-textMain border-b border-border pb-2 mb-8 uppercase tracking-widest">/ Skills</h2>
      {skillsData.map((category, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-[1.2em] text-textMain mb-2 font-bold uppercase tracking-wide">:: {category.title}</h3>
          <p className="text-muted text-sm mb-4 border-b border-border/50 pb-2 inline-block">{category.subtitle}</p>
          <ul className="list-none text-muted space-y-2">
            {category.items.map((skill, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-border">{'>'}</span> {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
