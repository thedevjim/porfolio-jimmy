interface HeroChipProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

/**
 * Hero chip component that displays children content in a styled chip
 */
export default function HeroChip({
  children,
  className = "",
}: HeroChipProps): React.JSX.Element {
  return (
    <div
      className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-900 dark:text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`}
    >
      <span className="text-sm font-medium">{children}</span>
    </div>
  );
}
