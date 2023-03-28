import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";

const timeFormat = (date) => {
  if (!date) return "00:00:00";

  let mm = date.getUTCMinutes();
  let ss = date.getSeconds();
  let cm = Math.round(date.getMilliseconds() / 10);

  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  cm = cm < 10 ? "0" + cm : cm;

  return `${mm}:${ss}:${cm}`;
};

export default function DisplayTop({ batman, run, initial }) {
  const [diff, setDiff] = useState(null);

  const tick = () => {
    setDiff(new Date(+new Date() - initial));
  };

  useEffect(() => {
    if (initial && run) {
      requestAnimationFrame(tick);
    }
  }, [initial, run]);

  useEffect(() => {
    if (diff && run) {
      requestAnimationFrame(tick);
    }
  }, [diff, run]);
  return (
    <Heading
      as="h1"
      size="4xl"
      textAlign="center"
      p="30px 0"
      m="auto"
      ref={batman}
    >
      {timeFormat(diff)}
    </Heading>
  );
}
