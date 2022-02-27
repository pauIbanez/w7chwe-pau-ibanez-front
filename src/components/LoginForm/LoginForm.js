import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 252px;
`;

const HiddenLabel = styled.label`
  display: none;
`;

const InputField = styled.input`
  border-radius: 3px;
  padding: 0;
  border: 1px solid #c9c9c9;
  color: #c9c9c9;
  color: #fafafa;
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 10px;
  line-height: 18px;
  font-size: 12px;
  font-family: inherit;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  height: 30px;
  width: 100%;
  border: none;
  border-radius: 3px;
  background-image: linear-gradient(to right, #81007f, #fb00f7);
  color: white;
  font-weight: 600;
  font-family: inherit;
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.4;
  }
  &:active {
    background-color: red;
  }
`;

const LoginForm = () => {
  return (
    <Form data-testid="loginForm">
      <HiddenLabel htmlFor="username">Username</HiddenLabel>
      <InputField
        type="text"
        name="username"
        id="username"
        placeholder="Username"
      />
      <HiddenLabel htmlFor="username">Password</HiddenLabel>
      <InputField
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <SubmitButton type="submit" disabled>
        Log In
      </SubmitButton>
    </Form>
  );
};

export default LoginForm;
