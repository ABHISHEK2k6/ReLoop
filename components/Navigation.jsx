export default function Navigation({ activeTab, onTabChange }) {
  return (
    <nav className="nav">
      <div className="logo">
        <div className="logo-dot" />
        ReLoop
      </div>
      <div className="portal-toggle">
        <button
          className={`toggle-btn ${activeTab === 'giver' ? 'active-green' : ''}`}
          onClick={() => onTabChange('giver')}
        >
          Give Waste
        </button>
        <button
          className={`toggle-btn ${activeTab === 'buyer' ? 'active-amber' : ''}`}
          onClick={() => onTabChange('buyer')}
        >
          Buy Waste
        </button>
      </div>
      <button className="sign-in-btn">Sign In</button>
    </nav>
  );
}
