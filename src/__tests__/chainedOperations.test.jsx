import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import App from '../App.jsx'

it('shows intermediate results for chained operations', async () => {
  render(<App />)
  const user = userEvent.setup()
  const display = screen.getByTestId('display')

  // Input: 2 + 3 +
  await user.click(screen.getByRole('button', { name: '2' }))
  await user.click(screen.getByRole('button', { name: '+' }))
  await user.click(screen.getByRole('button', { name: '3' }))
  await user.click(screen.getByRole('button', { name: '+' }))

  // After second '+', should show 5
  expect(display.textContent).toBe('5')

  // Input: 4 +
  await user.click(screen.getByRole('button', { name: '4' }))
  await user.click(screen.getByRole('button', { name: '+' }))

  // After third '+', should show 9
  expect(display.textContent).toBe('9')
})
