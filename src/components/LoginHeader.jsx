import styled from 'styled-components'

import React from 'react'

const LoginHeader = () => {
  return (
    <ThisHeader>
      <Logo >
        <img src='/images/pet-logo.png' alt="Pet Match Logo" />
      </Logo>
      <Title>
        <h1>
          Pet Match!
        </h1>
      </Title>
    </ThisHeader>
  )
}

const ThisHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-width: 100vw;
  margin: 0;
  padding: 1vh 0;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px -4px rgba(0,0,0,0); 
  box-shadow: 0px 10px 13px -7px #000000;
`;

const Logo = styled.div`
  width: 20vw;
  height: auto;
  margin: 0;
  & > img {
    width: 100%;
    height: auto;
  }
`;

const Title = styled.div`
  right: 10vw;
  & > h1 {
    margin: auto;
    font-size: 4vh;
    font-weight: 500;
  }
`;

export default LoginHeader
