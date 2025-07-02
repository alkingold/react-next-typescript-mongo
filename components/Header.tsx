import {
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react"

const Header = () => {
  return (
  <>
    <Flex p="2rem" direction="column" alignItems="center">
      <Heading as="h1" size="4xl" className="tasklist-title">
        Task List
      </Heading>
      <Text mt="1rem" className="tasklist-slogan">
        This awesome application allows you to  create, mark as completed and delete your day to day tasks
      </Text>
    </Flex>
  </>
  )
}

export default Header
