/**
 * FeaturedVideo.tsx
 * ─────────────────────────────────────────────────────
 * Standalone responsive YouTube video embed (without card wrapper).
 */

interface FeaturedVideoProps {
  videoId?: string;
  title?: string;
}

export default function FeaturedVideo({
  videoId = '1akRYV6naOM',
  title = 'Featured Video',
}: FeaturedVideoProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&loop=1&playlist=${videoId}`;

  return (
    <section className="video-section" id="video-showcase" aria-label="Featured Video">
      <div className="video-wrapper">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}
