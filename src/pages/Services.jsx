import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Services() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Services | Southern Agentic Systems";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main id="main" className="services-page">
      <section
        className="hero services-hero"
        aria-labelledby="services-hero-heading"
      >
        <div className="services-hero-bg" aria-hidden />
        <div className="container hero-inner">
          <p className="eyebrow">Services</p>
          <h1 id="services-hero-heading">Four stages of maturity</h1>
          <p className="hero-subtitle services-hero-tagline">
            Operational excellence through autonomy
          </p>
          <p className="lead">
            Four tiers—literacy, foundations, orchestration, sovereign design—are{" "}
            <strong>sequential</strong>, not interchangeable. Each addresses a
            distinct failure mode on the path to governed, evidenced autonomy.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/#contact">
              Inquiry
            </Link>
            <Link className="btn btn-ghost" to="/">
              Home
            </Link>
          </div>
        </div>
      </section>

      <section
        id="literacy"
        className="section services-tier"
        aria-labelledby="tier-literacy-heading"
      >
        <div className="container narrow">
          <p className="services-stage">I · Basic</p>
          <h2 id="tier-literacy-heading">Agentic literacy</h2>
          <p className="services-tier-essence">Leveling up the workforce.</p>
          <p className="services-tier-body">
            Shared vocabulary and guardrails—what models may do, where risk
            sits, how outputs become evidence—so later work debates substance,
            not tools.
          </p>
        </div>
      </section>

      <section
        id="foundations"
        className="section section-alt services-tier"
        aria-labelledby="tier-foundations-heading"
      >
        <div className="container narrow">
          <p className="services-stage">II · Foundations</p>
          <h2 id="tier-foundations-heading">Architectural foundations</h2>
          <p className="services-tier-essence">Preparing the data layer.</p>
          <p className="services-tier-body">
            Retrieval, lineage, and integration seams so reasoning attaches to
            authoritative fact—information as <strong>infrastructure for action</strong>
            , not slides.
          </p>
        </div>
      </section>

      <section
        id="orchestration"
        className="section services-tier"
        aria-labelledby="tier-orchestration-heading"
      >
        <div className="container narrow">
          <p className="services-stage">III · Intermediate</p>
          <h2 id="tier-orchestration-heading">Workflow orchestration</h2>
          <p className="services-tier-essence">
            Building active autonomous systems.
          </p>
          <p className="services-tier-body">
            Executable autonomy: workflows decomposed, tools invoked under
            policy, human handoffs explicit—<strong>production</strong> posture,
            not demos.
          </p>
        </div>
      </section>

      <section
        id="sovereign"
        className="section section-alt services-tier services-tier--capstone"
        aria-labelledby="tier-sovereign-heading"
      >
        <div className="container narrow">
          <p className="services-stage">IV · Advanced</p>
          <h2 id="tier-sovereign-heading">Sovereign systems design</h2>
          <p className="services-tier-essence">
            High-level strategic transformation.
          </p>
          <p className="services-tier-body">
            <strong>Enterprise coherence</strong> across autonomous patterns:
            accountabilities, boundaries, escalation—autonomy as how the
            organization <strong>governs itself</strong>, not a one-off project.
          </p>
        </div>
      </section>

      <section className="section section-cta services-cta">
        <div className="container narrow cta-inner">
          <h2>Scope the right stage</h2>
          <p>We recommend entry point and prerequisites after a short briefing.</p>
          <div className="hero-actions services-cta-actions">
            <Link className="btn btn-primary" to="/#contact">
              Contact
            </Link>
            <Link className="btn btn-ghost" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
