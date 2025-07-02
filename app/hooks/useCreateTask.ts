import { useState } from "react"
import { createTask } from "@utils/api"
import { toaster } from "@components/ui/toaster"

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
      reloadTasks()
      toaster.create({
        title: 'Success',
        description: 'Task successfully created',
        type: 'success',
        duration: 5000,
      })
    } catch (error) {
      console.error(error)
      const message = error instanceof Error ? error.message : 'An error occurred'
      setError(message)
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

  return { addTask, loading, error }
}
