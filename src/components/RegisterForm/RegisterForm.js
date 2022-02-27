import { useContext, useRef, useState } from "react";
import userContext from "../../contexts/userContext";
import { Errors, Form } from "../../styles/formStyles";
import StageOne from "./StageOne";
import StageTwo from "./StageTwo";

const RegisterForm = ({ onSucess }) => {
  const blankFormData = {
    name: "",
    lastName: "",
    username: "",
    password: "",
    avatar: "",
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(blankFormData);
  const [showErrors, setShowErrors] = useState(false);
  const [stage, setStage] = useState(0);
  const { registerUser } = useContext(userContext);
  const errorMessage = useRef("");

  const updateData = (event) => {
    const newFormData = {
      ...formData,
      [event.target.id]:
        event.target.id !== "avatar"
          ? event.target.value
          : event.target.files[0],
    };
    setFormData(newFormData);
  };

  let disabled = true;
  if (
    (stage === 0 &&
      formData.name &&
      formData.lastName &&
      formData.username &&
      formData.password) ||
    (stage === 1 && formData.avatar && !loading)
  ) {
    disabled = false;
  }

  const onSent = (sucess, error) => {
    setLoading(false);
    if (!sucess) {
      errorMessage.current = error;
      setShowErrors(true);
      setFormData({
        ...formData,
        avatar: "",
      });
      goBack();
      return;
    }

    onSucess();
  };

  const changeState = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setStage(1);
  };

  const goBack = () => {
    setStage(0);
  };

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();

    Object.entries(formData).forEach((entry) => {
      formDataToSend.append(entry[0], entry[1]);
    });

    registerUser(formDataToSend, onSent);
  };

  return (
    <>
      <Form data-testid="registerForm" onSubmit={submit}>
        {stage === 0 ? (
          <StageOne
            formData={formData}
            updateData={updateData}
            disabled={disabled}
            changeState={changeState}
          />
        ) : (
          <StageTwo
            disabled={disabled}
            loading={loading}
            goBack={goBack}
            updateData={updateData}
          />
        )}
      </Form>
      {showErrors && <Errors>{errorMessage.current}</Errors>}
    </>
  );
};

export default RegisterForm;
