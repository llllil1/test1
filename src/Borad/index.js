import React, { useState } from "react";
import Menu from "./Menu";

const [show, setShow] = useState();

const clickMenu = () => {};

const Board = ({ data }) => {
  return (
    <>
      {data.map((pMenu) => {
        return <Menu data={pMenu} clickE={clickMenu} />;
      })}
    </>
  );
};

export default Board;
