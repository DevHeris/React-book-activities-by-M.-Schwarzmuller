import { useState } from "react";
import "./App.css";

function App() {
  return <Form />;
}

function Form() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleSubmission(e) {
    e.preventDefault();

    email.includes("@") ? setIsValid(true) : setIsValid(false);
  }

  return (
    <form onSubmit={handleSubmission}>
      <fieldset>
        <legend>Testing Conditionals</legend>
        <label htmlFor="email">Your email</label>
        <br />
        <br />
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
        {!isValid && <p>Invalid email address entered !</p>}
      </fieldset>
    </form>
  );
}

export default App;
