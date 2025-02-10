import { Dispatch, SetStateAction } from 'react'

export interface AddTaskProps {
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setUpdateTasksList: Dispatch<SetStateAction<boolean>>
}

export interface ITask {
	_id: string;
	task: string;
	comlpeted: boolean;
}

export type setIsLoading = (isLoading: boolean) => void
