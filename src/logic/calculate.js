function calculate(input, newInput) {
    const lastInput = input.pop();

    if (lastInput === "0") {
        input.push(newInput);
        return input;
    } else if (!isNaN(lastInput) && !isNaN(newInput)) {
        input.push(lastInput + newInput);
        return input;
    }
    return ["0"];
}

export default calculate;
