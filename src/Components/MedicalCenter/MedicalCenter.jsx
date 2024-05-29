import hospitalcenter from "../../assets/hosiptalcenter.png";
import banner from "../../assets/banner.png";
import styles from "./MedicalCenter.module.css";
import { useState, useEffect, useContext } from "react";
import { medifyContext } from "../Context/Context";
import vector from "../../assets/vector2.png";
import { Button } from "../Button/Button";
import Frame from "../../assets/Frame.png";
//
import toast, { Toaster } from "react-hot-toast";
// react modal
import React from "react";
import Slider from "react-slick";
// arrow
const notifySucess = () => {
  toast.success("Booking successful!");
};
const notifyError = () => {
  toast.error("Select a Date!");
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: " rgba(42, 167, 255, 1)",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: " rgba(42, 167, 255, 1)",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
      }}
      onClick={onClick}></div>
  );
}
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
function MedicalCenter() {
  const {
    setSelectedState,
    selectedCity,
    setSelectedCity,
    hospitalList,
    setHospitalList,
  } = useContext(medifyContext);
  const [showSlots, setShowSlots] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    setSelectedState("");
    setSelectedCity("");
    setHospitalList((c) => []);
  }, []);

  return (
    <div className={styles.medicalcenterMainContainer}>
      {hospitalList?.length > 0 ? (
        <>
          <h2 className={styles.h2El}>
            {hospitalList?.length} medical center available in {selectedCity}
          </h2>
          <p className={styles.pEl}>
            <img src={vector} alt="vector" />
            Book appointments with minimum wait-time & verified doctor details
          </p>
        </>
      ) : null}
      <div className={styles.medicalcenterChildContainer}>
        {/* for each medical center loop */}
        {hospitalList?.map((val) => {
          return (
            <MedicalCenterContainer
              key={crypto.randomUUID()}
              showSlots={showSlots}
              setShowSlots={setShowSlots}
              selectedHospital={selectedHospital}
              setSelectedHospital={setSelectedHospital}
              data={val}
            />
          );
        })}
        {hospitalList?.length > 0 && (
          <div className={styles.banner}>
            <img src={banner} alt="one" />
          </div>
        )}
      </div>
    </div>
  );
}

function MedicalCenterContainer({
  location,
  timeBooked,
  dateBooked,
  data = {},
  showSlots = {},
  setShowSlots = {},
  selectedHospital = {},
  setSelectedHospital = {},
}) {
  function hanldeClick(e, data) {
    if (selectedHospital === data["Provider ID"]) {
      setSelectedHospital((c) => null);
      setShowSlots((c) => false);
    } else {
      setSelectedHospital((c) => data["Provider ID"]);
      setShowSlots((c) => true);
    }
  }

  return (
    <div className={styles.medicalCenterEachContainer}>
      <div className={styles.containetOne}>
        <div className={styles.imageContainer}>
          <img src={hospitalcenter} alt="im" />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.h3El}>{data["Hospital Name"]}</h3>
          <h5 className={styles.h5El}>
            {data["City"]},{data["State"]}
          </h5>
          <p className={styles.pElTwo}>{data["Hospital Type"]}</p>
          <span className={styles.more}>more</span>
          <p className={styles.consultationText}>
            <span className={styles.free}>FREE</span>
            <span className={styles.textunderline}>₹500</span>Consultation fee
            at clinic
          </p>
          <div class={styles.like}>
            <img src={Frame} alt="thumbs" />
            <p className={styles.likeText}>{data["Hospital overall rating"]}</p>
          </div>
        </div>
        {location !== "/booking" ? (
          <div className={styles.btnContainer}>
            <p className={styles.greenText}>Available Today</p>
            <Button
              color={
                showSlots && data["Provider ID"] === selectedHospital
                  ? "rgba(243,18,91,1)"
                  : null
              }
              width="212px"
              height="40px"
              onClick={(e) => hanldeClick(e, data)}>
              {showSlots && data["Provider ID"] === selectedHospital
                ? "Hide Booking Section"
                : "Book FREE Center Visit"}
            </Button>
          </div>
        ) : (
          <div className={styles.displayTimeContainer}>
            <p className={styles.time}>{timeBooked}</p>
            <p className={styles.date}>{dateBooked}</p>
          </div>
        )}
      </div>
      {location !== "/booking" &&
        showSlots &&
        data["Provider ID"] == selectedHospital && <BookingSlot data={data} />}
      {/* {showSlots && data["Provider ID"] == selectedHospital && (
        <BookingSlot data={data} />
      )} */}
    </div>
  );
}

function BookingSlot({ data }) {
  const [sectedDay, setSelectedDay] = useState(null);
  const moment = require("moment");
  var a = moment().hours();
  const daysArray = Array.from({ length: 7 }).map((val, i) => {
    if (i === 0) return "Today";
    else return moment().add(i, "days").format("dddd, D MMMM");
  });
  return (
    <div className={styles.bookingSlotCotainer}>
      <div className={styles.daySliderContainer}>
        <Slider {...settings}>
          {daysArray.map((val) => (
            <div
              key={crypto.randomUUID()}
              onClick={(e) => {
                setSelectedDay(val);
              }}
              className={
                sectedDay === val
                  ? `${styles.daySlides} ${styles.active}`
                  : styles.daySlides
              }>
              <div className={styles.day}>{val}</div>
              <div className={styles.slots}>17 slots available</div>
            </div>
          ))}
        </Slider>
      </div>
      {/* time slot */}
      <BookingSlotTime data={data} sectedDay={sectedDay} />
    </div>
  );
}

function BookingSlotTime({ sectedDay, data }) {
  const { booking, setBookings } = useContext(medifyContext);
  const times = [
    ["11.30 AM"],
    ["12:00 PM", "12:30 pm", "01:30 PM", "02:00 PM"],
    ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  ];

  return (
    <div className={styles.BookingSlotTimeContainer}>
      {times.map((times, timeoftheday) => {
        return (
          <div key={crypto.randomUUID()} className={styles.bookingSlotsOne}>
            <p className={styles.timeoftheDayEl}>
              {timeoftheday === 0
                ? "Morning"
                : timeoftheday === 1
                ? "Afternoon"
                : "Evening"}
            </p>
            <div className={styles.timeSlotCont}>
              {times.map((val) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    onClick={(e) => {
                      if (sectedDay) {
                        const obj = {
                          time: val,
                          timeoftheday: timeoftheday,
                          selectedDate: sectedDay,
                          hospital: data,
                        };
                        notifySucess();
                        setBookings((c) => [...c, obj]);
                      } else {
                        notifyError();
                      }
                    }}>
                    {val}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { MedicalCenter };
export { MedicalCenterContainer };
