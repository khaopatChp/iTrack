import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Home () {
    return (
        <div className="Home">
            <div className="home_item">
                <div className="home_header">
                    <p>Better healthy With Us</p>
                    <h1>Start your health</h1>
                    <h1>With your fingertips</h1>
                </div>
                <Link  to="/add-activity"><button className="home_bt">Start Your Healthy</button></Link>
            </div>
            
        </div>
    );
}

export default Home;