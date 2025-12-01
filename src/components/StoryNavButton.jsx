export default function StoryNavButton({ direction, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 px-4 py-20 
        ${direction === "left" ? "left-0" : "right-0"}
        ${disabled ? "opacity-20" : "opacity-70 hover:opacity-100"}
      `}
    >
      {direction === "left" ? "◀" : "▶"}
    </button>
  );
}
