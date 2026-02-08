type SkeletonScreenProps = {
  id?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function SkeletonScreen({
  id,
  children,
  className,
}: SkeletonScreenProps) {
  return (
    <div
      id={id}
      className={`relative w-full h-full bg-slate-300 dark:bg-neutral-700 shadow rounded-lg animate-pulse ${className}`}
    >
      {children}
    </div>
  );
}
