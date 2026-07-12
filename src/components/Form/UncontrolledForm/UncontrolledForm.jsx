import uncontrolledFormClasses from "./UncontrolledForm.module.scss";

import { useEffect } from "react";

function UncontrolledForm({ updateInput }) {
  const handleSubmit = (e) => {
    //stop automatic refresh
    e.preventDefault();

    //use data to fetch books

    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data);
    // console.log(value);
    // console.log(value["input"]);

    updateInput(value["input"]);
  };

  return (
    <form
      className={uncontrolledFormClasses.uncontrolledForm}
      onSubmit={handleSubmit}
    >
      <label className={uncontrolledFormClasses.uncontrolledForm__label}>
        Search Any Book Title...
      </label>
      <input
        className={uncontrolledFormClasses.uncontrolledForm__input}
        type="text"
        name="input"
        placeholder="Enter Title Here..."
      ></input>
      <button>SEARCH</button>
    </form>
  );
}

export default UncontrolledForm;
