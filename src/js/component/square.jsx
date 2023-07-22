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
    if (block[rowIndex][columnIndex] === 1) {
      const newBlock = block.map((row, i) =>
        row.map((value, j) => (i === rowIndex && j === columnIndex ? 2 : value))
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
              className={`square ${value === 1 || value === 0 ? "" : "red"}`}
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
