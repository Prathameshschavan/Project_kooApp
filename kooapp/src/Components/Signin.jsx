import Button from 'react-bootstrap/Button';
import React,{ useState,useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import myContext from "./myContext";
import { AiFillGoogleCircle,AiFillApple,AiOutlineMail,AiOutlineWhatsApp } from "react-icons/ai";
import "./Signin.css"
import UserProfile from './UserProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropDown from './DropDwon';
import Alert from 'react-bootstrap/Alert';


var mobilenumberfinal = [];
let OTP1;
function MyVerticallyCenteredModal(props) {
  const [otp, setOtp] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [value, setValue] = useState(localStorage.getItem('key') || '');
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(false);

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
    localStorage.setItem('papa',e.target.value);
    mobilenumberfinal=[];
    mobilenumberfinal.push(mobileNumber+[1]);
    // console.log(mobilenumberfinal)
  };
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!isVerified) {
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        setIsVerified(true);
        setIsActive(true);
        OTP1=Math.floor(1000 + Math.random() * 9000);
        console.log(OTP1);
        alert("YOUR OTP IS : "+OTP1);
      }, 1000);
    } else {
      setIsSignedIn(true);
      window.location.reload();
      alert("Sign In Successful!")
      window.location.href="./Feed"
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
     
      <br /> 
        {/* <div style={{display:"flex"}}> */}
           {/* <DropDown/> */}
        {!isVerifying && !isVerified && !isSignedIn && (
        <form  onSubmit={handleSubmit}>
        <h4 style={{textAlign:"center !important", margin:"-8% 0 3% 0"}}>Enter Your Mobile Number</h4>
          <input
            type="tel" className='nayainput1'
            placeholder="Enter Your Mobile Number"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
          <br/><br />
          <button type="submit" className='nayainput1' >GET OTP</button>
        </form>
        )}
         {/* </div> */}

         {isVerifying && <Spinner animation="border"  role="status">
        <span className="visually-hidden"><p>Verifying...</p></span>
        </Spinner>}
        {isVerified && (
        <Alert style={{margin :"-7% 0 0 0"}} variant="success">
          <h4>Enter Your OTP!</h4>
        </Alert>
        )}

         {isVerified && !isSignedIn && (
        <form  onSubmit={handleSubmit}>
          <h2>OTP Sent to+{mobileNumber}</h2>
          <input
            type="text" className='nayainput'
            placeholder="Enter the OTP"
            value={otp}
            onChange={handleOtpChange}
          />
          <br/> <br />
        
          <button type="submit" className='nayainput'>Verify</button>
          <br />
          <a href="/login"> <h4>Resend OTP (0 : {seconds}) </h4></a>
        </form>
      )}
       
        {isSignedIn && <h2>{mobileNumber} <h2>Sign in SucessFul!</h2></h2>}
        <br /> 
        <h1 style={{ borderBottom: "2px solid lightpink"}}></h1>
        <br />
        <button className='nayainput1'><AiFillGoogleCircle/>  Sign in with Google</button>
        <br /><br />
        <button className='nayainput2'><AiFillApple/>  Sign in with Apple </button>
        <br /><br />
        <button className='nayainput3'><AiOutlineMail/>  Sign-in with E-mail</button>
        <br /><br />
        <div style={{display:"flex",justifyContent:"center",alignItems:"baseline",gap:"5px",margin:"0"}}>
         <input type="checkbox" style={{margin:"0"}} />
        <p style={{margin:"0",fontSize:"15px"}}>I agree to receive important updates via Whatsapp  <AiOutlineWhatsApp/></p>
        </div>
        <p style={{margin:"0px",fontSize:"15px"}}>By continuing, I accept Terms of Service, Privacy Policy and </p>
        <p style={{margin:"0px",fontSize:"15px"}}>Community Guidelines.</p>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function Signin (props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <myContext.Provider value={mobilenumberfinal}>
        <div>
        {/* <UserProfile props={mobilenumberfinal}/> */}
        </div>
      </myContext.Provider>
      <Button   variant='light' className='urgent' onClick={() => setModalShow(true)}>
       SignIn
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        
    </>
  );
}

export default Signin;