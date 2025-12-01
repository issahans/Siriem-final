import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function Workplace(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>Workplace</h1>
        <p>Reliable employee charging with equitable access, billing and simple IT integration.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px" }}>
        <h2>Feature set</h2>
        <ul>
          <li>Reservation & scheduled charging</li>
          <li>Exportable usage reports for HR/Finance</li>
          <li>Integration with building BMS and metering</li>
        </ul>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Discuss workplace rollout
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}><p style={{ color: "#444" }}>Footer placeholder</p></footer>
    </div>
  );
}