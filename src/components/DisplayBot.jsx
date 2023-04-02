import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import TrTime from "./TrTime";
import { useTableContext } from "../context/CronoProvider";

export default function DisplayBot() {
  const [lap, clear, times] = useTableContext();

  return (
    <TableContainer overflowY="auto" h="450px">
      <Table
        variant="striped"
        size="lg"
        w="100%"
        h="200px"
        fontWeight="black"
        colorScheme="green"
      >
        <Thead>
          <Tr>
            <Th>
              <Button
                w="100%"
                bg="orange.500"
                color="white"
                _hover={{
                  bg: "gray.200",
                  color: "orange.500",
                }}
                onClick={lap}
              >
                LAP
              </Button>
            </Th>
            <Th w="33%" textAlign="center" fontSize="3xl">
              Tiempos
            </Th>
            <Th>
              <Button
                w="100%"
                bg="blue.500"
                color="white"
                _hover={{
                  bg: "gray.200",
                  color: "blue.500",
                }}
                onClick={clear}
              >
                CLEAR
              </Button>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <TrTime times={times} />
        </Tbody>
      </Table>
    </TableContainer>
  );
}
