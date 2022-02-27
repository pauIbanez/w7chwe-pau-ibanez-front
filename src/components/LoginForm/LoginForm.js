import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  font-size: 13px;
  font-family: inherit;
  color: #565656;
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
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    ${({ loading }) => loading === "true" || "opacity: 0.4"};
  }
  &:active {
    background-color: red;
  }
`;

const Errors = styled.p`
  margin-top: 30px;
  color: red;
  text-align: center;
  font-size: 14px;
`;

const LoginForm = () => {
  const blankFormData = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(blankFormData);
  const [showErrors, setShowErrors] = useState(false);

  const updateData = (event) => {
    const newFormData = {
      ...formData,
      [event.target.id]: event.target.value,
    };

    setFormData(newFormData);
  };
  let disabled = true;
  if (formData.username && formData.password && !loading) {
    disabled = false;
  }
  const reset = () => {
    setLoading(false);
  };

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}users/login`,
        {
          ...formData,
        }
      );
      localStorage.setItem("token", data.token);
      navigate("/home");
      return;
    } catch (error) {
      reset();
      setShowErrors(true);
    }
  };

  return (
    <>
      <Form data-testid="loginForm" onSubmit={submit}>
        <HiddenLabel htmlFor="username">Username</HiddenLabel>
        <InputField
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={formData.username}
          onChange={updateData}
        />
        <HiddenLabel htmlFor="username">Password</HiddenLabel>
        <InputField
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={updateData}
        />
        <SubmitButton
          type="submit"
          disabled={disabled}
          loading={loading.toString()}
        >
          {loading ? <i className="loader --4"></i> : "Log In"}
        </SubmitButton>
      </Form>
      {showErrors && (
        <Errors>
          The username or password provided do not match a registered account
        </Errors>
      )}
    </>
  );
};

export default LoginForm;
