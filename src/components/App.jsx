import React, { useState } from "react";

function App() {
  const [fName, upfName] = useState("");
  const [lName, uplName] = useState("");
  const [text, update] = useState("");
  const [text2, updated] = useState("");

  function handleChange(event) {
    update(event.target.value);
  }

  function handleChange2(event) {
    updated(event.target.value);
  }
  function handleClick() {
    upfName(text);
    uplName(text2);
  }
  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          value={fName}
          type="text"
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange2}
          value={lName}
          type="text"
          name="lName"
          placeholder="Last Name"
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
