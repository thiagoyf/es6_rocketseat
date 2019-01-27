// Ex 2

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// Ex 2.1
const var_idades = usuarios.map(({ idade }) => idade);
console.log(var_idades);

// Ex 2.2
const var_filter = usuarios.filter(usuario => usuario.empresa === 'Rocketseat' && usuario.idade > 18);
console.log(var_filter);

// Ex 2.3
const var_find = usuarios.find(({ empresa }) => empresa === 'Google');
console.log(var_find);

// Ex 2.4
const var_unindo_operacoes = usuarios.map(usuario => {
  usuario.idade = usuario.idade * 2;
  return usuario;
}).filter(({ idade }) => idade <= 50);
console.log(var_unindo_operacoes);
