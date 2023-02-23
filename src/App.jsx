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
  Image,
  OrderedList,
  Flex,
} from "@chakra-ui/react";
import Header from "./components/Header";
import EcuationContainer from "./components/EcuationContainer/EcuationContainer";
import MSustitucion from "./components/MSustitucion";
import MEqualization from "./components/MEqualization";
import MRedcution from "./components/MReduction";
import CircleIcon from "./hooks/CircleIcon";
import SEquivalent from "./components/ToSE/SEquivalent";
import SStaggered from "./components/ToSE/SStaggered";
import SCantSoluciones from "./components/ToSE/SCantSoluciones";
import TeoremaRF from "./components/TeoremaRF";

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
    textAlign: "justify",
  };
  const handleClickScroll = (elt) => {
    const name = elt.target.className.split(" ");
    const element = document.getElementById(name[0]);
    if (elt.target.className) element.scrollIntoView({ behavior: "smooth" });
  };
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
          <Box textAlign="justify">
            <Text mr="10px" w="auto">
              ¡Bienvenido a nuestro sitio web sobre sistemas de ecuaciones
              lineales! Las ecuaciones lineales son una parte fundamental de las
              matemáticas y entender cómo resolverlas es una habilidad
              importante. Los sistemas de ecuaciones lineales son un conjunto de
              dos o más ecuaciones lineales que comparten el mismo conjunto de
              variables.
            </Text>
            <Text>
              Estas ecuaciones se pueden usar para modelar problemas del mundo
              real, como encontrar la solución óptima para un negocio o
              determinar el costo de los materiales para un proyecto de
              construcción. En este sitio web, discutiremos cómo resolver
              sistemas de ecuaciones lineales y brindaremos ejemplos para
              ayudarlo a comprender mejor los conceptos.
            </Text>
          </Box>
          <Image
            mt="10px"
            w="auto"
            src="https://aga.frba.utn.edu.ar/wp-content/uploads/2018/10/GIF021-PLANO.gif"
          />
        </Grid>
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <Box p="10px 30px">
          <Heading mb="10px" textAlign="left">
            Contenido
          </Heading>
          <List spacing={3} pl="20px">
            <ListItem onClick={handleClickScroll} className="SE">
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Sistemas de ecuaciones
            </ListItem>
            <ListItem onClick={handleClickScroll} className="TSE">
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Tipos Sistemas de ecuaciones
            </ListItem>
            <ListItem onClick={handleClickScroll} className="TRF">
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Teorema de Rouché-Frobenius
            </ListItem>
            <ListItem onClick={handleClickScroll} className="MS">
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Metodos de solucion
            </ListItem>
            <ListItem onClick={handleClickScroll} className="ASE">
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Aplicaciones de los sistemas de ecuaciones
            </ListItem>
          </List>
        </Box>
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <Grid
          w="100%"
          gridGap="10px 0"
          gridAutoFlow="row dense"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        >
          <Box sx={contentBox}>
            <Heading mb="10px" id="SE" textAlign="left">
              Sistemas de ecuaciones
            </Heading>
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
                </Text>
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
          <EcuationContainer cant={"a"} boxWidth="85%" />
        </Grid>
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <Box p="10px 30px" textAlign="justify">
          <Heading id="TSE" textAlign="left">
            Tipos de sistemas de ecuaciones
          </Heading>
          <Text>
            Dependiendo del número de soluciones que tengan los sistemas de
            ecuaciones lineales tendremos:
          </Text>
          <List ml="30px">
            <ListItem>
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Sistema Incompatible: no tiene solución.
            </ListItem>
            <ListItem>
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Sistema Compatible Determinado (SCD): posee una única solución.
            </ListItem>
            <ListItem>
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Sistema Compatible Indeterminado (SCI): posee infinitas
              soluciones.
            </ListItem>
          </List>
          <SCantSoluciones />
          <SEquivalent />
          <SStaggered />
        </Box>
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <TeoremaRF />
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <Box p="10px 30px" textAlign="justify">
          <Heading id="MS" textAlign="left">
            Metodos de Solución
          </Heading>
          <Text>
            De los posibles métodos de solución para una sistema de dos
            ecuaciones con dos incognitas, tres de los mas conocidos son el
            método de sustitución, método de igualación y método de reducción. A
            continuación se darán algunas directrices para aplicar el primer
            método.
          </Text>
          <MSustitucion />
          <MEqualization />
          <MRedcution />
        </Box>
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <Box p="10px 30px" textAlign="justify">
          <Heading mb="20px" id="ASE" textAlign="left">
            Aplicaciones de los sistemas de ecuaciones
          </Heading>
          <Grid
            w="100%"
            gridGap="10px 20px"
            gridAutoFlow="row dense"
            gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          >
            <Box>
              <Heading size="md" textAlign="left">
                Aplicaciones en la antiguedad
              </Heading>
              <Text mb="10px">
                Los sistemas de ecuaciones lineales se han utilizado durante
                siglos para resolver diversos problemas de la vida cotidiana, la
                ingeniería, la física, las matemáticas, la economía y otras
                ciencias. Los babilonios fueron los primeros en utilizar
                procedimientos de eliminación de incógnitas para resolver estos
                sistemas. Un ejemplo de esto se encontró en una tablilla
                babilónica que proponía la resolución de un sistema de
                ecuaciones.
              </Text>
              <Text m="10px 0">
                Los griegos pudieron resolver sistemas de ecuaciones utilizando
                métodos geométricos. Thymaridas encontró una fórmula para
                resolver un determinado sistema de n ecuaciones con n
                incógnitas, mientras que Diophante transformó los problemas en
                ecuaciones lineales y solo aceptó soluciones positivas. Sin
                embargo, este método carecía de un método general y había que
                utilizar métodos excesivamente ingeniosos para cada problema. Un
                ejemplo de como hiceron uso de esto el siguente
              </Text>
              <Text textAlign="center">anchura/4 + longitud = 7manos</Text>
              <Text textAlign="center">longitud + anchura = 10manos</Text>
              <Text m="10px 0 ">
                Para resolver el sistema comenzaban asignando valores a la
                variable manos , por ejemplo se puede asignar el valor de 5 y se
                observan los valores posibles para anchura y longitud :
                anchura=20,longitud=30 . Para poder comprobar el resultado
                utilizaban un método parecido al que conocemos como 'método de
                eliminación'.
              </Text>
            </Box>
            <Box>
              <Heading size="md" textAlign="left">
                Aplicaciones en la actualidad
              </Heading>
              <Text m="10px 0">
                Los sistemas de ecuaciones se utilizan en una amplia variedad de
                aplicaciones, incluidas la ingeniería, la economía, las
                finanzas, la física, la química, la biología y la informática.
                En ingeniería, los sistemas de ecuaciones se utilizan para
                resolver problemas como el análisis de circuitos y el diseño
                mecánico. En economía y finanzas, los sistemas de ecuaciones se
                utilizan para modelar mercados e instrumentos financieros. En
                física y química, los sistemas de ecuaciones se utilizan para
                describir el comportamiento de partículas y moléculas. En
                biología, los sistemas de ecuaciones se utilizan para modelar el
                comportamiento de las células y los organismos. Finalmente, en
                informática, los sistemas de ecuaciones se utilizan para
                resolver problemas como la optimización y el aprendizaje
                automático. Tambien se pueden ver más usos en ciertas diciplinas
                como:
              </Text>
              <OrderedList m="10px 0px" mr="0">
                <ListItem>
                  Economía: Los sistemas de ecuaciones se utilizan para modelar
                  la oferta y la demanda de bienes y servicios en la economía.
                </ListItem>
                <ListItem>
                  Ingeniería: Los sistemas de ecuaciones se utilizan para
                  resolver problemas relacionados con el diseño estructural, la
                  ingeniería eléctrica y otras disciplinas de la ingeniería.
                </ListItem>
                <ListItem>
                  Física: Los sistemas de ecuaciones se utilizan para modelar el
                  comportamiento de sistemas físicos como partículas, fluidos y
                  campos.
                </ListItem>
                <ListItem>
                  Química: Los sistemas de ecuaciones se utilizan para modelar
                  reacciones químicas y predecir sus resultados.
                </ListItem>
                <ListItem>
                  Biología: Los sistemas de ecuaciones se utilizan para modelar
                  procesos biológicos como la expresión génica y las rutas
                  metabólicas.
                </ListItem>
              </OrderedList>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Flex
        bg="blackAlpha.900"
        w="100%"
        h="75px"
        textAlign="center"
        alignItems="center"
      >
        <Text fontWeigth="100" size="xs" color="white" m="auto">
          Creado por Alfredo Tiapa y Javier Alvarado
        </Text>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
