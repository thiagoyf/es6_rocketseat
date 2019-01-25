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

// Arrow Function

const array2 = [1, 3, 4, 5, 8, 9];

const newArray2_0 = arr.map(function(item) {
  return item * 2;
});
console.log(newArray2_0);

const newArray2_1 = arr.map((item) => {
  return item * 2;
});
console.log(newArray2_1);

const newArray2_2 = arr.map(item => {
  return item * 2;
});
console.log(newArray2_2);

const newArray2_3 = arr.map(item => item * 2);
console.log(newArray2_3);

// function teste1()
const teste1 = () => {
  return 'teste';
}
console.log(teste1());

const teste2 = () => [1, 2, 3];
console.log(teste2());

// quando for retornar um objeto tem que ser desse jeito
const teste3 = () => ({ nome: 'Thiago' });
console.log(teste3());