import React from "react";
import backGround from "../assets/MobilePopUpBackGround";

function Home() {
    return (
        <div style={{
             backgroundImage: `url(${backGround})`
        }}>
            <p>Home</p>
        </div>
    );
}

export default Home;