import { useState, useRef } from "react";
import "./App.css";
import { Flex } from "@chakra-ui/react";
import DisplayBot from "./components/DisplayBot";
import DisplayTop from "./components/DisplayTop";
import Header from "./components/Header.jsx";
import Controls from "./components/Controls";

function App() {
  const [initial, setInitial] = useState(null);
  const [run, setRun] = useState(false);
  const ref = useRef(null);

  const start = () => {
    setInitial(+new Date());
    setRun(true);
  };
  const pause = () => {
    setRun(false);
  };

  return (
    <>
      <Header />
      <Flex bg={run ? "" : "pink.700"} color={run ? "" : "white"}>
        <DisplayTop batman={ref} initial={initial} run={run} />
        <Controls start={start} pause={pause} />
      </Flex>
      <DisplayBot count={ref} />
    </>
  );
}

export default App;
