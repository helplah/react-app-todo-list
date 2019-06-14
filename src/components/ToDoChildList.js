import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoChildList = ({ item, ...editItem }) => {
  return (
    <React.Fragment>
      <ul className="todo-child-list">
        {item.children.map(childItem => {
          return <ToDoItem key={childItem.id} item={childItem} {...editItem} />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default ToDoChildList;
