import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function CMSservices(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>Charging Management Services</h1>
        <p>Implementation, integrations and managed operations for the CMS platform.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px" }}>
        <h2>Integration Services</h2>
        <p>ERP, payment gateway, utility meter and fleet telematics integrations with secure connectors and mapping services.</p>

        <h2>Managed Services</h2>
        <p>24/7 monitoring, incident management, SLA-tracked tickets and continuous optimization to reduce energy costs.</p>

        <h2>Analytics & Reporting</h2>
        <p>Custom dashboards, charge-session analytics and KPI reporting for finance and operations teams.</p>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Talk to our CMS team
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}>
        <p style={{ color: "#444" }}>Footer placeholder — SIRIEM</p>
      </footer>
    </div>
  );
}