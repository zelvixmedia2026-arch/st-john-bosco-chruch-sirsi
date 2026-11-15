import { Link } from "react-router-dom";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import MapEmbed from "./MapEmbed";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>St. John Bosco Church</h4>
          <p>A community of faith, hope and love in the heart of Sirsi.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/mass-timing">Mass Timing</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p className="footer-row"><FiMapPin /> Sirsi, Uttara Kannada, Karnataka</p>
          <p className="footer-row"><FiPhone /> +91 XXXXX XXXXX</p>
          <p className="footer-row"><FiMail /> example@email.com</p>
        </div>

        <div className="footer-map">
          <h4>Find Us</h4>
          <MapEmbed height={170} />
        </div>
      </div>

      <div className="copyright">
        <span>
          © {new Date().getFullYear()} St. John Bosco Church, Sirsi. All rights reserved.
        </span>
        <span>
          Designed and developed by{" "}
          <a
            href="https://zelvixmedia.online"
            target="_blank"
            rel="noopener noreferrer"
            className="credit"
          >
            Zelvix Media
          </a>
        </span>
      </div>
    </footer>
  );
}