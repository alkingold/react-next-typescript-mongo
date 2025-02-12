import { ITask } from "@types"

export const fetchTasks = async (): Promise<ITask[]> => {
  const response = await fetch('api/task/all')
  if (!response.ok) throw new Error("Error loading tasks")
  return response.json()
}
