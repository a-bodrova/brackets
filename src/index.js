module.exports = function check(str, config) {
  let stack = [];
  const OPEN_BRACKETS = [];
  const CLOSE_BRACKETS = [];
  const BRACKETS_PAIRS = {};
  
  for (let item of config) {
    OPEN_BRACKETS.push(item[0]);
    CLOSE_BRACKETS.push(item[1]);
  }

  for (let i = 0; i < config.length; i++) {
    BRACKETS_PAIRS[CLOSE_BRACKETS[i]] = OPEN_BRACKETS[i];
  }
  
  for (let i = 0; i < str.length; i++) {
  let currentSymbol = str[i];
  
  if (OPEN_BRACKETS.includes(currentSymbol) && !CLOSE_BRACKETS.includes(currentSymbol)) {
    stack.push(currentSymbol);
  } else {
    
    let topElement = stack[stack.length - 1];

    if (BRACKETS_PAIRS[currentSymbol] === topElement) {
      stack.pop();
    } else {
      stack.push(currentSymbol);
    }
  }
}

return stack.length === 0;
}
