import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import MapEmbed from "../components/MapEmbed";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's email app with the message filled in (no backend needed)
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`
    );
    window.location.href = `mailto:example@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container section">
      <h1 className="title">Contact Us</h1>
      <p className="center muted">
        We would love to hear from you. Reach out to the parish office anytime.
      </p>

      <div className="two-col">
        <div className="panel">
          <h2>Parish Office</h2>
          <p className="info-row">
            <FiMapPin />
            <span>St. John Bosco Church, Sirsi, Uttara Kannada, Karnataka</span>
          </p>
          <p className="info-row">
            <FiPhone />
            <span>+91 XXXXX XXXXX</span>
          </p>
          <p className="info-row">
            <FiMail />
            <span>example@email.com</span>
          </p>
          <p className="info-row">
            <FiClock />
            <span>Mon – Sat, 10:00 AM – 12:30 PM</span>
          </p>
        </div>

        <form className="panel" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>
          <input
            name="name"
            placeholder="Your name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            required
            value={form.message}
            onChange={handleChange}
          />
          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>

      <div style={{ marginTop: 30 }}>
        <MapEmbed height={380} />
      </div>
    </div>
  );
}