import styled from 'styled-components';

import React from 'react'
import LoginHeader from '../components/LoginHeader';


const Login = () => {
  return (
    <Container>
      <LoginHeader/>
      <MainLogin>
        <h2>¡Encuentrale pareja a tu mascota!</h2>
        <InputContainer>
          <h3>Ingresa tu email:</h3>
          <Input type='text' placeholder='tuemail@ejemplo.cl'/>
        </InputContainer>
        <InputContainer>
          <h3>Ingresa tu contraseña:</h3>
          <Input type='password' placeholder='***********'/>
        </InputContainer>
        <LoginButton>
          Ingresar
        </LoginButton>
      </MainLogin>
    </Container> 
  )
}

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
`;

const MainLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 85vw;
  margin: 0vh auto;
  & h2 {
    text-justify: distribute;
    font-size: 3vh;
    margin: 7.5vh auto;
  }
`;

const InputContainer = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  & > h3 {
    font-size: 2.5vh;
    font-weight: 400;
    margin:1vh auto;
  }
`;

const Input = styled.input`
text-align: center;
height: 5vh;
background-color: #fff;
border-radius: 5px;
box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 1px rgb(0 0 0 / 0%),
    inset 0 0 0 2px rgb(0 0 0 / 0%);
  & > ::placeholder-shown, ::placeholder, ::-webkit-input-placeholder {
      text-align: center;
    }
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: rgba(212, 24, 29, 0.9);
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 1px rgb(0 0 0 / 0%),
    inset 0 0 0 2px rgb(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  margin: 5vh auto;
  color: rgba(24, 212, 207, 0.9);
  &:hover {
    background-color: rgba(212, 24, 29, 0.8);
    color: rgba(24, 212, 207, 0.8);
  }
`;




export default Login
