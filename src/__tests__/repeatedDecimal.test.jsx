import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { it, expect } from "vitest"
import App from '../App.jsx'

it("does not allow more than one decimal dot in a number", async () => {
  render(<App />)
  const user = userEvent.setup()
  const display = screen.getByTestId("display")

  // Enter "1"
  await user.click(screen.getByRole('button', { name: '1' }))
  expect(display.textContent).toBe("1")

  // Enter "."
  await user.click(screen.getByRole('button', { name: '.' }))
  expect(display.textContent).toBe("1.")

  // Enter "2"
  await user.click(screen.getByRole('button', { name: '2' }))
  expect(display.textContent).toBe("1.2")

  // Try to enter another "."
  await user.click(screen.getByRole('button', { name: '.' }))
  expect(display.textContent).toBe("1.2")

  // Enter "3"
  await user.click(screen.getByRole('button', { name: '3' }))
  expect(display.textContent).toBe("1.23")
})
