import { LogOut } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

interface Props {
  onLogout: () => void
}

export default function Dashboard({ onLogout }: Props) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-300 hidden md:flex flex-col p-6">
        <h2 className="mb-8">TSM</h2>

        <nav className="flex flex-col gap-4 text-sm">
          <span className="text-primary font-medium">Dashboard</span>
          <span className="text-gray-500 hover:text-gray-900 cursor-pointer">
            Backlog
          </span>
          <span className="text-gray-500 hover:text-gray-900 cursor-pointer">
            Sprints
          </span>
        </nav>

        <div className="mt-auto">
          <Button
            variant="ghost"
            onClick={onLogout}
            className="w-full justify-start"
          >
            <LogOut size={16} />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-300 flex items-center justify-between px-6">
          <h2>Dashboard</h2>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
              U
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 space-y-6 fade-in">
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <p className="text-sm text-gray-500">Total Tasks</p>
              <h2 className="mt-2">24</h2>
            </Card>

            <Card>
              <p className="text-sm text-gray-500">In Progress</p>
              <h2 className="mt-2 text-warning">8</h2>
            </Card>

            <Card>
              <p className="text-sm text-gray-500">Completed</p>
              <h2 className="mt-2 text-success">16</h2>
            </Card>
          </div>

          {/* Active Sprints */}
          <div>
            <h3 className="mb-4">Active Sprints</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3>Sprint 1</h3>
                <p className="text-sm text-gray-500 mt-2">
                  12 tasks · 75% complete
                </p>
                <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4" />
                </div>
              </Card>

              <Card>
                <h3>Sprint 2</h3>
                <p className="text-sm text-gray-500 mt-2">
                  8 tasks · 40% complete
                </p>
                <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-2/5" />
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
