import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [storedValue, setStoredValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleDigitClick = (digit) => {
    if (displayValue === "0") {
      setDisplayValue(digit);
    } else {
      setDisplayValue(displayValue + digit);
    }
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  const handleOperatorClick = (nextOperator) => {
    if (storedValue === null) {
      setStoredValue(displayValue);
      setOperation(nextOperator);
      setDisplayValue("0");
    } else if (operation !== null) {
      const result = calculate();
      setStoredValue(result);
      setOperation(nextOperator);
      setDisplayValue("0");
    } else {
      setOperation(nextOperator);
      setDisplayValue("0");
    }
  };

  const handleEqualsClick = () => {
    if (operation !== null) {
      const result = calculate();
      if (result !== null && result !== undefined) {
        setStoredValue(result);
        setDisplayValue(result);
        setOperation(null);
      } else {
        setStoredValue(null);
        setDisplayValue("ERROR");
        setOperation(null);
        console.log("ERROR: Result not found.")
      }
    }
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setStoredValue(null);
    setOperation(null);
  };

  const calculate = () => {
    const floatDisplayValue = parseFloat(displayValue);
    const floatStoredValue = parseFloat(storedValue);

    switch (operation) {
      case "+":
        return floatStoredValue + floatDisplayValue;
      case "-":
        return floatStoredValue - floatDisplayValue;
      case "x":
        return floatStoredValue * floatDisplayValue;
      case "/":
        return floatStoredValue / floatDisplayValue;
      default:
        return floatDisplayValue;
    }
  };

  return (
    <div className="calculator">
      <div class="container">
        <div class="calc-body">
          <div class="calc-screen">
            <div class="calc-typed">{displayValue}</div>
          </div>
          <div class="calc-button-row">
            <div class="button c w75" onClick={() => handleClearClick()}>
              C
            </div>
            <div class="button o" onClick={() => handleOperatorClick("/")}>
              /
            </div>
          </div>
          <div class="calc-button-row">
            <div class="button" onClick={() => handleDigitClick("7")}>
              7
            </div>
            <div class="button" onClick={() => handleDigitClick("8")}>
              8
            </div>
            <div class="button" onClick={() => handleDigitClick("9")}>
              9
            </div>
            <div class="button o" onClick={() => handleOperatorClick("x")}>
              x
            </div>
          </div>
          <div class="calc-button-row">
            <div class="button" onClick={() => handleDigitClick("4")}>
              4
            </div>
            <div class="button" onClick={() => handleDigitClick("5")}>
              5
            </div>
            <div class="button" onClick={() => handleDigitClick("6")}>
              6
            </div>
            <div class="button o" onClick={() => handleOperatorClick("-")}>
              −
            </div>
          </div>
          <div class="calc-button-row">
            <div class="button" onClick={() => handleDigitClick("1")}>
              1
            </div>
            <div class="button" onClick={() => handleDigitClick("2")}>
              2
            </div>
            <div class="button" onClick={() => handleDigitClick("3")}>
              3
            </div>
            <div class="button o" onClick={() => handleOperatorClick("+")}>
              +
            </div>
          </div>
          <div class="calc-button-row">
            <div class="button" onClick={() => handleDecimalClick()}>
              .
            </div>
            <div class="button" onClick={() => handleDigitClick("0")}>
              0
            </div>
            <div class="button o w eq" onClick={() => handleEqualsClick()}>
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
