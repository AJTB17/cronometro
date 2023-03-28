import { Flex, Image, Heading } from "@chakra-ui/react";
import logo from "../recourse/img/logo.png";

export default function Header() {
  return (
    <Flex
      p="5px"
      h="100px"
      justifyContent="start"
      gap="20px"
      bg="#111"
      color="#fff"
      alignItems="center"
    >
      <Image src={logo} w="160px"></Image>
      <Heading>Cronometro</Heading>
    </Flex>
  );
}
