import { Flex, Button, Box } from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";

const Controls = ({ start, pause }) => {
  return (
    <Flex flexDir="column" w="100px">
      <Button
        onClick={start}
        h="50%"
        bg="blackAlpha.700"
        borderRadius={0}
        _hover={{
          bg: "green.500",
        }}
      >
        <TriangleUpIcon
          color="white"
          transform="rotate(90deg)"
          fontSize="xx-large"
        />
      </Button>
      <Button
        onClick={pause}
        h="50%"
        color="white"
        bg="blackAlpha.700"
        fontWeight="black"
        fontSize="xxx-large"
        borderRadius={0}
        _hover={{
          bg: "red.500",
        }}
      >
        <Box transform="rotate(90deg)" textAlign="center">
          =
        </Box>
      </Button>
    </Flex>
  );
};

export default Controls;
