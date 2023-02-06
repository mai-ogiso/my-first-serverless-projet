const axios = require('axios');

exports.handler = async (event, context) => {
  const eventBody = JSON.parse(event.body)
  const response = await axios.get('https://pokeapi.co/api/v2/pokedex/' + eventBody.region );

  console.log(event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon : response.data.pokemon_entries
    })
  };
};
