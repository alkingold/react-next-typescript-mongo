import { NextResponse } from 'next/server'

import { connectToDB } from '@utils/database'
import Task from '@models/tasks'
import { DeleteTaskRequestParams } from "@types"

export const deleteTaskAction = async (
	request: Request,
	{ params }: DeleteTaskRequestParams
) => {
  const { id } = await params

  if (!id) return new Response("Could not delete task: id param missing", { status: 400 })

	try {
		await connectToDB()
    await Task.findByIdAndDelete(id)
    return NextResponse.json("Task successfully deleted", { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			"Error when deleting task",
			{ status: 500 }
		)
	}
}
