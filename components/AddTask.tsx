import { Flex, Input, Button } from '@chakra-ui/react'
// import { FcApproval } from "react-icons/fc";
import { MdOutlineAddTask } from "react-icons/md";

import { AddTaskProps } from '@types'

const AddTask = ({ task, setTask, handleCreateTask } : AddTaskProps) => {
  return (
    <Flex pt="2rem" pl="2rem" pr="2rem" pb="1rem">
      <Input
        placeholder='New task...'
        size="lg"
        onChange={(e) => setTask(e.target.value)}
        value={task}
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
