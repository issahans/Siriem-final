import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function ChargerServices(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>Charger Services</h1>
        <p>Turnkey installation, preventative maintenance, and field service for chargers.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px", maxWidth: 980 }}>
        <h2>Service Offerings</h2>
        <ul>
          <li>Site surveys, civil coordination and permitting support</li>
          <li>Installation, commissioning and OCPP provisioning</li>
          <li>SLA-backed maintenance and spare-parts logistics</li>
        </ul>

        <h2>Field Capabilities</h2>
        <p>Trained technicians, mobile diagnostic tooling, and regional NOC integration for remote troubleshooting.</p>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Request service proposal
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}>
        <p style={{ color: "#444" }}>Footer placeholder — SIRIEM</p>
      </footer>
    </div>
  );
}