import { useRef } from 'react'

import { Flex, Input, Button } from '@chakra-ui/react'
import { MdOutlineAddTask } from "react-icons/md"

import { useCreateTask } from '../app/hooks/useCreateTask'
import { useTaskContext } from '@context/TaskContext'

const AddTask = () => {
  const addTaskInputRef = useRef<HTMLInputElement | null>(null)
  const { reloadTasks } = useTaskContext()
  const { addTask, loading, error } = useCreateTask(reloadTasks)

  const handleCreateTask = async () => {
    const taskName = addTaskInputRef.current?.value

    if (taskName) {
      addTask(taskName)

      if (
        !error
        && addTaskInputRef.current
      ) {
        addTaskInputRef.current.value = ''
      }
    }
  }

  return (
    <Flex pt="2rem" pl="2rem" pr="2rem" pb="1rem">
      <Input
        placeholder='New task...'
        ref={addTaskInputRef}
        size="lg"
        style={{ 'background': '#FFF' }}
      />
      <Button
        colorScheme='twitter'
        size='lg'
        onClick={() => handleCreateTask()}
      >
        <MdOutlineAddTask />
      </Button>
    </Flex>
  )
}

export default AddTask
