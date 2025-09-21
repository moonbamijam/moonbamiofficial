export default function DarkGradient() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1000] opacity-0 invisible dark:opacity-100 dark:visible bg-gradient-to-r from-[#1A1A1A] via-[#0A0A0A] to-[#111111] animate-dark-background-gradient"
      style={{ backgroundSize: "400% 400%" }}
    ></div>
  );
}
