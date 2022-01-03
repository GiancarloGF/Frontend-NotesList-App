import Styles from "./styles.module.css";

export default function Button({ handleClick, text, type, variant }) {
  return (
    <button
      type={type?type:"text"}
      onClick={handleClick?handleClick:""}
      className={`${Styles.btn} ${Styles[variant]}`}
    >
      <span>{text}</span>
    </button>
  );
}
