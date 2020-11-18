import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import dataset from "../dataset";
import secondDataset from "../secondDataset";
// import dataset3 from "../dataset3";
import { getUserName, getUserImage } from "../Redux/User/selector";
import {
  getGirlName,
  getGirlImage,
  getGirlLevel,
} from "../Redux/Girls/selector";
import { ChatList, AnswersList } from "../Components/index";
import styled from "styled-components";

const ChatRoom = () => {
  const history = useHistory();
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);
  const userImage = getUserImage(selector);
  const girlName = getGirlName(selector);
  const girlImage = getGirlImage(selector);
  const level = getGirlLevel(selector);

  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [data, setData] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [modal, setModal] = useState(false);

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "modal":
        setModal(true);
        displayNextQuestion();
        break;
      default:
        addChats({
          text: selectedAnswer,
          type: "answer",
        });
        setTimeout(
          () => displayNextQuestion(nextQuestionId, data[nextQuestionId]),
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
    switch (level) {
      case 1:
        setData(dataset);
        break;
      case 2:
        setData(secondDataset);
        break;
      default:
    }
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
        <button onClick={() => history.push("/girls/select")}>次の子</button>
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

export default ChatRoom;

const StyledSection = styled.div`
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
  background-color: white;
`;
