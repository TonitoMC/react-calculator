import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import App from '../App.jsx'

it('shows ERROR if the result is greater than 999999999 (addition and multiplication)', async () => {
  render(<App />)
  const user = userEvent.setup()
  const display = screen.getByTestId('display')

  // Enter 999999999
  for (let i = 0; i < 9; i++) {
    await user.click(screen.getByRole('button', { name: '9' }))
  }
  expect(display.textContent).toBe('999999999')

  // Press +
  await user.click(screen.getByRole('button', { name: '+' }))

  // Enter 1
  await user.click(screen.getByRole('button', { name: '1' }))

  // Press =
  await user.click(screen.getByRole('button', { name: '=' }))

  // Should show ERROR
  expect(display.textContent).toBe('ERROR')

  // Clear
  await user.click(screen.getByRole('button', { name: 'AC' }))

  // Enter 999999999
  for (let i = 0; i < 9; i++) {
    await user.click(screen.getByRole('button', { name: '9' }))
  }
  expect(display.textContent).toBe('999999999')

  // Press ×
  await user.click(screen.getByRole('button', { name: '×' }))

  // Enter 2
  await user.click(screen.getByRole('button', { name: '2' }))

  // Press =
  await user.click(screen.getByRole('button', { name: '=' }))

  // Should show ERROR
  expect(display.textContent).toBe('ERROR')
})
