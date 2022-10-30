import React from "react";

import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = ({ closeModal }) => (
  <div className={styles.backdrop} onClick={closeModal}></div>
);

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

function Modal({ children, closeModal }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        document.querySelector("#modalCart-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay> {children} </ModalOverlay>,
        document.querySelector("#modalCart-root")
      )}
    </>
  );
}

export default Modal;
