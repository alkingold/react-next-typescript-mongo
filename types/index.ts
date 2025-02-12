import { Dispatch, SetStateAction } from 'react'

export type setIsLoading = Dispatch<SetStateAction<boolean>>
export type setUpdateTasksList = Dispatch<SetStateAction<boolean>>

export interface AddTaskProps {
	setIsLoading: setIsLoading;
	setUpdateTasksList: setUpdateTasksList
}

export interface ITask {
	_id: string;
	task: string;
	comlpeted: boolean;
}
