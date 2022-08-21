import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function inputFullName(event) {
    const userInput = event.target.value;
    const getUserName = event.target.name;

    setFullName((prevState) => {
      if (getUserName === "fName") {
        return {
          fName: userInput,
          lName: prevState.lName
        };
      } else if (getUserName === "lName") {
        return {
          fName: prevState.fName,
          lName: userInput
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={inputFullName}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={inputFullName}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
