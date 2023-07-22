import React from "react";
import Square from "./square";

//create your first component
const Home = () => {
  return (
    <div className="d-flex justify-content-center m-5">
      <div>
		<h1 className="text-center">Battleships</h1>
        <Square />
      </div>
    </div>
  );
};

export default Home;
