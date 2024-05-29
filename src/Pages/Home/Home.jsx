import { Faq } from "../../Components/Faq/Faq";
import { About } from "../../Components/About/About";
import { News } from "../../Components/News/News";
import { Caring } from "../../Components/Caring/Caring";
import { Doctor } from "../../Components/Doctors/Doctors";
import { Specialisation } from "../../Components/Specialisation/Specialisation";
import { Advertisment } from "../../Components/Advertisment/Advertisment";
import { Header } from "../../Components/Header/Header";
import { HomeSearch } from "../../Components/HomeSearch/HomeSearch";
import { MedicalCenter } from "../../Components/MedicalCenter/MedicalCenter";
// context
import { medifyContext } from "../../Components/Context/Context";
// import { useState, useEffect } from "react";
import { useContext } from "react";
function Home() {
  const { hospitalList } = useContext(medifyContext);
  // const [stateList, setStateList] = useState([]);
  // const [selectedState, setSelectedState] = useState("");
  // const [citiesList, setCitiesList] = useState([]);
  // const [selectedCity, setSelectedCity] = useState("");
  // const [hospitalList, setHospitalList] = useState(null);
  // // booked
  // const [booking, setBookings] = useState([]);

  // const value = {
  //   stateList,
  //   setStateList,
  //   selectedState,
  //   setSelectedState,
  //   citiesList,
  //   setCitiesList,
  //   selectedCity,
  //   setSelectedCity,
  //   hospitalList,
  //   setHospitalList,
  //   booking,
  //   setBookings,
  //   //
  // };
  // // providing value for context
  // // const data = useContext(value);
  // // fetching state
  // useEffect(() => {
  //   async function getState() {
  //     const request = await fetch(
  //       "https://meddata-backend.onrender.com/states"
  //     );
  //     const response = await request.json();
  //     console.log(response);
  //     setStateList((c) => response);
  //   }
  //   getState();
  // }, []);
  // useEffect(() => {
  //   if (selectedState) {
  //     console.log(selectedState);
  //     if (selectedCity) setSelectedCity("");
  //     // fetching cities
  //     async function getCities() {
  //       const req = await fetch(
  //         `https://meddata-backend.onrender.com/cities/${selectedState}`
  //       );
  //       const res = await req.json();
  //       console.log(res);
  //       setCitiesList((c) => res);
  //     }
  //     getCities();
  //   }
  // }, [selectedState]);
  return (
    <div>
      {/* <medifyContext.Provider value={value}> */}
      <Header />
      <HomeSearch />
      {hospitalList ? <MedicalCenter /> : null}
      {/* </medifyContext.Provider> */}
      <Advertisment />
      <Specialisation />
      <Doctor />
      <Caring />
      <News />
      <About />
      <Faq />
    </div>
  );
}
export default Home;
