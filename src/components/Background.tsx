export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#4F46E5_0%,_transparent_25%)] opacity-20 animate-pulse-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_#7C3AED_0%,_transparent_25%)] opacity-20 animate-pulse-slower" />
      <div className="absolute inset-0">
        <div className="absolute h-[200px] w-[200px] rounded-full bg-indigo-500/30 blur-[100px] animate-blob" />
        <div className="absolute h-[200px] w-[200px] rounded-full bg-purple-500/30 blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute h-[200px] w-[200px] rounded-full bg-blue-500/30 blur-[100px] animate-blob animation-delay-4000" />
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
    </div>
  );
}