import { Box, Flex, Text } from "@chakra-ui/react";
import "./styles.css";

const EcuationContainer = ({ cant }) => {
  const boxStyle = {
    alignItems: "center",
    w: "85%",
    maxW: "550px",
    minW: "290px",
    m: "20px auto",
    bg: "linear-gradient(135deg, rgba(121,9,113,1) 33%, rgba(255,0,0,1) 66%, #ff5100 100%)",
    borderRadius: "15px",
  };

  const keyStyle = {
    m: "auto",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 0,
    pos: "relative",
    transform: "translateY(-30px)",
    fontWeight: 100,
    color: "white",
  };

  const ecuationStyle = {
    height: "100%",
    alignItems: "center",
    margin: "auto",
    ml: "10px",
    justifyContent: "center",
    flexWrap: "nowrap",
    color: "white",
    flexDir: "column",
    fontFamily: "math",
  };

  const ThEcuations = () => {
    if (cant === "a")
      return (
        <>
          <Box>5x + 2y + z = 0</Box>
          <Box>2x - 3y + 8z = 0</Box>
          <Box>x + y - 3z = 0</Box>
        </>
      );
    if (cant === 3)
      return (
        <>
          <Box>3x + y + 2z = 0</Box>
          <Box>2x + 4y + z = 0</Box>
          <Box>x - 2y - 7z = 0</Box>
        </>
      );
    if (cant === 2)
      return (
        <>
          <Box>x - 3y + 5z = 0</Box>
          <Box>3x - y - 3z = 0</Box>
        </>
      );
  };

  return (
    <Flex className="math-box-size" sx={boxStyle}>
      <Flex alignItems="center" justifyContent="space-around" m="auto" mr="0">
        <Text className="math-llave" sx={keyStyle}>
          &#123;
        </Text>
      </Flex>
      <Flex className="math" sx={ecuationStyle}>
        <ThEcuations />
      </Flex>
    </Flex>
  );
};

export default EcuationContainer;
