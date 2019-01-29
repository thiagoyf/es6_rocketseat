// Funão delay aciona o .then após 1s
// Ex 1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
  try {
    await delay();
    console.log('1s');
  } catch (err) {
    console.log(err);
  }

  try {
    await delay();
    console.log('2s');
  } catch (err) {
    console.log(err);
  }

  try {
    await delay();
    console.log('3s');
  } catch (err) {
    console.log(err);
  }
}
umPorSegundo();

// Ex 2
import axios from 'axios';
async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe');
  }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

// Ex 3
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.log('Repositório não existe');
    }
  }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

// Ex 4
const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe');
  }
}
buscaUsuario('diego3g');