import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function EVSEOEMs(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>EVSE OEMs</h1>
        <p>Co-engineered EVSE platforms: mechanical, power electronics, and firmware collaboration.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px", maxWidth: 980 }}>
        <h2>Capabilities</h2>
        <ul>
          <li>Custom enclosures, power stacks and cooling strategies</li>
          <li>Firmware feature development and OCPP compliance testing</li>
          <li>Supply chain and production engineering support</li>
        </ul>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Discuss OEM collaboration
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}><p style={{ color: "#444" }}>Footer placeholder</p></footer>
    </div>
  );
}