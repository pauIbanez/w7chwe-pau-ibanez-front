import styled from "styled-components";
import { FormButton } from "../../styles/formStyles";
const BackLink = styled.a`
  margin-top: 10px;
  color: #8e8e8e;
  font-size: 14px;
  text-decoration: none;
  align-self: flex-start;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  border: 2px dashed #8e8e8e;
  color: #8e8e8e;
  margin: 30px 0;
  border-radius: 50%;
  width: 100%;
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

const StageTwo = ({ disabled, loading, goBack }) => {
  const goBackClick = (event) => {
    event.preventDefault();
    goBack();
  };
  return (
    <>
      <ImageLabel htmlFor="avatar">Upload your avatar</ImageLabel>
      <ImageInput type="file" name="avatar" id="avatar" />
      <FormButton
        type="submit"
        disabled={disabled}
        loading={loading.toString()}
      >
        {loading ? (
          <i className="loader --4" data-testid="loader"></i>
        ) : (
          "Register"
        )}
      </FormButton>
      <BackLink onClick={goBackClick}> Go Back </BackLink>
    </>
  );
};

export default StageTwo;
