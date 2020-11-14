import React from "react";
import Board from "./Borad";

const menuData = [
  {
    id: 1,
    menuName: "메뉴1",
    menus: [
      { id: 1, name: "소메뉴1" },
      { id: 2, name: "소메뉴2" }
    ],
    show: true
  },
  {
    id: 2,
    menuName: "메뉴2",
    menus: [
      { id: 1, name: "소메뉴1" },
      { id: 2, name: "소메뉴2" }
    ],
    show: false
  },
  {
    id: 3,
    menuName: "메뉴3",
    menus: [
      { id: 1, name: "소메뉴1" },
      { id: 2, name: "소메뉴2" }
    ],
    show: false
  }
];

export default function App() {
  return (
    <div>
      <Board data={menuData}></Board>
    </div>
  );
}
