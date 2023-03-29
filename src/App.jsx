import { useState, useRef } from "react";
import "./App.css";
import { Flex } from "@chakra-ui/react";
import DisplayBot from "./components/DisplayBot";
import DisplayTop from "./components/DisplayTop";
import Header from "./components/Header.jsx";
import Controls from "./components/Controls";

function App() {
  const [initial, setInitial] = useState(null);
  const [status, setStatus] = useState(false);
  const ref = useRef(null);

  const start = () => {
    setInitial(+new Date());
    setStatus(true);
  };
  const pause = () => {
    setStatus(false);
  };

  return (
    <>
      <Header />
      <Flex bg={status ? "" : "pink.700"} color={status ? "" : "white"}>
        <DisplayTop batman={ref} initial={initial} status={status} />
        <Controls start={start} pause={pause} />
      </Flex>
      <DisplayBot count={ref} />
    </>
  );
}

export default App;
