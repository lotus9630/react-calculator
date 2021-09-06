import "./App.css";
import { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import Modal from "./Modal";

function App() {
  const [input, setInput] = useState(["0"]);
  const [modalToggle, setModalToggle] = useState(false);
  return (
    <div className="app">
      <Display input={input} />
      <ButtonPanel
        setInput={setInput}
        input={input}
        setModalToggle={setModalToggle}
      />
      {modalToggle ? <Modal /> : ""}
    </div>
  );
}

export default App;
