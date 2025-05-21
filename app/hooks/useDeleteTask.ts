import { useState } from 'react'
import { deleteTask } from '@utils/api'

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
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error deleting task')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { removeTask, loading, error }
}
