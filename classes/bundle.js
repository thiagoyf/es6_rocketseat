"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
// Desestruturação

var usuario = {
  nome: 'Thiago',
  idade: 28,
  endereco: {
    cidade: 'Campo Grande',
    estado: 'MS'
  }
};
var nome1 = usuario.nome;
var idade1 = usuario.idade;
var cidade1 = usuario.endereco.cidade;
console.log(nome1, idade1, cidade1);
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade); // normalmente

function mostraNome1(usuario) {
  console.log(usuario.nome);
}

mostraNome1(usuario); // usando desestruturacao para mostrar um campo do objeto

function mostraNome2(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

mostraNome2(usuario); // REST

var usuario_rest = {
  usuario_rest_nome: 'Thiago',
  usuario_rest_idade: 28,
  usuario_rest_empresa: 'Byter'
};

var usuario_rest_nome = usuario_rest.usuario_rest_nome,
    resto = _objectWithoutProperties(usuario_rest, ["usuario_rest_nome"]);

console.log(usuario_rest_nome); // Thiago

console.log(resto); // { usuario_rest_idade : 28, usuario_rest_empresa: "Byter" }

var arr_rest = [1, 2, 3, 4];
var arr_rest_a = arr_rest[0],
    arr_rest_b = arr_rest[1],
    arr_rest_resto = arr_rest.slice(2);
console.log(arr_rest_a); // 1

console.log(arr_rest_b); // 2

console.log(arr_rest_resto); // [3, 4]

function soma_rest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma_rest(1)); // 1

console.log(soma_rest(1, 5)); // 6

console.log(soma_rest(1, 2, 3)); // 6

console.log(soma_rest(1, 2, 5, 2, 3)); // 13

function return_rest(a, b) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    params[_key2 - 2] = arguments[_key2];
  }

  return params;
}

console.log(return_rest(1, 2, 3)); // [3]

console.log(return_rest(1, 2, 3, 4)); // [3, 4]
// SPREAD

var arr_spread1 = [1, 2, 3];
var arr_spread2 = [4, 5, 6];
var arr_spread3 = [].concat(arr_spread1, arr_spread2);
console.log(arr_spread3); // [1, 2, 3, 4, 5, 6]

var usuario_spread1 = {
  usuario_spread1_nome: 'Thiago',
  usuario_spread1_idade: 28,
  usuario_spread1_empresa: 'Byter' // também há a possibilidade de acrescer novos atributos...

};

var usuario_spread2 = _objectSpread({}, usuario_spread1, {
  usuario_spread1_nome: 'A'
});

console.log(usuario_spread2); // { usuario_spread1_nome: "A", usuario_spread1_idade: 28, usuario_spread1_empresa: "Byter" }
// Template literals - forma de incluir variáveis dentro do string

var tl_nome = 'Thiago';
var tl_idade = 28;
console.log('Meu nome é ' + tl_nome + ' e tenho ' + tl_idade + ' anos'); // Meu nome é Thiago e tenho 28 anos

console.log("Meu nove \xE9 ".concat(tl_nome, " e tenho ").concat(tl_idade, " anos")); // Meu nome é Thiago e tenho 28 anos
