import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import './Login.css';

async function loginUser(credentials) {
    return fetch('https://www.mecallapi.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

function Login () {
    const [username,setUserName] = useState();
    const [password,setPassword] = useState();

    

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            username,
            password
        });
        if ('accessToken' in response) {
            localStorage.setItem('accessToken', response.accessToken);
            window.location.href = "/";
        }
    }

    return (
        <div className="in">
            <form className="login lo" onSubmit={handleSubmit}>
                    <div className="loginLeft">
                        <img className="login_img" src="./login_1.png"/>
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
        </div>
    );
}

export default Login;