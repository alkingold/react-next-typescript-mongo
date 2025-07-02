import { NextResponse } from 'next/server'

import { connectToDB } from '@utils/database'
import Task from '@models/tasks'

export const getTasksAction = async (request: Request) => {
  try {
    await connectToDB()
    const tasks = await Task.find({})

    return NextResponse.json(
      tasks,
      { status: 200 }
    )
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      'Failed to fetch tasks',
      { status: 500 }
    )
  }
}
