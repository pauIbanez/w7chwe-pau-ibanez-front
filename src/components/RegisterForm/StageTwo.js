import { FormButton } from "../../styles/formStyles";

const StageTwo = ({ disabled, loading }) => {
  return (
    <FormButton type="submit" disabled={disabled} loading={loading.toString()}>
      {loading ? (
        <i className="loader --4" data-testid="loader"></i>
      ) : (
        "Register"
      )}
    </FormButton>
  );
};

export default StageTwo;
