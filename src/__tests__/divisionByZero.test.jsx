import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import App from '../App.jsx'

it('shows ERROR when dividing by zero', async () => {
  render(<App />)

  const user = userEvent.setup()
  const display = screen.getByTestId('display')

  // 8 / 0 = ?
  await user.click(screen.getByRole('button', { name: '8' }))
  await user.click(screen.getByRole('button', { name: '÷' }))
  await user.click(screen.getByRole('button', { name: '0' }))
  await user.click(screen.getByRole('button', { name: '=' }))

  // Expect to show error
  expect(display.textContent).toBe('ERROR')
})
