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
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='facebook-f' />
              </a>
    
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#55acee' }}
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='twitter' />
              </a>
    
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#dd4b39' }}
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='google' />
              </a>
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#ac2bac' }}
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='instagram' />
              </a>
    
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#0082ca' }}
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='linkedin-in' />
              </a>
    
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#333333' }}
                href='#!'
                role='button'
              >
                
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