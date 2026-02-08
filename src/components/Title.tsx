type TitleProps = {
  text: string;
  className?: string;
};

export default function Title({ text, className }: TitleProps) {
  return <h1 className={`font-bold tracking-tight ${className}`}>{text}</h1>;
}
