import { Flex, Box, Text } from '@chakra-ui/react'
import { GoAlert } from 'react-icons/go'

const NoTasks: React.FC = () => {
  return (
    <Flex justify="center" align="center">
      <Box
        bg="yellow.100"
        borderRadius="md"
        border="1px solid"
        borderColor="yellow.200"
        boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="2"
        p="4"
        w="100%"
      >
        <GoAlert color="#71717a" size="20px" />
        <Text color="gray.500">
          There is no tasks here yet, but you can start by adding some
        </Text>
      </Box>
    </Flex>
  )
}

export default NoTasks
