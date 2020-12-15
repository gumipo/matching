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
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.85)",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
    <StyledModal isOpen={props.modalIsOpen} style={modalStyle}>
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
    </StyledModal>
  );
};

export default GirlAnswerModal;

const StyledModal = styled(Modal)`
  width: 400px;
  height: 550px;
`;

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
