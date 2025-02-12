import { ApiResponse, ITask } from "@types"

const API_HEADERS = { "Content-Type": "application/json" }

export const fetchTasks = async (): Promise<ITask[]> => {
  const response = await fetch('api/task/all')
  if (!response.ok) throw new Error("Error loading tasks")
  return response.json()
}

export const createTask = async (task: Omit<ITask, "_id">): Promise<ApiResponse<ITask>> => {
  const response = await fetch("api/task/new", {
    method: 'POST',
    headers: API_HEADERS,
    body: JSON.stringify({
      task
    })
  })
  if (!response.ok) throw new Error("Error creating task")
  return response.json()
}
