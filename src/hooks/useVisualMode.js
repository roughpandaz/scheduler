import { useState } from "react";

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (val, replace = false) => {
    if (replace) {
      setHistory((current) => {
        const newCurrent = [...current];
        newCurrent.pop();
        return [...newCurrent, val];
      });
    } else {
      setHistory((current) => {
        const newCurrent = [...current];
        newCurrent.push(val);
        return newCurrent;
      });
    }
    setMode(val);
  };

  const back = () => {
    if (history.length > 1) {
      setHistory((current) => {
        const newCurrent = [...current];
        newCurrent.pop();
        return newCurrent;
      });
      setMode(history[history.length - 2]);
    }
  };

  return { mode, transition, back };
};
export default useVisualMode;
