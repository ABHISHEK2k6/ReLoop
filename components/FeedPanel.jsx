export default function FeedPanel({ items, accent, title }) {
  return (
    <div className="bg-dark-card border border-dark-border rounded-2xl p-4 md:p-5 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="font-display font-bold text-[14px] md:text-[15px]">{title}</div>
        <div className="flex items-center gap-1.5 text-[11px] text-text-secondary">
          <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          Live
        </div>
      </div>
      {items.map((item) => (
        <div 
          className="flex gap-2.5 md:gap-3 items-start p-2.5 md:p-3 bg-dark rounded-[10px] border border-dark-border transition-colors duration-200 cursor-pointer hover:border-[var(--accent)]"
          key={item.id}
        >
          <div className="text-lg md:text-xl shrink-0 mt-0.5">{item.icon}</div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-[13px] text-text-primary whitespace-nowrap overflow-hidden text-ellipsis">
              {item.title}
            </div>
            <div className="text-[11px] text-text-secondary mt-0.5">{item.meta}</div>
          </div>
          <div
            className="px-2 md:px-2.5 py-0.5 rounded-full text-[10px] md:text-[11px] font-medium shrink-0"
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
