import React, { useState, useContext, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const cronoContext = React.createContext();
const controlsContext = React.createContext();
const tableContext = React.createContext();

export function useCronoContext() {
  return useContext(cronoContext);
}
export function useControlsContext() {
  return useContext(controlsContext);
}
export function useTableContext() {
  return useContext(tableContext);
}

export function CronoProvider({ children }) {
  const [initial, setInitial] = useLocalStorage("initial", "off");
  const [times, setTimes] = useLocalStorage("lapData", JSON.stringify([]));
  const [status, setStatus] = useState(false);
  const ref = useRef(null);

  const start = () => {
    initial === "off" && setInitial(+new Date());
    setStatus(true);
  };
  const pause = () => {
    setStatus(false);
  };
  const clear = () => {
    setTimes([]);
  };
  const stop = () => {
    setTimes([]);
    setStatus(false);
    setInitial("off");
    setTimeout(() => {
      ref.current.innerHTML = "00:00:00";
    }, 100);
  };
  const lap = () => {
    if (status) setTimes([...times, ref.current.innerHTML]);
  };

  return (
    <cronoContext.Provider value={[status, initial, ref]}>
      <controlsContext.Provider value={[start, pause, stop]}>
        <tableContext.Provider value={[lap, clear, times]}>
          {children}
        </tableContext.Provider>
      </controlsContext.Provider>
    </cronoContext.Provider>
  );
}
