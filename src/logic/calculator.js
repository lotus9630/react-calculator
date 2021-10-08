import operate from './operate';

const categorys = {
  operator: ['÷', 'x', '-', '+'],
  specialOperator: ['+/-', '%', '()', '.'],
  cancel: ['AC', 'C'],
  equal: ['='],
};

const findCategory = char => {
  if (!isNaN(char)) return 'number';
  return Object.keys(categorys).find(key => categorys[key].includes(char));
};

const calculator = (input, newInput) => {
  const newInputType = findCategory(newInput);
  const lastInput = input[input.length - 1];
  const lastInputType = findCategory(lastInput);
  let errorMessage = '';

  // 입력값을 4가지 카테고리로 분류 한다
  // 맨 처음 Input 값 = ["0"]
  if (newInputType === 'number') {
    if (lastInputType === 'number') {
      // ex) ["1"] + 2 = ["12"]
      input[input.length - 1] = String(Number(lastInput + newInput));
    } else if (lastInputType === 'operator') {
      // ex) ["0","+"] + 1 = ["0","+","1"]
      input.push(newInput);
    } else if (lastInputType === 'specialOperator') {
      if (lastInput === '(') input.push(newInput);
      else if (lastInput === ')') {
        // ex) ["(", 0", "+", "2", ")"] + "2"
        errorMessage = '숫자가 올 수 없습니다';
      } else if (lastInput === '.') {
        // ex) ["0", "."] + 1 = ["0.1"]
        input.pop();
        input[input.length - 1] = input[input.length - 1] + lastInput + newInput;
      }
    }
  } else if (newInputType === 'operator') {
    if (lastInputType === 'number') {
      // ex) ["0"] + "x" = ["0", "x"]
      input.push(newInput);
    } else if (lastInputType === 'operator') {
      // ex) ["0", "+"] + "x" = ["0", "x"]
      input[input.length - 1] = newInput;
    } else if (lastInputType === 'specialOperator') {
      // ex) ["(", "0", "+", "1", ")"] + "x" = ["(", "0", "+", "1", ")", "x"]
      if (lastInput === ')') input.push(newInput);
      else if (lastInput === '(') errorMessage = '연산자가 올 수 없습니다';
    }
  } else if (newInputType === 'specialOperator') {
    // ['+/-', '%', '()', "."]
    if (newInput === '+/-') {
      if (lastInputType === 'number') {
        input[input.length - 1] *= -1;
      } else {
        errorMessage = '연산자에는 부호 변환을 사용할 수 없습니다';
      }
    } else if (newInput === '%') {
      if (lastInputType === 'number') {
        input[input.length - 1] = String(input[input.length - 1] / 100);
      } else {
        errorMessage = '연산자에는 퍼센트 기호를 사용할 수 없습니다';
      }
    } else if (newInput === '()') {
      if (input.length === 1 && lastInput === '0') {
        input.pop();
        input.push('(');
      } else if (lastInputType === 'number' && input.includes('(')) input.push(')');
      else if (lastInputType === 'number' && input.includes('(')) input.push(')');
    } else if (newInput === '.') {
      if (lastInputType === 'number' && Number(lastInput) === parseInt(Number(lastInput))) {
        // lastInput이 정수인 경우
        input.push(newInput);
      } else if (lastInputType === 'number') {
        // lastInput이 소수인 경우
        errorMessage = '소수점이 이미 존재합니다';
      } else {
        input.push('0.');
      }
    }
  } else if (newInputType === 'cancel') {
    if (newInput === 'C') {
      if (!isNaN(lastInput)) {
        input.push(parseInt(input.pop() / 10));
      } else if (isNaN(lastInput)) {
        input.pop();
      }
    } else if (newInput === 'AC') {
      input = ['0'];
    }
  } else if (newInputType === 'equal') {
    if (lastInputType === 'number') {
      const result = operate(input);
      if (result) return result;
      else errorMessage = '입력이 잘못되었습니다';
    } else if (lastInputType === 'operator') {
      errorMessage = '마지막 입력에 연산자가 들어있습니다';
    }
  }

  return errorMessage === '' ? input : errorMessage;
};

export default calculator;
