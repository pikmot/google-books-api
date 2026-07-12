import bookIconClasses from "./BookIcon.module.scss";

import bookIcon from "../../assets/icons/book-solid-full.svg";

function BookIcon() {
  return <svg className={bookIconClasses.bookIcon}> path d={bookIcon}</svg>;
}

export default BookIcon;
