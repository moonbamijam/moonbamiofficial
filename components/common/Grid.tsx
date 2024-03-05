const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid lg:grid-cols-2 premium:grid-cols-3 gap-[50px]">
      {children}
    </div>
  );
};

export default Grid;
