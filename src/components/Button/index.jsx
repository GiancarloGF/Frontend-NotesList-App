import Styles from "./styles.module.css";

export default function Button({ handleClick, text, type, variant, size }) {
  const size_class = size ? `${Styles[size]}` : `${Styles.normal}`;
  return (
    <button
      type={type?type:"text"}
      onClick={handleClick?handleClick:()=>{}}
      className={`${Styles.btn} ${Styles[variant]} ${size_class}`}
    >
      <span>{text}</span>
    </button>
  );
}
