import React from "react";
import {Container,Navbar,Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

function MiddleBarPhoneView() {
    const navigate = useNavigate();
    return(
        <div style={{textAlign:"center",marginLeft:'25%',marginRight:'25%'}} className="d-grid gap-2">
            <Button variant="primary" size="lg" style={{margin:'1%'}} onClick={() => {navigate("/bookings")}}>
                MAKE A RESERVATION
            </Button><br/>
            <Button variant="primary" size="lg" style={{margin:'1%'}} onClick={() => {navigate("/bookings")}}>
            CHECK IN
            </Button><br/>
            <Button variant="primary" size="lg" style={{margin:'1%'}} onClick={() => {navigate("/bookings")}}>
            CHECK OUT
            </Button><br/>
            <Button variant="primary" size="lg" style={{margin:'1%'}} onClick={() => {navigate("/bookings")}}>
            SELECT YOUR COUNTRY
            </Button><br/>
            <Button variant="primary" size="lg" style={{margin:'1%'}} onClick={() => {navigate("/bookings")}}>
            BOOK NOW
            </Button><br/>
        </div>
    );
}

export default MiddleBarPhoneView;