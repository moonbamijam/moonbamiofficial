import { GoDotFill } from "react-icons/go";

export default function LifeStatus({ status }: { status: string }) {
  return (
    <div className="px-3 py-1 text-sm border border-slate-300 dark:border-slate-700 rounded-full flex items-center hover:-translate-y-1 cursor-pointer transition-transform">
      <GoDotFill className="text-github text-xl" /> {status}
    </div>
  );
}
