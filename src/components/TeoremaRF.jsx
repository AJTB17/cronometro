import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Card,
  CardBody,
  CardHeader,
  Stack,
  StackDivider,
  Grid,
  Flex,
} from "@chakra-ui/react";
import CircleIcon from "../hooks/CircleIcon";

const TeoremaRF = () => {
  return (
    <Box p="20px 30px" textAlign="justify">
      <Heading id="TRF" textAlign="left">
        Teorema de Rouché-Frobenius
      </Heading>
      <Text>
        Sea A⋅x=b la representación matricial de un sistema de m ecuaciones
        lineales con n incógnitas. Entonces,
      </Text>
      <List ml="30px">
        <ListItem>
          <CircleIcon boxSize={2} mr={2} color="red.500" />
          El sistema es incompatible si el rango de la matriz de coeficientes A
          es distinto del rango de la matriz ampliada ( A | b ).
        </ListItem>
        <ListItem>
          <CircleIcon boxSize={2} mr={2} color="red.500" />
          El sistema es compatible si los rangos coinciden. En este caso, si el
          rango es igual al número de incógnitas (es decir, n ), el sistema es
          determinado. Si es menor que n , es indeterminado.
        </ListItem>
      </List>
      <Card variant="outline" m="10px 30px" pl="10px" mt="10px">
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
                Tenemos que calcular el rango de las matrices. Para variar, lo
                calcularemos de forma distinta en las ejemplos. Más información
                sobre el rango: Determinante, rango y menores de una matriz.
              </Text>
              <Grid
                w="50%"
                gridAutoFlow="row dense"
                gridTemplateColumns="20px 150px"
                pl="10px"
              >
                <Text fontSize="3.5em" lineHeight={1}>
                  &#123;
                </Text>
                <Box fontFamily="math">
                  <Text>2x + y + 2z = 1</Text>
                  <Text>x + 2y + 3z = 3</Text>
                  <Text>3x + 2y + z= 0</Text>
                </Box>
              </Grid>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Matriz ampliada
              </Heading>
              <Box fontFamily="math" ml="10px">
                <Flex alignItems="center">
                  <Text>A* = (A|b) =</Text>
                  <Text fontSize="4em" lineHeight={1}>
                    (
                  </Text>
                  <Box fontFamily="math">
                    <Text> 2 1 2 | 1 </Text>
                    <Text> 1 2 3 | 3 </Text>
                    <Text> 3 2 1 | 0 </Text>
                  </Box>
                  <Text fontSize="4em" lineHeight={1}>
                    )
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                El rango de esta matriz es 3
              </Heading>
              <Text pt="2" fontSize="sm">
                porque el determinante de la matriz A es distinto de 0
              </Text>
              <Flex alignItems="center">
                <Text fontSize="4em" lineHeight={1}>
                  |
                </Text>
                <Box fontFamily="math" pt="15px">
                  <Text> 2 1 2 | 1 </Text>
                  <Text> 1 2 3 | 3 </Text>
                  <Text> 3 2 1 | 0 </Text>
                </Box>
                <Text fontSize="4em" lineHeight={1}>
                  |
                </Text>
                <Text>= 4 + 9 + 4 - 12 -1 -12 = -8 ≠ 0</Text>
              </Flex>
              <Text pt="2" fontSize="sm">
                Como el rango de A es máximo, el rango de la matriz ampliada A ∗
                es también 3. Por el teorema de Rouché-Frobenius, el sistema es
                compatible determinado.
              </Text>
              <Grid
                w="50%"
                gridAutoFlow="row dense"
                gridTemplateColumns="20px 150px"
                pl="10px"
              >
                <Text fontSize="3.5em" lineHeight={1}>
                  &#123;
                </Text>
                <Box fontFamily="math">
                  <Text>x = -5/8</Text>
                  <Text>y = 1/2</Text>
                  <Text>z = 7/8</Text>
                </Box>
              </Grid>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default TeoremaRF;
