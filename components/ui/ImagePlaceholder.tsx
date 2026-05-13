type ImagePlaceholderProps = {
  label?: string
  aspectRatio?: string
  className?: string
}

export function ImagePlaceholder({
  label = 'IMAGE PLACEHOLDER',
  aspectRatio = 'aspect-video',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} ${className} relative overflow-hidden rounded-xl bg-slate-200 flex flex-col items-center justify-center`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200" />
      <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-slate-400"
          aria-hidden="true"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
        <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  )
}
