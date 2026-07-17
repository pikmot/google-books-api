import bookClasses from "./Book.module.scss";

import { useState } from "react";

function Book({
  image,
  author,
  title,
  description,
  modalIsOpen,
  handleModal,
  setModalDetails,
}) {
  const handleClick = () => {
    // console.log(image, author, title, description);

    if (modalIsOpen) {
      handleModal(false);
    } else {
      handleModal(true);
    }
    setModalDetails({
      image: image,
      author: author[1],
      title: title[1],
      description: description[1],
    });
  };

  return (
    <div className={bookClasses.book} onClick={handleClick}>
      <img className={bookClasses.book__img} src={image} alt="missing" />
      <p className={bookClasses.book__header}>Author: {author[0]}</p>
      <p className={bookClasses.book__header}>Title: {title[0]}</p>
      <p className={bookClasses.book__text}>Description: {description[0]}</p>
    </div>
  );
}

export default Book;
