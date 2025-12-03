import React from "react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

export default function ContactUs(): JSX.Element {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <header style={{ padding: 40 }}>
        <h1>Contact Us</h1>
        <p>Talk to sales, request service or join our partner program.</p>
      </header>

      <section style={{ padding: "0 40px 24px 40px", maxWidth: 720 }}>
        <h2>General Inquiries</h2>
        <p>Email: hello@siriem.com</p>
        <p>Phone: +1 (555) 123-4567</p>

        <h2 style={{ marginTop: 16 }}>Request a Consultation</h2>
        <p>Use the form (placeholder) or email to start a conversation about pilots and rollouts.</p>

        <img src="/images/placeholder.svg" alt="[Image: Contact team]" style={{ maxWidth: 520, marginTop: 12 }} />
        <p className="sr-only">[Image: Contact team]</p>

        <div style={{ marginTop: 20 }}>
          <a href="mailto:hello@siriem.com" style={{ padding: "8px 12px", background: ACCENT, color: "#000", borderRadius: 6 }}>
            Email our sales team
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #eee" }}>
        <p style={{ color: "#444" }}>Footer placeholder — SIRIEM</p>
      </footer>
    </div>
  );
}