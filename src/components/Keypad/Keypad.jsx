import CalculatorButton from "../CalculatorButton/CalculatorButton"
import { BUTTON_CONFIGS } from "../../lib/constants" // Import button data
import styles from "./Keypad.module.css"

const Keypad = ({ onButtonClick }) => (
  <div className={styles.keypad}>
    {BUTTON_CONFIGS.map((buttonConfig) => (
      <CalculatorButton
        key={buttonConfig.label}
        label={buttonConfig.label}
        value={buttonConfig.value}
        onClick={onButtonClick}
        variant={buttonConfig.variant}
      />
    ))}
  </div>
)

export default Keypad
