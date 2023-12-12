import React from 'react';
import styled from 'styled-components';

const CenterScreenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top:5%;
  margin-bottom:5%
`;

const CenterScreen = ({ children }) => {
  return <CenterScreenWrapper>{children}</CenterScreenWrapper>;
};

export default CenterScreen;
