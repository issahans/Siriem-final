import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function AboutUs(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>About Us</h1>
        <p>We build reliable EV charging systems and software for enterprises, operators and OEMs.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px", maxWidth: 980 }}>
        <h2>Mission</h2>
        <p>Accelerate electrification with pragmatic engineering, operational rigor, and measurable sustainability outcomes.</p>

        <h2 style={{ marginTop: 16 }}>Approach</h2>
        <p>Standards-based systems, partner-first mindsets and a focus on reducing total cost of ownership.</p>

        <div style={{ marginTop: 20 }}>
          <a href="/page/team" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Meet the team
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}><p style={{ color: "#444" }}>Footer placeholder</p></footer>
    </div>
  );
}