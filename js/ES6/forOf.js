// old
const array = [];
const fillArray = (items) => {
  items.forEach((i) => {
    array.push(i);
  });
};

// ES6
// Arguably the same amount of code required but for (of) is known to be 24% faster than forEach
const array = [];
const fillArray = (items) => {
  for (let i of items) {
    array.push(i);
  }
};
