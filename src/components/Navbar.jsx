import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiGlobe, FiMapPin, FiPhone, FiMail, FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  { to: "/", label: "Home" },
  { to: "/mass-timing", label: "Mass Timing" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top info bar */}
      <div className="topbar">
        <div className="topbar-inner">
          <span className="topbar-left">
            Welcome to St. John Bosco Church, Sirsi <FiGlobe />
          </span>
          <div className="topbar-right">
            <span><FiMapPin /> Sirsi, Karnataka</span>
            <span><FiPhone /> +91 XXXXX XXXXX</span>
            <span><FiMail /> example@email.com</span>
          </div>
        </div>
      </div>

      {/* Floating pill navbar */}
      <header className="navbar-wrap">
        <div className="navbar-pill">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            ST. JOHN BOSCO CHURCH
          </Link>

          <nav className={`nav-links ${open ? "open" : ""}`}>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/mass-timing" className="cta mobile-only" onClick={() => setOpen(false)}>
              PLAN YOUR VISIT <FiArrowUpRight />
            </Link>
          </nav>

          <Link to="/mass-timing" className="cta desktop-only">
            PLAN YOUR VISIT <FiArrowUpRight />
          </Link>

          <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>
    </>
  );
}