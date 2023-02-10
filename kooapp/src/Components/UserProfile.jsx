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
    localStorage.removeItem("papa");
    window.location.reload(false);
  };

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
    <br />
    <button onClick={handleLogout} style={{border:" none",color: "rgb(136, 136, 136)",fontSize: "19px",
    textDecoration: "none",backgroundColor: "white"}}><IoIosLogOut/> Logout</button>
    
        </>
      )}
    </div>
  );
};

export default UserProfile
