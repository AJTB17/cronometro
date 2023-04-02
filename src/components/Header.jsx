import { Flex, Image, Heading, Button } from "@chakra-ui/react";
import logo from "../recourse/img/logo.png";
import { saveAs } from "file-saver";

export default function Header() {
  const createFile = () => {
    const data = window.localStorage.getItem("lapData");
    const parseData = JSON.parse(data);
    let orderData = "";

    parseData.forEach((element, key) => {
      orderData += key + 1 + ". " + element + "\r\n";
    });
    const blob = new Blob([orderData], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "dataTabla.txt");
  };
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
      <Button onClick={createFile} mr={0} variant="flushed">
        Save table
      </Button>
    </Flex>
  );
}
