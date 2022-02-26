import styled from "styled-components";

const PageHolder = styled.div`
  background-image: linear-gradient(#81007f, #fb00f7);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  color: white;
`;

const Code = styled.h2`
  margin: 0;
  font-weight: 800;
  font-size: 50px;
  color: #2eb69c;
`;

const Info = styled.h1`
  margin: 0;
  font-weight: 400;
`;

const NotFoundPage = () => {
  return (
    <PageHolder>
      <Code>404</Code>
      <Info>Page not found!</Info>
    </PageHolder>
  );
};

export default NotFoundPage;
