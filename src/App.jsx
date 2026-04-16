import { useCallback } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App() {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    window.alert(
      "Demo only: connect this form to your email service or backend. " +
        "For now, use mailto:hello@southernagentic.systems."
    );
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero">
          <div className="hero-bg" aria-hidden />
          <div className="container hero-inner">
            <p className="eyebrow">Workforce AI · Any industry</p>
            <h1>
              Upskill your company with{" "}
              <em>technical AI capability</em>
              —built for real work, not slide decks.
            </h1>
            <p className="lead">
              Southern Agentic Systems helps organizations adopt AI responsibly
              by teaching the <strong>hard skills</strong> teams need: systems
              design, tooling, evaluation, and safe deployment. We specialize in{" "}
              <strong>Agentic Systems</strong>—AI that plans, uses tools, and
              executes multi-step workflows—so your people can move into{" "}
              <strong>high-demand AI roles</strong> with confidence.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Schedule a fit call
              </a>
              <a className="btn btn-ghost" href="#program">
                See the program
              </a>
            </div>
          </div>
        </section>

        <section className="section stats" aria-label="Highlights">
          <div className="container stats-grid">
            <div className="stat">
              <span className="stat-value">Any company</span>
              <span className="stat-label">
                From growth-stage to global enterprises—we tailor cohorts to
                your domain and tech stack.
              </span>
            </div>
            <div className="stat">
              <span className="stat-value">Hard skills</span>
              <span className="stat-label">
                Hands-on curriculum in implementation, integration, and
                operational guardrails—not buzzwords.
              </span>
            </div>
            <div className="stat">
              <span className="stat-value">Agentic</span>
              <span className="stat-label">
                From prompts to orchestration: skills aligned with how AI work
                is evolving in production.
              </span>
            </div>
          </div>
        </section>

        <section id="program" className="section">
          <div className="container narrow">
            <h2>What we teach</h2>
            <p className="section-intro">
              “Agentic systems” means AI that plans, uses tools, and executes
              multi-step work—not just chat. We focus on the{" "}
              <strong>technical foundations</strong> your team needs to ship AI
              that is useful, measurable, and governable.
            </p>
            <ul className="feature-list">
              <li>
                <strong>Systems thinking for AI workflows</strong> — mapping
                processes, data boundaries, and handoffs between people and
                agents.
              </li>
              <li>
                <strong>Tool use &amp; orchestration</strong> — APIs, retrieval,
                guardrails, and evaluation patterns used in production settings.
              </li>
              <li>
                <strong>Hands-on implementation</strong> — exercises grounded
                in your workflows and constraints, not generic examples.
              </li>
              <li>
                <strong>Adoption &amp; measurement</strong> — defining success
                metrics, review cycles, and how teams sustain skills after
                training.
              </li>
            </ul>
          </div>
        </section>

        <section id="approach" className="section section-alt">
          <div className="container two-col">
            <div>
              <h2>How we partner with you</h2>
              <p>
                Every organization has different risk profiles, data realities,
                and roadmaps. We work with leadership and practitioners to
                define what “good” looks like, then deliver training that
                matches how your teams actually build and operate software and
                services.
              </p>
              <p className="fine-print">
                We can align with your internal L&amp;D, IT, security, and
                compliance partners so learning sticks and scales.
              </p>
            </div>
            <aside className="callout" aria-label="Engagement summary">
              <h3 className="callout-title">Typical engagement</h3>
              <ol className="callout-steps">
                <li>Discover roles, workflows, and constraints.</li>
                <li>Design a curriculum mapped to your stack and policies.</li>
                <li>
                  Run cohort-based technical training with guided projects.
                </li>
                <li>
                  Hand off playbooks, office hours, and next-step pathways.
                </li>
              </ol>
            </aside>
          </div>
        </section>

        <section id="audience" className="section">
          <div className="container">
            <h2>Who we serve</h2>
            <div className="cards cards-3">
              <article className="card">
                <h3>Operations &amp; field</h3>
                <p>
                  Manufacturing, logistics, construction, and services teams
                  where AI augments scheduling, quality, safety, and
                  document-heavy work—implemented with care.
                </p>
              </article>
              <article className="card">
                <h3>Corporate &amp; knowledge work</h3>
                <p>
                  Finance, HR, legal, and G&amp;A functions adopting copilots
                  and agents—balancing speed with policy and auditability.
                </p>
              </article>
              <article className="card">
                <h3>Technology &amp; product</h3>
                <p>
                  Engineering, data, and product orgs shipping AI features:
                  evaluation harnesses, retrieval design, and production
                  guardrails.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-cta">
          <div className="container narrow cta-inner">
            <h2>Ready to upskill your team with AI?</h2>
            <p>
              Tell us your industry, team size, and goals. We’ll reply with a
              concise view of how a cohort could fit your organization.
            </p>
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <label className="field">
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Work email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="field">
                <span>Company</span>
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                />
              </label>
              <label className="field field-full">
                <span>What should we know?</span>
                <textarea name="message" rows={4} />
              </label>
              <button className="btn btn-primary" type="submit">
                Request information
              </button>
            </form>
            <p className="form-note">
              This demo form does not send mail yet—hook it to your backend or
              form service. For now, you can reach us at{" "}
              <a href="mailto:hello@southernagentic.systems">
                hello@southernagentic.systems
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
