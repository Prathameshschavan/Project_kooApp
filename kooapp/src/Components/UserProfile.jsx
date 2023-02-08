import { useContext } from "react";
import myContext from "./myContext";
import Signin from "./Signin";
import { FcManager } from "react-icons/fc";
const UserProfile = (props) => {
  var value = localStorage.getItem("papa");
  const handleDelete = () => {
  localStorage.removeItem("papa");
  window.location.reload(false);
  };
  const handleLogout = () => {
  localStorage.removeItem("papa");
  window.location.reload(false);
  };
  return (
  <div>
  <p>
  <FcManager />
  admin {value}
  </p>
  <button onClick={handleDelete}>Delete</button>
  <button onClick={handleLogout}>Logout</button>
  </div>
  );
  };
export default UserProfile  