import { getTasksAction } from "@app/controllers/allTasksController"

export const GET = (request: Request) => getTasksAction(request)
