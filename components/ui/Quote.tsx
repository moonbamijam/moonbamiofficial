type QuoteProps = {
  quote: string;
  author: string;
  className?: string;
};

export default function Quote({ quote, author, className }: QuoteProps) {
  return (
    <p className={`min-w-[400px] text-center ${className}`}>
      <span className="italic">“{quote}”</span> &#8212;{" "}
      <span className="font-bold">{author}</span>
    </p>
  );
}
