import React from "react";

const BG = "#FFFFFF";
const TEXT = "#000000";

export default function Team(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>Team</h1>
        <p>Engineers, product leaders and field teams building SIRIEM.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px", maxWidth: 980 }}>
        <h2>Leadership</h2>
        <ul>
          <li>CEO — [Name]</li>
          <li>CTO — [Name]</li>
          <li>Head of Product — [Name]</li>
        </ul>

        <h2 style={{ marginTop: 16 }}>Field & Engineering</h2>
        <p>Cross-functional teams for firmware, hardware, cloud and field service.</p>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: "#00FF66", color: "#000", borderRadius: 6 }}>
            Contact the team
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}><p style={{ color: "#444" }}>Footer placeholder</p></footer>
    </div>
  );
}