/* para utilizar o async e o await é preciso fazer download do @babel/plugin-transform-async-to-generator 
e @babel/polyfill para ser executado antes do main */

const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000);
});

async function executaPromise() {
  const response = await minhaPromise();

  console.log(response);
}

executaPromise();