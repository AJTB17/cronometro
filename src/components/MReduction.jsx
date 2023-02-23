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
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import chart from "../recourse/img/geogebra-export3.png";

const MRedcution = () => {
  return (
    <Box p="20px 30px" textAlign="justify">
      <Heading size="sm">Metodo de reducción</Heading>
      <Text>
        El método de reducción consiste en sumar (o restar) las ecuaciones del
        sistema para eliminar una de las incógnitas. Este método es aconsejable
        cuando una misma incógnita tiene en ambas ecuaciones el mismo
        coeficiente (restamos las ecuaciones) o los coeficientes son iguales
        pero con signo opuesto (sumamos las ecuaciones).
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
                  reducción
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
                    <Text>x - y = 2</Text>
                    <Text>2x + y = 19</Text>
                  </Box>
                </Grid>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Paso 1
                </Heading>
                <Text pt="2" fontSize="sm">
                  Comprobamos los coeficientes, Hay que asegurarse de que al
                  sumar o restar las ecuaciones, alguna de las incógnitas
                  desaparece:
                </Text>
                <UnorderedList>
                  <ListItem>Escogemos una incógnita a eliminar: la y.</ListItem>
                  <ListItem>
                    Sus coeficientes son -1 (en la primera) y 1 (en la segunda).
                  </ListItem>
                  <ListItem>
                    Como son iguales y de signo contrario, sumaremos las
                    ecuaciones.
                  </ListItem>
                </UnorderedList>
                <Text>
                  Nota: si ninguna de las incógnitas tiene el mismo coeficiente,
                  podemos multiplicar cada ecuación por el número distinto de 0
                  que sea necesario para conseguirlo. Un ejemplo de esto lo
                  podemos encontrar en el Problema 2.
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Paso 2
                </Heading>
                <Text pt="2" fontSize="sm">
                  Sumamos o restamos las ecuaciones. Despejamos la x de la
                  segunda ecuación
                </Text>
                <Box fontFamily="math" ml="10px">
                  <Text>x - y = 2</Text>
                  <Text>2x + y = 19</Text>
                  <Text>---------------</Text>
                  <Text>3x + 0 = 21</Text>
                </Box>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Paso 3
                </Heading>
                <Text pt="2" fontSize="sm">
                  resolvemos la ecuación obtenida
                </Text>
                <Box fontFamily="math" ml="10px">
                  <Text>3x = 21</Text>
                  <Text>x = 21/3</Text>
                  <Text>x = 7</Text>
                </Box>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Paso 4
                </Heading>
                <Text pt="2" fontSize="sm">
                  Calculamos la otra incógnita sustituyendo. Sustituimos la
                  incógnita x por 7 en alguna de las ecuaciones y la resolvemos:
                </Text>
                <Box fontFamily="math" ml="10px">
                  <Text>(7) - y = 2</Text>
                  <Text>-y = -5</Text>
                  <Text>y = 5</Text>
                </Box>
                <Text pt="2" fontSize="sm">
                  Por lo tanto, La solución del sistema es (7,5).
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

export default MRedcution;
