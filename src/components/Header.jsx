import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  const logoStyled = {
    fontFamily: "Tahoma",
    fontSize: "4xl",
    fontWeight: "100",
    letterSpacing: "3px",
    color: "white",
    ml: "30px",
  };

  const logoAnimation = {
    m: 0,
    display: "inline-block",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
    fontSize: "1.25em",
    transform: "translateY(10%)",
  };

  return (
    <Box bgColor="blackAlpha.900">
      <Text sx={logoStyled}>
        Mate
        <Text className="logoAnimation" sx={logoAnimation}>
          X
        </Text>
        plaNation
      </Text>
    </Box>
  );
};

export default Header;
