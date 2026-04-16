import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#" onClick={close}>
          <span className="logo-mark">SAS</span>
          <span className="logo-text">Southern Agentic Systems</span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
        <nav
          id="site-nav"
          className={`site-nav${open ? " is-open" : ""}`}
          aria-label="Primary"
        >
          <ul>
            <li>
              <a href="#program" onClick={close}>
                Program
              </a>
            </li>
            <li>
              <a href="#approach" onClick={close}>
                Approach
              </a>
            </li>
            <li>
              <a href="#audience" onClick={close}>
                Who we serve
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-cta" onClick={close}>
                Talk to us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
