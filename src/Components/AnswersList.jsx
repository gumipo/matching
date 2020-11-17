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
  width: 500px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
