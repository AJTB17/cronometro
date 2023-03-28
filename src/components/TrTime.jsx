import { Tr, Td } from "@chakra-ui/react";

const TrTime = ({ times }) => {
  const trs = [];
  const invertArray = times.reverse();
  invertArray.forEach((time, key) => {
    trs.push(
      <Tr key={key}>
        <Td />
        <Td textAlign="center" fontSize="2xl" letterSpacing="2px">
          {time}
        </Td>
        <Td />
      </Tr>
    );
  });
  return <>{trs}</>;
};

export default TrTime;
