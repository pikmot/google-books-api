import BookList from "../../components/BookList/BookList";
import Modal from "../../components/Modal/Modal";
import PageCounter from "../../components/PageCounter/PageCounter.jsx";

import booksContainerClasses from "./BooksContainer.module.scss";

import pageCounterClasses from "../../components/PageCounter/PageCounter.module.scss";

import { getBooksData } from "../../js/data-fetch.js";

import { useEffect, useState, useRef } from "react";

export default function BooksContainer({ input, pageLimit }) {
  //data test
  // const data = [
  //   { author: "Author 1", title: "title 1", description: "description 1" },
  //   { author: "Author 2", title: "title 2", description: "description 2" },
  //   { author: "Author 3", title: "title 3", description: "description 3" },
  //   { author: "Author 4", title: "title 4", description: "description 4" },
  //   { author: "Author 5", title: "title 5", description: "description 5" },
  //   { author: "Author 6", title: "title 6", description: "description 6" },
  //   { author: "Author 7", title: "title 7", description: "description 7" },
  // ];

  //current book
  // const [searchTerm, setsearchTerm] = useState("");
  // const [searchLimit, setSearchLimit] = useState(0);
  const [currentBooks, setCurrentBooks] = useState([]);
  const [currentBooksLong, setCurrentBooksLong] = useState([]);

  //current Page
  const [currentPage, setCurrentPage] = useState(1);

  //current Max pages -> based on page limit
  const [finalPage, setFinalPage] = useState(0);

  //display modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  //status for invalid text
  const [status, setStatus] = useState("IDLE");

  //refernce for modal to persist
  const dialogElement = useRef(null);

  useEffect(() => {
    // setStatus("IDLE");

    //console.log(input);
    if (input === "") {
      setStatus("IDLE");
      //console.log("INITIAL EMPTY");
      return;
    }

    //console.log(status);
    setStatus("LOADING");
    //console.log(status);

    //console.log(input, (currentPage - 1) * pageLimit, pageLimit, currentPage);

    const booksData = getBooksData(
      input,
      (currentPage - 1) * pageLimit,
      pageLimit,
    )
      .then((data) => {
        //console.log(data);
        //console.log(data["items"]);

        //setting maxPages
        setFinalPage(Math.ceil(data["totalItems"] / pageLimit));

        //setting initial page
        // setCurrentPage(1);

        //console.log(currentBooks);
        //console.log(
        //   data["items"].map((book) => {
        //     let authorName = "";
        //     let titleName = "";
        //     let descriptionName = "";
        //     let img = null;

        //     if (book["volumeInfo"]["authors"] !== undefined) {
        //       authorName =
        //         book["volumeInfo"]["authors"].join(", ").slice(0, 20) + "...";
        //     }

        //     if (book["volumeInfo"]["title"] !== undefined) {
        //       titleName = book["volumeInfo"]["title"].slice(0, 20) + "...";
        //     }

        //     if (book["volumeInfo"]["description"] !== undefined) {
        //       descriptionName =
        //         book["volumeInfo"]["description"].slice(0, 20) + "...";
        //     }

        //     if (
        //       book["volumeInfo"]?.["imageLinks"]?.["smallThumbnail"] !==
        //       undefined
        //     ) {
        //       img = book["volumeInfo"]["imageLinks"]["smallThumbnail"];
        //     }

        //     return {
        //       author: authorName,
        //       title: titleName,
        //       description: descriptionName,
        //       image: img,
        //     };
        //   }),
        // );

        setCurrentBooksLong(
          data["items"].map((book) => {
            let authorName = "";
            let titleName = "";
            let descriptionName = "";

            if (book["volumeInfo"]["authors"] !== undefined) {
              authorName = book["volumeInfo"]["authors"].join(", ");
            }

            if (book["volumeInfo"]["title"] !== undefined) {
              titleName = book["volumeInfo"]["title"];
            }

            if (book["volumeInfo"]["description"] !== undefined) {
              descriptionName = book["volumeInfo"]["description"];
            }

            return {
              author: authorName,
              title: titleName,
              description: descriptionName,
              image: book["volumeInfo"]?.["imageLinks"]?.["smallThumbnail"],
            };
          }),
        );

        setCurrentBooks(
          data["items"].map((book) => {
            let authorName = "";
            let titleName = "";
            let descriptionName = "";
            let img = null;

            if (book["volumeInfo"]["authors"] !== undefined) {
              authorName =
                book["volumeInfo"]["authors"].join(", ").slice(0, 20) + "...";
            }

            if (book["volumeInfo"]["title"] !== undefined) {
              titleName = book["volumeInfo"]["title"].slice(0, 20) + "...";
            }

            if (book["volumeInfo"]["description"] !== undefined) {
              descriptionName =
                book["volumeInfo"]["description"].slice(0, 20) + "...";
            }

            if (
              book["volumeInfo"]?.["imageLinks"]?.["smallThumbnail"] !==
              undefined
            ) {
              img = book["volumeInfo"]?.["imageLinks"]?.["smallThumbnail"];
            }

            return {
              author: authorName,
              title: titleName,
              description: descriptionName,
              image: img,
            };
          }),
        );

        //console.log(currentBooks);

        setStatus("SUCCESS");
      })
      .catch((error) => {
        //console.log(error);
        //console.log("ERROR");

        setStatus("ERROR");
      });
  }, [input, pageLimit, currentPage]);

  if (status === "ERROR") return <p>INVALID INPUT : TRY AGAIN</p>;

  if (status === "IDLE") return <p>Type Anything...</p>;

  if (status === "LOADING") return <p>DATA Loading...</p>;

  if (status === "SUCCESS") {
    //console.log(currentBooks);
    return (
      <div className={booksContainerClasses.container}>
        <Modal
          reference={dialogElement}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          details={modalData}
        />

        <PageCounter
          className={pageCounterClasses.container}
          currentPage={currentPage}
          finalPage={finalPage}
          setCurrentPage={setCurrentPage}
        />

        <BookList
          books={currentBooks}
          booksLong={currentBooksLong}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          setModalDetails={setModalData}
        />
      </div>
    );
  }
}
