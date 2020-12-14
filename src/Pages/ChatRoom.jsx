import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import dataset from "../dataset";
import secondDataset from "../secondDataset";
import thirdDataset from "../thirdDataset";
import { getUserName, getUserImage } from "../Redux/User/selector";
import {
  getGirlName,
  getGirlImage,
  getGirlLevel,
} from "../Redux/Girls/selector";
import { ChatList, AnswersList, GirlAnswerModal } from "../Components/index";

const ChatRoom = () => {
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectJudgment, setSelectJudgment] = useState("mistake");
  const [displayNoneAnswer, setDisplayNoneAnswer] = useState(false);
  const [girlText, setGirlText] = useState("");

  //label 　cotent : 付き合ってください  id :firs_line
  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId.includes("correct"):
        setTimeout(() => {
          setSelectJudgment("correct");
          setGirlText(data[nextQuestionId].girlanswer);
          setModalIsOpen(true);
        }, 1000);
        break;
      case /^https:*/.test(nextQuestionId) || /^http:*/.test(nextQuestionId):
        const a = document.createElement("a");
        a.href = nextQuestionId;
        a.target = "_blank";
        a.click();
        break;
      default:
        addChats({
          text: selectedAnswer,
          type: "answer",
        });
        setDisplayNoneAnswer(true);
        setTimeout(() => {
          displayNextQuestion(nextQuestionId, data[nextQuestionId]);
          setDisplayNoneAnswer(false);
        }, 1000);
        break;
    }
  };

  const addChats = (chat) => {
    setChats((prevChats) => {
      return [...prevChats, chat];
    });
  };

  //次のid  次のdata
  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    if (nextDataset.answers[0].content === "") {
      setSelectJudgment("mistake");
      setModalIsOpen(true);
      setGirlText(nextDataset.girlanswer);
      return;
    }

    if (nextDataset.girlanswer !== undefined) {
      addChats({
        text: nextDataset.girlanswer.replace("userName", userName),
        type: "girlanswer",
      });
    }
    const replaceAnswerText = nextDataset.answers;
    replaceAnswerText.forEach((text) => {
      const stringInUserName = text.content.includes("userName");
      if (stringInUserName) {
        text.content = text.content.replace("userName", userName);
      }
      return text;
    });

    setAnswers(replaceAnswerText);
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
      case 3:
        setData(thirdDataset);
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

  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

  return (
    <StyledSection>
      {modalIsOpen === true && (
        <GirlAnswerModal
          girlText={girlText}
          setModalIsOpen={setModalIsOpen}
          modalIsOpen={modalIsOpen}
          selectJudgment={selectJudgment}
          girlImage={girlImage}
        />
      )}
      <div>
        <StyledSectionTitle>
          さっそく{girlName}さんにメッセージを送ってみましょう
        </StyledSectionTitle>
        <Wrap id={"scroll-area"}>
          <ChatList
            chats={chats}
            userName={userName}
            userImage={userImage}
            girlName={girlName}
            girlImage={girlImage}
          />
        </Wrap>

        {!displayNoneAnswer && (
          <AnswersList answers={answers} selectAnswer={selectAnswer} />
        )}
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

const StyledSectionTitle = styled.h1`
  margin: 0;
  padding: 10px;
`;

const Wrap = styled.div`
  height: 550px;
  overflow: auto;
  padding: 0;
`;
