// Ex 4

// Ex 4.1
const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};

const { nome, endereco: {cidade, estado}} = empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// Ex 4.2
const usuario = { nome: 'Diego', idade: 23 };

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
 }
 console.log(mostraInfo(usuario));