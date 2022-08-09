const arr = [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 2, 4];

const array = ["one", "two", "three", "one", "two", "one"];

const count = {};

array.forEach((element) => {
  console.log(element);
  count[element] = (count[element] || 0) + 1;
  console.log(count[element]);
});

console.log(count);
