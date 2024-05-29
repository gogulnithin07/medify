import styles from "./Footer.module.css";
import FooterPartOne from "./FooterPartOne/FooterPartOne";
import FooterPartTwo from "./FooterPartTwo/FooterPartTwo";

function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterPartOne />
      <FooterPartTwo />
    </footer>
  );
}
export { Footer };
