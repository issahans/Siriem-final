import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function TechSpeak(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>Tech Speak</h1>
        <p>Deep dives into engineering decisions, protocols, and architecture.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px" }}>
        <h2>Topics</h2>
        <ul>
          <li>OCPP v2.0 vs v1.6 — tradeoffs and migration strategies</li>
          <li>Edge controllers and local resiliency patterns</li>
          <li>Telemetry schemas for predictive maintenance</li>
        </ul>

        <img src="/images/placeholder.svg" alt="[Image: Technical diagram]" style={{ maxWidth: 720 }} />
        <p className="sr-only">[Image: Technical diagram]</p>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}><p style={{ color: "#444" }}>Footer placeholder</p></footer>
    </div>
  );
}