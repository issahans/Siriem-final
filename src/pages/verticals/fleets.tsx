import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function Fleets(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>Fleets</h1>
        <p>Depot-grade charging, power optimization, and fleet operations tooling.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px", maxWidth: 980 }}>
        <h2>Key Capabilities</h2>
        <ul>
          <li>Smart scheduling to reduce peak demand charges</li>
          <li>Vehicle state-of-charge telemetry & predictive charging</li>
          <li>Integration with fleet management and telematics</li>
        </ul>

        <h2>Commercial Outcomes</h2>
        <p>Lower total energy cost, higher vehicle utilization, and simplified depot operations.</p>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Talk fleet ops
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}><p style={{ color: "#444" }}>Footer placeholder</p></footer>
    </div>
  );
}