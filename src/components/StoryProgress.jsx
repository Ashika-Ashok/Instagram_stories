export default function StoryProgress({ total, current }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded bg-white/30 ${
            i <= current ? "bg-white" : "bg-white/30"
          }`}
        ></div>
      ))}
    </div>
  );
}
