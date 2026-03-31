import { Trash2 } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { Task, useTasks } from '../../hooks/useTasks'

interface Props {
  task: Task
}

export default function TaskCard({ task }: Props) {
  const { deleteTask } = useTasks()

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium">{task.title}</h3>
        <Button
          variant="ghost"
          onClick={() => {
            if (confirm('¿Eliminar tarea?')) {
              deleteTask.mutate(task.id)
            }
          }}
        >
          <Trash2 size={14} />
        </Button>
      </div>

      {task.description && (
        <p className="text-xs text-gray-500">{task.description}</p>
      )}

      <div className="flex gap-2">
        <Badge>{task.status}</Badge>
        <Badge variant="warning">{task.priority}</Badge>
      </div>
    </Card>
  )
}
