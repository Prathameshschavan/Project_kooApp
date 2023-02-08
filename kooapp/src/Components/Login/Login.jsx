import React, { useState } from "react";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
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
      // Pretend to send a request to receive an OTP
      setIsVerifying(true);
      setTimeout(() => {
        // Pretend to receive an OTP
        setIsVerifying(false);
        setIsVerified(true);
      }, 1000);
    } else {
      // Pretend to sign in
      setIsSignedIn(true);
    }
  };

  return (
    <div>
      {isSignedIn && <p>{mobileNumber}</p>}
      <h1>Hello My name is shubham</h1>
      {!isVerifying && !isVerified && !isSignedIn && (
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
          <button type="submit">Get OTP</button>
        </form>
      )}
      {isVerifying && <p>Verifying...</p>}
      {isVerified && !isSignedIn && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter the OTP"
            value={otp}
            onChange={handleOtpChange}
          />
          <button type="submit">Sign in</button>
        </form>
      )}
    </div>
  );
};

export default Login;
