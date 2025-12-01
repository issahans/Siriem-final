import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function UpcomingReleases(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>Upcoming Releases</h1>
        <p>Roadmap highlights and near-term product launches.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px", maxWidth: 980 }}>
        <h2>Next 12 Months</h2>
        <ul>
          <li>OCPP v2.0 certified CMS release — improved security and plug&charge support</li>
          <li>New 150kW DC modular cabinet with simplified serviceability</li>
          <li>First integrations for V2G & vehicle-to-building pilots</li>
        </ul>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Join early access
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}><p style={{ color: "#444" }}>Footer placeholder</p></footer>
    </div>
  );
}