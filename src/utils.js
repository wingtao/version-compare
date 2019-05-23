const isStrOrNumber = value => (typeof value === 'number' || typeof value === 'string');

function times(num, val) {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(val);
  }
  return result;
}

export { isStrOrNumber, times }