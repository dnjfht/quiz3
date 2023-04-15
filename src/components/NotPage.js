import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 100%;
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;

  font-size: 8rem;
  color: rgb(253, 187, 45);

  transition: all 0.8s;

  &:hover {
    color: rgb(34, 193, 195);
  }
`;

const SubTitle = styled.p`
  color: gray;
  font-size: 1.2rem;
`;

const GoHomeButton = styled.button`
  width: 100%;
  height: 50px;
  margin: 10px 0 30px;
  background: rgb(253, 187, 45);
  border: none;
  border-radius: 30px;

  color: white;
  font-size: 1rem;

  transition: all 0.5s;

  &:hover {
    background: rgb(34, 193, 195);

    cursor: pointer;
  }
`;

export default function NotPage() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <ContentWrap>
        <Title>404 ERROR</Title>
        <SubTitle>없는 페이지입니다. 다른 페이지를 이용해주세요.</SubTitle>
      </ContentWrap>

      <GoHomeButton
        onClick={() => {
          navigate("/");
        }}
      >
        Home으로 돌아가기
      </GoHomeButton>
    </Wrap>
  );
}
