import { Center, Flex, Spinner } from '@chakra-ui/react'

import NoTasks from './NoTasks'
import Task from './Task'

import {
  TasksListProps,
  ITask
} from '@types'
import ErrorLoadingTasks from './ErrorLoadingTasks'

function TasksList({ tasks, loading, error }: TasksListProps) {
  if (error) {
    return (
      <ErrorLoadingTasks />
    )
  }

  if (loading || tasks === null) {
    return (
      <Center>
        <Spinner size="lg" />
      </Center>
    )
  }

  if (!loading && tasks.length === 0) {
    return (
      <Center>
        <NoTasks />
      </Center>
    )
  }

  return (
    <Flex direction="column">
      {tasks.map((task: ITask) => (
        <Task key={task._id} task={task} />
      ))}
    </Flex>
  )
}

export default TasksList
