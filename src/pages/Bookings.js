import React from "react";
import backGround from "../assets/bookingsBack.jpeg";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";

import Blue from "../assets/_1322204.jpg";
import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";
import FirstImg from "../assets/_1344168.jpg";
import SecondImg from "../assets/_1322232.jpg";
import ThirdImg from "../assets/287522687.jpg"

const styles = theme => ({
    multilineColor:{
        color:'red'
    }
});

function Bookings() {
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
        <div style={{backgroundColor:'#1F211F'}}><br/>
            <div style={{textAlign:'center'}}><h4 className="dolpeText">Dolpe Villa Ella, Sri lanka</h4></div>
                <div className="secondDiv">
                    <hr style={{color:'#7CA844'}}/>
                        <Form>
                            {/*Full name section */}
                            <Row></Row>
                            {/*Address*/}
                            <Row></Row>
                            {/*Street address*/}
                            <Row></Row>
                            {/*Street address line 02 */}
                            <Row></Row>
                            {/*Contact details */}
                            <Row></Row>
                            {/*Dates */}
                            <Row></Row>
                            {/*Select your rooms */}
                            <Row></Row>
                            {/*Number of persons */}
                            <Row></Row>
                            {/*Payment method */}
                            <Row></Row>
                            {/*special statements*/}
                            <Row></Row>
                            {/*Submit*/}
                            <Row></Row>
                            </Form>
                </div>
        </div>
    </>
    );
}

export default Bookings;