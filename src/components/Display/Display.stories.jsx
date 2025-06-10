import Display from "./Display"

const meta = {
  title: "Components/Display",
  component: Display,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
  },
}

export default meta

export const Default = {
  args: {
    value: "0",
  },
}

export const WithNumber = {
  args: {
    value: "123.456",
  },
}

export const LongNumber = {
  args: {
    value: "987654321",
  },
}

export const Result = {
  args: {
    value: "42",
  },
}
