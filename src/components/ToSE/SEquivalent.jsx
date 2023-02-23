import {
  Box,
  Text,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Grid,
  Image,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import CircleIcon from "../../hooks/CircleIcon";

const SEquivalent = () => {
  return (
    <Box p="20px 30px" textAlign="justify">
      <Heading size="md">Sistemas equivalentes</Heading>
      <Text>
        Son aquellos sistemas que poseen las mismas soluciones aunque posean
        distinto número de ecuaciones. Podremos obtener sistemas equivalentes si
        realizamos cualquiera de las siguientes transformaciones:
      </Text>
      <List ml="30px">
        <ListItem>
          <CircleIcon boxSize={2} mr={2} color="red.500" />
          Multiplicar o dividir los miembros de una ecuación por un número que
          sea distinto de cero.
        </ListItem>
        <ListItem>
          <CircleIcon boxSize={2} mr={2} color="red.500" />
          Cambiar una ecuación por otra.
        </ListItem>
        <ListItem>
          <CircleIcon boxSize={2} mr={2} color="red.500" />
          Sumar a una ecuación otra multiplicada por un número
        </ListItem>
        <ListItem>
          <CircleIcon boxSize={2} mr={2} color="red.500" />
          Eliminar una ecuación que sea igual a otra o que sea combinación
          lineal de otras.
        </ListItem>
      </List>
      <Card variant="outline" m="10px 30px" pl="10px" mt="10px">
        <CardHeader>
          <Heading size="md">Ejemplos</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Los siguientes sistemas de ecuaciones son equivalentes:
              </Heading>
              <Flex justifyContent="center">
                <Grid
                  m="auto"
                  mr={0}
                  w="200px"
                  gridAutoFlow="row dense"
                  gridTemplateColumns="20px 130px"
                  pl="10px"
                >
                  <Text fontSize="3.5em" lineHeight={1}>
                    &#123;
                  </Text>
                  <Box fontFamily="math">
                    <Text>2x - y + 3z = 1</Text>
                    <Text>x + y + z= 0</Text>
                    <Text>3x + 2y + z= 2</Text>
                  </Box>
                </Grid>
                <Box m="auto 0" w="100px">
                  <Text>f1&#60;--&#62;f2</Text>
                </Box>
                <Grid
                  w="auto"
                  m="auto"
                  ml={0}
                  gridAutoFlow="row dense"
                  gridTemplateColumns="20px 130px"
                  pl="10px"
                >
                  <Text fontSize="3.5em" lineHeight={1}>
                    &#123;
                  </Text>
                  <Box fontFamily="math">
                    <Text>x + y + z = 0</Text>
                    <Text>2x - y + 3z = 1</Text>
                    <Text>3x + 2y + z = 2</Text>
                  </Box>
                </Grid>
              </Flex>
            </Box>
            <Flex justifyContent="center">
              <Grid
                m="auto"
                mr={0}
                w="200px"
                gridAutoFlow="row dense"
                gridTemplateColumns="20px 130px"
                pl="10px"
              >
                <Text fontSize="3.5em" lineHeight={1}>
                  &#123;
                </Text>
                <Box fontFamily="math">
                  <Text>x + y + z = 0</Text>
                  <Text>2x - y + 3z= 1</Text>
                  <Text>3x + 2y + z= 2</Text>
                </Box>
              </Grid>
              <Box m="auto 0" w="100px">
                <Text>f2&#60;--&#62;f2-2f1</Text>
                <Text>f3&#60;--&#62;f3-3f3</Text>
              </Box>
              <Grid
                w="auto"
                m="auto"
                ml={0}
                gridAutoFlow="row dense"
                gridTemplateColumns="20px 130px"
                pl="10px"
              >
                <Text fontSize="3.5em" lineHeight={1}>
                  &#123;
                </Text>
                <Box fontFamily="math">
                  <Text>x + y + z = 0</Text>
                  <Text>-3y + z = 1</Text>
                  <Text>-y - 2z = 2</Text>
                </Box>
              </Grid>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default SEquivalent;
