import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import App from '../App.jsx'

it('shows ERROR when modulo by zero', async () => {
  render(<App />)
  const user = userEvent.setup()
  const display = screen.getByTestId('display')

  // Input: 7 % 0 =
  await user.click(screen.getByRole('button', { name: '7' }))
  await user.click(screen.getByRole('button', { name: '%' }))
  await user.click(screen.getByRole('button', { name: '0' }))
  await user.click(screen.getByRole('button', { name: '=' }))

  // Expect error
  expect(display.textContent).toBe('ERROR')
})
