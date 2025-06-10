// src/lib/constants.js
export const BUTTON_CONFIGS = [
  { label: "AC", value: "clear", variant: "clear" },
  { label: "%", value: "modulo", variant: "operator" },
  { label: "÷", value: "/", variant: "operator" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "×", value: "*", variant: "operator" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "-", value: "-", variant: "operator" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "+", value: "+", variant: "operator" },
  { label: "0", value: "0", variant: "zero" },
  { label: ".", value: "." },
  { label: "=", value: "equals", variant: "equals" },
]

export const OPERATIONS = ["+", "-", "*", "/", "modulo", "equals"]
export const SPECIAL_ACTIONS = ["clear"] // For AC
