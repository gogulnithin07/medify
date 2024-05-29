import { MedicalCenterContainer } from "../../Components/MedicalCenter/MedicalCenter";
import { medifyContext } from "../../Components/Context/Context";
import { useContext } from "react";
import { useLocation } from "react-router";
import styles from "./Booking.module.css";
function Booking() {
  const { booking } = useContext(medifyContext);
  const location = useLocation();
  return (
    <div>
      <h1 className={styles.h1El}>Booking page</h1>
      <div className={styles.medicalcenterMainContainer}>
        <div className={styles.medicalcenterChildContainer}>
          {booking.map((val) => {
            return (
              <MedicalCenterContainer
                location={location.pathname}
                timeBooked={val.time}
                dateBooked={val.selectedDate}
                data={val.hospital}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Booking;
