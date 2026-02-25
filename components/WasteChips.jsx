export default function WasteChips({ types, selected, onChange, accent = 'green' }) {
  return (
    <div className="flex flex-wrap gap-2">
      {types.map((type) => {
        const isSelected = selected.includes(type);
        const selectedClasses = accent === 'green'
          ? 'bg-green-glow border-green text-green'
          : 'bg-amber-glow border-amber text-amber';
        
        return (
          <div
            key={type}
            className={`px-3.5 py-1.5 rounded-full border text-xs font-medium cursor-pointer transition-all duration-150 select-none ${
              isSelected
                ? selectedClasses
                : 'border-dark-border bg-dark text-text-secondary hover:border-[var(--accent)] hover:text-text-primary'
            }`}
            onClick={() => onChange(type)}
          >
            {type}
          </div>
        );
      })}
    </div>
  );
}
