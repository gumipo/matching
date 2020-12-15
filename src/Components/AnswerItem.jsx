import React from "react";
import styled from "styled-components";

const Answer = (props) => {
  return (
    <StyledSelectButton
      onClick={() => props.selectAnswer(props.content, props.nextId)}
    >
      {props.content}
    </StyledSelectButton>
  );
};
export default Answer;

const StyledSelectButton = styled.button`
  height: 50px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: orange;
  @media screen and (max-width: 767px) {
    width: 350px;
    margin: 5px auto;
  }
`;
