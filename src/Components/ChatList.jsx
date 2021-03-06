import React from "react";
import { ChatItem } from "./index";
import styled from "styled-components";

const ChatList = ({ chats, userName, userImage, girlName, girlImage }) => {
  return (
    <StyledChatsWrapper>
      {chats.map((chat, index) => {
        return (
          <ChatItem
            text={chat.text}
            type={chat.type}
            key={index.toString()}
            userName={userName}
            userImage={userImage}
            girlName={girlName}
            girlImage={girlImage}
          />
        );
      })}
    </StyledChatsWrapper>
  );
};

export default ChatList;

const StyledChatsWrapper = styled.div`
  display: grid;
  place-items: center;
  @media screen and (max-width: 767px) {
    width: 350px;
  }
`;
