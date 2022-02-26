import styled from "styled-components";
import "./LoadingPage.scss";

const PageHolder = styled.div`
  background-image: linear-gradient(#81007f, #fb00f7);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingPage = () => {
  return (
    <PageHolder>
      <div class="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </PageHolder>
  );
};

export default LoadingPage;
