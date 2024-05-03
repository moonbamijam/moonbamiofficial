type Props = {
  children?: React.ReactNode;
};

export default function Dropdown({ children }: Props) {
  return (
    <nav
      id="main"
      className="absolute text-base top-[60px] flex flex-col gap-2 mt-2 mr-2 px-2 py-8 rounded-xl bg-surface dark:bg-dm-surface border border-transparent"
    >
      {children}
    </nav>
  );
}
