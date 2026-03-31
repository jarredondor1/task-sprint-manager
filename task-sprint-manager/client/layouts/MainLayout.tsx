import { ReactNode, useMemo } from 'react'
import { Grid, List, Rocket, LogOut } from 'lucide-react'

interface Props {
  children: ReactNode
  onLogout: () => void
  blockedCount?: number
}

export default function MainLayout({ children, onLogout, blockedCount = 0 }: Props) {

  const user = useMemo(() => {
    const token = localStorage.getItem('token')
    if (!token) return null
    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      return payload
    } catch {
      return null
    }
  }, [])

  const userName = user?.name || user?.email || 'Usuario'

  const initials = userName
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
  return (
    <div className="min-h-screen flex bg-neutral100">

      {/* Sidebar */}
      <aside className="w-[250px] bg-neutral900 text-white flex flex-col p-6">
        <div className="mb-10">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Grid size={28} /> TSM
          </h1>
        </div>

        <nav className="flex flex-col gap-6 text-sm">
          <div className="flex items-center gap-3 hover:opacity-80 cursor-pointer">
            <Grid size={18} /> Dashboard
          </div>
          <div style={{ position: 'relative' }} className="flex items-center gap-3 hover:opacity-80 cursor-pointer">
            <List size={18} /> Backlog
            {blockedCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: -4,
                  right: -10,
                  width: 10,
                  height: 10,
                  background: '#D55E00',
                  borderRadius: '50%'
                }}
              />
            )}
          </div>
          <div className="flex items-center gap-3 hover:opacity-80 cursor-pointer">
            <Rocket size={18} /> Sprints
          </div>
        </nav>

        <div className="mt-auto border-t border-neutral700 pt-6 space-y-4">
          <div className="flex items-center gap-3">
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: '#0072B2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700
              }}
            >
              {initials}
            </div>
            <span className="text-sm">{userName}</span>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-error hover:opacity-80 text-sm"
          >
            <LogOut size={18} /> Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-neutral900">
            Dashboard
          </h2>
        </header>

        <main className="p-8">{children}</main>
      </div>
    </div>
  )
}
