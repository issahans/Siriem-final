import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function Consulting(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>Consulting</h1>
        <p>Technical, commercial, and regulatory advisory for EV charging projects.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px", maxWidth: 960 }}>
        <h2>Advisory Services</h2>
        <ul>
          <li>Grid connection studies and load planning</li>
          <li>Business models, CapEx / OpEx planning and funding advisory</li>
          <li>Permitting and regulatory compliance support</li>
        </ul>

        <h2>Proofs-of-Concept</h2>
        <p>Pilot programs to validate hardware-software stacks, customer journeys, and revenue models.</p>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Start a consulting engagement
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}>
        <p style={{ color: "#444" }}>Footer placeholder — SIRIEM</p>
      </footer>
    </div>
  );
}