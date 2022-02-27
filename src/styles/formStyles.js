import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 252px;
`;

export const HiddenLabel = styled.label`
  display: none;
`;

export const InputField = styled.input`
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

export const FormButton = styled.button`
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

export const Errors = styled.p`
  margin-top: 30px;
  color: red;
  text-align: center;
  font-size: 14px;
`;
