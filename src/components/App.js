import "./App.css";
import { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

function App() {
    const [input, setInput] = useState(["0"]);
    return (
        <div className="app">
            <Display input={input} />
            <ButtonPanel setInput={setInput} input={input} />
        </div>
    );
}

export default App;
