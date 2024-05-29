import styles from "./FooterPartTwo.module.css";
import mediftIcon from "../../../assets/mediftIcon.png";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { FaCircleInfo } from "react-icons/fa6";
const link1 = [
  "about us",
  "our pricing",
  "our gallery",
  "appoinment",
  "privacy policy",
];
const link2 = [
  "orthology",
  "neurology",
  "dental care",
  "opthalmology",
  "cardiology",
];
// for not implemented
function handleClick(e) {
  toast("Feature yet to be implemented", {
    icon: "⚠️",
    style: {
      backgroundColor: "rgba(42, 167, 255, 1)",
      color: "rgba(255, 255, 255, 0.99)",
    },
  });
}

function FooterPartTwo() {
  return (
    <div className={styles.container}>
      <Toaster />
      <div className={styles.containerContent}>
        <div className={styles.contentOne}>
          <div className={styles.iconContainer}>
            <div className={styles.logoContainer}>
              <NavLink to="/">
                <img src={mediftIcon} alt="logo" />
              </NavLink>
            </div>
            <div className={styles.mediaIconContainer}>
              <NavLink onClick={handleClick} to="">
                <div>
                  <FaFacebookF />
                </div>
              </NavLink>
              <NavLink onClick={handleClick} to="">
                <div>
                  <FaTwitter />
                </div>
              </NavLink>
              <NavLink onClick={handleClick} to="">
                <div>
                  <FaYoutube />
                </div>
              </NavLink>
              <NavLink onClick={handleClick} to="">
                <div>
                  <FaPinterest />
                </div>
              </NavLink>
            </div>
          </div>
          <div className={styles.listOne}>
            <ul className={styles.linksContainer}>
              {link1.map((val) => {
                return (
                  <li
                    key={crypto.randomUUID()}
                    onClick={handleClick}
                    className={styles.liEl}>
                    <MdKeyboardArrowRight />
                    <span>{val}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.listTwo}>
            <ul className={styles.linksContainer}>
              {link2.map((val) => {
                return (
                  <li
                    key={crypto.randomUUID()}
                    onClick={handleClick}
                    className={styles.liEl}>
                    <MdKeyboardArrowRight />
                    <span>{val}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.listThree}>
            <ul className={styles.linksContainer}>
              {link1.map((val) => {
                return (
                  <li
                    key={crypto.randomUUID()}
                    onClick={handleClick}
                    className={styles.liEl}>
                    <MdKeyboardArrowRight />
                    <span>{val}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.copyrightsContainer}>
          <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
export default FooterPartTwo;
