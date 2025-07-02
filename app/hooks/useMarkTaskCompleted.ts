import { useState } from 'react'
import { toaster } from '@components/ui/toaster'
import { updateTask } from '@utils/api'

export const useMarkTaskCompleted = (
  reloadTasks: () => void
) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>()

  const markTaskCompleted = async (id: string, currentValue: boolean) => {
    setLoading(true)
    setError(null)

    try {
      await updateTask(id, { completed: !currentValue })
      reloadTasks()
      toaster.create({
        title: 'Success',
        description: 'Task successfully completed',
        type: 'success',
        duration: 5000,
      })
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Error editing task'
      setError(message)
      console.error(e)
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

  return { markTaskCompleted, loading, error }
}
