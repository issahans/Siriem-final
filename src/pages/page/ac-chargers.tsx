import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function ACChargers(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>AC Chargers</h1>
        <p>Smart, reliable AC charging for homes, workplaces and light commercial sites.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px" }}>
        <img src="/images/placeholder.svg" alt="[Image: AC wallbox]" style={{ maxWidth: 520 }} />
        <p className="sr-only">[Image: AC wallbox]</p>

        <h2>Highlights</h2>
        <ul>
          <li>Power: 3.7kW – 22kW options</li>
          <li>Connectivity: Wi‑Fi, Ethernet, optional LTE</li>
          <li>Safety & certifications: IEC/UL as applicable</li>
        </ul>

        <h2>Features & Integrations</h2>
        <p>Load sharing, scheduled charging, user authentication, and OCPP connectivity for central management.</p>

        <h3>Deployment Scenarios</h3>
        <p>Residential multi-unit dwellings, workplace parking, valet charging and hospitality guest charging programs.</p>

        <div style={{ marginTop: 20 }}>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Request AC charger quote
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}>
        <p style={{ color: "#444" }}>Footer placeholder — SIRIEM</p>
      </footer>
    </div>
  );
}