// Ex 5

// Ex 5.1
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

//Ex 5.2
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = { ...usuario, endereco: { cidade: 'Lontras' } };

console.log(usuario2);
console.log(usuario3);