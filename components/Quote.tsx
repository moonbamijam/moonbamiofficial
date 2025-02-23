type QuoteProps = {
  quote: string;
  author: string;
  className?: string;
};

export default function Quote({ quote, author, className }: QuoteProps) {
  return (
    <p className={`min-w-[350px] max-w-[600px] min-h-[22px] ${className}`}>
      <em>“{quote}”</em>
      <strong> &#8212; {author}</strong>
    </p>
  );
}
