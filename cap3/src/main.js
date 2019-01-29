/* para utilizar o async e o await é preciso fazer download do @babel/plugin-transform-async-to-generator 
e @babel/polyfill para ser executado antes do main */

import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);

      console.log(response);
    } catch(err) {
      console.log('Erro na API')
    }
  }
}

Api.getUserInfo('thiagoyf');
Api.getUserInfo('thiagofukunaga');