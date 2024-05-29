import styles from "./About.module.css";
import card1 from "../../assets/about/card1.png";
import card2 from "../../assets/about/card2.png";
import card3 from "../../assets/about/card3.png";
import card4 from "../../assets/about/card4.png";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.h3El}>
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </h3>
          <h4 className={styles.h4El}>Our Families</h4>
          <p className={styles.pEl}>
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>
        <div className={styles.cardContainer}>
          <div>
            <img src={card1} alt="one" />
            <img style={{ marginTop: "50px" }} src={card2} alt="two" />
          </div>
          <div>
            <img src={card3} alt="three" />
            <img style={{ marginTop: "50px" }} src={card4} alt="four" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
export { About };
