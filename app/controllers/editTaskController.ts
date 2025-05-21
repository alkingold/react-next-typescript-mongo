import Task from "@models/tasks";
import { NextResponse } from "@node_modules/next/server";
import { EditTaskRequestParams } from "@types";
import { connectToDB } from "@utils/database";

export const editTaskAction = async (
  request: Request,
  { params }: EditTaskRequestParams
) => {
  const { id } = await params

  if (!id) return new Response("Could not edit task: id param missing", { status: 400 })

  try {
    const { completed } = await request.json()
    await connectToDB()
    await Task.findByIdAndUpdate(
      id,
      { completed }
    )
    return NextResponse.json("Task successfully updated", { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      "Error when updating task",
      { status: 500 }
    )
  }
}
