type Props = {
  children: React.ReactNode;
  gridStyles?: string;
};

export default function Grid({ children, gridStyles }: Props) {
  return <div className={`grid ${gridStyles}`}>{children}</div>;
}
