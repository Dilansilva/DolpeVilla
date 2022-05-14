import React from "react";
import backGround from "../assets/bookingsBack.jpeg";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";

import Blue from "../assets/_1322204.jpg";
import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";
import { MDBBtn,MDBTextArea } from 'mdb-react-ui-kit';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import FirstImg from "../assets/_1344168.jpg";
import SecondImg from "../assets/_1322232.jpg";
import ThirdImg from "../assets/287522687.jpg"

const styles = theme => ({
    multilineColor:{
        color:'#C4C4C4'
    }
});

const color = "white";

function Bookings() {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
      setValue(newValue);
    };
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
                            <Row>
                                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label><h5 className="dolpeText">Full Name</h5></Form.Label>
                                </Form.Group>
                            </Row>
                            {/*Full name section */}
                            <Row>
                                <Col sm={6}>
                                    <Form>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control />
                                                    <Form.Label><p className="dolpeText">First Name</p></Form.Label>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col sm={6}>
                                   
                                <Form>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control />
                                                    <Form.Label><p className="dolpeText">Last Name</p></Form.Label>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            {/*Address*/}
                            <Row>
                                <Col>
                                    <Form>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><h5 className="dolpeText">Address</h5></Form.Label>
                                                    <Form.Control />
                                                        <Form.Label><p className="dolpeText">Street Address</p></Form.Label>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            {/*Street address*/}
                            <Row>
                                <Col>
                                    <Form>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control />
                                                    <Form.Label><p className="dolpeText">Street Address Line 02</p></Form.Label>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            {/*Street address line 02 */}
                            <Row>
                                <Col sm={3}>
                                    <Form>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control />
                                                    <Form.Label><p className="dolpeText">City</p></Form.Label>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col sm={3}>
                                    <Form>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control />
                                                    <Form.Label><p className="dolpeText">State / Province</p></Form.Label>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col sm={3}>
                                    <Form>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control />
                                                    <Form.Label><p className="dolpeText">Postal / Zip Code</p></Form.Label>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col sm={3}>
                                    <Form>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control />
                                                    <Form.Label><p className="dolpeText">Country</p></Form.Label>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            {/*Contact details */}
                            <Row>
                                <Col sm={6}>
                                    <Form>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><p className="dolpeText">Contact Number</p></Form.Label>
                                                <Form.Control />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col sm={6}>
                                   
                                <Form>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><p className="dolpeText">E-Mail</p></Form.Label>
                                                <Form.Control />
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row><br/>
                            {/*Dates */}
                            <Row>
                               <Col sm={6}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack spacing={3}>
                                            <MobileDatePicker
                                            style={{color:'white'}}
                                            label="Check-In Date"
                                            inputFormat="MM/dd/yyyy"
                                            value={value}
                                            onChange={handleChange}
                                            renderInput={(params) => <TextField {...params} 
                                            sx={{
                                                svg: { color },
                                                input: { color },
                                                label: { color }
                                              }} 
                                            />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                               </Col>
                               <Col sm={6}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack spacing={3}>
                                            <MobileDatePicker
                                            label="Check-Out Date"
                                            inputFormat="MM/dd/yyyy"
                                            value={value}
                                            onChange={handleChange}
                                            renderInput={(params) => 
                                                <TextField {...params}
                                                sx={{
                                                    svg: { color },
                                                    input: { color },
                                                    label: { color }
                                                  }} 
                                                />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                               </Col>
                            </Row>
                            {/*Select your rooms */}
                            <hr style={{color:'#7CA844'}}/>
                            <Row>
                                <Form>
                                    <Form.Label><p className="dolpeText">Select your rooms</p></Form.Label>
                                        <div className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Attic Suite Room ( Maximum upto 3 adults )"
                                            name="rooms"
                                            type="checkbox"
                                            className="dolpeText"
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="Deluxe Room ( Maximum upto 4 adults )"
                                            name="rooms"
                                            type="checkbox"
                                            className="dolpeText"
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="Standard Room ( Maximum upto 4 adults )"
                                            name="rooms"
                                            type="checkbox"
                                            className="dolpeText"
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="Budget Villa 01 ( Maximum upto 3 adults )"
                                            name="rooms"
                                            type="checkbox"
                                            className="dolpeText"
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="Budget Villa 02 ( Maximum upto 3 adults )"
                                            name="rooms"
                                            type="checkbox"
                                            className="dolpeText"
                                        /><br/><br/>
                                        </div>
                                </Form> 
                            </Row>
                            {/*Number of persons */}
                            <Row>
                                <Col sm={6}>
                                    <Form>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><p className="dolpeText">Number of Adults(Age Above 6)</p></Form.Label>
                                                <Form.Control />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col sm={6}>
                                   
                                <Form>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><p className="dolpeText">Number of Kids (Age Under 6)</p></Form.Label>
                                                <Form.Control />
                                        </Form.Group>
                                    </Form>
                                </Col>
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
                                            name="payment"
                                            type="radio"
                                            className="dolpeText"
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="Master Card"
                                            name="payment"
                                            type="radio"
                                            className="dolpeText"
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="American Card"
                                            name="payment"
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
                            </Form><br/>
                </div>
        </div>
    </>
    );
}

export default Bookings;