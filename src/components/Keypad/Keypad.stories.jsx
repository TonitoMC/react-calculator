import Keypad from "./Keypad"

const meta = {
  title: "Components/Keypad",
  component: Keypad,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    onButtonClick: { action: "buttonClicked" },
  },
}

export default meta

export const Default = {
  args: {
  },
}
