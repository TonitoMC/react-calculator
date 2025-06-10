import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import App from '../App.jsx'

it('does not allow more than 9 digits in the display', async () => {
  render(<App />)
  const user = userEvent.setup()
  const display = screen.getByTestId('display')

  // Enter 10 digits
  for (let i = 0; i < 10; i++) {
    await user.click(screen.getByRole('button', { name: '1' }))
  }

  // Only 9 digits should be shown
  expect(display.textContent).toBe('111111111')
})
