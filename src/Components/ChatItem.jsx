import React from "react";
import styled from "styled-components";
import NoImage from "../assets/Images/Noimage.png";
import styles from "./ChatItem.module.css";

const Chat = ({ text, type, userImage, girlImage }) => {
  const girlAnswer = type === "girlanswer";
  const containerClasses =
    type === "girlanswer" ? styles.girl__chat_wrap : styles.my__chat_wrap;
  const chatClasses =
    type === "girlanswer" ? styles.girl__chat : styles.my__chat;

  return (
    <StyledChatContainer className={containerClasses}>
      <StyledChatWrapin className={chatClasses}>
        <p>{text}</p>
        {girlAnswer ? (
          <StyledChatImage src={girlImage} />
        ) : (
          <StyledChatImage src={userImage ? userImage : NoImage} />
        )}
      </StyledChatWrapin>
    </StyledChatContainer>
  );
};

export default Chat;

const StyledChatContainer = styled.div`
  width: 1000px;
  margin-top: 10px;
  display: flex;
`;
const StyledChatWrapin = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  border-radius: 25px;
`;

const StyledChatImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 10px;
`;
