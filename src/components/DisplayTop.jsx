import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import useStopwatch from "../hooks/useStopWatch";
import { useCronoContext } from "../context/CronoProvider";

export default function DisplayTop() {
  const [diff, setDiff] = useState(null);
  const { timeFormat } = useStopwatch();
  const [status, initial, ref] = useCronoContext();

  const tick = () => {
    setDiff(new Date(+new Date() - initial));
  };

  useEffect(() => {
    if (initial && status) {
      requestAnimationFrame(tick);
    }
  }, [initial, status]);

  useEffect(() => {
    if (diff && status) {
      requestAnimationFrame(tick);
    }
  }, [diff, status]);
  return (
    <Heading
      as="h1"
      size="4xl"
      textAlign="center"
      p="30px 0"
      m="auto"
      ref={ref}
    >
      {timeFormat(diff)}
    </Heading>
  );
}
