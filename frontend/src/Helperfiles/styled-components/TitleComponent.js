import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  color: #860A35;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: 'Your Stylish Font', sans-serif;
  font-size: 2em;

  h1 {
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    padding-bottom: 13px;
    position: relative;
  }

  h1:before,
  h1:after {
    background-color: #c50000;
    content: '';
    display: block;
    height: 3px;
    width: 50%; /* Adjust as needed */
    margin: 5px auto; /* Center the line */
  }

  h1:after {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-bottom: 0.25em;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 10px; /* Adjust as needed */
    }

    h1:before,
    h1:after {
      width: 75%; /* Adjust as needed */
    }
  }
`;

const TitleComponent = ({ children }) => {
  return <TitleWrapper><h1>{children}</h1></TitleWrapper>;
};

export default TitleComponent;
