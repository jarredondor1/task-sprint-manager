import { useState } from 'react'
import { Plus } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Modal from '../components/ui/Modal'
import TaskCard from '../components/backlog/TaskCard'
import TaskForm from '../components/backlog/TaskForm'
import { useTasks } from '../hooks/useTasks'

export default function Backlog() {
  const { data, isLoading, isError, createTask } = useTasks()
  const [open, setOpen] = useState(false)

  return (
    <div className="p-6 space-y-6 fade-in">
      <div className="flex items-center justify-between">
        <h2>Backlog</h2>
        <Button onClick={() => setOpen(true)}>
          <Plus size={16} /> Nueva tarea
        </Button>
      </div>

      {isLoading && <p className="text-sm text-gray-500">Cargando tareas...</p>}

      {isError && (
        <Card>
          <p className="text-danger text-sm">Error cargando tareas.</p>
        </Card>
      )}

      {!isLoading && data && data.length === 0 && (
        <Card>
          <p className="text-gray-500 text-sm">No hay tareas aún.</p>
        </Card>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <TaskForm
          onSubmit={async (values) => {
            await createTask.mutateAsync(values)
            setOpen(false)
          }}
        />
      </Modal>
    </div>
  )
}
