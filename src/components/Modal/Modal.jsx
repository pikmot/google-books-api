import modalClasses from "./Modal.module.scss";

import { useEffect, useState, useRef } from "react";

export default function Modal({
  reference,
  modalIsOpen,
  setModalIsOpen,
  details,
}) {
  // const dialogElement = useRef(null);

  useEffect(() => {
    // dialogElement.current.showModal();

    if (modalIsOpen) {
      reference.current.showModal();
    } else {
      reference.current.close();
    }
  }, [modalIsOpen]);

  const handleClick = () => {
    console.log(reference.current);
    reference.current.close();
    setModalIsOpen(false);
  };

  return (
    <dialog
      ref={reference}
      onClick={handleClick}
      className={modalClasses.modal}
    >
      <div className={modalClasses.modal__container}>
        <h1>MORE DETAILS</h1>
        <img
          src={details["image"]}
          alt="Missing IMG"
          className={modalClasses.modal__container__img}
        ></img>
        <p className={modalClasses.modal__container__header}>
          Author: {details["author"]}
        </p>
        <p className={modalClasses.modal__container__header}>
          Title: {details["title"]}
        </p>
        <p className={modalClasses.modal__container__text}>
          Description: {details["description"]}
        </p>
      </div>
    </dialog>
  );
}
