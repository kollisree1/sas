import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SovereignStandardMark } from "./SovereignStandardMark";

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
        <Link
          className="logo"
          to="/"
          onClick={close}
          aria-label="Southern Agentic Systems — home (The Sovereign Standard)"
        >
          <span className="logo-mark" title="The Sovereign Standard — Southern Agentic Systems">
            <SovereignStandardMark />
          </span>
          <span className="logo-text">Southern Agentic Systems</span>
        </Link>
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
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-services nav-services--active" : "nav-services"
                }
                onClick={close}
                end
              >
                Services
              </NavLink>
            </li>
            <li>
              <a href="/#contact" className="nav-cta" onClick={close}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
