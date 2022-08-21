import React, { useState } from "react";

export default function ToDoItem(props) {
  const [click, setClick] = useState(false);

  const item = props.currentValue;

  function handleClick() {
    setClick((prevClick) => !prevClick);
    console.log(click);
  }

  const style = {
    textDecoration: click ? "line-through" : "none"
  };

  return (
    <div>
      <ul>
        {item.map((todoItem) => (
          <li onClick={handleClick} style={style}>
            {todoItem}
          </li>
        ))}
      </ul>
    </div>
  );
}
