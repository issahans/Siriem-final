import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function CMS(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>Charging Management System (CMS)</h1>
        <p>Cloud-native platform to monitor, manage, and monetize charging operations.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px", maxWidth: 1000 }}>
        <img src="/images/placeholder.svg" alt="[Image: CMS dashboard]" style={{ maxWidth: 720 }} />
        <p className="sr-only">[Image: CMS dashboard]</p>

        <h2>Capabilities</h2>
        <ul>
          <li>Real-time telemetry and state-of-health monitoring</li>
          <li>Dynamic load management and demand-side optimization</li>
          <li>Billing, access control, and integrations (ERP, payment gateways)</li>
        </ul>

        <h2>API & Extensibility</h2>
        <p>Comprehensive REST and WebSocket APIs, SDKs for fleet integration, and webhook support for events.</p>

        <h2>Security & Compliance</h2>
        <p>Role-based access, encrypted telemetry, audit logs, and SOC/ISO-grade operational practices.</p>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Schedule CMS demo
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}>
        <p style={{ color: "#444" }}>Footer placeholder — SIRIEM</p>
      </footer>
    </div>
  );
}