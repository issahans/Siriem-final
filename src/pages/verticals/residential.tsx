import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function Residential(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>Residential</h1>
        <p>Resident-friendly charging solutions for single-family and multi-unit properties.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px" }}>
        <h2>Solutions</h2>
        <ul>
          <li>Managed home charger programs</li>
          <li>EV-ready wiring guidance and pre-commissioning</li>
          <li>Billing and access controls for multi-unit dwellings</li>
        </ul>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Get residential guidance
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}><p style={{ color: "#444" }}>Footer placeholder</p></footer>
    </div>
  );
}