import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 40px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(71, 71, 170, 1) 55%
  );
`;

const ProgressBar = styled.div`
  width: ${(props) => props.percent};
  height: 100%;
  background: rgb(0, 255, 235);
  background: linear-gradient(
    0deg,
    rgba(0, 255, 235, 1) 0%,
    rgba(255, 244, 219, 1) 100%
  );

  transition: all 0.5s;
`;

export default function Progress() {
  const user_answer = useSelector((state) => state.quiz.user_answer);
  const quiz_list = useSelector((state) => state.quiz.quiz_list);

  const percent = (100 / quiz_list.length) * user_answer.length + "%";
  console.log(percent);

  return (
    <Wrap>
      <ProgressBar percent={percent} />
    </Wrap>
  );
}
