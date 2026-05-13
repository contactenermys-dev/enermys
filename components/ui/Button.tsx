import Link from 'next/link'
import { type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'pill-outline'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  external?: boolean
  fullWidth?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-orange text-white hover:bg-brand-orange-bright shadow-orange hover:shadow-lg hover:-translate-y-0.5',
  secondary:
    'bg-brand-navy text-white hover:bg-brand-navy-dark shadow-navy hover:shadow-lg hover:-translate-y-0.5',
  outline:
    'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
  ghost:
    'text-brand-navy hover:bg-brand-navy/10',
  'pill-outline':
    'border border-current rounded-full text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  external = false,
  fullWidth = false,
}: ButtonProps) {
  const isRounded = variant === 'pill-outline' || variant === 'primary'
  const base =
    `inline-flex items-center justify-center gap-2 font-heading font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 ${isRounded ? 'rounded-full' : 'rounded-lg'}`
  const classes = [
    base,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
