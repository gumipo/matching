import React, { useState, useRef } from "react";
import NoImage from "../assets/Images/Noimage.png";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Home = () => {
  const inputEl = useRef(null);
  const history = useHistory();
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");

  const createObjectURL =
    (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

  const inputName = () => {
    const name = inputEl.current.value;
    setUserName(name);
  };

  const handleChangeFile = (e) => {
    const files = e.target.files;
    const imageUrl = files.length === 0 ? "" : createObjectURL(files[0]);
    setUserImage(imageUrl);
  };

  return (
    <StyledHome>
      <StyledHomeInner>
        <h1>マッチングデモアプリ</h1>
        <p>ニックネーム</p>

        {userName ? (
          <div>
            <h2>{userName}</h2>
            <button onClick={() => setUserName("")}>変更する</button>
          </div>
        ) : (
          <div>
            <input type="text" defaultValue={userName} ref={inputEl}></input>
            <button onClick={inputName}>決定</button>
          </div>
        )}
        <p>自分のイケメンな画像を登録しよう</p>
        <StyledUserImageArea>
          <img src={userImage ? userImage : NoImage} />
        </StyledUserImageArea>
        <StyledImageChange>
          {!userImage ? "写真を選ぶ" : "写真を変更"}
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(e) => handleChangeFile(e)}
          />
        </StyledImageChange>
        <StyledStartButton onClick={() => history.push("/girls/select")}>
          始める
        </StyledStartButton>
      </StyledHomeInner>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.section`
  background-color: orange;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;
const StyledHomeInner = styled.div`
  width: 800px;
  height: 100%;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledUserImageArea = styled.div`
  width: 500px;
  height: 500px;
  display: grid;
  place-items: center;
  background-color: pink;
  img {
    width: 400px;
    height: 400px;
    border-radius: 200px;
    object-fit: cover;
  }
`;

const StyledImageChange = styled.label`
  color: white;
  background-color: red;
  padding: 6px;
  border-radius: 12px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const StyledStartButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: pink;
`;
