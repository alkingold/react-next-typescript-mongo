import { useState } from "react"
import { createTask } from "@utils/api"

export const useCreateTask = (
  reloadTasks: () => void
) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const addTask = async (taskName: string) => {
    setLoading(true)
    setError(null)

    try {
      const newTask = await createTask({
        task: taskName,
        completed: false
      })
      console.log('NEW TASK', newTask);
      reloadTasks()
    } catch (error) {
      console.error(error)
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

	return { addTask, loading, error }
}
