export function AnimatedBackground(): React.JSX.Element {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-500/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-0" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-500/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-500/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      <div className="absolute -bottom-8 right-20 w-72 h-72 bg-blue-300 dark:bg-blue-500/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-1000" />

      {/* Center floating orb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300 dark:bg-indigo-500/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-2xl opacity-60 animate-pulse" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full animate-float animation-delay-0" />
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-purple-400 dark:bg-purple-300 rounded-full animate-float animation-delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-pink-400 dark:bg-pink-300 rounded-full animate-float animation-delay-2000" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-indigo-400 dark:bg-indigo-300 rounded-full animate-float animation-delay-3000" />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-yellow-400 dark:bg-yellow-300 rounded-full animate-float animation-delay-4000" />
      </div>
    </div>
  );
}
