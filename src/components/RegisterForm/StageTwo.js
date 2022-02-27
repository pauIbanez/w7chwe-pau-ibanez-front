import { useState } from "react";
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

const Avatar = styled.img`
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

const RemoveAvatarButton = styled.button`
  border: none;
  background-color: transparent;
  font-family: inherit;
  color: #8e8e8e;
  font-size: 16px;
`;

const StageTwo = ({ disabled, loading, goBack, updateData }) => {
  const goBackClick = (event) => {
    event.preventDefault();
    goBack();
  };

  const [avatar, setAvatar] = useState(null);

  const updateAvatar = (event) => {
    updateData(event);
    const avatarURL = URL.createObjectURL(event.target.files[0]);
    setAvatar(avatarURL);
  };

  const removeAvatar = (event) => {
    event.stopPropagation();
    const mockEvent = {
      target: {
        id: "avatar",
        files: [""],
      },
    };
    updateData(mockEvent);
    setAvatar(null);
  };

  return (
    <>
      {avatar ? (
        <>
          <Avatar src={avatar} alt="avatar" />
          <RemoveAvatarButton onClick={removeAvatar}>Remove</RemoveAvatarButton>
        </>
      ) : (
        <>
          <ImageLabel htmlFor="avatar">Upload your avatar</ImageLabel>
          <ImageInput
            type="file"
            name="avatar"
            id="avatar"
            accept="image/gif, image/jpeg, image/png"
            onChange={updateAvatar}
          />
        </>
      )}
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
      <BackLink onClick={goBackClick}>Go Back</BackLink>
    </>
  );
};

export default StageTwo;
