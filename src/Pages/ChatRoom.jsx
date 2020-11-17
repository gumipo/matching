import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import dataset from "../dataset";
import { getUserName, getUserImage } from "../Redux/User/selector";
import { getGirlName, getGirlImage } from "../Redux/Girls/selector";

import { ChatList, AnswersList } from "../Components/index";
import styled from "styled-components";

const Chat = () => {
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);
  const userImage = getUserImage(selector);
  const girlName = getGirlName(selector);
  const girlImage = getGirlImage(selector);

  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [data, setData] = useState([]);
  const [currentId, setCurrentId] = useState("init");

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "modal":
        displayNextQuestion();
        break;
      default:
        addChats({
          text: selectedAnswer,
          type: "answer",
        });
        setTimeout(
          () => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]),
          1000
        );
        break;
    }
  };

  const addChats = (chat) => {
    setChats((prevChats) => {
      return [...prevChats, chat];
    });
  };

  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    console.log(nextDataset.girlanswer);
    if (nextDataset.girlanswer !== undefined) {
      addChats({
        text: nextDataset.girlanswer,
        type: "girlanswer",
      });
    }
    setAnswers(nextDataset.answers);
    setCurrentId(nextQuestionId);
  };

  useEffect(() => {
    setData(dataset);
  }, []);

  useEffect(() => {
    if (data.length === 0) {
      return;
    }
    displayNextQuestion(currentId, data[currentId]);
  }, [data]);

  return (
    <StyledSection>
      <div>
        <h1>さっそく{girlName}さんにメッセージを送ってみましょう</h1>
        <ChatList
          chats={chats}
          userName={userName}
          userImage={userImage}
          girlName={girlName}
          girlImage={girlImage}
        />
        <AnswersList answers={answers} selectAnswer={selectAnswer} />
      </div>
    </StyledSection>
  );
};

export default Chat;

const StyledSection = styled.div`
  width: 100%;
  text-align: center;
  display: grid;
  place-items: center;
`;
