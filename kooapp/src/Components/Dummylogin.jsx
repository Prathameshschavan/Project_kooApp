import "./Dummy.css"
import React, { useState } from 'react';
const credentials = {
username: 'Thehindu',
};
function Login() {
const [username, setUsername] = useState('');
const [error, setError] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState(false);
const handleSubmit = (event) => {
event.preventDefault();
if(username === credentials.username ) {
localStorage.setItem('token', 'your-token');
setIsLoggedIn(true);
alert("Login Succesfull!")
} else {
setError('Username not valid');
}
};

const handleLogout = () => {
localStorage.removeItem('token');
setIsLoggedIn(false);
alert("Logout Succesfull!")
}

return (
<div>
{isLoggedIn ? (
<div className="loggedIn">
<button onClick={handleLogout}>{username}</button>
</div>
) : (
<form onSubmit={handleSubmit}>
<h1>Login Page</h1>
<label>
Username: "Thehindu"
<input
type="text"
value={username}
onChange={(event) => setUsername(event.target.value)}
/>
</label>
<br />
<br />
<button type="submit">Login</button>
{error && <p>{error}</p>}
</form>
)}
<br />
<br />
<br />
<h2>For Logout Click On "Thehindu"</h2>
<br />
<br />
</div>
);
}

export default Login;