export default function Header() {
  const navItems = ['About', 'Skills', 'Projects'];
  return (
    <header className="py-8 text-center border-b border-border bg-base/80 backdrop-blur-s sticky top-0 z-10">
      <nav>
        <ul className="flex justify-center gap-6 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-muted font-bold tracking-widest no-underline transition-colors duration-300 hover:text-textMain before:content-['['] after:content-[']'] before:mr-2 after:ml-2 before:opacity-0 after:opacity-0 hover:before:opacity-100 hover:after:opacity-100"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
