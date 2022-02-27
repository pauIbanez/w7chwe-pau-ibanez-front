import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import ListProfile from "../../components/ListProfile/ListProfile";
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
  position: fixed;
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

  useEffect(() => {
    dispatch(loadProfilesThunk);
  }, [dispatch]);

  const profileElements = profiles.map((profile) => (
    <ListProfile key={profile.id} profile={profile} />
  ));

  console.log(profileElements);
  console.log(profiles);

  return (
    <PageHolder>
      <Title>Socialmedia</Title>
      <UserList>{profileElements}</UserList>
      <ByWho>By Pau</ByWho>
    </PageHolder>
  );
};

export default HomePage;
