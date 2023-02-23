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
} from "@chakra-ui/react";
import chart from "../recourse/img/geogebra-export2.png";

const MEqualization = () => {
  return (
    <Box p="20px 30px" textAlign="justify">
      <Heading size="sm">Metodo de igualación</Heading>
      <Text>
        Este método consiste en despejar la misma incógnita en las dos
        ecuaciones para igualar las expresiones algebraicas obtenidas. Se
        obtiene, así, una ecuación con una incógnita.
      </Text>
      <Grid
        alignItems="center"
        w="100%"
        gridGap="10px 30px"
        gridAutoFlow="row dense"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        pl="10px"
        mt="10px"
      >
        <Card variant="outline">
          <CardHeader>
            <Heading size="md">Desarrollo demostrativo</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Planteamiento
                </Heading>
                <Text pt="2" fontSize="sm">
                  Resolver el siguiente sistema utilizando el método de
                  igualación
                </Text>
                <Grid
                  w="50%"
                  gridAutoFlow="row dense"
                  gridTemplateColumns="20px 100px"
                  pl="10px"
                >
                  <Text fontSize="2.5em" lineHeight={1}>
                    &#123;
                  </Text>
                  <Box fontFamily="math">
                    <Text>3x - 2y = 0</Text>
                    <Text>2x + y = 7</Text>
                  </Box>
                </Grid>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Paso 1
                </Heading>
                <Text pt="2" fontSize="sm">
                  Despejamos la variable x de la primera ecuación.
                </Text>
                <Box fontFamily="math" ml="10px">
                  <Text>x = 2y/3</Text>
                </Box>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Paso 2
                </Heading>
                <Text pt="2" fontSize="sm">
                  Despejamos la x de la segunda ecuación
                </Text>
                <Box fontFamily="math" ml="10px">
                  <Text>x = (7 - y)/2</Text>
                </Box>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Paso 3
                </Heading>
                <Text pt="2" fontSize="sm">
                  Igualamos las dos expreciones
                </Text>
                <Box fontFamily="math" ml="10px">
                  <Text>2y/3 = (7 - y)/2</Text>
                </Box>
                <Text pt="2" fontSize="sm">
                  Resolvemos la ecuación para obtener el valor de y
                </Text>
                <Box fontFamily="math" ml="10px">
                  <Text>4y = 21 - 3y</Text>
                  <Text>y = 3</Text>
                </Box>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Paso 4
                </Heading>
                <Text pt="2" fontSize="sm">
                  Sustituimos y en cualquier ecuación para obtener x
                </Text>
                <Box fontFamily="math" ml="10px">
                  <Text>2x + (3) = 7</Text>
                </Box>
                <Text pt="2" fontSize="sm">
                  Resolvemos la ecuación para obtener el valor de x
                </Text>
                <Box fontFamily="math" ml="10px">
                  <Text>x = 2</Text>
                </Box>
                <Text pt="2" fontSize="sm">
                  Por lo tanto, La solución del sistema es (2,3).
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Image src={chart} w="100%" m=" 10px auto" minW="250px" />
      </Grid>
    </Box>
  );
};

export default MEqualization;
