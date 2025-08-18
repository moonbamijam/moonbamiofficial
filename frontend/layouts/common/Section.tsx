type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: SectionProps) {
  return (
    <section
      className={`w-full h-full relative gap-4 lg:gap-6 py-[50px] lg:py-[100px]  ${className}`}
    >
      {children}
    </section>
  );
}
