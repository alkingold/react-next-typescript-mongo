import { Flex, Box, Text } from '@chakra-ui/react'
import { MdErrorOutline } from 'react-icons/md'

const ErrorLoadingTasks: React.FC = () => {
  return (
    <Flex
      justify="center"
      align="center"
    >
      <Box
        bg="red.50"
        borderRadius="md"
        border="1px solid"
        borderColor="red.200"
        boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="2"
        p="4"
        w="100%"
      >
        <MdErrorOutline color="#e53e3e" size="20px" />
        <Text color="red.500">
          Unable to load tasks. Please try again later.
        </Text>
      </Box>
    </Flex>
  )
}

export default ErrorLoadingTasks;
