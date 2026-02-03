type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function Dropdown({ children, className }: Props) {
  return (
    <nav
      id="main"
      className={`absolute ${className} text-base flex flex-col gap-2 px-6 py-8 rounded bg-surface dark:bg-dm-surface shadow z-[2000]`}
    >
      {children}
    </nav>
  );
}
