import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { isReplayAction, resetGirlAction } from "../Redux/Girls/actions";

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

  return (
    <Modal isOpen={props.modalIsOpen} style={modalStyle}>
      <StyledModalDescription>
        <h2>
          {props.selectJudgment === "correct" ? (
            <p>デートの誘いに成功しました！</p>
          ) : (
            <p>振られてしまいました...</p>
          )}
          <GirlImage src={props.girlImage} />
        </h2>
        <p>{props.girlText}</p>
        <StyledNavButtonArea>
          <button
            onClick={() => {
              dispatch(isReplayAction(true));
              history.push("/girls/select");
            }}
          >
            もう一度挑戦する
          </button>
          <button
            onClick={() => {
              dispatch(isReplayAction(false));
              dispatch(resetGirlAction());
              history.push("/girls/select");
            }}
          >
            次の女の子を探す
          </button>
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
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
