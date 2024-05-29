import styles from "./Caring.module.css";
import caringimage from "../../assets/caring/Group 1000011062.png";
import icon from "../../assets/caring/svg.h2d-208731fd.png";

function Caring() {
  return (
    <div className={styles.caringContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img src={caringimage} alt="one" />
        </div>
        <div className={styles.textContainer}>
          <h4 className={styles.h4El}>
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </h4>
          <h3 className={styles.h3El}>
            Patient <span>Caring</span>
          </h3>
          <p className={styles.pEl}>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <ul className={styles.ulEl}>
            <li className={styles.liEl}>
              <img src={icon} alt="icon" />
              <span>Stay Updated About Your Health</span>
            </li>
            <li className={styles.liEl}>
              <img src={icon} alt="icon" />
              <span>Check Your Results Online</span>
            </li>
            <li className={styles.liEl}>
              <img src={icon} alt="icon" />
              <span>Manage Your Appointments</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Caring };
