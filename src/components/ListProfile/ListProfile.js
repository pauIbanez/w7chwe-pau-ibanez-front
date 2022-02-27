import styled from "styled-components";

const Profile = styled.li`
  display: flex;
  height: 100px;
  width: 100%;
  box-shadow: 0 0 2px 0 gray;
  border-radius: 10px;
  padding: 10px;
`;

const Username = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
`;

const ListProfile = ({ profile }) => {
  return (
    <Profile>
      <Username>{profile.username}</Username>
    </Profile>
  );
};

export default ListProfile;
