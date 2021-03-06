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

// Valor padrao
function soma_sem_valor_padrao(a , b) {
  return a + b;
}
console.log(soma_sem_valor_padrao(1, 2)); // 3
console.log(soma_sem_valor_padrao(1)); // NaN
console.log(soma_sem_valor_padrao()); // NaN

function soma_com_valor_padrao(a = 10, b = 20) {
  return a + b;
}
console.log(soma_com_valor_padrao(1, 2)); // 3
console.log(soma_com_valor_padrao(1)); // 21
console.log(soma_com_valor_padrao()); // 30

const soma_com_valor_padrao_const = (a = 3, b = 6) => a + b;
console.log(soma_com_valor_padrao_const(1, 2)); // 3
console.log(soma_com_valor_padrao_const(1)); // 7
console.log(soma_com_valor_padrao_const()); // 9

// Desestruturação

const usuario = {
  nome: 'Thiago',
  idade: 28,
  endereco: {
    cidade: 'Campo Grande',
    estado: 'MS'
  }
};

const nome1 = usuario.nome;
const idade1 = usuario.idade;
const cidade1 = usuario.endereco.cidade;

console.log(nome1, idade1, cidade1);


const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome, idade, cidade);

// normalmente
function mostraNome1(usuario) {
  console.log(usuario.nome);
}
mostraNome1(usuario);

// usando desestruturacao para mostrar um campo do objeto
function mostraNome2({ nome }) {
  console.log(nome);
}
mostraNome2(usuario);

// REST

const usuario_rest = {
  usuario_rest_nome: 'Thiago',
  usuario_rest_idade: 28,
  usuario_rest_empresa: 'Byter'
};

const { usuario_rest_nome, ...resto } = usuario_rest

console.log(usuario_rest_nome); // Thiago
console.log(resto) // { usuario_rest_idade : 28, usuario_rest_empresa: "Byter" }

const arr_rest = [1, 2, 3, 4];

const [arr_rest_a, arr_rest_b, ...arr_rest_resto] = arr_rest;
console.log(arr_rest_a); // 1
console.log(arr_rest_b); // 2
console.log(arr_rest_resto); // [3, 4]

function soma_rest(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma_rest(1)); // 1
console.log(soma_rest(1, 5)); // 6
console.log(soma_rest(1, 2, 3)); // 6
console.log(soma_rest(1, 2, 5, 2, 3)); // 13

function return_rest(a, b, ...params) {
  return params;
}
console.log(return_rest(1, 2, 3)); // [3]
console.log(return_rest(1, 2, 3, 4)); // [3, 4]

// SPREAD

const arr_spread1 = [1, 2, 3];
const arr_spread2 = [4, 5, 6];

const arr_spread3 = [...arr_spread1, ...arr_spread2]; 

console.log(arr_spread3); // [1, 2, 3, 4, 5, 6]

const usuario_spread1 = {
  usuario_spread1_nome: 'Thiago',
  usuario_spread1_idade: 28,
  usuario_spread1_empresa: 'Byter'
}

// também há a possibilidade de acrescer novos atributos...
const usuario_spread2 = { ...usuario_spread1, usuario_spread1_nome: 'A' }
console.log(usuario_spread2); // { usuario_spread1_nome: "A", usuario_spread1_idade: 28, usuario_spread1_empresa: "Byter" }

// Template literals - forma de incluir variáveis dentro do string

const tl_nome = 'Thiago';
const tl_idade = 28;
console.log('Meu nome é ' + tl_nome + ' e tenho ' + tl_idade + ' anos'); // Meu nome é Thiago e tenho 28 anos
console.log(`Meu nove é ${tl_nome} e tenho ${tl_idade} anos`); // Meu nome é Thiago e tenho 28 anos

// Object Short Sintax

const object_short_sintax_nome = 'Thiago';
const object_short_sintax_idade = 28;

const object_short_sintax_usuario = {
  object_short_sintax_nome,
  object_short_sintax_idade,
  object_short_sintax_empresa: 'Byter'
};
console.log(object_short_sintax_usuario); // {object_short_sintax_nome: "Thiago", object_short_sintax_idade: 28, object_short_sintax_empresa: "Byter"}
