import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 40px;
  background: rgb(255, 204, 0);
  background: rgb(255, 171, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 171, 0, 1) 0%,
    rgba(255, 211, 115, 1) 100%
  );
`;

const ProgressBar = styled.div`
  width: ${(props) => props.percent};
  height: 100%;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    90deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
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
