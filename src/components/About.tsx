export default function About() {
    return (
        <section id="about">
            <h2 className="text-[1.5em] font-bold text-textMain border-b border-border pb-2 mb-8 uppercase tracking-widest">/ About Me</h2>
            <p className="text-[1.1em] text-muted leading-[1.7]">
                Hi! I am Hrishabh, I enjoy doing random stuff in programming, from compilers to socket programming & writing small simulations, I really like to explore different fields of programming, C++ is my primary language. Lately I've started to enjoy network programming and am eager to learn more about high-performance distributed systems. I also enjoy messing around my computer (Arch btw) and ricing it. My current interests are Low-Level Optimisations, Operating Systems, Computer Architechture & Quant.
                <br /><br />
                Feel free to check out my <a href="https://github.com/HrishabhMittal" target="_blank" rel="noopener noreferrer" className="text-textMain underline underline-offset-4 decoration-border hover:decoration-textMain transition-colors">github</a>. Some of my projects are also listed below.
            </p>
        </section>
    );
}
