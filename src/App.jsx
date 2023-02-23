import "./App.css";
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  List,
  Divider,
  Grid,
  GridItem,
  Icon,
  Image,
  Highlight,
} from "@chakra-ui/react";
import Header from "./components/Header";
import EcuationContainer from "./components/EcuationContainer/EcuationContainer";

function App() {
  const bannerImg = {
    bg: "url(https://w0.peakpx.com/wallpaper/638/433/HD-wallpaper-math-equation-2016-artistic-awesome-love.jpg) center/cover no-repeat",
    filter: "auto",
    brightness: "40%",
    h: "250px",
  };
  const bannerTitle = {
    fontSize: "3xl",
    m: "20px 0",
    w: "calc(100% - 40px)",
    color: "white",
    pos: "absolute",
    transform: "translateY(-165px) translateX(40px)",
    letterSpacing: "1px",
  };

  const contentBox = {
    m: "20px 40px",
    color: "black",
    gap: "10px 10px",
  };

  const CircleIcon = (props) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
  return (
    <ChakraProvider>
      <Header />
      <Box>
        <Box>
          <Box sx={bannerImg}></Box>
          <Heading sx={bannerTitle}>Sistemas de ecuaciones</Heading>
        </Box>
        <Grid
          p="10px 30px"
          alignItems="center"
          gridGap="10px"
          gridAutoFlow="row dense"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        >
          <Text mr="10px" w="auto">
            ¡Bienvenido a nuestro sitio web sobre sistemas de ecuaciones
            lineales! Las ecuaciones lineales son una parte fundamental de las
            matemáticas y entender cómo resolverlas es una habilidad importante.
            Los sistemas de ecuaciones lineales son un conjunto de dos o más
            ecuaciones lineales que comparten el mismo conjunto de variables.
            Estas ecuaciones se pueden usar para modelar problemas del mundo
            real, como encontrar la solución óptima para un negocio o determinar
            el costo de los materiales para un proyecto de construcción. En este
            sitio web, discutiremos cómo resolver sistemas de ecuaciones
            lineales y brindaremos ejemplos para ayudarlo a comprender mejor los
            conceptos.
          </Text>
          <Image
            mt="10px"
            w="auto"
            src="https://aga.frba.utn.edu.ar/wp-content/uploads/2018/10/GIF021-PLANO.gif"
          />
        </Grid>
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <Box p="10px 30px">
          <Heading mb="10px">Contenido</Heading>
          <List spacing={3} pl="20px">
            <ListItem>
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Sistemas de ecuaciones lineales
            </ListItem>
            <ListItem>
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Ejemplos de sistemas de ecuaciones
            </ListItem>
            <ListItem>
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Metodos de solucion
            </ListItem>
            <ListItem>
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Sistemas de ecuaciones lineales
            </ListItem>
            <ListItem>
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Aplicaciones de los sistemas de ecuaciones
            </ListItem>
          </List>
        </Box>
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <Box
          w="100%"
          display="grid"
          gridGap="10px 0"
          gridAutoFlow="row dense"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        >
          <Box sx={contentBox}>
            <Heading mb="10px">Sistemas de ecuaciones</Heading>
            <Text>
              Se llama sistema de ecuaciones todo conjunto de ecuaciones
              distintas que tiene una o más soluciones comunes. Resolver un
              sistema de ecuaciones simultáneas es hallar el conjunto de valores
              que satisfacen simultáneamente cada una de sus ecuaciones.
              Características de un sistema de dos ecuaciones lineales con dos
              incógnitas.
            </Text>
            <Text>
              Los resultados característicos de resolver un sistema de dos
              ecuaciones lineales con dos variables son:
            </Text>
            <UnorderedList color="red" m="10px 30px">
              <ListItem>
                <Text color="black">Existe únicamente una solución.</Text>{" "}
              </ListItem>
              <ListItem>
                <Text color="black">
                  Existe una cantidad infinita de soluciones.
                </Text>{" "}
              </ListItem>
              <ListItem>
                <Text color="black">No existe solución.</Text>{" "}
              </ListItem>
            </UnorderedList>
            <Text>
              Un sistema es consistente si tiene por lo menos una solución. Un
              sistema con un número infinito de soluciones es dependiente y
              consistente. Un sistema es inconsistente si carece de solución.
            </Text>
          </Box>
          <EcuationContainer cant={"a"} />
        </Box>
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <Box p="10px 30px">
          <Heading size="lg" mb="10px">
            Ejemplos de sistemas de ecuaciones
          </Heading>
          <Grid
            gridGap="0"
            gridAutoFlow="row dense"
            gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          >
            <GridItem>
              <Text>Sistema de dos ecuaciones con dos variables</Text>
              <EcuationContainer cant={2} />
            </GridItem>
            <GridItem>
              <Text>Sistema de tres ecuaciones con dos variables</Text>
              <EcuationContainer cant={3} />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
