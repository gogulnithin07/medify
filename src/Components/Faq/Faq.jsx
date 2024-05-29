import styles from "./Faq.module.css";
import mainimage from "../../assets/faq/mainimage.png";
import countimage from "../../assets/faq/countIcon.png";
import heartimage from "../../assets/faq/heartIcon.png";
import { useState } from "react";

import { FaPlus } from "react-icons/fa";
const accordionData = [
  {
    question: "Why choose our medical for your family?",
    answer:
      "Get top-notch medical care for your family with our comprehensive services, expert staff, and personalized approach.",
    id: 1,
  },
  {
    question: "Why we are different from others?",
    answer:
      "We stand out with our state-of-the-art facilities, compassionate care, and commitment to excellence.",
    id: 2,
  },
  {
    question: "Trusted & experience senior care & love",
    answer:
      "Our experienced team provides compassionate care and support tailored to meet the unique needs of seniors, ensuring they receive the love and attention they deserve.",
    id: 3,
  },
  {
    question: "How to get appointment for emergency cases?",
    answer:
      "For emergency cases, please call our dedicated emergency hotline or visit our clinic immediately. We have a team of professionals ready to assist you promptly.",
    id: 4,
  },
];

function Faq() {
  const [selected, setSelected] = useState(null);
  function hanldeClick(e, id) {
    if (id === selected) setSelected(null);
    else setSelected(() => id);
  }
  return (
    <div className={styles.faqContainer}>
      <div className={styles.contentContainer}>
        <header className={styles.header}>
          <p className={styles.pEl}>Get Your Answer</p>
          <h2 className={styles.h2El}>Frequently Asked Questions</h2>
        </header>
        <aside className={styles.asideEl}>
          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <img className={styles.mainImage} src={mainimage} alt="ok" />
              <img className={styles.countImage} src={countimage} alt="ok" />
              <img className={styles.heartImage} src={heartimage} alt="ok" />
            </div>
          </div>
          <div className={styles.accordion}>
            <ul className={styles.ulEl}>
              {accordionData.map((val) => {
                return (
                  <li
                    onClick={(e) => hanldeClick(e, val.id)}
                    key={crypto.randomUUID()}
                    style={{ cursor: "pointer" }}>
                    <div className={styles.heading}>
                      <h4 className={styles.h4El}>{val.question}</h4>
                      <span className={styles.spanEl}>
                        {selected === val.id ? (
                          <span className={styles.upIcon}>~</span>
                        ) : (
                          <FaPlus />
                        )}
                      </span>
                    </div>
                    {selected === val.id && <p>{val.answer}</p>}
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
export default Faq;
export { Faq };
