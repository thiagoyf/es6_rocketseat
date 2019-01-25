class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 2));

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
  return item + index;
});
console.log(newArr);
// [1, 4, 6, 8, 12, 14]

const sum = arr.reduce(function(total, next) {
  return total + next;
});
console.log(sum);
// 30

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});
console.log(filter);
// [4, 8]

const find4 = arr.find(function(item) {
  return item === 4;
});
console.log(find4);
// 4

const find2 = arr.find(function(item) {
  return item === 2;
});
console.log(find2);
// undefined