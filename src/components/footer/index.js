import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';
import logo from './logo.png'
export default function Footer() {
  return (  
    <MDBFooter className='text-center text-white' style={{ backgroundColor: 'black'}}>
        <div className='text-start p-1 text-white position-absolute' style={{ backgroundColor: 'black' }}>
          <img
              src={logo}
              className='logo'
               height='50'
               width={100}
              alt=''
            />
      </div>
      {/* style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} */}
      {/* <MDBContainer className='p-4 pb-0'> */}
        <section className='position-absolute end-0 pt-4'>
        <a href='https://discord.gg/Bwhv4eC63r' className='me-4 text-reset'>
        <MDBIcon fab icon="discord" />
          </a>
          <a href='https://twitter.com/TheMathClub_' className='me-4 text-reset'>
            <MDBIcon fab icon='twitter' />
          </a>
          <a href='https://www.instagram.com/themath_club1/' className='me-4 text-reset'>
            <MDBIcon fab icon='instagram' />
          </a>
        </section>
      {/* </MDBContainer> */}
      <br />
      <br />
      <hr className="hr" />
      <p className='text-start text-size ' style={{ backgroundColor: 'black' }}>
        © 2023 MATH Club, ALL RIGHTS RESERVED
      </p>
    </MDBFooter>
  );
}