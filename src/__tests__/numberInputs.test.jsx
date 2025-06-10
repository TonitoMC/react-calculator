import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import App from '../App.jsx'

it('allows appending digits after equals', async () => {
  render(<App />)
  const user = userEvent.setup()
  const display = screen.getByTestId('display')

  // Enter "1"
  await user.click(screen.getByRole('button', { name: '1' }))
  expect(display.textContent).toBe('1')

  // Enter "2"
  await user.click(screen.getByRole('button', { name: '2' }))
  expect(display.textContent).toBe('12')

  // Enter "+"
  await user.click(screen.getByRole('button', { name: '+' }))

  // Enter "1"
  await user.click(screen.getByRole('button', { name: '1' }))
  expect(display.textContent).toBe('1')

  // Enter "="
  await user.click(screen.getByRole('button', { name: '=' }))
  expect(display.textContent).toBe('13')

  // Append "4"
  await user.click(screen.getByRole('button', { name: '4' }))
  expect(display.textContent).toBe('4')
})
