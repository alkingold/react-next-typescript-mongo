import { updateTask } from '@utils/api'
import { useState } from 'react'

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
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error editing task')
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return { markTaskCompleted, loading, error }
}
