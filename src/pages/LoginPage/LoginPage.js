import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";

const PageHolder = styled.div`
  height: 100vh;
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 30px;
  font-family: "Pacifico", sans-serif;
`;

const OrSpan = styled.span`
  margin: 30px 0;
  height: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #8e8e8e;
  font-weight: 600;

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

const LoginPage = () => {
  return (
    <PageHolder>
      <Title>Socialmedia</Title>
      <LoginForm />
      <OrSpan> OR </OrSpan>
    </PageHolder>
  );
};

export default LoginPage;
