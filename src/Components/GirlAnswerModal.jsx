import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { isReplayAction, resetGirlAction } from "../Redux/Girls/actions";
import { getGirlLevel } from "../Redux/Girls/selector";

Modal.setAppElement("#root");

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.85)",
  },
  content: {
    position: "absolute",
    top: "10rem",
    left: "35rem",
    right: "35rem",
    bottom: "10rem",
    backgroundColor: "#dadad9",
    borderRadius: "1rem",
    padding: "1.5rem",
  },
};

const GirlAnswerModal = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const level = getGirlLevel(selector);

  return (
    <Modal isOpen={props.modalIsOpen} style={modalStyle}>
      <StyledModalDescription>
        <h2>
          {props.selectJudgment === "correct" ? (
            <div>
              {level === 3 ? (
                <p>すべての女性を落とすことに成功しました</p>
              ) : (
                <p>デートの誘いに成功しました！</p>
              )}
            </div>
          ) : (
            <p>振られてしまいました...</p>
          )}
        </h2>
        <GirlImage src={props.girlImage} />
        <p>{props.girlText}</p>
        <StyledNavButtonArea>
          {level === 3 || (
            <StyledButton
              onClick={() => {
                dispatch(isReplayAction(false));
                dispatch(resetGirlAction());
                history.push("/girls/select");
              }}
            >
              次の女の子を探す
            </StyledButton>
          )}
          {props.selectJudgment === "mistake" ? (
            <StyledButton
              onClick={() => {
                dispatch(isReplayAction(true));
                history.push("/girls/select");
              }}
            >
              もう一度挑戦する
            </StyledButton>
          ) : (
            <div>
              {level === 3 && (
                <StyledButton
                  onClick={() => {
                    dispatch(resetGirlAction());
                    history.push("/");
                  }}
                >
                  TOPページに戻る
                  <br />
                  ご利用ありがとうございました
                </StyledButton>
              )}
            </div>
          )}
        </StyledNavButtonArea>
      </StyledModalDescription>
    </Modal>
  );
};

export default GirlAnswerModal;

const StyledModalDescription = styled.div`
  text-align: center;
`;

const GirlImage = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 50%;
`;

const StyledNavButtonArea = styled.div`
  width: 200px;
  margin: 0 auto;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: pink;
  outline: none;
  border-radius: 10px;
`;
