// src/lib/calculatorMath.js
export function calculate(a, b, op) {
  let result

  switch (op) {
    case '+':
      result = a + b
      break
    case '-':
      result = a - b
      break
    case '*':
      result = a * b
      break
    case '/':
      if (b === 0) return 'ERROR'
      result = a / b
      break
    case 'modulo':
      if (b === 0) return 'ERROR'
      result = a % b
      break
    default:
      result = b
  }

  // If result is negative, show ERROR
  if (typeof result === 'number' && result < 0) return 'ERROR'

  // If result is too large, show ERROR
  if (typeof result === 'number' && result > 999999999) return 'ERROR'

  // If result is a float, limit to 9 characters (including dot)
  if (typeof result === 'number' && !Number.isInteger(result)) {
    // Convert to string, slice to 9 chars max
    return String(result).slice(0, 9)
  }

  return result
}
