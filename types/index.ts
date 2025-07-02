export interface ITask {
  _id: string;
  task: string;
  completed: boolean;
}

export interface TaskProps {
  task: ITask;
}

export interface TasksListProps {
  tasks: ITask[] | null;
  loading: boolean;
  error: string | null;
}

export type ApiResponse<T> = T | null

export type DeleteTaskRequestParams = {
  params: Promise<{
    id: string
  }>
}

export type EditTaskRequestParams = {
  params: Promise<{
    id: string
  }>
}

export interface TaskContextType {
  reloadTasks: () => void;
}
