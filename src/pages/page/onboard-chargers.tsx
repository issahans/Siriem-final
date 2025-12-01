import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function OnboardChargers(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>Onboard Charging System</h1>
        <p>Efficient onboard chargers (OBC) for light and medium duty EV platforms.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px" }}>
        <img src="/images/placeholder.svg" alt="[Image: Onboard charger component]" style={{ maxWidth: 520 }} />
        <p className="sr-only">[Image: Onboard charger component]</p>

        <h2>Overview</h2>
        <p>High-efficiency OBCs supporting multi-voltage inputs, thermal protection, and vehicle telematics interfaces.</p>

        <h2>Manufacturer Integration</h2>
        <p>Customizable mechanical form factors, CAN/ISO 15118 signaling support, and harmonized power/thermal designs for OEM production lines.</p>

        <div style={{ marginTop: 20 }}>
          <a href="/page/evoems" style={{ marginRight: 12 }}>EV OEM Partnerships</a>
          <a href="/contact-us" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Inquire about OBC
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}>
        <p style={{ color: "#444" }}>Footer placeholder — SIRIEM</p>
      </footer>
    </div>
  );
}