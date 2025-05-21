import { editTaskAction } from "@app/controllers/editTaskController";
import { EditTaskRequestParams } from "@types";

export const PATCH = async (request: Request, params: EditTaskRequestParams) => editTaskAction(request, params)
