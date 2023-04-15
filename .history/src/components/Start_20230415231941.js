import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddUserName } from "../redux/modules/rank";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const Square = styled.div`
  width: 1000px;
  height: 600px;
  padding: 40px;
  box-sizing: border-box;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(71, 71, 170, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h3`
  margin: 0;

  font-family: "ddagfont";
  font-size: 4.6rem;
  font-weight: lighter;
  color: #fff;

  & > span {
    margin-right: 10px;
    padding: 10px 20px;
    background: rgb(0, 255, 235);
    background: linear-gradient(
      0deg,
      rgba(0, 255, 235, 1) 0%,
      rgba(255, 244, 219, 1) 100%
    );
    border-radius: 10px;
  }
`;

const ImgWrap = styled.img`
  width: 420px;
  height: 420px;

  position: absolute;
  bottom: -140px;
  right: -140px;
`;

const UserNameInput = styled.input`
  width: 560px;
  height: 100px;
  margin-top: 40px;
  padding: 20px;
  box-sizing: border-box;
  background-color: transparent;
  border: 3px solid #fff;

  color: white;
  font-size: 1.4rem;

  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Button = styled.button`
  width: 560px;
  height: 100px;
  margin-top: 20px;
  background-color: #6bccec;
  border: none;

  font-size: 1.2rem;
  color: white;

  transition: all 0.5s;

  &:hover {
    background-color: white;
    border: 3px solid #1eaddb;

    color: #1eaddb;
    font-weight: 400;

    cursor: pointer;
  }
`;

export default function Start() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = "유승민";

  const randomNumber = Math.floor(Math.random() * 10) + 10;

  const userNameInputRef = useRef(null);

  const handleAddUserName = (event) => {
    event.preventDefault();

    dispatch(AddUserName(userNameInputRef.current.value));

    userNameInputRef.current.value = "";

    navigate("/quiz");
  };

  const quiz_list = useSelector((state) => state.quiz.quiz_list);

  return (
    <Wrap>
      <Square>
        <Title>
          나는 <span>{name}</span>에 관하여
          <br />
          얼마나 알고 있을까?
        </Title>

        <ImgWrap
          src={process.env.PUBLIC_URL + `${quiz_list[randomNumber].image}`}
        />

        <UserNameInput
          type="text"
          placeholder="write user name..."
          ref={userNameInputRef}
        />

        <Button onClick={handleAddUserName}>{`${name} 퀴즈 풀러 가기`}</Button>
      </Square>
    </Wrap>
  );
}
