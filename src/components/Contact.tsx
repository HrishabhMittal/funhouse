import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    const iconClasses = "transition-all duration-300 text-muted group-hover:text-textMain";
    const iconSize = 36;

    return (
        <section id="contact" className="py-16 mt-10">
            <h2 className="text-[1.5em] font-bold text-textMain border-b border-border pb-2 mb-10 uppercase tracking-widest">
                / Contact
            </h2>
            
            <div className="flex justify-center gap-10 text-center">
                <a 
                    href="https://www.linkedin.com/in/hrishabh-mittal" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group transition-transform duration-300 hover:-translate-y-2 inline-block"
                    title="LinkedIn"
                >
                    <FaLinkedin size={iconSize} className={iconClasses} />
                </a>
                <a 
                    href="https://github.com/HrishabhMittal" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group transition-transform duration-300 hover:-translate-y-2 inline-block"
                    title="GitHub"
                >
                    <FaGithub size={iconSize} className={iconClasses} />
                </a>
                <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=hrishabhmittal.hm@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group transition-transform duration-300 hover:-translate-y-2 inline-block"
                    title="Gmail"
                >
                    <FaEnvelope size={iconSize} className={iconClasses} />
                </a>
            </div>
        </section>
    );
}
