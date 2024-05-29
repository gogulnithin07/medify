import styles from "./HomeSearch.module.css";
import doctor from "../../assets/homesearch/doctor.png";
import labs from "../../assets/homesearch/lab.png";
import hospital from "../../assets/homesearch/hospital.png";
import medicalstore from "../../assets/homesearch/medicalStore.png";
import ambulance from "../../assets/homesearch/ambulance.png";
import Button from "../Button/Button";
import searchicon from "../../assets/Search.png";
import { medifyContext } from "../Context/Context";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
function HomeSearch() {
  const {
    stateList,
    setStateList,
    selectedState,
    setSelectedState,
    citiesList,
    setCitiesList,
    selectedCity,
    setSelectedCity,
    hospitalList,
    setHospitalList,
  } = useContext(medifyContext);
  const location = useLocation();
  const homesearchOrNot = location.pathname === "/" ? true : false;
  // handling function for selecting state and fetching cities accordingly
  function handleSelectState(e) {
    setSelectedState(e.target.value);
  }
  // handling submit AFTER selecting state and citied
  function hanldeSubmit() {
    if (selectedCity && selectedState) {
      //   fetching hospitals based on state and city selection
      async function getHospital() {
        const req = await fetch(
          `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
        );
        const res = await req.json();
        // setting hospital lists
        setHospitalList((c) => [...res]);
      }
      getHospital();
    }
  }
  return (
    <div className={styles.homeSearchContainer}>
      <div className={styles.inputContainer}>
        <div className={styles.divEl}>
          <img src={searchicon} alt="o" />
          <select
            id=""
            name="options"
            value={selectedState}
            onChange={(e) => handleSelectState(e)}>
            <option key="indication" value="" disabled selected>
              State
            </option>
            {stateList.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            id=""
            name="options"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}>
            <option key="indication" value="" disabled selected>
              City
            </option>
            {citiesList.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <Button onClick={hanldeSubmit} width="121px" height="50px">
          Search
        </Button>
      </div>
      {homesearchOrNot && (
        <>
          <h3 className={styles.h3El}>You may be looking for</h3>
          <div className={styles.imageContainer}>
            <div className={styles.cont}>
              <img src={doctor} alt="one" />
              <p className={styles.pEl}>Dentistry</p>
            </div>
            <div className={styles.cont}>
              <img src={labs} alt="one" />
              <p className={styles.pEl}>Labs</p>
            </div>
            <div className={`${styles.cont} ${styles.hosp}`}>
              <img src={hospital} alt="one" />
              <p className={styles.pEl}>Hospitals</p>
            </div>
            <div className={styles.cont}>
              <img src={medicalstore} alt="one" />
              <p className={styles.pEl}>Medical Store</p>
            </div>
            <div className={styles.cont}>
              <img src={ambulance} alt="one" />
              <p className={styles.pEl}>Ambulance</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export { HomeSearch };
