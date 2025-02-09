import { NextResponse } from '@node_modules/next/server'

import Task from '@models/tasks'
import { connectToDB } from '@utils/database'

export const addTaskAction = async (request: Request) => {
  const { task } = await request.json()

	try {
    await connectToDB()
    const newTask = new Task({ task })

    console.log(await newTask.save())

    return NextResponse.json(
      newTask,
      { status: 201 }
    )
	} catch (error) {
    console.error(error)
    return NextResponse.json(
      "Failed to create a new task",
      { status: 500 }
    )
  }
}
