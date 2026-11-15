export default function About() {
  return (
    <div className="container section">
      <h1 className="title">About Us</h1>

      <div className="two-col">
        <div>
          <h2>Our Parish</h2>
          <p>
            St. John Bosco Church in Sirsi is a Catholic parish serving the
            faithful of the Sirsi region in Uttara Kannada. Our community
            gathers in prayer, worship and service, guided by the Gospel.
          </p>
          <p>
            Add your parish history here: year of establishment, founding
            priests, milestones and how the community has grown over the years.
          </p>
        </div>
        <div>
          <h2>Our Patron – St. John Bosco</h2>
          <p>
            St. John Bosco (1815–1888) was an Italian priest, educator and
            founder of the Salesians of Don Bosco. He devoted his life to the
            care and education of young people, especially the poor and
            neglected. His approach was built on reason, religion and loving
            kindness.
          </p>
        </div>
      </div>

      <div className="panel" style={{ marginTop: 24 }}>
        <h2>Our Mission</h2>
        <p>
          To be a living community of faith that nurtures every member,
          especially the youth, in the love of Christ, and reaches out to
          those in need.
        </p>
      </div>

      <div className="panel" style={{ marginTop: 24 }}>
        <h2>Parish Priest</h2>
        <p>Rev. Fr. ____________ (add name and photo)</p>
      </div>
    </div>
  );
}