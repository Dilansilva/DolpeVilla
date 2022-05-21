import React from "react";
import {Container,Navbar,Button} from 'react-bootstrap';
import '../../src/App.css';
import {useNavigate} from "react-router-dom";

function MiddleBarPhoneView() {
    const navigate = useNavigate();
    return(
        <div style={{textAlign:"center"
                    ,padding:'15%',
                    backgroundImage:`url("https://i.postimg.cc/gc7DNV6B/48800644637-e09e7ecc6b-b.jpg")`,
                    backgroundPosition:'bottom 40%'}} className="d-grid gap-2">
            <h1 className="dolpeMainText">DOLPE VILLA <br/>ELLA</h1>
            <Button size="lg" style={{margin:'1%',backgroundColor:'transparent',background:'rgba(45, 45, 45, 0.5)'}} onClick={() => {navigate("/bookings")}}>
                MAKE A RESERVATION
            </Button>
            <Button  style={{margin:'1%',backgroundColor:'transparent',border:'1px',background:'rgba(45, 45, 45, 0.5)'}}  size="lg" onClick={() => {navigate("/bookings")}}>
            CHECK IN
            </Button>
            <Button  style={{margin:'1%',backgroundColor:'transparent',border:'1px',background:'rgba(45, 45, 45, 0.5)'}} size="lg" onClick={() => {navigate("/bookings")}}>
            CHECK OUT
            </Button>
            <Button  style={{margin:'1%',backgroundColor:'transparent',border:'1px',background:'rgba(45, 45, 45, 0.5)'}} size="lg" onClick={() => {navigate("/bookings")}}>
            SELECT YOUR COUNTRY
            </Button>
            <Button  style={{margin:'1%',backgroundColor:'transparent',border:'1px',background:'rgba(45, 45, 45, 0.5)'}} size="lg"  onClick={() => {navigate("/bookings")}}>
            BOOK NOW
            </Button>
        </div>
    );
}

export default MiddleBarPhoneView;