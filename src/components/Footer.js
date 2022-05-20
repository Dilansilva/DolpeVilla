import React from "react";
import '../App.css';
import {MDBFooter,MDBIcon} from 'mdb-react-ui-kit';

function Footer() {
    return (
          <MDBFooter className='text-center text-white addressDiv'>
          <div className='container p-4 pb-0'>
            <section className='mb-4'>
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#3b5998' }}
                href="https://www.facebook.com/Dolape-Villa-114357656590592"
                role='button'
              >
                <MDBIcon fab icon='facebook-f' />
              </a>
    
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#ac2bac' }}
                href='https://www.instagram.com/dolapevilla_ella/?igshid=YmMyMTA2M2Y='
                role='button'
              >
                <MDBIcon fab icon='instagram' />
              </a>
            </section>
          </div>
    
          <div style={{ backgroundColor: '#1F211F',display:"flex",justifyContent:'space-between',  position: 'relative'}}
               className="footerDiv"
          >
            <p className="footerText footerTextMobile"> All Copyrights Reserved by Dolape Villa Ella - © 2022</p>
              <p className="footerText footerTextMobile" >Website Designed & Developed by D&SDeveloer</p>
          </div>
        </MDBFooter>
    
      );
}
export default Footer;