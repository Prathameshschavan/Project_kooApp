import { useContext } from "react";
import myContext from "./myContext";
import Signin from "./Signin";
import { FiBell } from "react-icons/fi";
import { FcUpRight } from "react-icons/fc";
import {FaUserCircle} from "react-icons/fa"
import{IoIosLogOut} from "react-icons/io"
import Notification from "./Notification";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { FcManager } from "react-icons/fc";
const UserProfile = (props) => {
  const [value, setValue] = useState(localStorage.getItem("papa"));
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [seconds, setSeconds] = useState(1);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "papa") {
        setValue(e.newValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      setIsCountingDown(true);
      setIsActive(true);
      setTimeout(() => {
        localStorage.removeItem("papa");
        window.location.reload(false);
        console.log("Logging out...");
      }, 5000);
    }
  };
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => {
          if (seconds > 0) {
            return seconds - 1;
          }
          clearInterval(interval);
          return 0;
        });
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  return (
    <div>
      
        <Button><FaUserCircle /> Guest_{value ? value[0]+value[1]+value[2] : ""}  </Button>
      
      {value && (
        <>
    <button style={{border:" none",color: "rgb(136, 136, 136)",fontSize: "19px",
    textDecoration: "none",backgroundColor: "white"}} >
      <div style={{display:"flex"}}>
      <FiBell style={{marginTop: "7px",gap:"4px"}}/><Notification/>
      </div>
    </button>
    <br />{isCountingDown ? (
        <div>
          Logging out in {seconds}
        </div>
      ) : (
        <button onClick={handleLogout} style={{border:" none",color: "rgb(136, 136, 136)",fontSize: "19px",
         textDecoration: "none",backgroundColor: "white"}}><FcUpRight/> Logout</button>
      )}
    <br /><br />
        </>
      )}
    </div>
  );
};

export default UserProfile
