import styles from "./Button.module.css";
function Button({
  width = "130px",
  height = "40px",
  children,
  onClick,
  color = null,
}) {
  return (
    <button
      onClick={onClick ? onClick : null}
      style={{ width: width, height: height, background: color }}
      className={styles.btnPrimary}>
      {children}
    </button>
  );
}
export { Button };
export default Button;
