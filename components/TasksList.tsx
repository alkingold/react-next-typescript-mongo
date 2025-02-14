import { Flex } from '@chakra-ui/react'

import NoTasks from './NoTasks'
import Task from './Task'

import {
  TasksListProps,
  ITask
} from '@types'

function TasksList({ tasks }: TasksListProps) {
  return (
    <Flex direction="column" p="2rem">
      {tasks.length > 0 ?
        tasks.map((task: ITask) => (
          <Task key={task._id} task={task} />
        )) : (
          <NoTasks />
        )
      }
    </Flex>
  )
}

export default TasksList
