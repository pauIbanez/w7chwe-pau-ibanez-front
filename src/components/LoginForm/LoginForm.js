import { useContext, useState } from "react";
import userContext from "../../contexts/userContext";
import {
  Errors,
  Form,
  HiddenLabel,
  InputField,
  FormButton,
} from "../../styles/formStyles";

const LoginForm = () => {
  const blankFormData = {
    username: "",
    password: "",
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(blankFormData);
  const [showErrors, setShowErrors] = useState(false);
  const { loginUser } = useContext(userContext);

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

  const onFail = () => {
    setLoading(false);
    setShowErrors(true);
  };

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    loginUser(formData, onFail);
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
        <HiddenLabel htmlFor="password">Password</HiddenLabel>
        <InputField
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={updateData}
        />
        <FormButton
          type="submit"
          disabled={disabled}
          loading={loading.toString()}
        >
          {loading ? (
            <i className="loader --4" data-testid="loader"></i>
          ) : (
            "Log In"
          )}
        </FormButton>
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
