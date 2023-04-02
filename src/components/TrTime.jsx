import { Tr, Td, Input } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TrTime = ({ times }) => {
  const trs = [];
  const [renderData, setRenderData] = useLocalStorage("lapData", "");

  useEffect(() => {
    setRenderData(times);
  }, [times]);

  for (var i = renderData.length; i > 0; i--) {
    trs.push(
      <Tr key={i}>
        <Td textAlign="center">{i}</Td>
        <Td textAlign="center" fontSize="2xl" letterSpacing="2px">
          {renderData[i - 1]}
        </Td>
        <Td />
      </Tr>
    );
  }
  return <>{trs}</>;
};

export default TrTime;
