import bookClasses from "./Book.module.scss";

function Book({ image, author, title, description }) {
  const handleClick = () => {
    console.log(image, author, title, description);
  };

  return (
    <div className={bookClasses.book} onClick={handleClick}>
      <img className={bookClasses.book__img} src={image} alt="missing" />
      <p className={bookClasses.book__header}>Author: {author}</p>
      <p className={bookClasses.book__header}>Title: {title}</p>
      <p className={bookClasses.book__text}>Description: {description}</p>
    </div>
  );
}

export default Book;
