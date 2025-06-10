import CalculatorButton from "./CalculatorButton"
import '../../index.css'

const meta = {
  title: "Components/CalculatorButton",
  component: CalculatorButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "buttonClicked" },
    variant: {
      control: "select",
      options: ["digit", "operator", "clear", "equals"],
    },
    label: { control: "text" },
    value: { control: "text" },
  },
}

export default meta

export const Digit = {
  args: {
    label: "7",
    value: "7",
    variant: "digit",
  },
}

export const Operator = {
  args: {
    label: "+",
    value: "+",
    variant: "operator",
  },
}

export const Clear = {
  args: {
    label: "AC",
    value: "clear",
    variant: "clear",
  },
}

export const Equals = {
  args: {
    label: "=",
    value: "equals",
    variant: "equals",
  },
}

export const Decimal = {
  args: {
    label: ".",
    value: ".",
    variant: "digit",
  },
}
