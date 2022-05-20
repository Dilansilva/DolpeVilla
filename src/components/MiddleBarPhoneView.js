import React from "react";
import {Container,Navbar,Button} from 'react-bootstrap';
import '../../src/App.css';
import {useNavigate} from "react-router-dom";

function MiddleBarPhoneView() {
    const navigate = useNavigate();
    return(
        <div style={{textAlign:"center",marginLeft:'25%',marginRight:'25%'}} className="d-grid gap-2">
            <Button size="lg" style={{margin:'1%',backgroundColor:'transparent',background:'rgba(45, 45, 45, 0.5)'}} onClick={() => {navigate("/bookings")}}>
                MAKE A RESERVATION
            </Button><br/>
            <Button  style={{margin:'1%',backgroundColor:'transparent',border:'1px',background:'rgba(45, 45, 45, 0.5)'}}  size="lg" onClick={() => {navigate("/bookings")}}>
            CHECK IN
            </Button><br/>
            <Button  style={{margin:'1%',backgroundColor:'transparent',border:'1px',background:'rgba(45, 45, 45, 0.5)'}} size="lg" onClick={() => {navigate("/bookings")}}>
            CHECK OUT
            </Button><br/>
            <Button  style={{margin:'1%',backgroundColor:'transparent',border:'1px',background:'rgba(45, 45, 45, 0.5)'}} size="lg" onClick={() => {navigate("/bookings")}}>
            SELECT YOUR COUNTRY
            </Button><br/>
            <Button  style={{margin:'1%',backgroundColor:'transparent',border:'1px',background:'rgba(45, 45, 45, 0.5)'}} size="lg"  onClick={() => {navigate("/bookings")}}>
            BOOK NOW
            </Button><br/>
        </div>
    );
}

export default MiddleBarPhoneView;