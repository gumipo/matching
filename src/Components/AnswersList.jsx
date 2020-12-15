import React from "react";
import { AnswerItem } from "./index";
import styled from "styled-components";

const AnswersList = (props) => {
  return (
    <StyledAnswerList>
      {props.answers.map((value, index) => {
        return (
          <AnswerItem
            content={value.content}
            key={index.toString()}
            nextId={value.nextId}
            selectAnswer={props.selectAnswer}
          />
        );
      })}
    </StyledAnswerList>
  );
};
export default AnswersList;

const StyledAnswerList = styled.div`
  min-width: 500px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: 767px) {
    width: 350px;
    top: 72%;
  }
`;
