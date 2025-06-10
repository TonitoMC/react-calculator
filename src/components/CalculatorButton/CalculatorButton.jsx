import React from "react"
import styles from "./CalculatorButton.module.css"

const CalculatorButton = ({ label, onClick, value, variant = "digit" }) => (
  <button
    className={`${styles.button} ${styles[variant] || ""}`}
    onClick={() => onClick(value)}
  >
    {label}
  </button>
)

export default CalculatorButton
