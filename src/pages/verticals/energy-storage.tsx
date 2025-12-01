import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function EnergyStorage(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh", fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}>
      <header style={{ padding: 40, borderBottom: "1px solid #eee" }}>
        <h1 style={{ fontSize: 36, margin: 0 }}>Energy Storage</h1>
        <p style={{ marginTop: 8, color: "#222", maxWidth: 820 }}>
          Integrating distributed energy storage with EV charging to lower peak costs, increase renewable utilization,
          and provide resiliency for critical charging sites.
        </p>
      </header>

      {/* Hero / Visual */}
      <section style={{ padding: "28px 40px", display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
        <figure style={{ margin: 0, flex: "1 1 360px", maxWidth: 560 }}>
          <img src="/images/placeholder.svg" alt="Illustration of battery storage integrated with EV chargers and solar" style={{ width: "100%", height: "auto", borderRadius: 8 }} />
          <figcaption style={{ marginTop: 8, color: "#444", fontSize: 13 }}>[Image: Illustration of battery storage integrated with EV chargers and solar]</figcaption>
        </figure>

        <div style={{ flex: "1 1 320px", minWidth: 280 }}>
          <h2 style={{ fontSize: 22, marginTop: 0 }}>Why storage matters</h2>
          <p style={{ color: "#222" }}>
            Combining energy storage with charging infrastructure transforms a site from a passive load into an active
            asset. Storage reduces demand charges, smooths solar variability, enables off-peak charging strategies, and can
            provide backup power for mission-critical fleets and hosts.
          </p>

          <ul style={{ marginTop: 12, paddingLeft: 18 }}>
            <li>Reduce peak demand and lower utility bills</li>
            <li>Time-shift charging to maximize onsite renewables</li>
            <li>Improve site resiliency and provide emergency backup</li>
          </ul>

          <div style={{ marginTop: 14 }}>
            <a href="/contact-us" style={{ padding: "10px 14px", background: ACCENT, color: "#000", borderRadius: 6, textDecoration: "none", fontWeight: 600 }}>
              Explore storage integration
            </a>
          </div>
        </div>
      </section>

      {/* Technical Integration */}
      <section style={{ padding: "0 40px 24px 40px", maxWidth: 1100 }}>
        <h2 style={{ fontSize: 20 }}>Technical integration</h2>
        <p style={{ color: "#222" }}>
          SIRIEM's platform integrates storage via an edge controller that orchestrates charging, PV, and battery systems.
          The architecture supports both AC- and DC-coupled storage topologies and connects to our cloud CMS for telemetry,
          dispatching and reporting.
        </p>

        <h3 style={{ fontSize: 16, marginTop: 12 }}>Key capabilities</h3>
        <ul style={{ paddingLeft: 18 }}>
          <li>AC & DC coupling support (flexible to site topology)</li>
          <li>Peak shaving and rule-based dispatch (time-of-use, demand thresholds)</li>
          <li>Renewable-first charging schedules and solar curtailment avoidance</li>
          <li>Seamless CMS telemetry & economics reporting</li>
        </ul>
      </section>

      {/* Use Cases & Economics */}
      <section style={{ background: "#fafafa", padding: "28px 40px", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1100 }}>
          <h2 style={{ fontSize: 20 }}>Use cases</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 12 }}>
            <article style={{ background: "#fff", padding: 16, borderRadius: 8, boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
              <h3 style={{ marginTop: 0 }}>Peak shaving</h3>
              <p style={{ marginBottom: 8, color: "#333" }}>
                Deploy battery capacity to shave top demand peaks and avoid punitive utility demand charges — typically
                the largest line item on commercial EV charging bills.
              </p>
              <p style={{ fontSize: 13, color: "#555" }}><strong>Outcome:</strong> Lower monthly energy spend, predictable Opex.</p>
            </article>

            <article style={{ background: "#fff", padding: 16, borderRadius: 8 }}>
              <h3 style={{ marginTop: 0 }}>Renewable smoothing</h3>
              <p style={{ marginBottom: 8, color: "#333" }}>
                Co-locate solar with battery storage to maximize onsite renewable utilization and charge EVs with clean energy
                when production is high.
              </p>
              <p style={{ fontSize: 13, color: "#555" }}><strong>Outcome:</strong> Reduced grid energy consumption and CO2 intensity.</p>
            </article>

            <article style={{ background: "#fff", padding: 16, borderRadius: 8 }}>
              <h3 style={{ marginTop: 0 }}>Resilience & backup</h3>
              <p style={{ marginBottom: 8, color: "#333" }}>
                Ensure depot continuity during grid outages for emergency services or critical transportation fleets with controlled
                load prioritization and islanding modes.
              </p>
              <p style={{ fontSize: 13, color: "#555" }}><strong>Outcome:</strong> Uninterrupted operations for critical services.</p>
            </article>
          </div>

          <div style={{ marginTop: 18 }}>
            <h3 style={{ fontSize: 16 }}>Economics & sizing</h3>
            <p style={{ color: "#222" }}>
              Battery sizing and dispatch strategies are driven by tariff structures, charge patterns, and PV profiles. SIRIEM runs
              site-specific modelling to quantify payback, peak reduction potential, and lifecycle cost.
            </p>
          </div>
        </div>
      </section>

      {/* Deployment & Operations */}
      <section style={{ padding: "24px 40px", maxWidth: 1100 }}>
        <h2 style={{ fontSize: 20 }}>Deployment & operations</h2>
        <p style={{ color: "#222" }}>
          Our delivery model covers engineering, procurement, construction, commissioning, and ongoing managed operations.
          We offer SLA-backed maintenance, remote diagnostics, and spare parts logistics to keep systems online.
        </p>

        <h3 style={{ marginTop: 12 }}>What we provide</h3>
        <ul style={{ paddingLeft: 18 }}>
          <li>Site feasibility and grid impact studies</li>
          <li>Turn-key procurement and installation</li>
          <li>Performance monitoring, warranty management and O&M</li>
        </ul>

        <figure style={{ marginTop: 16 }}>
          <img src="/images/placeholder.svg" alt="Photo of storage installation at a depot" style={{ width: 420, borderRadius: 8 }} />
          <figcaption style={{ marginTop: 8, color: "#444", fontSize: 13 }}>[Image: Photo of storage installation at a depot]</figcaption>
        </figure>
      </section>

      {/* Case study / Proof point */}
      <section style={{ background: "#f7fff7", padding: "28px 40px", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: 1100 }}>
          <h2 style={{ fontSize: 20 }}>Case study (placeholder)</h2>
          <p style={{ color: "#222" }}>
            Municipal fleet depot pilot — 500 kWh battery + 200 kW PV integrated with 20 DC chargers. Outcome after 12 months:
            18% reduction in utility spend, 90% uptime retention during peak events, and a 3.2 year simple payback in current tariff conditions.
          </p>

          <div style={{ marginTop: 12 }}>
            <a href="/contact-us" style={{ padding: "10px 14px", background: ACCENT, color: "#000", borderRadius: 6, textDecoration: "none", fontWeight: 600 }}>
              Request a site model
            </a>
          </div>
        </div>
      </section>

      {/* CTA / Next steps */}
      <section style={{ padding: "32px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: 20 }}>Ready to evaluate storage for your site?</h2>
        <p style={{ color: "#222", maxWidth: 820, margin: "12px auto 18px" }}>
          Request a complimentary feasibility study and economics model. We’ll analyze your tariffs, load profiles, and renewable potential
          to propose a right-sized system.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact-us" style={{ padding: "10px 14px", background: ACCENT, color: "#000", borderRadius: 6, textDecoration: "none", fontWeight: 600 }}>
            Request feasibility study
          </a>
          <a href="/our-offerings" style={{ padding: "10px 14px", border: "1px solid #ddd", color: "#000", borderRadius: 6, textDecoration: "none" }}>
            View related solutions
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: 24, borderTop: "1px solid #eee", marginTop: 18 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 20, flexWrap: "wrap" }}>
          <div style={{ minWidth: 220 }}>
            <h4 style={{ margin: "0 0 8px 0" }}>SIRIEM</h4>
            <p style={{ margin: 0, color: "#444" }}>Enterprise EV charging and energy solutions</p>
          </div>

          <div style={{ minWidth: 160 }}>
            <h5 style={{ margin: "0 0 8px 0" }}>Contact</h5>
            <p style={{ margin: 0, color: "#444" }}>hello@siriem.com</p>
          </div>

          <div style={{ flex: 1, minWidth: 220 }}>
            <h5 style={{ margin: "0 0 8px 0" }}>Pages</h5>
            <p style={{ margin: 0, color: "#444" }}>Products • Services • Solutions • Contact</p>
          </div>
        </div>

        <div style={{ marginTop: 16, textAlign: "center", color: "#666", fontSize: 13 }}>
          © {new Date().getFullYear()} SIRIEM — All rights reserved. [Footer placeholder for privacy, terms, certifications]
        </div>
      </footer>
    </div>
  );
}