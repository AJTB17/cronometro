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
  Flex,
} from "@chakra-ui/react";

const SStaggered = () => {
  return (
    <Box p="20px 30px" textAlign="justify">
      <Heading size="md">Sistemas escalonados</Heading>
      <Text>
        En un sistema escalonado cada ecuación posee una incógnita menos que la
        anterior.
      </Text>
      <Card variant="outline" m="10px" pl="10px" mt="10px">
        <CardHeader>
          <Heading size="md">Ejemplos</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="2">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Ejemplo de sistema escalonado:
              </Heading>
              <Box>
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
                    <Text>x + 2y - z = 10</Text>
                    <Text>3y + 2z= 2</Text>
                    <Text>4z= 8</Text>
                  </Box>
                </Grid>
                <Grid
                  w="auto"
                  m="auto"
                  ml={0}
                  gridAutoFlow="row dense"
                  gridTemplateColumns="20px 130px"
                  pl="10px"
                >
                  <Text fontSize="3.5em" lineHeight={0.62}>
                    &#123;
                  </Text>
                  <Box fontFamily="math">
                    <Text>x + 2y = 3</Text>
                    <Text>y = 4</Text>
                  </Box>
                </Grid>
              </Box>
            </Box>
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                alignSelf="start"
                mb="10px"
              >
                Ejemplo desarrollado
              </Heading>
              <Flex justifyContent="center" alignItems="center">
                <Grid
                  m="auto"
                  mr={0}
                  w="130px"
                  gridAutoFlow="row dense"
                  gridTemplateColumns="20px 130px"
                  pl="10px"
                >
                  <Text fontSize="3.5em" lineHeight={1}>
                    &#123;
                  </Text>
                  <Box fontFamily="math">
                    <Text>x + y + z = 1</Text>
                    <Text>y + z= 1</Text>
                  </Box>
                </Grid>
                <Text>
                  También es un sistema escalonado pero es un sistema con dos
                  ecuaciones con tres incógnitas. Consideramos z = ʎ donde ʎ es
                  un parámetro que puede tomar cualquier valor rea
                </Text>
              </Flex>
            </Box>
            <Box textAlign="center">
              <Text>x = 1 - y -z = 1 - 1 + ʎ - ʎ = 0</Text>
              <Text>y = 1 - z = 1 - ʎ</Text>
              <Text>z = ʎ</Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};
export default SStaggered;
