import React, {useState} from "react";
import './Login.css';


function Login () {
    const [useName,setUserName] = useState();
    const [password,setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="login" onSubmit={handleSubmit}>
            <div className="loginLeft">
                <h1>Hello</h1>
            </div>
            <div className="loginRight">
                <h1>Welcome to iTrack</h1>
                <p>Let’s log in to be better you (your health)</p>
                <input className="iplogin" type="email" placeholder="Email" onChange={e => setUserName(e.target.value)}></input>
                <br/>
                <input className="iplogin" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                <br/>
                <button className="btlogin">Login</button>
            </div>
        </form>
    );
}

export default Login;