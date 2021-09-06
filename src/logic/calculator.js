import operate from "./operate";

const calculator = (input, newInput) => {
  let lastInput = input.pop();

  if (!isNaN(newInput)) {
    // 숫자를 입력한 경우
    if (isNaN(lastInput)) {
      // 연산 기호 이후 숫자를 입력한 경우
      input.push(lastInput);
      input.push(Number(newInput));
      return input;
    } else {
      // 숫자를 연속으로 입력한 경우
      input.push(Number(lastInput + newInput));
      return input;
    }
  } else if (
    newInput === "÷" ||
    newInput === "x" ||
    newInput === "-" ||
    newInput === "+"
  ) {
    // 사칙연산을 입력한 경우
    if (isNaN(lastInput)) {
      input.push(newInput);
      return input;
    } else {
      input.push(lastInput);
      input.push(newInput);
      return input;
    }
  } else if (newInput === "+/-") {
    if (isNaN(lastInput)) {
      alert("입력이 잘못되었습니다");
    } else {
      lastInput = Number(lastInput) * -1;
      input.push(lastInput);
      return input;
    }
  } else if (newInput === "%") {
    if (isNaN(lastInput)) {
      alert("입력이 잘못되었습니다");
    } else {
      lastInput = Number(lastInput) / 100;
      input.push(lastInput);
      return input;
    }
  } else if (newInput === ".") {
    if (isNaN(lastInput)) {
      alert("입력이 잘못되었습니다");
    } else {
      lastInput = Number(lastInput) / 100;
      input.push(lastInput);
      return input;
    }
  } else if (newInput === "C") {
    if (isNaN(lastInput)) {
      return input;
    } else {
      lastInput = parseInt(lastInput / 10);
      if (lastInput === 0) input.push(lastInput);

      return input;
    }
  } else if (newInput === "AC") {
    return ["0"];
  } else if (newInput === "=") {
    if (isNaN(lastInput)) {
      alert("입력이 잘못되었습니다");
    } else {
      input.push(lastInput);
      const result = operate(input);
      if (result) {
        return result;
      } else {
        return false;
      }
    }
  }

  input.push(lastInput);
  return input;
};

export default calculator;
