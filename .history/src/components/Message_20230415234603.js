import React from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { AddRank, addQuizFB } from "../redux/modules/rank";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 94%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ImgWrap = styled.img`
  width: 360px;
  height: 360px;
`;

const Title = styled.h1`
  margin-top: -20px;

  font-size: 1.3rem;
  font-weight: 500;

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

const CommentInput = styled.input`
  width: 800px;
  height: 100px;
  margin-top: -40px;
  padding: 20px;
  box-sizing: border-box;
  background-color: transparent;
  border: 3px solid #a6c9e1;
  border-radius: 50px;

  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);

  outline: none;

  transition: all 0.8s;

  &:focus {
    border: 3px solid #2a95ae;
  }
  &::placeholder {
    color: #0ccfc0;
  }
`;

const GoToRankingButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  background: #a6c9e1;
  border: none;
  border-radius: 30px;

  color: white;
  font-size: 1rem;

  transition: all 0.5s;

  &:hover {
    background: #00ffeb;
    color: white;

    cursor: pointer;
  }
`;

export default function Message() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const user_answer = useSelector((state) => state.quiz.user_answer);
  const name = useSelector((state) => state.quiz.name);
  const user_name = useSelector((state) => state.rank.user_name);

  const random_number = Math.floor(Math.random() * 10);

  const commentInputRef = useRef(null);

  const _score =
    (100 / quiz_list.length) *
    user_answer.filter((answer, idx) => {
      return answer === quiz_list[idx].answer;
    }).length;

  const score = Math.floor(_score);

  const handleAddRankData = (event) => {
    event.preventDefault();

    const new_rank = {
      name: user_name,
      score: score,
      comment: commentInputRef.current.value,
      current: true,
    };

    dispatch(addQuizFB(new_rank));

    navigate("/ranking");
  };

  return (
    <Wrap>
      <BiArrowBack
        style={{ color: "rgb(34, 193, 195)", fontSize: "2rem" }}
        onClick={() => {
          navigate(-1);
        }}
      />
      <ContentWrap>
        <ImgWrap
          src={process.env.PUBLIC_URL + `${quiz_list[random_number].image}`}
        />

        <Title>
          <span>{name}</span>의 이상형에 대한 추측 한 마디...?
        </Title>

        <CommentInput
          type="text"
          placeholder="내 이상형은 구체적으로 뭐일 거 같아...?"
          ref={commentInputRef}
        />

        <GoToRankingButton onClick={handleAddRankData}>
          남기고 랭킹 보러 가기
        </GoToRankingButton>
      </ContentWrap>
    </Wrap>
  );
}
