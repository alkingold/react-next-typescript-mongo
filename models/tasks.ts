import { Schema, model, models } from 'mongoose'

import { ITask } from '@/types'

const taskSchema = new Schema<ITask>({
	task: {
		type: String,
		required: [true, 'Task is required.']
	},
	comlpeted: {
		type: Boolean,
		default: false
	}
})

const Task = models.task || model<ITask>('Task', taskSchema)

export default Task
