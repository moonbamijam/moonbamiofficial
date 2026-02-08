type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full h-full relative gap-4 lg:gap-6 py-12.5 lg:py-25 ${className}`}
    >
      {children}
    </section>
  );
}
