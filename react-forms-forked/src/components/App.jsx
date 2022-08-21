import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [button, setButton] = useState(false);

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick() {
    setButton((prevState) => !prevState);

    console.log(button);
  }

  return (
    <div className="container">
      <h1>Hello {button ? name : ""}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>
        {" "}
        {button ? "New Submit" : "Submit"}{" "}
      </button>
    </div>
  );
}

export default App;
