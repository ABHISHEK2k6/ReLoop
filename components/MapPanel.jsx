export default function MapPanel({ mode }) {
  return (
    <div className="map-panel">
      <div className="map-bg" />
      <div className="map-overlay" />
      <div className="map-pin">📍</div>
      <div className="map-badge">
        <span>24</span> active listings near you
      </div>
    </div>
  );
}
