import { Grid, Clock, CheckCircle, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="space-y-10">

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* Total Tasks */}
        <div className="flex bg-primary text-white rounded-lg overflow-hidden">
          <div className="w-1 bg-[#005f8e]" />
          <div className="p-6 flex justify-between items-center w-full">
            <div>
              <p className="text-sm opacity-90">Total Tasks</p>
              <p className="text-[48px] font-bold leading-none">24</p>
            </div>
            <Grid size={32} />
          </div>
        </div>

        {/* In Progress */}
        <div className="flex bg-secondary text-black rounded-lg overflow-hidden">
          <div className="w-1 bg-[#c68400]" />
          <div className="p-6 flex justify-between items-center w-full">
            <div>
              <p className="text-sm">In Progress</p>
              <p className="text-[48px] font-bold leading-none">8</p>
            </div>
            <Clock size={32} />
          </div>
        </div>

        {/* Completed */}
        <div className="flex bg-success text-white rounded-lg overflow-hidden">
          <div className="w-1 bg-[#007a5a]" />
          <div className="p-6 flex justify-between items-center w-full">
            <div>
              <p className="text-sm opacity-90">Completed</p>
              <p className="text-[48px] font-bold leading-none">16</p>
            </div>
            <CheckCircle size={32} />
          </div>
        </div>

        {/* Velocity */}
        <div className="flex bg-neutral900 text-white rounded-lg overflow-hidden">
          <div className="w-1 bg-[#0f0f1f]" />
          <div className="p-6 flex justify-between items-center w-full">
            <div>
              <p className="text-sm opacity-90">Velocity</p>
              <p className="text-[48px] font-bold leading-none">+12%</p>
            </div>
            <TrendingUp size={32} />
          </div>
        </div>
      </div>

      {/* ================= ACTIVE SPRINTS ================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-neutral900">
            Active Sprints
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Sprint Card */}
          <div className="bg-white rounded-lg shadow-sm border-t-4 border-primary">
            <div className="p-6 space-y-5">

              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold text-neutral900">
                    Sprint 2
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
                  ✅ Active
                </div>
              </div>

              {/* Progress Info */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-neutral700">
                  <span>9 of 12 tasks completed</span>
                  <span className="font-semibold">75%</span>
                </div>

                <div className="w-full h-3 bg-neutral100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: '75%' }}
                  />
                </div>
              </div>

              {/* Action */}
              <button className="flex items-center gap-2 text-primary font-medium text-sm hover:underline">
                ➜ Ver Sprint
              </button>
            </div>
          </div>

          {/* Completed Sprint */}
          <div className="bg-white rounded-lg shadow-sm border-t-4 border-neutral700">
            <div className="p-6 space-y-5">

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-neutral900">
                  Sprint 1
                </span>

                <div className="flex items-center gap-2 bg-neutral100 text-neutral700 px-3 py-1 rounded-full text-xs font-medium">
                  ✔ Completed
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-neutral700">
                  <span>15 of 15 tasks completed</span>
                  <span className="font-semibold">100%</span>
                </div>

                <div className="w-full h-3 bg-neutral100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-success"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <button className="flex items-center gap-2 text-primary font-medium text-sm hover:underline">
                ➜ Ver Sprint
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= RECENT ACTIVITY ================= */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral900">
          Recent Activity
        </h2>

        <div className="bg-white rounded-lg shadow-sm divide-y">

          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <span className="text-success text-lg">✔</span>
              <span className="text-sm text-neutral900">
                Task "API Integration" marked as completed
              </span>
            </div>
            <span className="text-xs text-neutral700">2h ago</span>
          </div>

          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <span className="text-secondary text-lg">➕</span>
              <span className="text-sm text-neutral900">
                New task "UI Redesign" created
              </span>
            </div>
            <span className="text-xs text-neutral700">5h ago</span>
          </div>

          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <span className="text-primary text-lg">🚀</span>
              <span className="text-sm text-neutral900">
                Sprint 2 started
              </span>
            </div>
            <span className="text-xs text-neutral700">1d ago</span>
          </div>

        </div>
      </section>
    </div>
  )
}
