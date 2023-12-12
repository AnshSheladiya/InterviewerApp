import React from 'react';
import styled from 'styled-components';

const StyledHorizontalLine = styled.div`
  width: 100%;
  height: 2px; /* Increase the height for a bolder line */
  background: linear-gradient(to right, #776B5D, #776B5D, #776B5D); /* Gradient for a smoother transition */
  margin: 20px 0;
`;

const HorizontalLine = () => {
  return <StyledHorizontalLine />;
};

export default HorizontalLine;
