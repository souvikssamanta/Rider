import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidepopup from "../components/ConfirmRidepopup";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";
import LiveTracking from "../components/LiveTracking";
const url = "https://uber-ouze.onrender.com";
function CaptainHome() {
  const [socket] = useContext(SocketContext);
  const {captain} = useContext(CaptainDataContext);
  const [ride,setRide] = useState(null);
  useEffect(() => {
    if (captain) {
      socket.emit("join", { userType: "captain", userId: captain._id });
    } else {
      console.warn("Captain not found"); // Changed to warn for better debugging
    }

    const updateLocation = () => {
      if (captain) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            socket.emit("update-location-captain", {
              userId: captain._id,
              location: {
                ltd: position.coords.latitude,  
                lng: position.coords.longitude,
              },
            });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      }
    };

    const locationInterval = setInterval(updateLocation, 5000); // Update every 5 seconds
    updateLocation(); // Initial call to set location immediately

    return () => clearInterval(locationInterval); // Cleanup interval on component unmount
  }, [captain, socket]); // Ensure consistent dependency array

  socket.on("newRide", (data) => {
    setRide(data);
    setRidepopup(true);

    //setConfirmridepopup(true)
  });
  
   
  
  async function confirmRide() {
  
    const response = await axios.post(`${url}/rides/confirm`,{
        rideId:ride?._id,
        captainId: captain._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    alert("Ride confirmed successfully!");
     setRidepopup(false);
     setConfirmridepopup(true);
  }

  const [ridepopup, setRidepopup] = useState(true);
  const [confirmridepopup, setConfirmridepopup] = useState(false);
  const ridepopupref = useRef(null);
  const confirmridepopupref = useRef(null);

  // ----popup pannel----
  useGSAP(
    function () {
      if (ridepopup) {
        gsap.to(ridepopupref.current, {
          height: "100%",
          opacity: 1,
        });
      } else {
        gsap.to(ridepopupref.current, {
          height: "0%",
          opacity: 0,
        });
      }
    },
    [ridepopup]
  );

  //confirmpopup
  useGSAP(
    function () {
      if (confirmridepopup) {
        gsap.to(confirmridepopupref.current, {
          height: "100%",
        });
      } else {
        gsap.to(confirmridepopupref.current, {
          height: "0%",
        });
      }
    },
    [confirmridepopup]
  );

  return (
    <div className="h-screen overflow-hidden">
      <div className=" w-screen absolute px-3">
        <Link
          to={"/home"}
          className="flex items-center justify-center  h-8 w-8 bg-white rounded-xl mt-3 ml-1"
        >
          <i className="ri-logout-box-r-line font-bold text-xl"></i>
        </Link>
      </div>
      {/* ----image section-- */}
      <div className="h-1/2">
        <LiveTracking></LiveTracking>
      </div>

      <div className="h-1/2 fixed  w-full rounded-t-xl  ">
        <div className=" h-full hidden">
          <CaptainDetails></CaptainDetails>
        </div>
        {/* ridepopup */}
        <div
          ref={ridepopupref}
          className="absolute rounded-t-4xl flex flex-row 
           h-0 w-full "
        >
          <RidePopup
            setRidepopup={setRidepopup}
            ride={ride}
            confirmRide={confirmRide}
            setConfirmridepopup={setConfirmridepopup}
          ></RidePopup>
          <div className="h-full sm:opacity-0 md:opacity-100">
            <img
              className="h-full w-full object-contain"
              src="https://www.shutterstock.com/image-vector/online-ordering-taxi-car-rent-600nw-1490648672.jpg"
              alt=""
            />
          </div>
        </div>

        {/* confirmridepopup */}
        <div
          ref={confirmridepopupref}
          className="h-0 flex flex-row bg-white absolute w-full bottom-0"
        >
          <ConfirmRidepopup
            ride={ride}
            setRidepopup={setRidepopup}
            setConfirmridepopup={setConfirmridepopup}
          ></ConfirmRidepopup>

          <div className="h-full sm:opacity-0 md:opacity-100">
            <img
              className="h-full w-full object-contain"
              src="https://img.freepik.com/vector-premium/pedido-taxi-alquiler-vehiculos-concepto-servicio-taxi-compartido-automoviles-mujer-llama-taxi-traves-aplicacion-movil-mapa-paisaje-ciudad-pantalla-telefono-auto-amarillo-mujer-vectorial-equipaje_176516-2631.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptainHome;
