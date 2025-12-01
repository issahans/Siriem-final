import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function DCChargers(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>DC Chargers</h1>
        <p>High-power fast charging engineered for uptime and serviceability.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px" }}>
        <img src="/images/placeholder.svg" alt="[Image: DC fast charger]" style={{ maxWidth: 720 }} />
        <p className="sr-only">[Image: DC fast charger]</p>

        <h2>Product Family</h2>
        <p>Modular 50kW, 150kW, and 350kW platforms for highways, retail, and fleet depots.</p>

        <h2>Operational Advantages</h2>
        <ul>
          <li>Active thermal management</li>
          <li>Hot-swap power modules for quick field repairs</li>
          <li>Remote diagnostics and OTA firmware</li>
        </ul>

        <h3>Interoperability</h3>
        <p>Supports CCS, CHAdeMO (optional), and integrates with CMS using OCPP and direct APIs for session telemetry.</p>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Request DC charger specs
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}>
        <p style={{ color: "#444" }}>Footer placeholder — SIRIEM</p>
      </footer>
    </div>
  );
}