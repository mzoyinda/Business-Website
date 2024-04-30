import React, {useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './Navbar'
import styled from 'styled-components';
// import XmasModal from './XmasModal';

const Wrapper = ({children}: any) => {
    const location = useLocation();
    const navigationType = useNavigationType();

    const [modal, setModal] = useState(false);
    // const toggleModal = () => setModal(!modal);
  

    useEffect(() => {
      if(location.pathname === "/"){
        setModal(true)
        console.log(modal)
      }
      console.log(location)
      // scroll to top except when you click the back button
      if (navigationType !== "POP" || "PUSH") {
        window.scrollTo(0, 0);
      }
    }, [location]);

 
 
    return (
      <Wrap>
   {/* { modal ? <XmasModal toggle={toggleModal} /> : ""} */}

        <HomeContainer>
          <Navbar />
          <Outlet />
          <Footer />
        </HomeContainer>
        </Wrap>
    );
  };
  
  const HomeContainer = styled.main`
    max-width: 1700px;
    position: relative;
    /* z-index: -1; */
  `;
  
  const Wrap = styled.div`
    @media (min-width: 1700px) {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  `;


export default Wrapper