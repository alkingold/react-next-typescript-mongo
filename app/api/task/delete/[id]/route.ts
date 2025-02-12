import { DeleteTaskRequestParams } from "@types"
import { deleteTaskAction } from "@app/controllers/deleteTaskController"

export const DELETE = (request: Request, params: DeleteTaskRequestParams) => deleteTaskAction(request, params)
