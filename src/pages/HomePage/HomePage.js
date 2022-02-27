import { useContext } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import ListProfile from "../../components/ListProfile/ListProfile";
import userContext from "../../contexts/userContext";
import { loadProfilesThunk } from "../../redux/thunks/thunks";

const PageHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 20px;
  margin: 0;
  font-family: "Pacifico", sans-serif;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
  gap: 10px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const ByWho = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-bottom: 15px;
  width: 100%;
  color: #8e8e8e;
  font-size: 12px;
`;

const HomePage = () => {
  const dispatch = useDispatch();
  const { profiles } = useSelector((state) => state);
  const { user } = useContext(userContext);

  useEffect(() => {
    dispatch(loadProfilesThunk);
  }, [dispatch]);

  const getIsFriend = (id) => {
    if (!user.friends) {
      return false;
    }
    let isFriend = false;
    user.friends.forEach((friend) => {
      if (friend.id === id) {
        isFriend = true;
      }
    });
    return isFriend;
  };

  const filteredProfiles = profiles.filter(
    (profile) => profile.id !== localStorage.getItem("id")
  );

  const profileElements = filteredProfiles.map((profile) => (
    <ListProfile
      key={profile.id}
      profile={profile}
      action={() => {}}
      text={getIsFriend(profile.id) ? "Remove" : "Add"}
    />
  ));

  return (
    <PageHolder>
      <Title>Socialmedia</Title>
      <UserList>{profileElements}</UserList>
      <ByWho>By Pau</ByWho>
    </PageHolder>
  );
};

export default HomePage;
