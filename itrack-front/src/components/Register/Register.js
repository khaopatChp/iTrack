import React from "react";
import './Register.css';

function Register () {
    return (
        <div class="center">
            <h1>Our Newsletter</h1>
            <form>
                <div class="inputbox">
                    <input type="text" required="required"/>
                    <span>Name</span>
                </div>
                <div class="inputbox">
                    <input type="text" required="required"/>
                    <span>Email</span>
                </div>
                <div class="inputbox">
                    <input type="text" required="required"/>
                    <span>User name</span>
                </div>
                <div class="inputbox">
                    <input type="text" required="required"/>
                    <span>Password</span>
                </div>
                <div class="inputbox">
                    <input type="button" value="submit"/>
                </div>
            </form>
        </div>
    );
}

export default Register;