export default function PageWrapper({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="container pt-[100px] lg:pt-[50px]">
      {children}
    </div>
  );
}
