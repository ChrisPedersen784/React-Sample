import React from "react";

export default function ToDoItem(props) {
  const item = props.currentValue;

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <ul>
        {item.map((todoItem) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
