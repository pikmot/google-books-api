import React from "react";

const PageCounter = ({ currentPage = -1, finalPage = -1, setCurrentPage }) => {
  const onDecrement = () => {
    console.log("Minus");
    setCurrentPage(currentPage - 1);
  };

  const onIncrement = () => {
    console.log("Add");
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <button onClick={onDecrement} disabled={currentPage <= 1}>
        ←
      </button>
      <span>
        {" "}
        {currentPage} / {finalPage}{" "}
      </span>
      <button onClick={onIncrement} disabled={currentPage >= finalPage}>
        →
      </button>
    </div>
  );
};

export default PageCounter;
