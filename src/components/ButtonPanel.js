import "./ButtonPanel.css";
import Button from "./Button";
import calculator from "../logic/calculator";

function ButtonPanel({ input, setInput, setModalToggle }) {
  const clickButton = (e) => {
    const newInput = e.target.name;
    const result = calculator([...input], newInput);
    if (result) {
      setInput(result);
    } else {
      setModalToggle(true);
      setTimeout(() => {
        setModalToggle(false);
      }, 1000);
    }
  };
  return (
    <section className="panel">
      <article>
        <Button name="AC" clickButton={clickButton} />
        <Button name="+/-" clickButton={clickButton} />
        <Button name="%" clickButton={clickButton} />
        <Button name="÷" orange clickButton={clickButton} />
      </article>
      <article>
        <Button name="7" clickButton={clickButton} />
        <Button name="8" clickButton={clickButton} />
        <Button name="9" clickButton={clickButton} />
        <Button name="x" orange clickButton={clickButton} />
      </article>
      <article>
        <Button name="4" clickButton={clickButton} />
        <Button name="5" clickButton={clickButton} />
        <Button name="6" clickButton={clickButton} />
        <Button name="-" orange clickButton={clickButton} />
      </article>
      <article>
        <Button name="1" clickButton={clickButton} />
        <Button name="2" clickButton={clickButton} />
        <Button name="3" clickButton={clickButton} />
        <Button name="+" orange clickButton={clickButton} />
      </article>
      <article>
        <Button name="0" clickButton={clickButton} />
        <Button name="." clickButton={clickButton} />
        <Button name="C" clickButton={clickButton} />
        <Button name="=" orange clickButton={clickButton} />
      </article>
    </section>
  );
}

export default ButtonPanel;
