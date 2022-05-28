import React,{useState,useEffect} from "react";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";

import { Col,Row, Form,HelpBlock } from "react-bootstrap";
import { MDBBtn } from 'mdb-react-ui-kit';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import {useNavigate} from "react-router-dom";
import MiddleBarPhoneView from "../components/MiddleBarPhoneView";

import axios from 'axios';

import {widthScreen} from "../constant/Constant";

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

const color = "white";

function Bookings() {
   
    const navigate = useNavigate();

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
  }

  const {height,width} = useWindowDimensions();

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    const [firstName,setFirstName] = useState("");
    const [firstNameErr,setFirstNameErr] = useState("");

    const firstNameChangeHandler = (event) => {
        const value = event.target.value
        value ? setFirstNameErr("") : setFirstNameErr("Please Enter The First Name")
        value ? setFirstName(value) : setFirstName("")
    }

    const [lastName,setLastName] = useState("");
    const [lastNameErr,setLastNameErr] = useState("");

    const lastNameChangeHandler = (event) => {
        const value = event.target.value
        value ? setLastNameErr("") : setLastNameErr("Please Enter The Last Name")
        value ? setLastName(value) : setLastName("")
    }

    const [address,setAddress] = useState("");
    const [addressErr,setAddressErr] = useState("");

    const addressChangeHandler = (event) => {
        const value = event.target.value
        value ? setAddressErr("") : setAddressErr("Please Enter The Street Address")
        value ? setAddress(value) : setAddress("")
    }

    const [addressTwo,setAddressTwo] = useState("");

    const addressTwoChangeHandler = (event) => {
        const value = event.target.value
        setAddressTwo(value);
    }
   
    return (
    <>
       {
           width > widthScreen ? 
           <div className="homeImage" style={{
                backgroundImage: `url("https://i.postimg.cc/J05cnNnQ/bookings-Back.jpg")`
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
           </div> : <MiddleBarPhoneView/>
       }
        {/*Dolpe Villa Ella, Sri lanka */}
        <div style={{backgroundColor:'#1F211F'}}><br/>
            <div style={{textAlign:'center'}}><h3 className="dolpeText">Reservation Application</h3></div>
                <div className="secondDiv">
                    <hr style={{color:'#7CA844'}}/><br/>
                        <Form>
                            <Row>
                                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label><h5 className="dolpeText">Full Name</h5></Form.Label>
                                </Form.Group>
                            </Row>
                            {/*Full name section */}
                            <Row>
                                <Col sm={6}>
                                
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control 
                                                    type="text"
                                                    placeholder="Enter First Name Here"
                                                    onBlur={firstNameChangeHandler}
                                                />
                                                <Form.Label><p className="dolpeText">First Name <span style={{color:'red'}}>&nbsp;&nbsp;&nbsp;{firstNameErr}</span></p></Form.Label>
                                        </Form.Group>
                                    
                                </Col>
                                <Col sm={6}>
                                   
                              
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Last Name Here"
                                                    onBlur={lastNameChangeHandler} 
                                                />
                                                    <Form.Label><p className="dolpeText">Last Name <span style={{color:'red'}}>&nbsp;&nbsp;&nbsp;{lastNameErr}</span></p></Form.Label>
                                        </Form.Group>
                                  
                                </Col>
                            </Row>
                            {/*Address*/}
                            <Row>
                                <Col>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><h5 className="dolpeText">Address</h5></Form.Label>
                                                    <Form.Control 
                                                        type="text"
                                                        placeholder="Enter Address Here"
                                                        onBlur={addressChangeHandler}
                                                    />
                                                        <Form.Label><p className="dolpeText">Street Address <span style={{color:'red'}}>&nbsp;&nbsp;&nbsp;{addressErr}</span></p></Form.Label>
                                        </Form.Group>
                                </Col>
                            </Row>
                            {/*Street address*/}
                            <Row>
                                <Col>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Address Line 02 Here"
                                                    onBlur={addressTwoChangeHandler} 
                                                />
                                                    <Form.Label><p className="dolpeText">Street Address Line 02</p></Form.Label>
                                        </Form.Group>
                                </Col>
                            </Row>
                            {/*Street address line 02 */}
                            <Row>
                                <Col sm={3}>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control 
                                                    type="text"
                                                    placeholder="Enter City Here"
                                                    onBlur={addressTwoChangeHandler} 
                                                />
                                                    <Form.Label><p className="dolpeText">City</p></Form.Label>
                                        </Form.Group>
                                </Col>
                                <Col sm={3}>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control />
                                                    <Form.Label><p className="dolpeText">State / Province</p></Form.Label>
                                        </Form.Group>
                                </Col>
                                <Col sm={3}>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control />
                                                    <Form.Label><p className="dolpeText">Postal / Zip Code</p></Form.Label>
                                        </Form.Group>
                                </Col>
                                <Col sm={3}>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control />
                                                    <Form.Label><p className="dolpeText">Country</p></Form.Label>
                                        </Form.Group>
                                </Col>
                            </Row>
                            {/*Contact details */}
                            <Row>
                                <Col sm={6}>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><p className="dolpeText">Contact Number</p></Form.Label>
                                                <Form.Control />
                                        </Form.Group>
                                </Col>
                                <Col sm={6}>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><p className="dolpeText">E-Mail</p></Form.Label>
                                                <Form.Control />
                                        </Form.Group>
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
                                    <Form.Label><p className="dolpeText">Select your rooms</p></Form.Label>
                                        <div className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Attic Suite Room ( Maximum upto 3 adults )"
                                            name="rooms"
                                            type="checkbox"
                                            className="dolpeText"
                                            // onChange={(e) => {console.log(e.target)}}
                                            defaultChecked={false}
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="Deluxe Room ( Maximum upto 4 adults )"
                                            name="rooms"
                                            type="checkbox"
                                            className="dolpeText"
                                            // onChange={() => deluxe ? setDeluxe(false) : setDeluxe(true)}
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="Standard Room ( Maximum upto 4 adults )"
                                            name="rooms"
                                            type="checkbox"
                                            className="dolpeText"
                                            //onChange={() => deluxe ? setStandard(false) : setStandard(true)}
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="Budget Villa 01 ( Maximum upto 3 adults )"
                                            name="rooms"
                                            type="checkbox"
                                            className="dolpeText"
                                            //onChange={() => deluxe ? setBudgetOne(false) : setBudgetOne(true)}
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="Budget Villa 02 ( Maximum upto 3 adults )"
                                            name="rooms"
                                            type="checkbox"
                                            className="dolpeText"
                                            //onChange={() => deluxe ? setBudgetTwo(false) : setBudgetTwo(true)}
                                        /><br/><br/>
                                        </div>
                            </Row>
                            {/*Number of persons */}
                            <Row>
                                <Col sm={6}>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><p className="dolpeText">Number of Adults(Age Above 6)</p></Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                </Col>
                                <Col sm={6}>
                                   
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><p className="dolpeText">Number of Kids (Age Under 6)</p></Form.Label>
                                                <Form.Control />
                                        </Form.Group>
                                </Col>
                            </Row>
                            {/*Payment method */}
                            <hr style={{color:'#7CA844'}}/>
                            <Row>
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
                            </Row>
                            {/*special statements*/}
                            <Row>
                                <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><p className="dolpeText">Do you have any special request? </p></Form.Label>
                                                <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                </Col>
                            </Row>
                            {/*Submit*/}
                            <Row style={{textAlign:'center'}}>
                                <Col>
                                    <MDBBtn color='success'>SUBMIT</MDBBtn>
                                </Col>
                            </Row>
                            </Form>
                            <br/>
                </div>
        </div>
    </>
    );
}

export default Bookings;