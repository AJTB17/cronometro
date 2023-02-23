import {
  Box,
  Heading,
  Text,
  Grid,
  OrderedList,
  ListItem,
  Image,
  Card,
  CardBody,
  CardHeader,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import chart from "../recourse/img/geogebra-export.png";

const MSustitucion = () => {
  return (
    <Grid
      w="100%"
      gridGap="10px 30px"
      gridAutoFlow="row dense"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      pl="10px"
    >
      <Box m="10px 0">
        <Heading size="sm">Metodo de sustitución</Heading>
        <Text>
          Directrices para solucionar un sistema de dos ecuaciones con dos
          variables utilizando el método de sustitución:
        </Text>
        <OrderedList ml="30px">
          <ListItem>
            De una de las ecuaciones despeje una variable u en términos de la
            otra variable v.
          </ListItem>
          <ListItem>
            Sustituya la expresión para u hallada en la directriz 1 en la otra
            ecuación, obteniendo una ecuación con v únicamente.
          </ListItem>
          <ListItem>
            Encuentre las soluciones de la ecuación con v obtenida en la
            directriz 2.
          </ListItem>
          <ListItem>
            Sustituya los valores v hallados en la directriz 3 en la ecuación de
            la directriz 1 y encuentre los correspondientes valores de u.
          </ListItem>
          <ListItem>
            Compruebe que cada par (u, v) hallado en la directriz 4 verifique
            las igualdades del sistema dado.
          </ListItem>
        </OrderedList>
        <Image src={chart} w="100%" m=" 10px auto" minW="250px" />
      </Box>
      <Card variant="outline" maxW="600px">
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
                Para resolver el siguiente sistema utilizando el método de
                sustitución
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
                  <Text>2x + y = 13</Text>
                  <Text>x + y = 9</Text>
                </Box>
              </Grid>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Paso 1
              </Heading>
              <Text pt="2" fontSize="sm">
                Despejamos la variable x de la segunda ecuación.
              </Text>
              <Box fontFamily="math" ml="10px">
                <Text>x = 9 - y</Text>
              </Box>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Paso 2
              </Heading>
              <Text pt="2" fontSize="sm">
                La sustituimos en la primera, lo que nos deja la ecuación
              </Text>
              <Box fontFamily="math" ml="10px">
                <Text>2(9 - y) + y = 13</Text>
              </Box>
              <Text pt="2" fontSize="sm">
                equivalente a
              </Text>
              <Box fontFamily="math" ml="10px">
                <Text>18 - y = 13</Text>
                <Text>y = 5</Text>
              </Box>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Paso 3
              </Heading>
              <Text pt="2" fontSize="sm">
                Sustituimos el valor de y en cualquiera de las dos ecuaciones
                para obtener el valor de x
              </Text>
              <Box fontFamily="math" ml="10px">
                <Text>x + (5) = 9</Text>
              </Box>
              <Text pt="2" fontSize="sm">
                equivalente a
              </Text>
              <Box fontFamily="math" ml="10px">
                <Text>x = 4</Text>
              </Box>
              <Text pt="2" fontSize="sm">
                Estos los valores de "x" y "y" representan el punto donde se
                cruzan las ecuaciones del sistema. La grafica anterior nos los
                muestra en el punto (4,5).
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Grid>
  );
};

export default MSustitucion;
