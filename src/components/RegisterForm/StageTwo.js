import styled from "styled-components";
import { FormButton } from "../../styles/formStyles";
const BackLink = styled.a`
  margin-top: 10px;
  color: #8e8e8e;
  font-size: 14px;
  text-decoration: none;
`;
const StageTwo = ({ disabled, loading, goBack }) => {
  const goBackClick = (event) => {
    event.preventDefault();
    goBack();
  };
  return (
    <>
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
