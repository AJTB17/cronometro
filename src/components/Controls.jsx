import { Flex, Button, Box, Image } from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { useControlsContext } from "../context/CronoProvider";
import icoC from "../recourse/img/cuadrado.png";

const Controls = () => {
  const [start, pause, stop] = useControlsContext();
  return (
    <>
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
            bg: "blue.500",
          }}
        >
          <Box transform="rotate(90deg)" textAlign="center">
            =
          </Box>
        </Button>
      </Flex>
      <Flex w="100px">
        <Button
          onClick={stop}
          h="100%"
          w="100%"
          m="0"
          bg="blackAlpha.700"
          fontSize="xx-large"
          borderRadius={0}
          _hover={{
            bg: "red.500",
          }}
        >
          <Image src={icoC} w="25px" borderRadius={1} />
        </Button>
      </Flex>
    </>
  );
};

export default Controls;
