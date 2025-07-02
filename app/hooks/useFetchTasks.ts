import { useState, useEffect } from 'react'

import type { ITask } from "@types"

import { fetchTasks } from '@utils/api'

export const useFetchTasks = () => {
  const [tasks, setTasks] = useState<ITask[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const reloadTasks = async () => {
    setLoading(true)
    setError(null)

    try {
      const data: ITask[] = await fetchTasks()
      setTasks(data)
    } catch (error) {
      console.error(error)
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    reloadTasks()
  }, [])

  return { tasks, loading, error, reloadTasks }
}
