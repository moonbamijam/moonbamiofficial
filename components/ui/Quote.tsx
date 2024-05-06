type QuoteProps = {
  quote: string;
  author: string;
  customStyles?: string;
};

export default function Quote({ quote, author, customStyles }: QuoteProps) {
  return (
    <p className={`min-w-[400px] text-center ${customStyles}`}>
      <span className="italic">“{quote}”</span> &#8212; {author}
    </p>
  );
}
