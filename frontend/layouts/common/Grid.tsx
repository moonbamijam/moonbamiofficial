type GridProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Grid({ children, className }: GridProps) {
  return <div className={`w-full h-full grid ${className}`}>{children}</div>;
}
