import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import mediftIcon from "../../assets/mediftIcon.png";
import { Button } from "../Button/Button.js";
import styles from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  const topicList = [
    "Find Doctors",
    "Hospitals",
    "Medicines",
    "Surgeries",
    "Software for Provider",
    "Facilities",
  ];
  const handleResize = () => {
    if (window.innerWidth > 900) {
      setOpen(false);
    }
  };

  function handleReset() {
    setOpen((c) => false);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const location = useLocation();

  if (location.pathname === "/") {
  }
  return (
    <header>
      <div className={styles.statement}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <nav
        className={
          location.pathname === "/"
            ? `${styles.navbar} ${styles.home}`
            : `${styles.navbar} ${styles.other}`
        }>
        <div className={styles.navbarItemContainer}>
          <div className={styles.logoContainer}>
            <NavLink to="/">
              <img src={mediftIcon} alt="logo" />
            </NavLink>
          </div>
          <ul
            style={{ right: open ? "0" : "-100%" }}
            className={`${styles.topicsContainer}
            ${open ? styles.open : styles.close}`}>
            {open && (
              <div className={styles.closeIcon} onClick={(e) => setOpen(false)}>
                <IoCloseSharp style={{ width: "100%", height: "100%" }} />
              </div>
            )}
            {topicList.map((val, index) => {
              if (val === "Find Doctors") {
                return (
                  <li key={crypto.randomUUID()} className={styles.lists}>
                    <NavLink
                      onClick={handleReset}
                      to="search"
                      className={({ isActive }) =>
                        isActive ? `${styles.lists} ${styles.listsActive}` : ""
                      }>
                      Find Doctors
                    </NavLink>
                  </li>
                );
              } else {
                return (
                  <li
                    onClick={handleReset}
                    key={crypto.randomUUID()}
                    className={styles.lists}>
                    {val}
                  </li>
                );
              }
            })}
            <li className={styles.lists}>
              <NavLink onClick={handleReset} to="booking">
                <Button
                  color={
                    location.pathname === "/booking" ? "rgba(243,18,96,1)" : ""
                  }>
                  My Bookings
                </Button>
              </NavLink>
            </li>
          </ul>
          {!open && (
            <div
              className={styles.hamburger}
              onClick={(e) => {
                setOpen(true);
              }}>
              <GiHamburgerMenu style={{ width: "100%", height: "100%" }} />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export { Navbar };
