import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Curriculum() {
  useEffect(() => {
    const previous = document.title;
    document.title = "The SAS Agentic Excellence Curriculum | Southern Agentic Systems";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main id="main" className="curriculum-page">
      <div className="curriculum-hero">
        <div className="container narrow curriculum-hero-inner">
          <p className="home-eyebrow">SAS</p>
          <h1 className="curriculum-title">The SAS Agentic Excellence Curriculum</h1>
          <p className="curriculum-lead">
            This curriculum is designed to move your clients from basic literacy
            to executive-level strategic mastery, ensuring every layer of the
            company is &quot;Agent-Ready.&quot;
          </p>
        </div>
      </div>

      <article className="curriculum-body">
        <div className="container narrow">
          <section className="curriculum-pillar" aria-labelledby="p1">
            <h2 id="p1">Pillar 1: Agentic Literacy &amp; Systems Thinking</h2>
            <p>
              <strong>The Shift:</strong> Moving from &quot;Chat&quot; to
              &quot;Plan, Use, Execute.&quot;
            </p>
            <p>
              <strong>Core Concepts:</strong> Understanding the anatomy of an
              agent (Reasoning, Memory, Tool Use) vs. standard LLM interaction.
            </p>
            <p>
              <strong>Process Mapping:</strong> Identifying high-friction
              manual workflows and translating them into Agentic Handoffs
              between human logic and machine execution.
            </p>
            <p>
              <strong>Data Boundaries:</strong> Establishing where data ends
              and decision-making begins.
            </p>
          </section>

          <section className="curriculum-pillar" aria-labelledby="p2">
            <h2 id="p2">
              Pillar 2: Technical Foundations &amp; Agent Architecture
            </h2>
            <p>
              <strong>The Foundation:</strong> Data layout optimization—ensuring
              your organizational data is structured for high-accuracy retrieval
              (RAG) and action.
            </p>
            <p>
              <strong>Tooling &amp; Orchestration:</strong> Hands-on training
              with APIs, retrieval patterns, and agentic frameworks (e.g.,
              LangGraph or Agentforce).
            </p>
            <p>
              <strong>Guardrails &amp; Governance:</strong> Implementing
              real-time evaluation patterns and safety protocols to ensure AI
              outputs remain within corporate policy.
            </p>
          </section>

          <section className="curriculum-pillar" aria-labelledby="p3">
            <h2 id="p3">Pillar 3: Hands-On Implementation (The Sandbox)</h2>
            <p>
              <strong>Workflow Integration:</strong> Applying agents directly
              to the company&apos;s unique constraints—no generic examples.
            </p>
            <p>
              <strong>Building Your First Agent:</strong> Teams move from
              blueprints to a functional &quot;SuperAgent&quot; prototype
              designed for their specific department.
            </p>
            <p>
              <strong>Iterative Refinement:</strong> Fine-tuning data loops and
              tool-use scripts to improve accuracy from &quot;vibe-check&quot; to
              &quot;production-grade.&quot;
            </p>
          </section>

          <section className="curriculum-pillar" aria-labelledby="p4">
            <h2 id="p4">Pillar 4: Strategic Scaling &amp; Adoption</h2>
            <p>
              <strong>Executive Strategy:</strong> Training leadership on
              &quot;Inference Premium&quot; and how to measure the ROI of an
              autonomous workforce.
            </p>
            <p>
              <strong>Success Metrics:</strong> Defining new KPIs for
              human-agent collaboration—measuring latency, correctness, and
              task completion rates.
            </p>
            <p>
              <strong>The Reskilling Cycle:</strong> Establishing the review
              cycles and internal culture needed to sustain and evolve skills as
              agentic technology advances every 3–6 months.
            </p>
          </section>

          <p className="curriculum-back">
            <Link className="btn btn-home-outline" to="/program">
              Program overview
            </Link>
            <Link className="btn btn-home-outline" to="/">
              Back to home
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
