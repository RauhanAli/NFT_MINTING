import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './logo.png'
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function Header() {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <>
    {/* color scheme */}
    {/* dark bgColor='dark' */}
      <MDBNavbar expand='lg' dark style={{ backgroundColor: 'rgba(17, 16, 17, 0.91)' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'className='position-relative start-50'>
          <img
              src={logo}
              className='logo'
               height='70'
              //  width={150}
              alt=''
            />
          </MDBNavbarBrand>
          {/* <section > */}
          <MDBNavbarToggler
            className='position-absolute end-0'
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars'fas />
          </MDBNavbarToggler>
          {/* </section> */}
           <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarBrand className='me-auto mb-2 mb-lg-0'>
              {/* <MDBNavbarItem className='active'>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Discord</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Instagram</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Twitter</MDBNavbarLink>
              </MDBNavbarItem> */}
            <section className='position-absolute start-0 ms-2'>
            <a href='https://discord.gg/Bwhv4eC63r'className='me-4 text-reset'>
        <MDBIcon fab icon="discord" />
          </a>
          <a href='https://twitter.com/TheMathClub_' className='me-4 text-reset'>
            <MDBIcon fab icon='twitter' />
          </a>
          <a href='https://www.instagram.com/themath_club1/' className='me-4 text-reset'>
            <MDBIcon fab icon='instagram'/>
          </a>
        </section>
            </MDBNavbarBrand>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

    </>
  );
}