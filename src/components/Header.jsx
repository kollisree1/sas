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
                to="/program"
                className={({ isActive }) =>
                  isActive ? "nav-program nav-program--active" : "nav-program"
                }
                onClick={close}
                end
              >
                Program
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/curriculum"
                className={({ isActive }) =>
                  isActive
                    ? "nav-curriculum nav-curriculum--active"
                    : "nav-curriculum"
                }
                onClick={close}
                end
              >
                Curriculum
              </NavLink>
            </li>
            <li>
              <a
                href="mailto:kolli.sree@gmail.com"
                className="nav-cta"
                onClick={close}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
