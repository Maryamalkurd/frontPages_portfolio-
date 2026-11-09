import { Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const contacts = [
  {
    label: "kurd123987@gmail.com",
    href: "mailto:kurd123987@gmail.com",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: "LinkedIn / maryam-alkurd",
    href: "https://www.linkedin.com/in/maryam-alkurd/",
    icon: (
      <path d="M4 9v11M4 4.5v.01M9 20v-6a3 3 0 0 1 6 0v6M9 11v9M15 11a4 4 0 0 1 5 4v5" />
    ),
  },
  {
    label: "GitHub / Maryamalkurd",
    href: "https://github.com/Maryamalkurd",
    icon: (
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    ),
  },
];

const links = [
  { label: "Home", to: "/#home" },
  { label: "Skills", to: "/#skills" },
  { label: "Experience", to: "/#experience" },
  { label: "Projects", to: "/#projects" },
  { label: "Contact", to: "/#connect" },
];

export const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <div className="sf-grid">
          <div>
            <p className="sf-label">Get in touch</p>
            <h3 className="sf-title">
              Have a project in mind? <em>Let's talk.</em>
            </h3>
            {contacts.map((c) => (
              <a
                key={c.label}
                className="sf-row"
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">{c.icon}</svg>
                <span>{c.label}</span>
              </a>
            ))}
          </div>

          <div className="sf-links">
            <p className="sf-label">Navigate</p>
            {links.map((l) => (
              <HashLink key={l.label} to={l.to}>
                {l.label}
              </HashLink>
            ))}
          </div>
        </div>

        <div className="sf-bar">
          <span>© 2026 Mariam Alkurd. All rights reserved.</span>
          <button
            type="button"
            className="sf-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top ↑
          </button>
        </div>
      </Container>
    </footer>
  );
};
