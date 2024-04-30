import React, { useState } from "react";
import styled from "styled-components";
import xmas from "../assets/xmas.gif";

const XmasModal = ({toggle}:any) => {
  return (
    <Container>
      <div className="cookiesContent">
        <button className="close" onClick={toggle}>
          ✖
        </button>
        <img src={xmas} alt="cookies-img" />
        <div style={{ marginTop: "20px" }}>
          <p>Dear Valued Customers,</p>
          <p>
            Merry Christmas! 🎄 We wanted to take a moment to thank you for your support this year. We are grateful to have you as part of our
            customers and we look forward to serve you in the coming year
          </p>
          <p>Happy New Year.</p>
          <p style={{ marginBottom: "0px" }}>Sincerely,</p>
          <strong>
            <p className="kenad">Kenad & Standage</p>
          </strong>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  /* margin-top: 5%; */
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(79, 86, 101, 0.2);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);

  .cookiesContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
    background-color: #f6c487;
    color: #000;
    border-radius: 20px;
    width: 85%;
    height: max-content;
    max-width: 450px;
    background-color: #fff;
    padding: 0 24px;

    button.close {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 2rem;
      /* padding: 15px; */
      color: #c3cbc0;
      align-self: flex-end;
      background-color: white;
      border: none;
      margin-top: 20px;
      margin-left: 20px;

      :hover {
        cursor: pointer;
        background: #fff;
        box-shadow: 0px 2px 10px 5px #f7cebe !important;
        color: #000;
      }
      :after {
        background: #fdcfb6;
      }
    }
    img {
      width: 70%;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 5px;
    }
    p {
      margin-bottom: 20px;
      font-size: 1rem;
      text-align: left;
    }
    .kenad{
      opacity: 0.85;
      color: var(--mainBlack);
    }
    button.accept {
      background-color: #ed6755;
      border: none;
      border-radius: 5px;
      width: 200px;
      padding: 14px;
      font-size: 16px;
      color: white;
      box-shadow: 0px 6px 18px -5px rgba(237, 103, 85, 1);
    }
  }

  @media (min-width: 768px) {
    .cookiesContent {
      width: 550px;

      img {
        width: 250px;
        height: 250px;
      }
    }
  }
`;

export default XmasModal;
