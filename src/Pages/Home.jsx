import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import NoImage from "../assets/Images/Noimage.png";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { auth } from "../Firebase/index";
import { saveUserAction } from "../Redux/User/actions";

const Home = () => {
  const inputEl = useRef(null);
  const dispatch = useDispatch();
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

  const anonymityLogin = async () => {
    await auth
      .signInAnonymously()
      .then(() => {
        history.push("/girls/select");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const saveUserData = () => {
    const data = {
      name: userName,
      image: userImage,
    };
    dispatch(saveUserAction(data));
  };

  return (
    <StyledHome>
      <StyledHomeInner>
        <StyledHomeTitle>マッチングアプリの練習しようぜ</StyledHomeTitle>
        <StyledUserNameArea>
          <p>ニックネーム</p>
          {userName ? (
            <div>
              <h2>{userName}</h2>
              <button onClick={() => setUserName("")}>変更する</button>
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder="ニックネーム"
                ref={inputEl}
              ></input>
              <button onClick={inputName}>決定</button>
            </div>
          )}
        </StyledUserNameArea>
        <p>イケメンな画像を選択しよう</p>
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
        {!userName ? (
          <StyledNothingButton>ニックネームを入力してね</StyledNothingButton>
        ) : (
          <StyledStartButton
            onClick={() => {
              saveUserData();
              anonymityLogin();
            }}
          >
            始める
          </StyledStartButton>
        )}
      </StyledHomeInner>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const StyledHomeTitle = styled.h1`
  margin-top: 30px;
`;

const StyledHomeInner = styled.div`
  width: 800px;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 350px;
  }
`;

const StyledUserNameArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  input {
    width: 300px;
    height: 30px;
    margin-right: 10px;
  }
  button {
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: grey;
    color: white;
    margin: 0 auto;
  }
`;

const StyledUserImageArea = styled.div`
  width: 400px;
  height: 400px;
  display: grid;
  place-items: center;
  background-color: pink;
  margin-bottom: 30px;
  box-shadow: 0px 1px 20px 4px black;
  img {
    width: 300px;
    height: 300px;
    border-radius: 200px;
    object-fit: cover;
  }
`;

const StyledImageChange = styled.label`
  color: white;
  background-color: grey;
  padding: 6px;
  border-radius: 12px;
  margin-bottom: 30px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const StyledNothingButton = styled.button`
  width: 400px;
  height: 50px;
  background-color: grey;
  :hover {
    opacity: 1;
  }
`;

const StyledStartButton = styled.button`
  font-size: 25px;
  border-radius: 10px;
  border: none;
  width: 300px;
  height: 50px;
  background-color: #4dff52;
  margin-bottom: 100px;
`;
