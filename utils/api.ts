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

export const deleteTask = async (id: string) => {
  const response = await fetch(`api/task/delete/${id}`, {
    method: 'DELETE'
  })
  if (!response.ok) throw new Error('Task could not be deleted')
  return response.json()
}

export const updateTask = async (
  id: string,
  data: { completed: boolean }
) => {
  const response = await fetch(`/api/task/update/${id}`, {
    method: 'PATCH',
    headers: API_HEADERS,
    body: JSON.stringify(data)
  })
  if (!response.ok) throw new Error('Task could not be updated')
  return response.json()
}
