import { Tr, Td } from "@chakra-ui/react";

const TrTime = ({ times }) => {
  const trs = [];
  for (var i = times.length; i > 0; i--) {
    trs.push(
      <Tr key={i}>
        <Td textAlign="center">{i}</Td>
        <Td textAlign="center" fontSize="2xl" letterSpacing="2px">
          {times[i - 1]}
        </Td>
        <Td />
      </Tr>
    );
  }
  return <>{trs}</>;
};

export default TrTime;
