import Display from "./components/Display/Display"
import Keypad from "./components/Keypad/Keypad"
import { useCalculator } from "./hooks/useCalculator"
import "./App.css"

function App() {
  const { displayValue, handleButtonClick } = useCalculator()

  return (
    <div className="calculator-container">
      <Display value={displayValue} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  )
}

export default App
