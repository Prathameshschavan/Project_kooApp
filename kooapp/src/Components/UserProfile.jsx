import { useContext } from "react";
import myContext from "./myContext";
import Signin from "./Signin";
import { FiBell } from "react-icons/fi";
import { FcUpRight } from "react-icons/fc";
import Notification from "./Notification";
import { useState,useEffect } from "react";
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
      <p>
        <FcManager />
        admin{value ? value[0] : ""}
      </p>
      {value && (
        <>
    <button style={{border:" none",color: "rgb(136, 136, 136)",fontSize: "19px",
    textDecoration: "none",backgroundColor: "white"}} ><FiBell/><Notification/></button>
    <br /><br />
    <button onClick={handleLogout} style={{border:" none",color: "rgb(136, 136, 136)",fontSize: "19px",
    textDecoration: "none",backgroundColor: "white"}}><FcUpRight/> Logout</button>
    <br /><br />
        </>
      )}
    </div>
  );
};

export default UserProfile
