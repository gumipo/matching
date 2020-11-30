import React from "react";
import Modal from "react-modal";
import { keyframes } from "styled-components";

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

    animation: "$fadeIn infinite 20s ",

    "@keyframes fadeIn": {
      "0%": {
        opacity: 0.6,
        transform: "translateY(5rem)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  },
};

const MistakeModal = (props) => {
  return (
    <Modal isOpen={props.modalIsOpen} style={modalStyle}>
      <h2>音信不通になりました...</h2>
      <p>{props.girlText}</p>
      <button>もう一度挑戦する</button>
      <button onClick={() => props.setModalIsOpen(false)}>
        次の女の子に行く
      </button>
    </Modal>
  );
};

export default MistakeModal;
