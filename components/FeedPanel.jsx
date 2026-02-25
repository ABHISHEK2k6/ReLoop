export default function FeedPanel({ items, accent, title }) {
  return (
    <div className="feed-panel">
      <div className="feed-header">
        <div className="feed-title">{title}</div>
        <div className="feed-live">
          <div className="live-dot" />
          Live
        </div>
      </div>
      {items.map((item) => (
        <div className="listing-card" key={item.id}>
          <div className="listing-icon">{item.icon}</div>
          <div className="listing-info">
            <div className="listing-title">{item.title}</div>
            <div className="listing-meta">{item.meta}</div>
          </div>
          <div
            className="listing-tag"
            style={{
              background: `${item.tagColor}18`,
              color: item.tagColor,
              border: `1px solid ${item.tagColor}40`,
            }}
          >
            {item.tag}
          </div>
        </div>
      ))}
    </div>
  );
}
