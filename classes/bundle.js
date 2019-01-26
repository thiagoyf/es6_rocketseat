"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2));
var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // [1, 4, 6, 8, 12, 14]

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // 30

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // [4, 8]

var find4 = arr.find(function (item) {
  return item === 4;
});
console.log(find4); // 4

var find2 = arr.find(function (item) {
  return item === 2;
});
console.log(find2); // undefined
// Arrow Function

var array2 = [1, 3, 4, 5, 8, 9];
var newArray2_0 = arr.map(function (item) {
  return item * 2;
});
console.log(newArray2_0);
var newArray2_1 = arr.map(function (item) {
  return item * 2;
});
console.log(newArray2_1);
var newArray2_2 = arr.map(function (item) {
  return item * 2;
});
console.log(newArray2_2);
var newArray2_3 = arr.map(function (item) {
  return item * 2;
});
console.log(newArray2_3); // function teste1()

var teste1 = function teste1() {
  return 'teste';
};

console.log(teste1());

var teste2 = function teste2() {
  return [1, 2, 3];
};

console.log(teste2()); // quando for retornar um objeto tem que ser desse jeito

var teste3 = function teste3() {
  return {
    nome: 'Thiago'
  };
};

console.log(teste3()); // Valor padrao

function soma_sem_valor_padrao(a, b) {
  return a + b;
}

console.log(soma_sem_valor_padrao(1, 2)); // 3

console.log(soma_sem_valor_padrao(1)); // NaN

console.log(soma_sem_valor_padrao()); // NaN

function soma_com_valor_padrao() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  return a + b;
}

console.log(soma_com_valor_padrao(1, 2)); // 3

console.log(soma_com_valor_padrao(1)); // 21

console.log(soma_com_valor_padrao()); // 30

var soma_com_valor_padrao_const = function soma_com_valor_padrao_const() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma_com_valor_padrao_const(1, 2)); // 3

console.log(soma_com_valor_padrao_const(1)); // 7

console.log(soma_com_valor_padrao_const()); // 9
