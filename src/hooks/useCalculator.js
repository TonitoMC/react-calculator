import { useState } from "react"
import { calculate } from "../lib/calculatorMath"

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState("0")
  const [firstOperand, setFirstOperand] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const appendDigit = (digit) => {
    setDisplayValue((prev) => {
      if (waitingForOperand) {
        setWaitingForOperand(false)
        return digit
      }
      if (prev.length >= 9) return prev
      if (prev === "0") return digit
      return prev + digit
    })
  }

  const clearAll = () => {
    setDisplayValue("0")
    setFirstOperand(null)
    setOperator(null)
    setWaitingForOperand(false)
  }

  const handleOperator = (nextOperator) => {
    const inputValue = Number(displayValue)
    if (firstOperand === null) {
      setFirstOperand(inputValue)
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator)
      setDisplayValue(String(result).slice(0, 9))
      setFirstOperand(result === "ERROR" ? null : result)
    }
    setOperator(nextOperator)
    setWaitingForOperand(true)
  }

  const handleEquals = () => {
    if (operator && firstOperand !== null) {
      const inputValue = Number(displayValue)
      const result = calculate(firstOperand, inputValue, operator)
      setDisplayValue(String(result).slice(0, 9))
      setFirstOperand(null)
      setOperator(null)
      setWaitingForOperand(true)
    }
  }

  const inputDot = () => {
    setDisplayValue((prev) => {
      if (waitingForOperand) {
        setWaitingForOperand(false)
        return "0."
      }
      if (!prev.includes(".")) {
        return prev + "."
      }
      return prev
    })
  }

  const handleButtonClick = (buttonValue) => {
    if (/^\d$/.test(buttonValue)) {
      appendDigit(buttonValue)
      return
    }
    if (buttonValue === "clear") {
      clearAll()
      return
    }
    if (buttonValue === ".") {
      inputDot()
      return
    }
    if (["+", "-", "*", "/", "modulo"].includes(buttonValue)) {
      handleOperator(buttonValue)
      return
    }
    if (buttonValue === "equals") {
      handleEquals()
      return
    }
  }

  return {
    displayValue,
    handleButtonClick,
    clearAll,
  }
}
