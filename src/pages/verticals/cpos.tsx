import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function CPOs(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>CPOs</h1>
        <p>Charging operators can scale reliably with our hardware, CMS and managed services.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px" }}>
        <h2>Operator Features</h2>
        <ul>
          <li>Multi-site management and centralized reporting</li>
          <li>Revenue management and payment integrations</li>
          <li>Field service orchestration and SLA tooling</li>
        </ul>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Talk to our CPO team
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}><p style={{ color: "#444" }}>Footer placeholder</p></footer>
    </div>
  );
}