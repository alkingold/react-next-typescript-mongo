import { addTaskAction } from "@app/controllers/newTaskController"

export const POST = (request: Request) => addTaskAction(request)
