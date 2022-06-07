import React from "react";
import '../App.css';
import {MDBFooter} from 'mdb-react-ui-kit';

function Footer() {
    return (
      <MDBFooter className='text-center text-lg-start text-muted'>
      <section  style={{backgroundColor:"#6C716C",color:'white'}} className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/Dolape-Villa-114357656590592' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='https://www.instagram.com/dolapevilla_ella/?igshid=YmMyMTA2M2Y=' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </section>

      <section style={{backgroundColor:"#6C716C",color:'white'}}>
        <div className='container text-center text-md-start'><br/>
          <div className='row'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Dolape Villa
              </h6>
                <img src="https://i.postimg.cc/P5gL6Mzy/277835036-3202617223360264-4709564501185670549-n-removebg-preview.png" className="footerLogo"/>
            </div>

          

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fab fa-whatsapp me-3'></i>+94 (0) 777 1735 28
              </p>
              <p>
                <i className='fas fa-phone me-3'></i>
                  +94 (0) 777 1735 28<br/>
                  <i className='fas fa-phone me-3'></i>
                  +94 (0) 771 8852 86
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <br/>
              <p>
                <i className='fas fa-home me-3'></i>Dolape Villa,
                                      Kandekumbura Road,
                                      Ballaketuwa,
                                      Ella,
                                      90090,
                                      Sri Lanka.
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
              dolapevilla.lbh@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#6C716C',color:"white" }}>
        © 2022 Copyright:
        <a className='text-reset' style={{fontSize:'10px'}} href='https://dilan-silva-my-portfoli.herokuapp.com'>
        Website Designed & Developed by D&SDeveloer
        </a>
      </div>
    </MDBFooter>
    
      );
}
export default Footer;