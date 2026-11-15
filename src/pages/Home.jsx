import { Link } from "react-router-dom";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import MapEmbed from "../components/MapEmbed";

const stats = [
  { big: "Daily", small: "Holy Mass" },
  { big: "7", small: "Sacraments" },
  { big: "All", small: "Are Welcome" },
  { big: "31 Jan", small: "Feast of St. John Bosco" },
];

const services = [
  { icon: "💧", title: "Baptism", text: "Welcoming new members into the Christian family." },
  { icon: "🍞", title: "First Holy Communion", text: "Preparation and celebration for children." },
  { icon: "💍", title: "Marriage", text: "Pre-marriage guidance and wedding celebrations." },
  { icon: "📖", title: "Catechism", text: "Faith formation for children and youth." },
  { icon: "🎶", title: "Choir & Youth", text: "Choir, altar servers and youth ministry." },
  { icon: "🤝", title: "Charity & Outreach", text: "Supporting families and people in need." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-left">
            <span className="pill">✝ Welcome to our parish</span>
            <h1>
              Faith, Hope &amp; Love in the heart of <span>Sirsi</span>
            </h1>
            <p className="hero-text">
              St. John Bosco Church is a welcoming Catholic community. Come, pray,
              and grow together with us in the love of Christ.
            </p>
            <div className="btn-row">
              <Link to="/mass-timing" className="btn btn-lg">
                View Mass Timing <FiArrowUpRight />
              </Link>
              <Link to="/about" className="btn btn-lg btn-outline">
                Know Our Parish
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <h3><FiClock /> Sunday Mass</h3>
            <ul>
              <li><b>7:00 AM</b><span>Kannada</span></li>
              <li><b>9:00 AM</b><span>Konkani</span></li>
              <li><b>6:00 PM</b><span>English</span></li>
            </ul>
            <Link to="/mass-timing">Full schedule →</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        {stats.map((s) => (
          <div key={s.small} className="stat">
            <strong>{s.big}</strong>
            <span>{s.small}</span>
          </div>
        ))}
      </section>

      {/* WELCOME */}
      <section className="container section welcome">
        <div className="welcome-img">
          <div className="welcome-badge">✝</div>
          <p>St. John Bosco</p>
          <small>Father and teacher of youth</small>
        </div>
        <div>
          <p className="eyebrow dark">About our church</p>
          <h2 className="big-heading">A home for every family and every young heart</h2>
          <p>
            Named after St. John Bosco, who dedicated his life to young people,
            our parish is a place of prayer, joyful fellowship and service.
            Whether you are a lifelong parishioner or visiting Sirsi for the
            first time, you will always find an open door here.
          </p>
          <p>
            Join us for Holy Mass, sacraments, catechism, youth groups and
            community events throughout the year.
          </p>
          <Link to="/about" className="btn">
            Read More <FiArrowUpRight />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-band">
        <div className="container">
          <h2 className="title">Our Services</h2>
          <div className="cards">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 30 }}>
            <Link to="/services" className="btn">
              All Services <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* VERSE */}
      <section className="quote">
        <blockquote>
          “Come to me, all you who are weary and burdened, and I will give you rest.”
          <cite>Matthew 11:28</cite>
        </blockquote>
      </section>

      {/* LOCATION */}
      <section className="container section location">
        <p className="eyebrow dark center">Find us</p>
        <h2 className="title">Our Location</h2>
        <p className="center muted">
          St. John Bosco Church, Sirsi, Uttara Kannada, Karnataka
        </p>
        <MapEmbed height={420} />
        <div className="center" style={{ marginTop: 24 }}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=St+John+Bosco+Church+Sirsi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Get Directions <FiArrowUpRight />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <h2>We would love to see you this Sunday</h2>
        <p>Have a question or need a sacrament certificate? Reach out to the parish office.</p>
        <Link to="/contact" className="btn btn-lg">
          Contact Us <FiArrowUpRight />
        </Link>
      </section>
    </>
  );
}