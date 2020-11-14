import React from "react";

const Menu = ({ data, clickE }) => {
  const { id, menuName, menus, show } = data;
  return (
    <>
      <div key={id} onClick={clickE}>
        {menuName}
      </div>
      {show ? menus.map((menu) => <div key={menu.id}>{menu.name}</div>) : <></>}
    </>
  );
};

export default Menu;
