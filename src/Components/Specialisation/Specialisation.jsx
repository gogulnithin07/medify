import styles from "./Specialisation.module.css";
import denstistry from "../../assets/specialisation/dentistry.png";
import primaryCare from "../../assets/specialisation/primaryCare.png";
import cardiology from "../../assets/specialisation/cardiology.png";
import mri from "../../assets/specialisation/MRI.png";
import bloodtest from "../../assets/specialisation/bloodTest.png";
import piscology from "../../assets/specialisation/piscologist.png";
import lab from "../../assets/specialisation/lab.png";
import xRay from "../../assets/specialisation/xRay.png";

function Specialisation() {
  return (
    <div className={styles.SpecialisationContainer}>
      <h2 className={styles.h2El}>Find by specialisation</h2>
      <div className={styles.imageContainer}>
        <div className={styles.cont}>
          <img src={denstistry} alt="one" />
          <p className={styles.pEl}>Dentistry</p>
        </div>
        <div className={styles.cont}>
          <img src={primaryCare} alt="one" />
          <p className={styles.pEl}>Primary Care</p>
        </div>
        <div className={styles.cont}>
          <img src={cardiology} alt="one" />
          <p className={styles.pEl}>Cardiology</p>
        </div>
        <div className={styles.cont}>
          <img src={mri} alt="one" />
          <p className={styles.pEl}>MRI Resonance</p>
        </div>
        <div className={styles.cont}>
          <img src={bloodtest} alt="one" />
          <p className={styles.pEl}>Blood Test</p>
        </div>
        <div className={styles.cont}>
          <img src={piscology} alt="one" />
          <p className={styles.pEl}>Piscologist</p>
        </div>
        <div className={styles.cont}>
          <img src={lab} alt="one" />
          <p className={styles.pEl}>Laboratory</p>
        </div>
        <div className={styles.cont}>
          <img src={xRay} alt="one" />
          <p className={styles.pEl}>X-Ray</p>
        </div>
      </div>
    </div>
  );
}
export { Specialisation };
