/**
 * SakuraBackground.tsx
 * Renders animated falling cherry blossom petals as a fixed background layer.
 */

const PETALS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left:     `${Math.random() * 100}%`,
  duration: `${8 + Math.random() * 10}s`,
  delay:    `${Math.random() * 10}s`,
  size:     `${8 + Math.random() * 8}px`,
}));

export default function SakuraBackground() {
  return (
    <div className="sakura-container" aria-hidden="true">
      {PETALS.map((p) => (
        <div
          key={p.id}
          className="sakura-petal"
          style={{
            left:              p.left,
            width:             p.size,
            height:            p.size,
            animationDuration: p.duration,
            animationDelay:    p.delay,
          }}
        />
      ))}
    </div>
  );
}
