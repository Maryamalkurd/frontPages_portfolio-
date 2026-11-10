import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const links = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [open, setOpen] = useState(false);

  // Highlight the section currently on screen (home page only)
  useEffect(() => {
    const onScroll = () => {
      let current = "";
      links.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      });
      setActiveLink(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="site-nav">
      <div className="sn-inner">
        <HashLink to="/#home" className="sn-brand" onClick={close}>
          Mariam Alkurd
        </HashLink>

        <button
          type="button"
          className="sn-burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={open ? "sn-menu open" : "sn-menu"}>
          {links.map((l) => (
            <HashLink
              key={l.id}
              to={`/#${l.id}`}
              className={activeLink === l.id ? "sn-link on" : "sn-link"}
              onClick={close}
            >
              {l.label}
            </HashLink>
          ))}

          <div className="sn-icons">
            <a
              href="https://www.linkedin.com/in/maryam-alkurd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 9v11M4 4.5v.01M9 20v-6a3 3 0 0 1 6 0v6M9 11v9M15 11a4 4 0 0 1 5 4v5" />
              </svg>
            </a>
            <a
              href="https://github.com/Maryamalkurd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
              </svg>
            </a>
          </div>

          <HashLink to="/#connect" className="sn-cta" onClick={close}>
            Let's connect
          </HashLink>
        </nav>
      </div>
    </header>
  );
};
