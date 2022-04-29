import React from "react";
import backGround from "../assets/MobilePopUpBackGround.jpg";
import '../../src/App.css';

function Home() {
    return (
        <div className="homeImage" style={{
             backgroundImage: `url(${backGround})`
        }}>
           <p>nlnln</p>
           <p>nlnln</p>
           <p>nlnln</p>
        </div>
    );
}

export default Home;