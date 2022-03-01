import styled from "styled-components";

const Profile = styled.li`
  display: flex;
  align-content: center;
  height: 100px;
  width: 100%;
  box-shadow: 0 0 2px 0 gray;
  border-radius: 10px;
  padding: 10px 20px;
  gap: 20px;
  border: 1px solid #8e8e8e;
`;

const Avatar = styled.img`
  border-radius: 50%;
  border: 3px solid #8e8e8e;
  width: 75px;
  height: 75px;
`;
// #f500f1
const Names = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  color: #8e8e8e;

  p {
    font-size: 12px;
    margin: 0;
  }
`;

const Username = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  color: black;
`;

const Controlls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const Action = styled.button`
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  ${({ nice }) =>
    !nice
      ? "background-color: transparent; border: 1px solid #8e8e8e;"
      : "background-image: linear-gradient(to right, #81007f, #fb00f7); color: white;"}

  height: fit-content;
  min-width: 60px;
  font-family: inherit;
`;

const ListProfile = ({ profile, action, text }) => {
  const firstLetterToCap = (text) => text[0].toUpperCase() + text.substring(1);

  return (
    <Profile>
      <Avatar
        src={`${process.env.REACT_APP_API_URL}avatars/${profile.avatar}`}
        alt="avatar"
        width="75"
        height="75"
      />
      <Names>
        <Username>{firstLetterToCap(profile.username)}</Username>
        <p>{firstLetterToCap(profile.name)}</p>
        <p>{firstLetterToCap(profile.lastName)}</p>
      </Names>
      <Controlls>
        <Action onClick={action} nice={text === "Add"}>
          {text}
        </Action>
      </Controlls>
    </Profile>
  );
};

export default ListProfile;
