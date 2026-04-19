import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-brand">
          © {new Date().getFullYear()} Southern Agentic Systems
        </p>
        <p className="footer-links">
          <Link to="/services">Services</Link>
        </p>
        <p className="footer-meta">
          Architectural blueprint for the agentic era · SAS
        </p>
      </div>
    </footer>
  );
}
