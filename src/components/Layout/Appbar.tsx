import { cn } from '@/lib/utils'
import { Link } from '@/components/ui/Link'

interface AppBarProps {
  className?: string
}

const AppBar = ({ className }: AppBarProps) => {
  const links = [
    { href: '/', label: 'All Posts' },
    { href: '/topics', label: 'Topics' },
    { href: '/create-topic', label: 'Create Topic' },
  ]

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background',
        className
      )}
    >
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <div className="mr-4 flex items-center">
          <Logo />
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 data-[active]:text-foreground/80"
              data-active={link.href === '/' ? true : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="h-6 w-6 bg-primary rounded-md"></div>
      <span className="font-semibold text-xl">Postt</span>
    </div>
  )
}

export default AppBar
