import { Link } from "react-router-dom";

export function Home() {
  return (
    <main id="main" className="home-landing">
      <section className="home-hero" aria-labelledby="home-heading">
        <div className="container home-hero-inner">
          <p className="home-eyebrow">Workforce AI · Any industry</p>

          <h1 id="home-heading" className="home-title">
            Upskill your company with{" "}
            <span className="home-title-accent">technical AI capability</span>
            —built for real work.
          </h1>

          <div className="home-body">
            <p>
              Most programs stop at demos. SAS builds{" "}
              <strong>hard skills</strong> your teams need to design systems,
              choose tooling, evaluate models, and deploy safely—so capability
              shows up in production.
            </p>
            <p>
              Training is anchored in your workflows and measurable outcomes:
              instrumentation, governance, and iteration that survives real
              constraints. Depth where it matters—including{" "}
              <strong>Agentic Systems</strong> and pathways into{" "}
              <strong>high-demand AI roles</strong>.
            </p>
            <p>
              Whether you are starting with foundations or leveling a technical
              bench, we bring structure, practice, and accountability—so your
              organization can ship AI work with confidence.
            </p>
          </div>

          <div className="home-actions">
            <a
              className="btn btn-home-primary"
              href="mailto:kolli.sree@gmail.com?subject=Schedule%20a%20fit%20call"
            >
              Schedule a fit call
            </a>
            <Link className="btn btn-home-outline" to="/program">
              See the program
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
