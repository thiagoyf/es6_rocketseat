// Ex 1.1

import ClasseUsuario from './functions'

ClasseUsuario.info();

// Ex 1.2

import { idade } from './functions'

document.getElementById('idade').innerHTML = idade;

// Ex 1.3

import Usuario, { idade as IdadeUsuario } from './functions'

Usuario.info();
console.log(IdadeUsuario);