import {
  Box,
  Text,
  Heading,
  Card,
  CardBody,
  Stack,
  StackDivider,
  Grid,
  Image,
} from "@chakra-ui/react";
import chart1 from "../../recourse/img/geogebra-export4.png";
import chart2 from "../../recourse/img/geogebra-export5.png";
import chart3 from "../../recourse/img/geogebra-export6.png";

const SCantSoluciones = () => {
  return (
    <Box p="20px 30px" textAlign="justify">
      <Heading size="md">Sistemas segun cantidad de soluciones</Heading>
      <Text>
        En un sistema escalonado cada ecuación posee una incógnita menos que la
        anterior.
      </Text>
      <Grid
        alignItems="center"
        w="100%"
        gridAutoFlow="row dense"
        gridTemplateColumns="repeat(auto-fit, minmax(230px, 1fr))"
        mt="10px"
      >
        <Card w="100%" variant="outline" mt="10px">
          <CardBody>
            <Stack divider={<StackDivider />} spacing="2">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Sistema compatible determinado
                </Heading>
                <Text>Es un sistema que tiene una sola solución.</Text>
                <Grid
                  m="auto"
                  w="200px"
                  gridAutoFlow="row dense"
                  gridTemplateColumns="20px 130px"
                  pl="10px"
                >
                  <Text fontSize="2.5em" lineHeight={1}>
                    &#123;
                  </Text>
                  <Box fontFamily="math">
                    <Text>3x - 4y = -6</Text>
                    <Text>2x + 4y= 16</Text>
                  </Box>
                </Grid>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase" alignSelf="start">
                  Sistema compatible indeterminado
                </Heading>
                <Text>Es un sistema que tiene infinitas soluciones.</Text>
                <Grid
                  m="auto"
                  w="200px"
                  gridAutoFlow="row dense"
                  gridTemplateColumns="20px 130px"
                  pl="10px"
                >
                  <Text fontSize="3.5em" lineHeight={1}>
                    &#123;
                  </Text>
                  <Box fontFamily="math">
                    <Text>x + y = 1</Text>
                    <Text>2x + 2y= 2</Text>
                  </Box>
                </Grid>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase" alignSelf="start">
                  Sistema incompatible
                </Heading>
                <Text>Es un sistema que no tiene solución.</Text>
                <Grid
                  m="auto"
                  w="200px"
                  gridAutoFlow="row dense"
                  gridTemplateColumns="20px 130px"
                  pl="10px"
                >
                  <Text fontSize="3.5em" lineHeight={1}>
                    &#123;
                  </Text>
                  <Box fontFamily="math">
                    <Text>x + y = 3</Text>
                    <Text>2x + 2y= 2</Text>
                  </Box>
                </Grid>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Box>
          <Image m="10px auto" w="100%" maxW="350px" src={chart1} />
          <Image m="10px auto" w="100%" maxW="350px" src={chart2} />
          <Image m="10px auto" w="100%" maxW="350px" src={chart3} />
        </Box>
      </Grid>
    </Box>
  );
};

export default SCantSoluciones;
