import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function EVOEMs(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>EV OEMs</h1>
        <p>Partnerships for vehicle-level integration, OBC co-development and production readiness.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px", maxWidth: 980 }}>
        <h2>Partnership Model</h2>
        <p>From prototype support to scaled production: hardware customization, EMI/thermal validation, and supply chain alignment.</p>

        <h2>Integration</h2>
        <p>CAN / ISO 15118 support, thermal co-design, and vehicle-side charging control for seamless OEM integration.</p>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Start OEM conversation
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}><p style={{ color: "#444" }}>Footer placeholder</p></footer>
    </div>
  );
}