import { useState } from "react";
import MyInput from "./MyInput";

function App() {
  //hooks
  //called at the top level of components
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Nigel");
  const [upper, setUpper] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide form" : "Show form"}
      </button>
      <br />
      <hr />
      {show && (
        <>
          <br />
          <label>
            Enter your name:{" "}
            <MyInput value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              checked={upper}
              onChange={(e) => setUpper(e.target.checked)}
            />{" "}
            Make it uppercase
          </label>

          <p>Hello, {upper ? name.toUpperCase() : name}</p>
        </>
      )}
    </>
  );
}

export default App;
