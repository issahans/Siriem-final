import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function Solutions(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>Solutions</h1>
        <p>Pre-built solution stacks optimized for specific vertical outcomes.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px" }}>
        <h2>Fleet Solutions</h2>
        <p>Depot charging, route-aware scheduling, and fleet telematics integration for minimized downtime.</p>

        <h2 style={{ marginTop: 16 }}>Workplace & Multifamily</h2>
        <p>Shared charging, access control and billing workflows designed for occupant experience and fairness.</p>

        <h2 style={{ marginTop: 16 }}>CPO & Retail Experiences</h2>
        <p>Revenue-grade sessions, branded UX, and energy-cost optimization for operators and hosts.</p>

        <div style={{ marginTop: 20 }}>
          <a href="/our-offerings" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            View related products & services
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}>
        <p style={{ color: "#444" }}>Footer placeholder — SIRIEM</p>
      </footer>
    </div>
  );
}