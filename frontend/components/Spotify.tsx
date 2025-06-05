type SpotifyProps = {
  src?: string;
  width?: string;
  height?: string;
  title?: string;
  className?: string;
};

export default function Spotify({
  src,
  width = "100%",
  height = "100%",
  title,
  className,
}: SpotifyProps) {
  return (
    <iframe
      id="spotify-embed"
      src={src}
      style={{ width, height }}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      allowFullScreen
      className={`overflow-hidden rounded-2xl shadow cursor-pointer min-h-[152px] max-h-[352px] ${className}`}
      title={title}
      loading="lazy"
    ></iframe>
  );
}
