import { useForm } from 'react-hook-form'
import Button from '../ui/Button'
import Input from '../ui/Input'

interface Props {
  onSubmit: (data: any) => void
}

export default function TaskForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm()

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <h3>Nueva tarea</h3>

      <Input
        label="Título"
        {...register('title', { required: 'El título es obligatorio' })}
        error={errors.title?.message as string}
      />

      <Input
        label="Descripción"
        {...register('description')}
      />

      <Input
        label="Prioridad"
        {...register('priority')}
        placeholder="Low | Medium | High"
      />

      <Input
        label="Estado"
        {...register('status')}
        placeholder="To Do | In Progress | Done"
      />

      <div className="flex justify-end gap-2">
        <Button type="submit" loading={isSubmitting}>
          Crear
        </Button>
      </div>
    </form>
  )
}
