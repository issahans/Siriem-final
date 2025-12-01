import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function OurOfferings(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1 style={{ fontSize: 36 }}>Our Offerings</h1>
        <p style={{ marginTop: 8 }}>Products, services and solutions to deploy and operate EV charging.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px", maxWidth: 1100 }}>
        <h2>Products</h2>
        <ul>
          <li><a href="/page/ac-chargers">AC Chargers</a></li>
          <li><a href="/page/dc-chargers">DC Chargers</a></li>
          <li><a href="/page/charging-management-system">Charging Management System (CMS)</a></li>
          <li><a href="/page/onboard-chargers">Onboard Charging System</a></li>
        </ul>

        <h2 style={{ marginTop: 20 }}>Services</h2>
        <ul>
          <li><a href="/page/charger-services">Charger Services</a></li>
          <li><a href="/page/cms-services">Charging Management Services</a></li>
          <li><a href="/page/consulting">Consulting</a></li>
        </ul>

        <h2 style={{ marginTop: 20 }}>Solutions</h2>
        <p>Integrated packages for Fleets, Workplace, Residential, CPOs, Retail & Hospitality, and OEM partners.</p>
        <a href="/page/solutions" style={{ display: "inline-block", marginTop: 12, padding: "10px 14px", background: ACCENT, color: "#000", borderRadius: 6 }}>
          Explore Solutions
        </a>
      </section>

      <section style={{ padding: "0 40px 40px 40px" }}>
        <img src="/images/placeholder.svg" alt="[Image: Product matrix]" style={{ maxWidth: 720 }} />
        <p className="sr-only">[Image: Product matrix]</p>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}>
        <p style={{ color: "#444" }}>Footer placeholder — SIRIEM © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}