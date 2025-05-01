type Props = {
  children?: React.ReactNode;
  position?: string;
};

export default function Dropdown({ children, position }: Props) {
  return (
    <nav
      id="main"
      className={`absolute ${position} text-base flex flex-col gap-2 mt-2 mr-2 px-4 py-8 rounded-lg bg-surface dark:bg-dm-surface shadow z-[2000]`}
    >
      {children}
    </nav>
  );
}
