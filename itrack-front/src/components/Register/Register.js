import React from "react";
import './Register.css';

function Register () {
    return (
        <div className="center">
            <h1>Welcome</h1>
            <form>
                <div className="inputbox">
                    <input type="text" required="required"/>
                    <span>Name</span>
                </div>
                <div className="inputbox">
                    <input type="text" required="required"/>
                    <span>Email</span>
                </div>
                <div className="inputbox">
                    <input type="text" required="required"/>
                    <span>User name</span>
                </div>
                <div className="inputbox">
                    <input type="text" required="required"/>
                    <span>Password</span>
                </div>
                <div className="inputbox">
                    <input type="button" value="submit"/>
                </div>
            </form>
        </div>
    );
}

export default Register;