import { useContext, useState } from "react";
import userContext from "../../contexts/userContext";
import { Errors, Form } from "../../styles/formStyles";
import StageOne from "./StageOne";
import StageTwo from "./StageTwo";

const RegisterForm = () => {
  const blankFormData = {
    name: "",
    lastName: "",
    username: "",
    password: "",
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(blankFormData);
  const [showErrors, setShowErrors] = useState(false);
  const [stage, setStage] = useState(0);
  const { registerUser } = useContext(userContext);

  const updateData = (event) => {
    const newFormData = {
      ...formData,
      [event.target.id]: event.target.value,
    };

    setFormData(newFormData);
  };
  let disabled = true;
  if (
    formData.name &&
    formData.lastName &&
    formData.username &&
    formData.password &&
    !loading
  ) {
    disabled = false;
  }
  let errorMessage;

  const onFail = (reason) => {
    setLoading(false);
    errorMessage = reason;
    setShowErrors(true);
  };

  const changeState = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setStage(1);
  };

  const submit = async (event) => {
    event.preventDefault();
    console.log("submitted");
    setLoading(true);
    registerUser(formData, onFail);
  };

  return (
    <>
      <Form data-testid="loginForm" onSubmit={submit}>
        {stage === 0 ? (
          <StageOne
            formData={formData}
            updateData={updateData}
            disabled={disabled}
            changeState={changeState}
          />
        ) : (
          <StageTwo disabled={disabled} loading={loading} />
        )}
      </Form>
      {showErrors && <Errors>{errorMessage}</Errors>}
    </>
  );
};

export default RegisterForm;
