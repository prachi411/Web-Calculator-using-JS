import "./App.css";
import Button from "./component/Button";
import { useState } from "react";
import * as math from "mathjs";

function App() {
  const [currentOperand, setCurrentOperand] = useState(0);
  const [prevOperand, setPrevOperand] = useState("");
  const [history, setHistory] = useState("");

  const buttons = [
    { id: "clear", value: "AC" },
    { id: "delete", value: "DEL" },
    { id: "divide", value: "/" },
    { id: "seven", value: "7" },
    { id: "eight", value: "8" },
    { id: "nine", value: "9" },
    { id: "multiply", value: "*" },
    { id: "four", value: "4" },
    { id: "five", value: "5" },
    { id: "six", value: "6" },
    { id: "sum", value: "+" },
    { id: "one", value: "1" },
    { id: "two", value: "2" },
    { id: "three", value: "3" },
    { id: "minus", value: "-" },
    { id: "zero", value: "0" },
    { id: "dot", value: "." },
    { id: "equals", value: "=" },
  ];

  const handleClick = (value) => {
    console.log(value);

    if (value === "AC") {
      setCurrentOperand(0);
      setPrevOperand("");
      setHistory("");
      return;
    }

    if (value === "DEL") {
      if (currentOperand.length > 1) {
        setCurrentOperand(currentOperand.slice(0, -1));
        return;
      } else {
        setCurrentOperand(0);
        return;
      }
    }

    if (currentOperand === 0) {
      setCurrentOperand(value);
    } else {
      setCurrentOperand(currentOperand + value);
    }

    if (value === "=") {
      if (currentOperand === 0) {
        setCurrentOperand(0);
        return;
      } else {
        calculate();
      }
    }
  };

  const calculate = () => {
    try {
      let result = math.evaluate(currentOperand);
      setPrevOperand(currentOperand);
      setHistory(`${prevOperand} ${currentOperand} = ${result}`);
      setCurrentOperand(result);
    } catch {
      setCurrentOperand("Error");
    }
  };
  return (
    <>
      <div className="calculator-grid">
        <div>
          <h2>Prachi's assignment lab 10</h2>
        </div>
        <div className="output">
          <div className="history">{history}</div>
          <div className="current-operand">{currentOperand}</div>
        </div>

        {buttons.map((btn) => {
          return (
            <Button key={btn.id} onClick={() => handleClick(btn.value)}>
              {btn.value}
            </Button>
          );
        })}
      </div>
    </>
  );
}

export default App;
