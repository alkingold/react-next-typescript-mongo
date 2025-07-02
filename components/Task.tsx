import {
  Card,
  Flex,
  Text,
  Badge,
  HStack,
  IconButton,
} from '@chakra-ui/react'

import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { RiDeleteBin2Line } from "react-icons/ri"

import { useDeleteTask } from '@app/hooks/useDeleteTask'
import { useMarkTaskCompleted } from '@app/hooks/useMarkTaskCompleted'
import { useTaskContext } from '@context/TaskContext'

import { TaskProps } from '@types'

const Task = ({ task: { task, completed, _id }}: TaskProps) => {
  const { reloadTasks } = useTaskContext()
  const {
    removeTask,
    loading: removeLoading,
    error: removeError,
  } = useDeleteTask(reloadTasks)
  const {
    markTaskCompleted,
    loading: editLoading,
    error: editError,
  } = useMarkTaskCompleted(reloadTasks)

  const handleClickCompleted = async () => markTaskCompleted(_id, completed)

  return (
    <Card.Root
      w="full"
      p="0.3rem"
      mb="0.5rem"
      boxShadow="0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);"
      bg={completed ? "gray.50" : "white"}
      transition="all 0.3s"
      variant="outline"
      _hover={{ boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)", transform: "scale(1.02)" }}
    >
      <Card.Body>
        <HStack justify="space-between">
          <Flex>
            <IconButton
              variant="surface"
              size="sm"
              mr="1em"
              colorPalette="green"
              disabled={ completed }
              onClick={handleClickCompleted}
              loading={editLoading}
            >
              <IoMdCheckmarkCircleOutline size={50} />
            </IconButton>
            <IconButton
              size="sm"
              variant="surface"
              colorPalette="red"
              onClick={() => removeTask(_id)}
              loading={removeLoading}
            >
              <RiDeleteBin2Line />
            </IconButton>
          </Flex>
          <Text
            color="gray.600"
            textDecoration={completed ? 'line-through' : 'auto'}
          >
            {task}
          </Text>
          <Badge
            colorPalette={completed ? "green" : "yellow"}
            variant="surface"
          >
            { completed ? 'Completed' : 'To complete' }
          </Badge>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default Task
