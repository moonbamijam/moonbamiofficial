type Props = {
  children?: React.ReactNode;
};

const Dropdown = ({ children }: Props) => {
  return (
    <nav
      id="main"
      className="absolute text-base top-[60px] flex flex-col gap-2 mt-2 mr-2 px-2 py-8 rounded-xl bg-white dark:bg-primary border border-transparent dark:border-white"
    >
      {children}
    </nav>
  );
};

export default Dropdown;
