import styled from "styled-components";
import Router from "./shared/Router";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    90deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );

  position: relative;
`;

const ContentWrap = styled.div`
  width: 1200px;
  height: 800px;
  padding: 30px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 10px;
  box-shadow: 8px 8px 8px rgba(21, 159, 161, 0.4);

  position: absolute;
  top: 50%;
  margin-top: -400px;
  left: 50%;
  margin-left: -600px;
`;

function App() {
  return (
    <Wrap>
      <ContentWrap>
        <Router />
      </ContentWrap>
    </Wrap>
  );
}

export default App;
