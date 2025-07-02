import { useState } from 'react'
import { deleteTask } from '@utils/api'
import { toaster } from '@components/ui/toaster'

export const useDeleteTask = (
  reloadTasks: () => void
) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>()

  const removeTask = async (id: string) => {
    setLoading(true)
    setError(null)

    try {
      await deleteTask(id)
      reloadTasks()
      toaster.create({
        title: 'Success',
        description: 'Task successfully deleted',
        type: 'success',
        duration: 5000,
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error deleting task'
      setError(message)
      console.error(error)
      toaster.create({
        title: 'Error',
        description: message,
        type: 'error',
        duration: 5000,
      })
    } finally {
      setLoading(false)
    }
  }

  return { removeTask, loading, error }
}
