import Big from "big.js";

const priority = (operation) => {
  // 연산 우선 순위
  // 1. 숫자 2. 곱하기 나누기 3. 더하기 빼기
  if (operation === "-" || operation === "+") return 1;
  else if (operation === "x" || operation === "÷") return 2;
  return 3;
};

const calculatePostFix = (postFix) => {
  const resultStack = [];
  let tmp;
  postFix.forEach((char) => {
    if (!isNaN(char)) {
      // char가 숫자인 경우
      resultStack.push(char);
    } else {
      // char가 연산 기호인 경우
      const secondValue = new Big(resultStack.pop());
      const firstValue = new Big(resultStack.pop());
      if (char === "+") {
        tmp = Number(firstValue.plus(secondValue).toString());
        resultStack.push(tmp);
      } else if (char === "-") {
        tmp = Number(firstValue.minus(secondValue).toString());
        resultStack.push(tmp);
      } else if (char === "x") {
        tmp = Number(firstValue.times(secondValue).toString());
        resultStack.push(tmp);
      } else if (char === "÷") {
        tmp = Number(firstValue.div(secondValue).toString());
        resultStack.push(tmp);
      }
    }
  });

  return resultStack;
};

const makePostFix = (formula) => {
  let tmpStack = [];
  let postFixStack = [];
  let tmp;
  formula.forEach((char) => {
    if (char === "(") {
      tmpStack.push(char);
    } else if (char === "+" || char === "-" || char === "x" || char === "÷") {
      let lastValue = tmpStack[tmpStack.length - 1];
      while (lastValue !== undefined && priority(char) <= priority(lastValue)) {
        tmp = tmpStack.pop();

        postFixStack.push(tmp);
        lastValue = tmpStack[tmpStack.length - 1];
      }
      tmpStack.push(char);
    } else if (char === ")") {
      tmp = tmpStack.pop();
      while (tmp !== "(") {
        postFixStack.push(tmp);
        tmp = tmpStack.pop();
      }
    } else {
      // char가 숫자인 경우
      tmp = char;
      postFixStack.push(tmp);
    }
  });
  while (tmpStack.length > 0) {
    tmp = tmpStack.pop();
    postFixStack.push(tmp);
  }
  return postFixStack;
};

const operate = (input) => {
  const postFix = makePostFix(input);
  let result;
  try {
    result = calculatePostFix(postFix);
  } catch {
    result = false;
  }

  return result;
};

export default operate;
