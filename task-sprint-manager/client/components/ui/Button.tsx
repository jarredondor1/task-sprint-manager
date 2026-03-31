import { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'danger' | 'ghost'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  loading?: boolean
}

const base =
  'px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:opacity-90',
  secondary: 'bg-secondary text-white hover:opacity-90',
  danger: 'bg-danger text-white hover:opacity-90',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100'
}

export default function Button({
  variant = 'primary',
  loading,
  children,
  ...props
}: Props) {
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {loading ? 'Loading...' : children}
    </button>
  )
}
