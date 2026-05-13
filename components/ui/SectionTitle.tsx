type SectionTitleProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const textColor = light ? 'text-white' : 'text-brand-navy'
  const subtitleColor = light ? 'text-white/65' : 'text-slate-500'

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2.5 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="w-5 h-0.5 rounded-full bg-brand-orange" aria-hidden="true" />
          <span className="text-[11px] font-heading font-bold uppercase tracking-[0.22em] text-brand-orange">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`font-heading font-black uppercase leading-none tracking-tight text-4xl sm:text-5xl lg:text-6xl ${textColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base sm:text-lg leading-relaxed font-body ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
