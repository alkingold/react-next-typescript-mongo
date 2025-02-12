export interface ITask {
	_id: string;
	task: string;
	comlpeted: boolean;
}

export interface AddTaskProps {
	reloadTasks: () => void
}

export type ApiResponse<T> = T | null
