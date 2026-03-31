import { ReactNode } from 'react'

type Variant = 'default' | 'success' | 'warning' | 'danger'

interface Props {
  children: ReactNode
  variant?: Variant
}

const variants: Record<Variant, string> = {
  default: 'bg-gray-100 text-gray-700',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  danger: 'bg-danger/10 text-danger'
}

export default function Badge({ children, variant = 'default' }: Props) {
  return (
    <span
      className={`px-2 py-1 text-xs rounded-full font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
