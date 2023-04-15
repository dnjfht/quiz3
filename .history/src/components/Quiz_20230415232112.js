import React from "react";
import styled from "styled-components";
import Progress from "./Progress";
import { useSelector, useDispatch } from "react-redux";
import quiz, { AddUserAnswer } from "../redux/modules/quiz";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const QuizWrap = styled.div`
  width: 100%;
  height: 680px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const QuizNumber = styled.h1`
  font-size: 2.6rem;
  font-family: "ddagfont";

  & > span {
    margin-right: 4px;
    padding: 10px 26px;
    background: rgb(0, 255, 235);
    background: linear-gradient(
      0deg,
      rgba(0, 255, 235, 1) 0%,
      rgba(255, 244, 219, 1) 100%
    );
    border-radius: 100px;
  }
`;

const QuizImg = styled.img`
  width: 300px;
  height: 300px;
`;

const Question = styled.h3`
  width: 100%;
  margin-top: -10px;

  font-size: 1.6rem;
  text-align: center;
  font-weight: 500;
`;

const AnswerSelector = styled.div`
  width: 200px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AnswerSelectorButton = styled.button`
  background-color: transparent;
  border: none;

  font-size: 6rem;
  color: #00ffeb;

  transition: all 0.8s;

  &:hover {
    color: #fff4db;

    cursor: pointer;
  }
`;

export default function Quiz() {
  const dispatch = useDispatch();
  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  console.log(quiz_list);
  const user_answer = useSelector((state) => state.quiz.user_answer);
  console.log(user_answer);

  const navigate = useNavigate();

  useEffect(() => {
    if (quiz_list.length === user_answer.length) {
      navigate("/score");
      return;
    }
  }, [user_answer]);

  if (quiz_list.length === user_answer.length) {
    return null;
  }

  return (
    <Wrap>
      <Progress />
      <QuizWrap>
        <QuizNumber>
          <span>{user_answer.length + 1}</span>번째 퀴즈
        </QuizNumber>

        <QuizImg
          src={
            process.env.PUBLIC_URL + `${quiz_list[user_answer.length].image}`
          }
        />

        <Question>{quiz_list[user_answer.length].quiz}</Question>

        <AnswerSelector>
          <AnswerSelectorButton
            onClick={() => {
              dispatch(AddUserAnswer(true));
            }}
          >
            O
          </AnswerSelectorButton>
          <AnswerSelectorButton
            onClick={() => {
              dispatch(AddUserAnswer(false));
            }}
          >
            X
          </AnswerSelectorButton>
        </AnswerSelector>
      </QuizWrap>
    </Wrap>
  );
}
