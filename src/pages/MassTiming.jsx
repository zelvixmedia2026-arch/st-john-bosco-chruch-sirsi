const weekday = [
  { day: "Monday – Saturday", time: "6:30 AM", lang: "Kannada" },
  { day: "Monday – Saturday", time: "6:00 PM", lang: "English" },
];

const sunday = [
  { time: "7:00 AM", lang: "Kannada" },
  { time: "9:00 AM", lang: "Konkani" },
  { time: "6:00 PM", lang: "English" },
];

export default function MassTiming() {
  return (
    <div className="container section">
      <h1 className="title">Mass Timing</h1>
      <p className="center muted">
        Please confirm timings with the parish office before visiting.
      </p>

      <div className="two-col">
        <div className="panel">
          <h2>Weekday Masses</h2>
          <table>
            <thead>
              <tr><th>Day</th><th>Time</th><th>Language</th></tr>
            </thead>
            <tbody>
              {weekday.map((m, i) => (
                <tr key={i}>
                  <td>{m.day}</td><td>{m.time}</td><td>{m.lang}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel">
          <h2>Sunday Masses</h2>
          <table>
            <thead>
              <tr><th>Time</th><th>Language</th></tr>
            </thead>
            <tbody>
              {sunday.map((m, i) => (
                <tr key={i}>
                  <td>{m.time}</td><td>{m.lang}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel" style={{ marginTop: 24 }}>
        <h2>Other Devotions</h2>
        <ul className="list">
          <li>Confession: Saturdays, 5:00 PM (or by appointment)</li>
          <li>Adoration: First Friday, 5:00 PM</li>
          <li>Feast of St. John Bosco: 31 January</li>
        </ul>
      </div>
    </div>
  );
}