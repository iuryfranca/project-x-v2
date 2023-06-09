interface AuthLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: AuthLayoutProps) {
  return <div className="min-h-screen">{children}</div>
}
