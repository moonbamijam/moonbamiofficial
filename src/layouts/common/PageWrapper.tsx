export default function PageWrapper({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="container pt-25 lg:pt-12.5">
      {children}
    </div>
  );
}
