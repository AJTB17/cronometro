import React from "react";
import { Flex } from "@chakra-ui/react";
import DisplayTop from "./DisplayTop";
import Controls from "./Controls";
import { useCronoContext } from "../context/CronoProvider";
export default function Stopwatch() {
  const [status] = useCronoContext();

  return (
    <Flex
      bg={status ? "" : "pink.700"}
      color={status ? "" : "white"}
      justifyContent="space-between"
    >
      <DisplayTop />
      <Controls />
    </Flex>
  );
}
