import React from 'react'
import { cn } from '@/lib/utils'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, children, ...props }, ref) => {
    // In a real app with routing, you'd use a router's Link component
    return (
      <a
        href={href}
        ref={ref}
        className={cn(
          'text-foreground/70 hover:text-foreground transition-colors',
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
)

Link.displayName = 'Link'
