import React, { useState } from "react";

//create your first component
const Square = () => {
  const [block, setBlock] = useState([
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  ]);

  const handleClick = (rowIndex, columnIndex) => {
    const clickedvalue = block[rowIndex][columnIndex];
    if (clickedvalue === 1) {
      const newBlock = block.map((row, i) =>
        row.map((value, j) => (i === rowIndex && j === columnIndex ? 2 : value))
      );
      setBlock(newBlock);
    } else if (clickedvalue === 0) {
      const newBlock = block.map((row, i) =>
        row.map((value, j) => (i === rowIndex && j === columnIndex ? 3 : value))
      );
      setBlock(newBlock);
    }
  };

  return (
    <div className="block">
      {block.map((row, i) => (
        <div className="row" key={i}>
          {row.map((value, j) => (
            <div
              className={`square ${
                value === 1 || value === 0 ? "" : value === 3 ? "gray" : "red"
              }`}
              key={j}
              onClick={() => handleClick(i, j)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Square;
