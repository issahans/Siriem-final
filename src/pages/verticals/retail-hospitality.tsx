import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function RetailHospitality(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>Retail & Hospitality</h1>
        <p>Customer-first charging experiences that drive dwell time and loyalty.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px" }}>
        <h2>Experience Features</h2>
        <ul>
          <li>Branded charging session UX and wayfinding</li>
          <li>Promotions, loyalty integration and discounting</li>
          <li>Operational KPIs for site hosts</li>
        </ul>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Discuss retail programs
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}><p style={{ color: "#444" }}>Footer placeholder</p></footer>
    </div>
  );
}