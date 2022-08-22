import React from "react";

function ToDoItem(props) {
  return (
    <div
      //This gets execued on rendering, so this won't work
      //Hence use the onClick with a function
      //onClick={props.id}

      //Here we make the onClick to make a function
      //Because it onlt gets executed on click
      onClick={() => {
        props.onChecked(props.id);//props.id gets passed into deleteItem
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
