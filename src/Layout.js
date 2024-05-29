import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Outlet } from "react-router";
// context
import { medifyContext } from "./Components/Context/Context";
import { useState, useEffect } from "react";
function Layout() {
  const [stateList, setStateList] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [citiesList, setCitiesList] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitalList, setHospitalList] = useState(null);
  const [booking, setBookings] = useState([]);

  const value = {
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
    booking,
    setBookings,
  };
  useEffect(() => {
    if (localStorage.getItem("bookings")) {
      setBookings(JSON.parse(localStorage.getItem("bookings")));
    } else {
      setBookings([]);
      localStorage.setItem("bookings", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    async function getState() {
      try {
        const request = await fetch(
          "https://meddata-backend.onrender.com/states"
        );
        const response = await request.json();
        setStateList((c) => response);
      } catch (error) {}
    }
    getState();
  }, []);
  useEffect(() => {
    if (selectedState) {
      if (selectedCity) setSelectedCity("");
      // fetching cities
      async function getCities() {
        const req = await fetch(
          `https://meddata-backend.onrender.com/cities/${selectedState}`
        );
        const res = await req.json();
        setCitiesList((c) => res);
      }
      getCities();
    }
  }, [selectedState]);

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(booking));
  }, [booking]);

  return (
    <div className="container">
      <Navbar />
      <medifyContext.Provider value={value}>
        <Outlet />
      </medifyContext.Provider>
      <Footer />
    </div>
  );
}

export default Layout;
