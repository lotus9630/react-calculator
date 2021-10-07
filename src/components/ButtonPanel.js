import './ButtonPanel.css';
import Button from './Button';
import calculator from '../logic/calculator';

function ButtonPanel({ input, setInput, setModalToggle, setModalMessage }) {
  const clickButton = e => {
    const newInput = e.target.name;
    const result = calculator([...input], newInput);
    // 성공시 배열을 반환하고 실패시 에러 메세지를 반환한다.
    if (typeof result !== 'string') {
      setInput(result);
    } else {
      setModalMessage(result);
      setModalToggle(true);
      setTimeout(() => {
        setModalToggle(false);
      }, 1000);
    }
  };
  return (
    <section className="panel">
      <article>
        <div className="special-symbol">
          <Button name="AC" clickButton={clickButton} />
          <Button name="+/-" clickButton={clickButton} cy="switch" />
          <Button name="%" clickButton={clickButton} cy="percentage" />
          <Button name="()" clickButton={clickButton} cy="bracket" />
        </div>
        <Button name="÷" orange clickButton={clickButton} cy="div" />
      </article>
      <article>
        <Button name="7" clickButton={clickButton} />
        <Button name="8" clickButton={clickButton} />
        <Button name="9" clickButton={clickButton} />
        <Button name="x" orange clickButton={clickButton} cy="mul" />
      </article>
      <article>
        <Button name="4" clickButton={clickButton} />
        <Button name="5" clickButton={clickButton} />
        <Button name="6" clickButton={clickButton} />
        <Button name="-" orange clickButton={clickButton} cy="sub" />
      </article>
      <article>
        <Button name="1" clickButton={clickButton} />
        <Button name="2" clickButton={clickButton} />
        <Button name="3" clickButton={clickButton} />
        <Button name="+" orange clickButton={clickButton} cy="add" />
      </article>
      <article>
        <Button name="0" clickButton={clickButton} />
        <Button name="." clickButton={clickButton} cy="point" />
        <Button name="C" clickButton={clickButton} />
        <Button name="=" orange clickButton={clickButton} cy="equal" />
      </article>
    </section>
  );
}

export default ButtonPanel;
