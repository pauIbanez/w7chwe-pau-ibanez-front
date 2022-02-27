import { FormButton, HiddenLabel, InputField } from "../../styles/formStyles";

const StageOne = ({ formData, updateData, disabled, changeState }) => {
  return (
    <>
      <HiddenLabel htmlFor="name">Name</HiddenLabel>
      <InputField
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={formData.name}
        onChange={updateData}
        autoComplete="off"
      />
      <HiddenLabel htmlFor="lastName">Last name</HiddenLabel>
      <InputField
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last name"
        value={formData.lastName}
        onChange={updateData}
        autoComplete="off"
      />
      <HiddenLabel htmlFor="username">Username</HiddenLabel>
      <InputField
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        value={formData.username}
        onChange={updateData}
        autoComplete="off"
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
      <FormButton disabled={disabled} onClick={changeState}>
        Next
      </FormButton>{" "}
    </>
  );
};

export default StageOne;
