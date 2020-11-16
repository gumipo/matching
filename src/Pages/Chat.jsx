import React,{useState ,useEffect} from 'react'
import {useSelector} from "react-redux"
import dataset from "../dataset";
import { getUserName, getUserImage} from "../Redux/User/selector"
import { getGirlName, getGirlImage } from "../Redux/Girls/selector"
import NoImage from "../assets/Images/Noimage.png";

const Chat = () => {

  const selector = useSelector(state => state)
  //userName Reduxのstore
  const userName = getUserName(selector)
  //userImage 
  const userImage = getUserImage(selector)
  //girlのName
  const girlName = getGirlName(selector)
  //girlImage
  const girlImage = getGirlImage(selector)


  const [answers,setAnswers] =useState([])
  const [chats,setChats] =useState([])
  const [data, setData] = useState({})
  const [currentId, setCurrentId] = useState("init");


 const displayNextQuestion = (nextQuestionId, nextDataset) => {
    addChats({
      text: nextDataset.girlanswer,
      type: "girlanswer",
    });
    setAnswers(nextDataset.answers);
    setCurrentId(nextQuestionId);
  };
  
  const addChats = (chat) => {
   setChats((prevChats) => {
     return [...prevChats, chat];
   });
  };
  
  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "modal":
        // handleClickOpen();
        break;
      case /^http:*/.test(nextQuestionId):
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
        setTimeout(
          () => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]),
          500
        );
        break;
    }
  };

 
 useEffect(()=>{
   setData( dataset )
   
    
  // } else if (lebel   === "2") {
  //   setData(lv2Dataset)
  // } else (label === "3"){
  //   setData(lv3Dataset)

 
  // }
},[])

  return (
    <div> 
      <p>{userName}</p>
      <img src={userImage ? userImage : NoImage}/>
      <p>{girlName}</p>
      <img src={girlImage} /> 

    </div>
  )
}

export default Chat
