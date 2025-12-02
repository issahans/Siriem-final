import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function OurApproach(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1 style={{ fontSize: 36, margin: 0 }}>Our Approach</h1>
        <p style={{ marginTop: 8, color: "#fffefeff" }}>
          Pragmatic engineering, systems thinking, and operational excellence for
          end-to-end EV charging rollouts.
        </p>
      </header>

      {/* Hero image placeholder */}
      <section style={{ padding: "0 40px 40px 40px" }}>
        <img src="/images/placeholder.svg" alt="[Image: Strategic planning session]" style={{ maxWidth: 720 }} />
        <p className="sr-only">[Image: Strategic planning session]</p>
      </section>

      {/* Sections */}
      <section style={{ padding: "0 40px 24px 40px", maxWidth: 960 }}>
        <h2 style={{ color: TEXT }}>Principles</h2>
        <ul>
          <li>Standards-first design: OCPP, ISO 15118 ready</li>
          <li>Modularity: hardware and software decoupled for upgrades</li>
          <li>Operational focus: SLA-driven support and telemetry</li>
        </ul>

        <h2 style={{ marginTop: 20 }}>Process</h2>
        <ol>
          <li>Site assessment & grid analysis</li>
          <li>Pilot deployment & validation</li>
          <li>Scale rollout and managed operations</li>
        </ol>

        <h2 style={{ marginTop: 20 }}>Outcomes</h2>
        <p>
          Faster time-to-revenue, predictable uptime, and measurable reductions in energy cost and
          carbon intensity through optimized charging strategies.
        </p>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "10px 16px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Request a site assessment
          </a>
        </div>
      </section>

      <footer style={{ marginTop: 40, padding: 20, borderTop: "1px solid #eee" }}>
        <p style={{ color: "#444" }}>Footer placeholder — SIRIEM © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}