import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Program() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Program | Southern Agentic Systems";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main id="main" className="program-page">
      <section
        className="program-marketing"
        aria-labelledby="program-marketing-heading"
      >
        <div className="container home-hero-inner">
          <p className="home-eyebrow">Workforce AI · Any industry</p>

          <h1 id="program-marketing-heading" className="home-title">
            Upskill your company with{" "}
            <span className="home-title-accent">technical AI capability</span>
            —built for real work, not slide decks.
          </h1>

          <div className="home-body">
            <p>
              Southern Agentic Systems helps organizations adopt AI responsibly
              by teaching the <strong>hard skills</strong> teams need: systems
              design, tooling, evaluation, and safe deployment.
            </p>
            <p>
              We specialize in <strong>Agentic Systems</strong>—AI that plans,
              uses tools, and executes multi-step workflows—not generic chat
              demos. Training stays grounded in how your organization actually
              ships work.
            </p>
            <p>
              Our goal is practical fluency: moving people into{" "}
              <strong>high-demand AI roles</strong> with confidence—measured
              adoption, governed deployment, and skills that persist after the
              workshop ends.
            </p>
          </div>

          <div className="home-actions">
            <a
              className="btn btn-home-primary"
              href="mailto:kolli.sree@gmail.com?subject=Schedule%20a%20fit%20call"
            >
              Schedule a fit call
            </a>
            <a className="btn btn-home-outline" href="#program-tiers">
              See the program
            </a>
          </div>
        </div>
      </section>

      <section
        className="program-hero"
        id="program-tiers"
        aria-labelledby="program-heading"
      >
        <div className="container narrow program-hero-inner">
          <h2 className="home-title program-hero-main-title">Program</h2>
          <p className="program-section-kicker" id="program-heading">
            Four stages of maturity
          </p>
          <p className="program-tagline">Operational excellence through autonomy</p>
          <p className="program-intro">
            Four tiers—literacy, foundations, orchestration, sovereign design—are{" "}
            <strong>sequential</strong>, not interchangeable. Each addresses a
            distinct failure mode on the path to governed, evidenced autonomy.
          </p>
          <div className="home-actions">
            <a
              className="btn btn-home-primary"
              href="mailto:kolli.sree@gmail.com?subject=Inquiry"
            >
              Inquiry
            </a>
            <Link className="btn btn-home-outline" to="/curriculum">
              Curriculum detail
            </Link>
          </div>
        </div>
      </section>

      <article className="program-body">
        <div className="container narrow">
          <section className="program-tier" id="tier-i">
            <p className="program-stage">I · Basic</p>
            <h2>Literacy &amp; orientation</h2>
            <p className="program-essence">Leveling up the workforce.</p>
            <p className="program-copy">
              Shared vocabulary, realistic expectations, and safe exploration of
              AI-assisted work—so teams stop guessing and start experimenting with
              guardrails that match your risk posture.
            </p>
          </section>

          <section className="program-tier program-tier--alt" id="tier-ii">
            <p className="program-stage">II · Foundations</p>
            <h2>Data &amp; retrieval readiness</h2>
            <p className="program-essence">Preparing the data layer.</p>
            <p className="program-copy">
              Structured approaches to organizational data so retrieval,
              grounding, and evaluation are reproducible—not one-off demos tied to
              a single prompt or vendor snapshot.
            </p>
          </section>

          <section className="program-tier" id="tier-iii">
            <p className="program-stage">III · Intermediate</p>
            <h2>Orchestration &amp; tooling</h2>
            <p className="program-essence">From pilots to repeatable workflows.</p>
            <p className="program-copy">
              Patterns for combining models, APIs, agents, and human checkpoints:
              instrumentation, versioning, and operational ownership so handoffs
              between people and systems stay clear under load.
            </p>
          </section>

          <section
            className="program-tier program-tier--capstone program-tier--alt"
            id="tier-iv"
          >
            <p className="program-stage">IV · Advanced</p>
            <h2>Sovereign design &amp; governance</h2>
            <p className="program-essence">
              Evidence, policy, and architectural ownership at scale.
            </p>
            <p className="program-copy">
              Designing for longevity: review cycles, incident response, audit
              evidence, and strategic tradeoffs—so autonomy compounds without
              eroding trust or compliance.
            </p>
          </section>

          <section className="program-footer-cta">
            <p>
              For the full pillar-by-pillar breakdown, see the SAS Agentic
              Excellence Curriculum.
            </p>
            <div className="home-actions">
              <Link className="btn btn-home-primary" to="/curriculum">
                Open curriculum
              </Link>
              <a
                className="btn btn-home-outline"
                href="mailto:kolli.sree@gmail.com?subject=Contact"
              >
                Contact
              </a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
