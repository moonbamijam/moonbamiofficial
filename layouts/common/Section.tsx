type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full h-full relative gap-4 lg:gap-6 py-[50px] lg:py-[100px] ${className}`}
    >
      {children}
    </section>
  );
}
