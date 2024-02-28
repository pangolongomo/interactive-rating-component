import styles from "./Choice.module.scss";
import { ChoiceProps } from "./Choice.types";

function Choice({ setChoice, value, choice }: ChoiceProps) {
  return (
    <li
      className={`${styles.choice} ${value === choice && styles.active}`}
      onClick={() => setChoice(value)}
    >
      {value}
    </li>
  );
}

export default Choice;
