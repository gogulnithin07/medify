import heroimage from "../../assets/hero/hero.png";
import styles from "./Header.module.css";
import { Button } from "../Button/Button";
function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h5 className={styles.h5El}>Skip the travel! Find Online</h5>
          <h2 className={styles.h2El}>
            Medical<span> Centers</span>
          </h2>
          <p className={styles.pEl}>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>
          <Button width="177px" height="48px">
            Find Centers
          </Button>
        </div>
        <div className={styles.imageContainer}>
          <img src={heroimage} alt="heroimage" />
        </div>
      </div>
    </div>
  );
}
export { Header };
