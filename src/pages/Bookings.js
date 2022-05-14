import React from "react";
import backGround from "../assets/bookingsBack.jpeg";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";

import Blue from "../assets/_1322204.jpg";
import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";
import { MDBBtn,MDBTextArea } from 'mdb-react-ui-kit';

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
                            <Row>

                            </Row>
                            {/*Payment method */}
                            <hr style={{color:'#7CA844'}}/>
                            <Row>
                                <Form>
                                    <Form.Label><p className="dolpeText">Payment Method</p></Form.Label>
                                        <div className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Visa Card"
                                            name="visa"
                                            type="radio"
                                            className="dolpeText"
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="Master Card"
                                            name="master"
                                            type="radio"
                                            className="dolpeText"
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="American Card"
                                            name="american"
                                            type="radio"
                                            className="dolpeText"
                                        />
                                        </div>
                                </Form>
                            </Row>
                            {/*special statements*/}
                            <Row>
                                <Col>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><p className="dolpeText">Do you have any special request? </p></Form.Label>
                                                <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            {/*Submit*/}
                            <Row style={{textAlign:'center'}}>
                                <Col>
                                    <MDBBtn color='success'>SUBMIT</MDBBtn>
                                </Col>
                            </Row>
                            </Form>
                </div>
        </div>
    </>
    );
}

export default Bookings;