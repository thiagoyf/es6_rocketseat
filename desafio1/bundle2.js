"use strict";

// Ex 2
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; // Ex 2.1

var var_idades = usuarios.map(function (_ref) {
  var idade = _ref.idade;
  return idade;
});
console.log(var_idades); // Ex 2.2

var var_filter = usuarios.filter(function (usuario) {
  return usuario.empresa === 'Rocketseat' && usuario.idade > 18;
});
console.log(var_filter); // Ex 2.3

var var_find = usuarios.find(function (_ref2) {
  var empresa = _ref2.empresa;
  return empresa === 'Google';
});
console.log(var_find); // Ex 2.4

var var_unindo_operacoes = usuarios.map(function (usuario) {
  usuario.idade = usuario.idade * 2;
  return usuario;
}).filter(function (_ref3) {
  var idade = _ref3.idade;
  return idade <= 50;
});
console.log(var_unindo_operacoes);
