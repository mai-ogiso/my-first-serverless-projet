const axios = require('axios');

exports.handler = async (event, context) => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1/');
  return {
    statusCode: 200,
    body: JSON.stringify(response.data),
  };
};
