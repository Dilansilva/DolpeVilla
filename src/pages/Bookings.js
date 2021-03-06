import React,{useState,useEffect} from "react";
import '../../src/App.css';
import "react-datepicker/dist/react-datepicker.css";
import MiddleBar from "../components/MiddleBar";

import { Col,Row, Form,HelpBlock } from "react-bootstrap";
import { MDBBtn } from 'mdb-react-ui-kit';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {useNavigate} from "react-router-dom";
import MiddleBarPhoneView from "../components/MiddleBarPhoneView";
import Header from "../components/Header";
import {db} from "../firebase/firebase";

import {widthScreen} from "../constant/Constant";
import DatePicker from "react-datepicker";
import { addDoc, collection, getDocs } from "firebase/firestore";

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

  const dateInterditesRaw = new Date().toLocaleDateString();

    const [value, setValue] = React.useState(new Date().toLocaleDateString());

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

    const [city,setCity] = useState("");

    const cityChangeHandler = (event) => {
        const value = event.target.value
        setCity(value);
    }

    const [state,setState] = useState("");

    const stateChangeHandler = (event) => {
        const value = event.target.value
        setState(value);
    }

    const [postal,setPostal] = useState("");
    const postalChangeHandler = (event) => {
        const value = event.target.value
        setPostal(value);
    }

    const [country,setCountry] = useState("");
    const countryChangeHandler = (event) => {
        const value = event.target.value
        setCountry(value);
    }

    const [phone,setPhone] = useState("");
    const [phoneErr,setPhonrErr] = useState("");
    const phoneChangeHandler = (event) => {
        const value = event.target.value
        setPhone(value);
        value ? setPhonrErr("") : setPhonrErr("Please Enter The Phone Number")
    }
    
    const [email,setEmail] = useState("");
    const [emailErr,setEmailErr] = useState("");
    const emailChangeHandler = (event) => {
        const value = event.target.value
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const emailTrue = emailRegex.test(value)
        emailTrue ? setEmailErr("") : setEmailErr("Please Enter a valid Email Address here")
        emailTrue ? setEmail(value) : setEmail("")
    }

    const [checkInDate,setCheckInDate] = useState(null);
    const [checkOutDate,setCheckOutDate] = useState(null);
    const [bookingDays,setbookingDays] = useState(null);
    const [numAdults,setNumAdults] = useState();
    const [numChild,setNumChild] = useState();

    const [prices,setPrices] = useState([]);
    const pricesCollectionRef = collection(db,"pricing");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(pricesCollectionRef);
            setPrices(data.docs.map((doc) => ({...doc.data(), id : doc.id}))); 
        
        }
        getUsers();
      
    },[]);

    const [request,setRequest] = useState();

    const reservationCollectionRef = collection(db,"reservation");
    const submitUsers = async (e) => {
        e.preventDefault();
        await addDoc(reservationCollectionRef,{
            firstName : firstName,
            lastName : lastName,
            address : address,
            addressTwo : addressTwo,
            city : city,
            state : state,
            postal : postal,
            country : country,
            phone : phone,
            email : email,
            checkInDate : checkInDate,
            checkOutDate : checkOutDate,
            days : bookingDays,
            room : rooms,
            price : price,
            adults : numAdults,
            kids : numChild,
            request : request
        });
        alert("Sucess!");
        
        setTimeout(function(){
            window.location.reload();
          });
    }

    const numOfDays = (e) => {
        setCheckOutDate(e);
        const d1 = checkInDate,
      d2 = e,
      diff = (d2-d1)/864e5,
      dateFormat = {weekday:'long',month:'short',day:'numeric'},
      dates = Array.from(
        {length: diff+1},
        (_,i) => {
          const date = new Date() 
          date.setDate(d1.getDate()+i) 
          const [weekdayStr, dateStr] = date.toLocaleDateString('en-US',dateFormat).split(', ')
          return `${dateStr} ${weekdayStr}`
        }
      )
    setbookingDays(dates.length - 1);
    }
    
    const [attic,setAttic] = useState();
    const [deluxe,setDeluxe] = useState();
    const [standard,setStandard] = useState();
    const [budgetOne,setBudgetOne] = useState();
    const [budgetTwo,setBudgetTwo] = useState();  
    const [price,setPrice] = useState(0);  
    const [children,setChildren] = useState(0);
    const [adult,setAdult] = useState(0);
    const [rooms,setRooms] = useState([]);
    var priceSet = 0;
    var childreSet = 0;
    var adultSet = 0;
    var arr = [];
    useEffect(() => {
        if(attic === true){
            priceSet = price;
            priceSet = priceSet + ((prices[0].price)*bookingDays);
            childreSet = children;
            childreSet = childreSet + 2;
            setChildren(childreSet)
            adultSet = adult;
            adultSet = adultSet + 3;
            setAdult(adultSet);
            setPrice(priceSet);
            arr = rooms;
            arr.push("attic");
            setRooms(arr);
        } else if(attic === false){
            priceSet = price;
            priceSet = priceSet - ((prices[0].price)*bookingDays);
            childreSet = children;
            childreSet = childreSet - 2;
            setChildren(childreSet)
            adultSet = adult;
            adultSet = adultSet - 3;
            setAdult(adultSet);
            setPrice(priceSet);
            arr = rooms;
            arr.pop("attic");
            setRooms(arr);
        }
    },[attic]);

    useEffect(() => {
        if(deluxe === true){
            priceSet = price;
            priceSet = priceSet + ((prices[4].price)*bookingDays);
            childreSet = children;
            childreSet = childreSet + 3;
            setChildren(childreSet)
            adultSet = adult;
            adultSet = adultSet + 4;
            setAdult(adultSet);
            setPrice(priceSet);
            arr = rooms;
            arr.push("deluxe");
            setRooms(arr);
        } else if(deluxe === false){
            priceSet = price;
            priceSet = priceSet - ((prices[4].price)*bookingDays);
            childreSet = children;
            childreSet = childreSet - 3;
            setChildren(childreSet)
            adultSet = adult;
            adultSet = adultSet - 4;
            setAdult(adultSet);
            setPrice(priceSet);
            arr = rooms;
            arr.pop("deluxe");
            setRooms(arr);
        }
    },[deluxe]);

    useEffect(() => {
        if(standard === true){
            priceSet = price;
            priceSet = priceSet + ((prices[2].price)*bookingDays);
            childreSet = children;
            childreSet = childreSet + 2;
            setChildren(childreSet)
            adultSet = adult;
            adultSet = adultSet + 3;
            setAdult(adultSet);
            setPrice(priceSet);
            arr = rooms;
            arr.push("standard");
            setRooms(arr);
        } else if(standard === false){
            priceSet = price;
            priceSet = priceSet - ((prices[2].price)*bookingDays);
            childreSet = children;
            childreSet = childreSet - 2;
            setChildren(childreSet)
            adultSet = adult;
            adultSet = adultSet - 3;
            setAdult(adultSet);
            setPrice(priceSet);
            arr = rooms;
            arr.pop("standard");
            setRooms(arr);
        }
    },[standard]);

    useEffect(() => {
        if(budgetOne === true){
            priceSet = price;
            priceSet = priceSet + ((prices[1].price)*bookingDays);
            adultSet = adult;
            adultSet = adultSet + 3;
            setAdult(adultSet);
            setPrice(priceSet);
            arr = rooms;
            arr.push("budgetOne");
            setRooms(arr);
        } else if(budgetOne === false){
            priceSet = price;
            priceSet = priceSet - ((prices[1].price)*bookingDays);
            adultSet = adult;
            adultSet = adultSet - 3;
            setAdult(adultSet);
            setPrice(priceSet);
            arr = rooms;
            arr.pop("budgetOne");
            setRooms(arr);
        }
    },[budgetOne]);

    useEffect(() => {
        if(budgetTwo === true){
            priceSet = price;
            priceSet = priceSet + ((prices[3].price)*bookingDays);
            adultSet = adult;
            adultSet = adultSet + 3;
            setAdult(adultSet);
            setPrice(priceSet);
            arr = rooms;
            arr.push("budgetTwo");
            setRooms(arr);
        } else if(budgetTwo === false){
            priceSet = price;
            priceSet = priceSet - ((prices[3].price)*bookingDays);
            adultSet = adult;
            adultSet = adultSet - 3;
            setAdult(adultSet);
            setPrice(priceSet);
            arr = rooms;
            arr.pop("budgetTwo");
            setRooms(arr);
        }
    },[budgetTwo]);

    const handleSubmit = () => {
        console.warn(rooms);
    }

    useEffect(() => {
        console.log(rooms);
        console.log("nkn");
    },[rooms]);
   
    return (
    <>
       {
           width > widthScreen ? 
           <div className="homeImage" style={{
                backgroundImage: `url("https://i.postimg.cc/J05cnNnQ/bookings-Back.jpg")`
           }}>
                <Header/>
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
                                                    onBlur={cityChangeHandler} 
                                                />
                                                    <Form.Label><p className="dolpeText">City</p></Form.Label>
                                        </Form.Group>
                                </Col>
                                <Col sm={3}>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter State/Province Here"
                                                    onBlur={stateChangeHandler} 
                                                />
                                                    <Form.Label><p className="dolpeText">State / Province</p></Form.Label>
                                        </Form.Group>
                                </Col>
                                <Col sm={3}>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control 
                                                    type="text"
                                                    placeholder="Enter Postal/Zip Code Here"
                                                    onBlur={postalChangeHandler} 
                                                />
                                                    <Form.Label><p className="dolpeText">Postal / Zip Code</p></Form.Label>
                                        </Form.Group>
                                </Col>
                                <Col sm={3}>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Country Here"
                                                    onBlur={countryChangeHandler}  
                                                />
                                                    <Form.Label><p className="dolpeText">Country</p></Form.Label>
                                        </Form.Group>
                                </Col>
                            </Row>
                            {/*Contact details */}
                            <Row>
                                <Col sm={6}>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><p className="dolpeText">Contact Number</p></Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter Phone Number Here"
                                                    onBlur={phoneChangeHandler}  
                                                />
                                        </Form.Group>
                                            <Form.Label><p className="dolpeText"><span style={{color:'red'}}>&nbsp;&nbsp;&nbsp;{phoneErr}</span></p></Form.Label>
                                </Col>
                                <Col sm={6}>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><p className="dolpeText">E-Mail</p></Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter Email Here"
                                                    onBlur={emailChangeHandler}  
                                                />
                                                 <Form.Label><span style={{color:'red'}}>{emailErr}</span></Form.Label>
                                        </Form.Group>
                                </Col>
                            </Row><br/>
                            {/*Dates */}
                            <Row>
                               <Col sm={6}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                       
                                        <Form.Label><p className="dolpeText">Check-In Date <small>(please add the check-in date first)</small></p></Form.Label>
                                           <DatePicker
                                             selected={checkInDate}
                                             onChange={date => {setCheckInDate(new Date(date))}}
                                             dateFormat="dd/MM/yyyy"
                                             minDate={new Date()}
                                             excludeDates={[new Date('6/30/2022')]}
                                             isClearable
                                             
                                           />
                                            
                                        
                                    </LocalizationProvider>
                               </Col>
                               <Col sm={6}><br/>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Form.Label><p className="dolpeText">Check-Out Date</p></Form.Label>
                                        <DatePicker
                                             selected={checkOutDate}
                                             onChange={date => {numOfDays(new Date(date))}}
                                             dateFormat="dd/MM/yyyy"
                                             minDate={checkInDate}
                                             //excludeDates={}
                                             isClearable
                                             readOnly={checkInDate ? false : true}
                                           />
                                    </LocalizationProvider>
                               </Col>
                               <Form.Label><p className="dolpeText">Days : {bookingDays}</p></Form.Label>
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
                                            onChange={(e) => {setAttic(e.target.checked)}}
                                            defaultChecked={false}
                                            disabled={bookingDays > 0 ? false : true}
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="Deluxe Room ( Maximum upto 4 adults )"
                                            name="rooms"
                                            type="checkbox"
                                            className="dolpeText"
                                            disabled={bookingDays > 0 ? false : true}
                                            onChange={(e) => setDeluxe(e.target.checked)}
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="Standard Room ( Maximum upto 4 adults )"
                                            name="rooms"
                                            type="checkbox"
                                            className="dolpeText"
                                            disabled={bookingDays > 0 ? false : true}
                                            onChange={(e) => setStandard(e.target.checked)}
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="Budget Villa 01 ( Maximum upto 3 adults )"
                                            name="rooms"
                                            type="checkbox"
                                            className="dolpeText"
                                            disabled={bookingDays > 0 ? false : true}
                                            onChange={(e) => setBudgetOne(e.target.checked)}
                                        /><br/><br/>
                                        <Form.Check
                                            inline
                                            label="Budget Villa 02 ( Maximum upto 3 adults )"
                                            name="rooms"
                                            type="checkbox"
                                            className="dolpeText"
                                            disabled={bookingDays > 0 ? false : true}
                                            onChange={(e) => setBudgetTwo(e.target.checked)}
                                        /><br/><br/>
                                        </div>
                            </Row>
                            <h6 className="dolpeText">Price : ${price}</h6><br/>
                            {/*Number of persons */}
                            <Row>
                                <Col sm={6}>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><p className="dolpeText">Number of Adults(Age Above 6)(maximum:{adult})</p></Form.Label>
                                            <Form.Control 
                                                type="number"
                                                onChange={(e) => {setNumAdults(e.target.value)}}
                                                disabled={bookingDays > 0 ? false : true}/>
                                        </Form.Group>
                                </Col>
                                <Col sm={6}>
                                   
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><p className="dolpeText">Number of Kids (Age Under 6)(maximum:{children})</p></Form.Label>
                                            <Form.Control 
                                                onChange={(e) => {setNumChild(e.target.value)}}
                                                type="number"
                                                disabled={bookingDays > 0 ? false : true}/>
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
                                                <Form.Control as="textarea" 
                                                    rows={3}
                                                    onChange={(e) => {setRequest(e.target.value)}} 
                                                />
                                        </Form.Group>
                                </Col>
                            </Row>
                            {/*Submit*/}
                            <Row style={{textAlign:'center'}}>
                                <Col>
                                    <MDBBtn 
                                        color='success' 
                                        onClick={(e) => {submitUsers(e)}}
                                    >SUBMIT</MDBBtn>
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