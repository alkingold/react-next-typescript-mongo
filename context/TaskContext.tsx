import {
	createContext,
  useContext,
  type ReactNode
} from 'react';

import { TaskContextType } from '@types';

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider = ({
  children,
  reloadTasks
}: {
  children: ReactNode;
  reloadTasks: () => void;
}) => {
  return (
    <TaskContext.Provider value={{ reloadTasks }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext must be used inside of a TaskProvider')
  }
  return context
}
