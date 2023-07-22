import React, { useState } from "react";

const Square = () => {
  // 0 = empty
  // 1 = part of a ship
  // 2 = a sunken part of a ship
  // 3 = a missed shot
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

  const fireTorpedo = (rowIndex, columnIndex) => {
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
              onClick={() => fireTorpedo(i, j)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Square;
