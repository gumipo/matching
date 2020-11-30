import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
import { ChatList, AnswersList, MistakeModal } from "../Components/index";

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [displayNoneAnswer, setDisplayNoneAnswer] = useState(false);
  const [girlText, setGirlText] = useState("");

  //label id
  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "modal":
        setModalIsOpen(true);
        displayNextQuestion();
        break;

      case /^https:*/.test(nextQuestionId):
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

  //次のid 次のdata
  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    if (nextDataset.answers[0].content === "") {
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

  return (
    <StyledSection>
      {modalIsOpen === true && (
        <MistakeModal
          girlText={girlText}
          setModalIsOpen={setModalIsOpen}
          modalIsOpen={modalIsOpen}
        />
      )}
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

        {!displayNoneAnswer && (
          <AnswersList answers={answers} selectAnswer={selectAnswer} />
        )}
      </div>
      <button onClick={() => setModalIsOpen(true)}>
        eeeeeeeeeeeeeeeeeeeeeeeeeeeee
      </button>
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
