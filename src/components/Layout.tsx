import AppBar from './Appbar'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="flex-1 bg-background">{children}</main>
    </div>
  )
}
