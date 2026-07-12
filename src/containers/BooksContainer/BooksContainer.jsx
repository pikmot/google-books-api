import BookList from "../../components/BookList/BookList";

import { getBooksData } from "../../js/data-fetch.js";

import { useEffect, useState } from "react";

export default function BooksContainer({ input }) {
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

  // const [searchTerm, setsearchTerm] = useState("");
  // const [searchLimit, setSearchLimit] = useState(0);
  const [currentBooks, setCurrentBooks] = useState([]);

  //status for invalid text
  const [status, setStatus] = useState("IDLE");

  useEffect(() => {
    // setStatus("IDLE");

    console.log(input);
    if (input === "") {
      setStatus("IDLE");
      console.log("INITIAL EMPTY");
      return;
    }

    console.log(status);
    setStatus("LOADING");
    console.log(status);
    const booksData = getBooksData(input, 5)
      .then((data) => {
        // console.log(data);
        // console.log(data["items"]);

        // console.log(currentBooks);
        // console.log(
        //   data["items"].map((book) => {
        //     return {
        //       author: book["volumeInfo"]["authors"],
        //       title: book["volumeInfo"]["title"],
        //       description: book["volumeInfo"]["description"],
        //       image: book["volumeInfo"]["imageLinks"]["smallThumbnail"],
        //     };
        //   }),
        // );
        setCurrentBooks(
          data["items"].map((book) => {
            let authorName = "";
            let titleName = "";
            let descriptionName = "";

            if (book["volumeInfo"]["authors"] !== undefined) {
              authorName =
                book["volumeInfo"]["authors"].join(", ").slice(0, 10) + "...";
            }

            if (book["volumeInfo"]["title"] !== undefined) {
              titleName = book["volumeInfo"]["title"].slice(0, 10) + "...";
            }

            if (book["volumeInfo"]["description"] !== undefined) {
              descriptionName =
                book["volumeInfo"]["description"].slice(0, 10) + "...";
            }

            return {
              author: authorName,
              title: titleName,
              description: descriptionName,
              image: book["volumeInfo"]["imageLinks"]["smallThumbnail"],
            };
          }),
        );

        setStatus("SUCCESS");
      })
      .catch((error) => {
        console.log(error);
        console.log("ERROR");

        setStatus("ERROR");
      });
  }, [input]);

  if (status === "ERROR") return <p>INVALID INPUT : TRY AGAIN</p>;

  if (status === "IDLE") return <p>Type Anything...</p>;

  if (status === "LOADING") return <p>DATA Loading...</p>;

  if (status === "SUCCESS") return <BookList books={currentBooks} />;
}
