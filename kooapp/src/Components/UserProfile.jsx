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
import { FiLogOut } from "react-icons/fi";

const UserProfile = (props) => {
  const [value, setValue] = useState(localStorage.getItem("papa"));
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [seconds, setSeconds] = useState(0);
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
      }, 0);
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


  let loginStatus = localStorage.getItem("papa");
  return (
    <div>
      
       {loginStatus?<Button><FaUserCircle /> Guest_{value ? value[0]+value[1]+value[2] : ""}  </Button>:<div style={{marginTop:"-10px"}}></div>} 
      
      {value && (
        <>
    <button style={{border:" none",color: "rgb(136, 136, 136)",fontSize: "19px",
    textDecoration: "none",backgroundColor: "white"}} >
      <div style={{display:"flex", alignItems:"center", gap:"5px", margin:"15px 0 20px 7px"}}>
      <FiBell/><Notification/>
      </div>
    </button>
   
        <button onClick={handleLogout} style={{border:" none",color: "rgb(136, 136, 136)",fontSize: "19px",
         textDecoration: "none",backgroundColor: "white", marginLeft:"10px"}}><FiLogOut /> Logout</button>
        </>
      )}
    </div>
  );
};

export default UserProfile
