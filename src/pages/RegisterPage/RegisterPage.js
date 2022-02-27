import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const PageHolder = styled.div`
  height: 100vh;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 30px;
  font-family: "Pacifico", sans-serif;
`;

const Info = styled.p`
  color: #8e8e8e;
  font-size: 16px;
  text-align: center;
`;

const OrSpan = styled.span`
  margin: 30px 0;
  height: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #8e8e8e;
  font-weight: 600;
  font-size: 15px;

  &:before {
    content: "";
    background-color: #c9c9c9;
    flex: 1;
    height: 1px;
    margin-right: 20px;
  }

  &:after {
    content: "";
    background-color: #c9c9c9;
    flex: 1;
    height: 1px;
    margin-left: 20px;
  }
`;

const Register = styled.p`
  color: #8e8e8e;
  font-size: 14px;

  a {
    text-decoration: none;
    color: #f500f1;
    font-weight: 600;
  }
`;

const ByWho = styled.p`
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
  color: #8e8e8e;
  font-size: 12px;
`;

const RegisterPage = () => {
  const [registered, setRegistered] = useState(false);

  const onSucess = () => {
    setRegistered(true);
  };
  return (
    <PageHolder>
      <Title>Socialmedia</Title>
      {!registered ? (
        <>
          <Info>Sign up to convery enemies into friends.</Info>
          <RegisterForm onSucess={onSucess} />
          <OrSpan> OR </OrSpan>
          <Register>
            Already have an account? <Link to="/login">Log In</Link>
          </Register>
        </>
      ) : (
        <Register>
          Your user has been registered! Proceed to
          <Link to="/login">Log In</Link>
        </Register>
      )}
      <ByWho>By Pau</ByWho>
    </PageHolder>
  );
};

export default RegisterPage;
