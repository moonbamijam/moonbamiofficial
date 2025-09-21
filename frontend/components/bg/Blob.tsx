import "@frontend/styles/blob.css";

export default function Blob() {
  return (
    <div className="bg-transparent absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1000] opacity-10 dark:opacity-0 dark:invisible">
      {/* blob one */}
      <div className="blob mix-blend-screen blob-1 animate-blob-one blur-2xl min-w-[300px] w-full max-w-[1000px]"></div>

      {/* blob two */}
      <div className="blob mix-blend-screen blob-2 animate-blob-two blur-2xl min-w-[300px] w-full max-w-[600px]"></div>

      {/* blob three */}
      <div className="blob mix-blend-screen blob-3 animate-blob-three blur-2xl min-w-[300px] w-full max-w-[700px]"></div>

      {/* blob four */}
      <div className="blob mix-blend-screen blob-4 animate-blob-four blur-2xl min-w-[300px] w-full max-w-[600px]"></div>

      {/* blob 5 */}
      <div className="blob mix-blend-screen blob-5 animate-blob-five blur-2xl min-w-[300px] w-full max-w-[500px]"></div>
    </div>
  );
}
