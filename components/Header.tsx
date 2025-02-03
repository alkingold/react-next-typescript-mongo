import {
	Flex,
	Heading,
	Text,
	Input,
	Button,
} from "@chakra-ui/react"

const Header = () => {
  return (
	<>
		<Flex p="2rem" direction="column" alignItems="center">
			<Heading as="h1" size="4xl" className="tasklist-title">
				Task List
			</Heading>
			<Text mt="1rem" className="tasklist-slogan">
				Pellentesque varius laoreet lorem accumsan sagittis velit placerat tincidunt neque tempor felis.
			</Text>
		</Flex>
	</>
  )
}

export default Header
