import "./Navbar.css"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Language from "./Language";
import Signin from "./Signin";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineBorderlessTable } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import UserProfile from "./UserProfile";
function Navbar() {
    var aStyle = {
    color: "#888",
    // margin: "9%",
    fontSize:" 19px",
    textDecoration: "none",
     
  };
  var style3={
    backgroundColor: "white !important",
  }
 var style2={
     fontSize: "18px",
     display:"grid",
     width:"25%"
 }
 var imagestyle={
  width: "3rem",
  margin: "auto 3rem"
 }
  return (
    <div style={style2}>
       <Link to="/"><img src="https://www.kooapp.com/assets/2d634360.svg" style={imagestyle} alt="" /></Link>
       <br /> 
      <Button variant="primary" style={style3}><Link style={aStyle} to="/"><AiOutlineHome/> Feed</Link></Button>{' '}
       <br /> 
      <Button variant="primary" style={style3}><Link style={aStyle} to="/Explore"><AiOutlineBorderlessTable/> Explore</Link> </Button>{' '}
      <br /> 
      <UserProfile/>
      {/* <Button variant="primary" style={style3}><Link style={aStyle} to="/Userprofile"><AiOutlineBorderlessTable/> Profile</Link> </Button>{' '} */}
      {/* <br />  */}
       <Language/>
      <br /> 
      <Button variant="primary" style={style3}> <Link style={aStyle} to="/Search"><AiOutlineSearch/>  Search </Link></Button>{' '}
      <br /> 
      <Button className="newbtn"> <Link className="COLOR" to="/Koo">+ Koo</Link></Button>
      <br /> <br />  
      <Signin/>
    </div>
  );
}
export default Navbar;