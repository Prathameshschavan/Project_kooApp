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
     width:"242px",
     position: "sticky",
      top: "18px",
     padding: "5%",
     marginLeft:"40%",
     textAlign: "left" ,
     

    
 }
 var imagestyle={
  width: "3rem",
  margin: "auto 3rem"
 }

let loginStatus = localStorage.getItem("papa");
console.log(loginStatus);
  return (
    <div style={style2}>
       <Link to="/"><img src="https://www.kooapp.com/assets/2d634360.svg" style={imagestyle} alt="" /></Link>
       <br /> 
       <div id="navitems">
          <Button variant="primary" style={style3}><Link style={aStyle} to="/"><AiOutlineHome/> Feed</Link></Button>{' '}
          <UserProfile/>
          <Button variant="primary" style={style3}><Link style={aStyle} to="/Explore"><AiOutlineBorderlessTable/> Explore</Link> </Button>{' '}
          <Language/>
          <Button variant="primary" style={style3}> <Link style={aStyle} to="/Search"><AiOutlineSearch/>  Search </Link></Button>{' '}
       </div>
       
      <Button className="newbtn"> <Link className="COLOR" to="/Koo">+ Koo</Link></Button>
      <br /> <br />  
      {
      loginStatus ?   <></>:<Signin/>}
    </div>
  );
}
export default Navbar;