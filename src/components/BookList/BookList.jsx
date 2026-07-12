import bookListClasses from "./BookList.module.scss";

import Book from "../Book/Book.jsx";

function BookList({ books = [] }) {
  return (
    <div className={bookListClasses.bookList}>
      {books.map((item, index) => {
        return (
          <Book
            key={index}
            image={item["image"]}
            author={item["author"]}
            title={item["title"]}
            description={item["description"]}
          />
        );
      })}
    </div>
  );
}

export default BookList;
