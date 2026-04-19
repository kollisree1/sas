import { useCallback } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    window.alert(
      "Demo only: connect this form to your email service or backend. " +
        "For now, use mailto:hello@southernagentic.systems."
    );
  }, []);

  return (
    <main id="main">
      <section className="hero" id="mission">
        <div className="hero-bg" aria-hidden />
        <div className="container hero-inner">
          <h1 className="visually-hidden">Southern Agentic Systems</h1>
          <p className="lead">
            Southern Agentic Systems (SAS) provides the architectural blueprint
            for the agentic era, transforming stagnant business logic into a
            high-performing autonomous workforce.
          </p>
          <p className="lead">
            We empower your organization to upskill at scale and onboard faster
            by bridging the gap between complex data layouts and the AI-driven
            systems required to lead tomorrow&apos;s market.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Health Check &amp; Infrastructure Audit
            </a>
            <Link className="btn btn-ghost" to="/services">
              Service tiers
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-cta">
        <div className="container narrow cta-inner">
          <h2>Request a Health Check &amp; Infrastructure Audit</h2>
          <p>
            Brief context on organization, constraints, and timing—we respond
            with next steps.
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
              <span>Organization</span>
              <input
                type="text"
                name="company"
                autoComplete="organization"
              />
            </label>
            <label className="field field-full">
              <span>Message</span>
              <textarea name="message" rows={3} />
            </label>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
          <p className="form-note">
            Demo form—connect to your backend.{" "}
            <a href="mailto:hello@southernagentic.systems">
              hello@southernagentic.systems
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
