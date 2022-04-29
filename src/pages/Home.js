import React from "react";
import backGround from "../assets/DSC01499.jpg";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";

function Home() {
    return (
    <>
        <div className="homeImage" style={{
             backgroundImage: `url(${backGround})`
        }}>
           {
               //Middle bar
           }
           <br/><br/><br/>
           <br/><br/><br/>
           <br/><br/><br/>
           <br/><br/><br/>
           <br/><br/><br/>
           <br/><br/><br/>
           <br/><br/><br/>
           <br/><br/><br/>
           <MiddleBar/>
        </div>
        {/*Dolpe Villa Ella, Sri lanka */}
        <div style={{backgroundColor:'#1F211F'}}>
        <div className="secondDiv">
           <br/><br/><br/>
           <h4 className="dolpeText">Dolpe Villa Ella, Sri lanka</h4>
           <br/><br/>
           <p>Located 8 km from Demodara Nine Arch Bridge, 
           Dolape Villa has accommodations with a restaurant, 
           a garden and a 24-hour front desk for your convenience. 
           Complimentary WiFi is offered throughout the property.</p>

           <p>Some of the units have satellite flat-screen TV, 
           a fully equipped kitchenette with a minibar, 
           and a private bathroom with a hot tub and bathrobes.</p>

           <p>The lodge offers a continental or à la carte breakfast.</p>

           <p>Dolape Villa has a playground</p>

           <p>A water park is available on site and cycling can 
           be enjoyed within close proximity of the accommodation.</p>
           <br/><br/><br/>
        </div>
        </div>
    </>
    );
}

export default Home;