import { Flex, Input, Button } from '@chakra-ui/react'
import { MdOutlineAddTask } from "react-icons/md";

import { AddTaskProps } from '@types'
import { useRef } from 'react';

const AddTask = ({ setIsLoading, setUpdateTasksList } : AddTaskProps) => {
  const addTaskInputRef = useRef<HTMLInputElement>(null)

  const handleCreateTask = async () => {
    setIsLoading(true)
    const task = addTaskInputRef.current?.value

    if (task) {
      try {
        const response = await fetch("/api/task/new", {
          method: 'POST',
          body: JSON.stringify({
            task
          })
        })
        if (response.ok) {
          setUpdateTasksList(true)
        } else {
          console.log('error')
        }
      } catch (error) {
        console.error(error)
      }
    }

    setIsLoading(false)
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
