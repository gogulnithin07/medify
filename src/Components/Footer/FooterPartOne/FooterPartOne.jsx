import styles from "./FooterPartOne.module.css";
import playStoreImg from "../../../assets/google_play.png.jpg";
import appleStoreImg from "../../../assets/apple_store.png.jpg";
import Button from "../../Button/Button";
import mobileapp from "../../../assets/mobileApp.png";
import vector from "../../../assets/Vector.png";
import React from "react";

function FooterPartOne() {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        {/* phone container */}
        <div className={styles.phoneContainer}>
          <img src={mobileapp} alt="phone" />
        </div>
        <div className={styles.fromContainer}>
          <div className={styles.vectorContainer}>
            <img src={vector} alt="vector" />
          </div>
          <h3>
            Download the <span>Medify</span>App
          </h3>
          <p>Get the link to download the app</p>
          <div className={styles.inputFieldContainer}>
            <input type="text" placeholder="Enter phone number" />
            <Button width="81px" height="50px">
              Send SMS
            </Button>
          </div>
          <div className={styles.storeImageContainer}>
            <img src={playStoreImg} alt="play" />
            <img src={appleStoreImg} alt="apple" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterPartOne;
