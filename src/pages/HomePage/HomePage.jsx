import homePageClasses from "./HomePage.module.scss";

import UncontrolledForm from "../../components/Form/UncontrolledForm/UncontrolledForm.jsx";
// import BookList from "../../components/BookList/BookList.jsx";
import BooksContainer from "../../containers/BooksContainer/BooksContainer.jsx";

// import { getBooksData } from "../../js/data-fetch.js";

import { useState, useEffect } from "react";

const HomePage = () => {
  const [input, setInput] = useState("");

  console.log(input);

  return (
    <div className={homePageClasses.homePage}>
      <h1 className={homePageClasses.homePage__header}>Google Books Search</h1>
      <UncontrolledForm updateInput={setInput} />
      {/* <p className={homePageClasses.homePage__body}>Search any book name...</p> */}
      <BooksContainer input={input} />
    </div>
  );
};

export default HomePage;
