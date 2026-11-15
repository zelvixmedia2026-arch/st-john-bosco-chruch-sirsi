export default function MapEmbed({ height = 340, className = "" }) {
  return (
    <div className={`map-embed ${className}`}>
      <iframe
        title="St. John Bosco Church, Sirsi location"
        src="https://www.google.com/maps?q=St+John+Bosco+Church+Sirsi&output=embed"
        style={{ height }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}