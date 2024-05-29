import styles from "./Search.module.css";
import { useState, useEffect, useContext } from "react";
import { UserLoggedIn } from "../Main/Main";
import { context } from "../Context/Context";
function Search() {
  const [stateList, setStateList] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [citiesList, setCitiesList] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitalList, setHospitalList] = useState([]);
  const o = useContext(context);
  useEffect(() => {
    async function getState() {
      const request = await fetch(
        "https://meddata-backend.onrender.com/states"
      );
      const response = await request.json();
      console.log(response);
      setStateList((c) => response);
    }
    getState();
  }, []);
  // handling function for selecting state and fetching cities accordingly
  function handleSelectState(e) {
    setSelectedState(e.target.value);
  }
  useEffect(() => {
    if (selectedState) {
      console.log(selectedState);
      if (selectedCity) setSelectedCity("");
      // fetching cities
      async function getCities() {
        const req = await fetch(
          `https://meddata-backend.onrender.com/cities/${selectedState}`
        );
        const res = await req.json();
        console.log(res);
        setCitiesList((c) => res);
      }
      getCities();
    }
  }, [selectedState]);
  // handling submit AFTER selecting state and citied
  function hanldeSubmit() {
    if (selectedCity && selectedState) {
      console.log(selectedCity, selectedState);
      //   fetching hospitals based on state and city selection
      async function getHospital() {
        const req = await fetch(
          `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
        );
        const res = await req.json();
        console.log(res);
        // setting hospital lists
        setHospitalList((c) => [...res]);
      }
      getHospital();
    }
  }
  //
  const user = useContext(UserLoggedIn);
  console.log(user);

  return (
    <div className={styles.searchContainer}>
      <h1>{user}</h1>
      <div>
        <label htmlFor="options">Choose an state:</label>
        <select
          id="options"
          name="options"
          value={selectedState}
          onChange={(e) => handleSelectState(e)}>
          <option key="indication" value="" disabled selected>
            Select a state
          </option>
          {stateList.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="options">Choose an city:</label>
        <select
          id="options"
          name="options"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}>
          <option key="indiacation" value="" disabled selected>
            Select a city
          </option>
          {citiesList.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={hanldeSubmit}>Search</button>
      </div>
    </div>
  );
}
export { Search };
