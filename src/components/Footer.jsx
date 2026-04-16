export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-brand">
          © {new Date().getFullYear()} Southern Agentic Systems
        </p>
        <p className="footer-meta">Practical AI upskilling · Agentic systems</p>
      </div>
    </footer>
  );
}
