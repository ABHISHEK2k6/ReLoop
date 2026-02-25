export default function WasteChips({ types, selected, onChange, accent = 'green' }) {
  const selectedClass = accent === 'green' ? 'selected-green' : 'selected-amber';

  return (
    <div className="chip-group">
      {types.map((type) => (
        <div
          key={type}
          className={`chip ${selected.includes(type) ? selectedClass : ''}`}
          onClick={() => onChange(type)}
        >
          {type}
        </div>
      ))}
    </div>
  );
}
