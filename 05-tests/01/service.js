const { get } =  require('axios');

const URL = 'https://swapi.co/api/people'

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const result = await get(url);
    
    return result.data.results.map(mapearPesssoas);
  }

  function mapearPesssoas(item) {
      return {
          nome: item.name,
          peso: item.height
      }
  }
  module.exports = {
      obterPessoas
  }