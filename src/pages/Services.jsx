const services = [
  { icon: "💧", title: "Baptism", text: "Welcoming new members into the Christian family." },
  { icon: "🍞", title: "First Holy Communion", text: "Preparation classes and celebration for children." },
  { icon: "🕯️", title: "Confirmation", text: "Strengthening young people in faith through the Holy Spirit." },
  { icon: "💍", title: "Marriage", text: "Pre-marriage guidance and wedding celebrations." },
  { icon: "🕊️", title: "Confession", text: "The Sacrament of Reconciliation." },
  { icon: "🏥", title: "Anointing of the Sick", text: "Spiritual comfort for the ill and elderly." },
  { icon: "📖", title: "Catechism Classes", text: "Faith formation for children and youth." },
  { icon: "🎶", title: "Choir & Youth Ministry", text: "Join our choir, altar servers and youth groups." },
  { icon: "🤝", title: "Charity & Outreach", text: "Supporting families and people in need." },
];

export default function Services() {
  return (
    <div className="container section">
      <h1 className="title">Our Services</h1>
      <p className="center muted">
        For any sacrament or service, please contact the parish office in advance.
      </p>
      <div className="cards">
        {services.map((s) => (
          <div className="card" key={s.title}>
            <div className="icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}