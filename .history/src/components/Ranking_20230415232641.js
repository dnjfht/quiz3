import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ResetUserAnswer } from "../redux/modules/quiz";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loadQuizFB } from "../redux/modules/rank";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const TopRanking = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > span {
    padding: 10px 20px;
    background: rgb(238, 174, 202);
    background: linear-gradient(
      90deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    border-radius: 10px;

    color: white;
  }
`;

const RankingWrap = styled.div`
  width: 100%;
  height: 100%;

  overflow: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      0deg,
      rgba(255, 174, 135, 0.8) 2%,
      rgba(227, 26, 128, 0.8) 98%
    );
    border-radius: 6px;
  }
`;

const RankingData = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.highlight === true ? "#eeaeca" : "#fff"};

  border-radius: 6px;
  border: ${(props) =>
    props.highlight === true ? "none" : "2px solid #eeaeca "};

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Grade = styled.p`
  width: 100px;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  border-right: ${(props) =>
    props.highlight === true ? "1px solid #f6589d" : "1px solid #fff"};

  font-size: 2rem;
  color: ${(props) => (props.highlight === true ? "#f6589d" : "white")};

  display: flex;
  flex-direction: row;
  align-items: center;

  & > span {
    color: #0eb1c0;
  }
`;

const ScoreNumber = styled.p`
  width: 140px;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  border-right: ${(props) =>
    props.highlight === true ? "1px solid #f6589d" : "1px solid #fff"};

  font-size: 2rem;
  color: ${(props) => (props.highlight === true ? "#f6589d" : "white")};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & > span {
    color: #0eb1c0;
  }
`;

const RankingUserData = styled.div`
  width: 1000px;
  padding: 24px;
  box-sizing: border-box;
`;

const RankName = styled.p`
  width: 200px;
  padding-bottom: 10px;
  border-bottom: ${(props) =>
    props.highlight ? "1px solid #f6589d" : "1px solid #fff"};

  font-size: 1rem;
  color: ${(props) => (props.highlight ? "#f6589d" : "white")};
  font-weight: 600;
`;

const RankComment = styled.p`
  color: ${(props) => (props.highlight ? "#f6589d" : "white")};
  font-size: 1.2rem;
`;

const ResetButton = styled.button`
  width: 1140px;
  height: 50px;
  margin-top: 10px;
  background: rgb(253, 187, 45);
  border: none;
  border-radius: 30px;

  color: white;
  font-size: 1rem;

  position: fixed;
  bottom: 54px;
  left: 50%;
  margin-left: -574px;

  transition: all 0.5s;

  &:hover {
    background: rgb(34, 193, 195);
    color: #00ffeb;

    cursor: pointer;
  }
`;

export default function Ranking() {
  useEffect(() => {
    dispatch(loadQuizFB());
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const rank = useSelector((state) => state.rank.rank);
  console.log(rank);

  const _rank = rank.sort((a, b) => {
    return b.score - a.score;
  });

  const handleResetUserAnswer = () => {
    dispatch(ResetUserAnswer());

    navigate("/");
  };

  return (
    <Wrap>
      <TopRanking>
        <span>{rank.length}명</span>의 사람들 중 당신은?
      </TopRanking>

      <RankingWrap>
        {_rank.map((r, idx) => {
          if (r.current === true) {
            return (
              <RankingData key={idx} highlight={true}>
                <Grade>
                  <span>{idx + 1}</span>등
                </Grade>
                <ScoreNumber>
                  <span>{r.score}</span>점
                </ScoreNumber>

                <RankingUserData>
                  <RankName>{r.name}</RankName>
                  <RankComment>{r.comment}</RankComment>
                </RankingUserData>
              </RankingData>
            );
          } else if (!r.current) {
            return (
              <RankingData key={idx}>
                <Grade highlight={true}>
                  <span>{idx + 1}</span>등
                </Grade>

                <ScoreNumber highlight={true}>
                  <span>{r.score}</span>점
                </ScoreNumber>

                <RankingUserData>
                  <RankName highlight={true}>{r.name}</RankName>
                  <RankComment highlight={true}>{r.comment}</RankComment>
                </RankingUserData>
              </RankingData>
            );
          }
        })}

        <ResetButton onClick={handleResetUserAnswer}>다시하기</ResetButton>
      </RankingWrap>
    </Wrap>
  );
}
